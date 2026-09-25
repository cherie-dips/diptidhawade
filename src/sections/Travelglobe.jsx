import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FiMinus, FiPlus, FiRotateCcw } from "react-icons/fi";
import { cities as CITIES } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/travelglobe.css";

// ─── Tuning ───────────────────────────────────────────────────────────────────
const FOV = 40;
const ZOOM_DEFAULT = 3.6; // camera distance from the globe centre (globe radius = 1)
const ZOOM_FOCUS = 2.9; // distance used when flying to a city (globe just fills the frame)
const ZOOM_MIN = 1.45;
const ZOOM_MAX = 5;
const TILT_LIMIT = 1.2; // radians
const HOME_VIEW = { lat: 32, lng: 40 }; // between the UK and India
const LAND_DOT_STEP = 1.1; // degrees between land dots
const IDLE_SPIN_DELAY = 4000; // ms of inactivity before the globe starts spinning
const SPIN_SPEED = 0.00009; // radians per ms
const PICK_RADIUS = { mouse: 16, touch: 26 }; // px around a pin that counts as a hit
const DRAG_THRESHOLD = 5; // px of movement before a press becomes a drag

// ─── Helpers ──────────────────────────────────────────────────────────────────
function latLngToVec3(lat, lng, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Globe rotation that brings (lat, lng) to face the camera.
function viewFor(lat, lng) {
  const p = latLngToVec3(lat, lng);
  return { x: THREE.MathUtils.degToRad(lat), y: Math.atan2(-p.x, p.z) };
}

// `to`, shifted by whole turns so it is the closest equivalent angle to `from`.
function nearestAngle(from, to) {
  return from + Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

// Arc height scales with distance so short hops stay close to the surface.
function createArcPoints(start, end, segments = 64) {
  const height = Math.min(0.32, start.angleTo(end) * 0.42) + 0.004;
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3().lerpVectors(start, end, t);
    p.normalize().multiplyScalar(1.006 + Math.sin(Math.PI * t) * height);
    pts.push(p);
  }
  return pts;
}

// Samples the land mask (white = land) on an even lat/lng grid.
function buildLandDots(image, step) {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const positions = [];
  for (let lat = -90 + step / 2; lat < 90; lat += step) {
    const count = Math.max(1, Math.floor((360 * Math.cos(THREE.MathUtils.degToRad(lat))) / step));
    const y = Math.min(height - 1, Math.floor(((90 - lat) / 180) * height));
    for (let j = 0; j < count; j++) {
      const lng = -180 + ((j + 0.5) * 360) / count;
      const x = Math.min(width - 1, Math.floor(((lng + 180) / 360) * width));
      if (data[(y * width + x) * 4] > 127) {
        const v = latLngToVec3(lat, lng, 1.003);
        positions.push(v.x, v.y, v.z);
      }
    }
  }
  return new Float32Array(positions);
}

// Globe colours live in travelglobe.css so they follow the light/dark theme.
function readThemeColors(el) {
  const css = getComputedStyle(el);
  const get = (name) => css.getPropertyValue(name).trim();
  return {
    sphere: get("--globe-sphere"),
    rim: get("--globe-rim"),
    land: get("--globe-land"),
    landOpacity: parseFloat(get("--globe-land-opacity")) || 0.6,
    pin: get("--globe-pin"),
    arc: get("--globe-arc"),
  };
}

// ─── Shaders ──────────────────────────────────────────────────────────────────
const SPHERE_VERTEX = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vViewDir = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const SPHERE_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uRim;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float light = dot(vNormal, normalize(vec3(-0.35, 0.55, 0.75))) * 0.5 + 0.5;
    vec3 color = uColor * mix(0.82, 1.08, light);
    float rim = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 3.0);
    gl_FragColor = vec4(mix(color, uRim, rim * 0.85), 1.0);
    #include <colorspace_fragment>
  }
`;

const LAND_VERTEX = /* glsl */ `
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uRefDepth;
  varying float vFacing;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vFacing = dot(n, normalize(-mv.xyz));
    // Grow dots a little slower than the zoom so close-ups stay delicate.
    gl_PointSize = uSize * uPixelRatio * pow(uRefDepth / -mv.z, 0.7);
    gl_Position = projectionMatrix * mv;
  }
`;

const LAND_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vFacing;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.3, d) * smoothstep(0.0, 0.45, vFacing) * uOpacity;
    gl_FragColor = vec4(uColor, alpha);
    #include <colorspace_fragment>
  }
`;

const PIN_VERTEX = /* glsl */ `
  attribute float aState;
  attribute float aPhase;
  uniform float uSize;
  uniform float uPixelRatio;
  varying float vState;
  varying float vPhase;
  varying float vFacing;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    vFacing = dot(n, normalize(-mv.xyz));
    vState = aState;
    vPhase = aPhase;
    gl_PointSize = uSize * uPixelRatio;
    gl_Position = projectionMatrix * mv;
  }
`;

const PIN_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying float vState; // 0 idle, 1 hovered, 2 selected
  varying float vPhase;
  varying float vFacing;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float lit = step(0.5, vState);
    float coreR = mix(0.17, 0.25, lit);
    float core = 1.0 - smoothstep(coreR - 0.05, coreR, d);
    float centre = (1.0 - smoothstep(0.06, 0.1, d)) * step(1.5, vState);
    float halo = exp(-d * d * 9.0) * mix(0.35, 0.55, lit);
    float t = fract(uTime * 0.45 + vPhase);
    float ringR = coreR + t * (0.95 - coreR);
    float ring = (1.0 - smoothstep(0.0, 0.07, abs(d - ringR))) * (1.0 - t) * mix(0.55, 0.9, lit);
    float alpha = max(max(core, halo), ring) * smoothstep(0.0, 0.25, vFacing);
    vec3 color = mix(uColor, vec3(1.0), centre);
    gl_FragColor = vec4(color, alpha);
    #include <colorspace_fragment>
  }
`;

const ARC_VERTEX = /* glsl */ `
  attribute float aT;
  attribute float aOffset;
  varying float vT;
  varying float vOffset;
  void main() {
    vT = aT;
    vOffset = aOffset;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ARC_FRAGMENT = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  varying float vT;
  varying float vOffset;
  void main() {
    // A light pulse travels along each arc, leaving a short trail.
    float head = fract(uTime * 0.2 + vOffset) * 1.5 - 0.25;
    float behind = head - vT;
    float trail = behind >= 0.0 ? exp(-behind * 6.0) : 0.0;
    gl_FragColor = vec4(uColor, 0.35 + trail * 0.65);
    #include <colorspace_fragment>
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────
export default function TravelGlobe() {
  const rootRef = useRef(null);
  const mountRef = useRef(null);
  const labelRef = useRef(null);
  // Imperative controls (select / zoom / reset) exposed by the scene effect.
  const apiRef = useRef(null);

  const [selected, setSelected] = useState(null); // index into CITIES
  const [hovered, setHovered] = useState(null);

  // ── Scene, animation loop and pointer handling ─────────────────────────────
  useEffect(() => {
    const root = rootRef.current;
    const mount = mountRef.current;
    const label = labelRef.current;
    if (!root || !mount || !label) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
    const globe = new THREE.Group();
    scene.add(globe);

    const timeUniform = { value: 0 };
    const pixelRatioUniform = { value: renderer.getPixelRatio() };

    // Base sphere
    const sphereMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color() }, uRim: { value: new THREE.Color() } },
      vertexShader: SPHERE_VERTEX,
      fragmentShader: SPHERE_FRAGMENT,
    });
    globe.add(new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), sphereMat));

    // Land dots, added once the mask has loaded
    const landMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color() },
        uOpacity: { value: 0 },
        uSize: { value: 2.3 },
        uPixelRatio: pixelRatioUniform,
        uRefDepth: { value: ZOOM_DEFAULT - 1 },
      },
      vertexShader: LAND_VERTEX,
      fragmentShader: LAND_FRAGMENT,
      transparent: true,
      depthWrite: false,
    });
    const landGeo = new THREE.BufferGeometry();
    let landOpacity = 0;
    let disposed = false;
    const mask = new Image();
    mask.onload = () => {
      if (disposed) return;
      landGeo.setAttribute("position", new THREE.BufferAttribute(buildLandDots(mask, LAND_DOT_STEP), 3));
      globe.add(new THREE.Points(landGeo, landMat));
    };
    mask.src = assetUrl("/assets/land-mask.png");

    // Journey arcs between consecutive cities
    const pinPositions = CITIES.map((c) => latLngToVec3(c.lat, c.lng, 1.012));
    const arcMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color() }, uTime: timeUniform },
      vertexShader: ARC_VERTEX,
      fragmentShader: ARC_FRAGMENT,
      transparent: true,
      depthWrite: false,
    });
    for (let i = 0; i < CITIES.length - 1; i++) {
      const pts = createArcPoints(latLngToVec3(CITIES[i].lat, CITIES[i].lng), latLngToVec3(CITIES[i + 1].lat, CITIES[i + 1].lng));
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      geo.setAttribute("aT", new THREE.BufferAttribute(new Float32Array(pts.map((_, j) => j / (pts.length - 1))), 1));
      geo.setAttribute("aOffset", new THREE.BufferAttribute(new Float32Array(pts.length).fill((i * 0.29) % 1), 1));
      globe.add(new THREE.Line(geo, arcMat));
    }

    // City pins
    const pinGeo = new THREE.BufferGeometry().setFromPoints(pinPositions);
    const pinState = new THREE.BufferAttribute(new Float32Array(CITIES.length), 1);
    pinGeo.setAttribute("aState", pinState);
    pinGeo.setAttribute("aPhase", new THREE.BufferAttribute(new Float32Array(CITIES.map((_, i) => (i * 0.37) % 1)), 1));
    const pinMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color() },
        uTime: timeUniform,
        uSize: { value: 30 },
        uPixelRatio: pixelRatioUniform,
      },
      vertexShader: PIN_VERTEX,
      fragmentShader: PIN_FRAGMENT,
      transparent: true,
      depthWrite: false,
    });
    const pins = new THREE.Points(pinGeo, pinMat);
    pins.renderOrder = 2;
    globe.add(pins);

    // ── Theme ──
    const applyTheme = () => {
      const t = readThemeColors(root);
      sphereMat.uniforms.uColor.value.set(t.sphere);
      sphereMat.uniforms.uRim.value.set(t.rim);
      landMat.uniforms.uColor.value.set(t.land);
      landOpacity = t.landOpacity;
      pinMat.uniforms.uColor.value.set(t.pin);
      arcMat.uniforms.uColor.value.set(t.arc);
    };
    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    // ── Interaction state ──
    const home = viewFor(HOME_VIEW.lat, HOME_VIEW.lng);
    const s = {
      rot: { ...home },
      target: null, // rotation being flown to
      vel: { x: 0, y: 0 }, // drag inertia, radians per ms
      zoom: ZOOM_DEFAULT,
      zoomTarget: ZOOM_DEFAULT,
      drag: null,
      pointer: null, // last pointer position while over the canvas
      lastInteraction: performance.now(),
      hovered: null,
      selected: null,
      appliedPins: "",
      screen: CITIES.map(() => ({ x: 0, y: 0, visible: false })),
      size: { w: 1, h: 1 },
    };

    const clampTilt = (x) => THREE.MathUtils.clamp(x, -TILT_LIMIT, TILT_LIMIT);
    const setZoom = (z) => {
      s.zoomTarget = THREE.MathUtils.clamp(z, ZOOM_MIN, ZOOM_MAX);
      s.lastInteraction = performance.now();
    };
    const flyTo = (view, zoom) => {
      s.target = { x: clampTilt(view.x), y: nearestAngle(s.rot.y, view.y) };
      s.vel.x = s.vel.y = 0;
      setZoom(zoom);
    };
    const select = (i) => {
      s.selected = i;
      setSelected(i);
      if (i === null) return;
      const view = viewFor(CITIES[i].lat, CITIES[i].lng);
      flyTo(view, Math.min(s.zoomTarget, ZOOM_FOCUS));
    };
    const setHover = (i) => {
      if (s.hovered === i) return;
      s.hovered = i;
      setHovered(i);
    };

    apiRef.current = {
      select,
      zoomBy: (factor) => setZoom(s.zoomTarget * factor),
      reset: () => {
        select(null);
        flyTo(home, ZOOM_DEFAULT);
      },
    };

    // Drag speed that keeps the surface under the cursor at any zoom.
    const radiansPerPixel = () =>
      ((s.zoom - 1) * Math.tan(THREE.MathUtils.degToRad(FOV / 2))) / (s.size.h / 2);

    const localPoint = (e) => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    // Nearest visible pin within `radius` px, measured in screen space.
    const pick = (pt, radius) => {
      let best = null;
      let bestDist = radius * radius;
      s.screen.forEach((p, i) => {
        if (!p.visible) return;
        const d = (p.x - pt.x) ** 2 + (p.y - pt.y) ** 2;
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    };

    const onPointerDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (s.drag) return;
      const pt = localPoint(e);
      s.drag = { id: e.pointerId, x: pt.x, y: pt.y, startX: pt.x, startY: pt.y, t: e.timeStamp, moved: false };
      s.target = null;
      s.vel.x = s.vel.y = 0;
      s.lastInteraction = performance.now();
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      const pt = localPoint(e);
      s.pointer = { ...pt, type: e.pointerType };
      const d = s.drag;
      if (!d || d.id !== e.pointerId) return;
      if (!d.moved) {
        if (Math.hypot(pt.x - d.startX, pt.y - d.startY) < DRAG_THRESHOLD) return;
        d.moved = true;
        mount.classList.add("is-dragging");
      }
      const k = radiansPerPixel();
      const spin = (pt.x - d.x) * k;
      const tilt = (pt.y - d.y) * k;
      s.rot.y += spin;
      s.rot.x = clampTilt(s.rot.x + tilt);
      const dt = Math.max(1, e.timeStamp - d.t);
      s.vel.y = s.vel.y * 0.5 + (spin / dt) * 0.5;
      s.vel.x = s.vel.x * 0.5 + (tilt / dt) * 0.5;
      d.x = pt.x;
      d.y = pt.y;
      d.t = e.timeStamp;
      s.lastInteraction = performance.now();
    };

    const endDrag = (e, cancelled) => {
      const d = s.drag;
      if (!d || d.id !== e.pointerId) return;
      s.drag = null;
      mount.classList.remove("is-dragging");
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId);
      s.lastInteraction = performance.now();
      // Keep inertia only if the pointer was still moving when released.
      if (d.moved && e.timeStamp - d.t < 80) return;
      s.vel.x = s.vel.y = 0;
      if (d.moved || cancelled) return;
      const hit = pick(localPoint(e), e.pointerType === "mouse" ? PICK_RADIUS.mouse : PICK_RADIUS.touch);
      if (hit !== null) select(hit);
      else if (s.selected !== null) select(null);
    };
    const onPointerUp = (e) => endDrag(e, false);
    const onPointerCancel = (e) => endDrag(e, true);
    const onPointerLeave = () => {
      if (s.drag) return;
      s.pointer = null;
      setHover(null);
    };

    // Plain scrolling keeps scrolling the page; pinch (ctrl + wheel) zooms.
    const onWheel = (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      setZoom(s.zoomTarget * Math.exp(THREE.MathUtils.clamp(e.deltaY, -25, 25) * 0.01));
    };
    // Safari reports trackpad pinches as gesture events instead.
    let gestureStartZoom = ZOOM_DEFAULT;
    const onGestureStart = (e) => {
      e.preventDefault();
      gestureStartZoom = s.zoomTarget;
    };
    const onGestureChange = (e) => {
      e.preventDefault();
      setZoom(gestureStartZoom / e.scale);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerCancel);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("gesturestart", onGestureStart);
    canvas.addEventListener("gesturechange", onGestureChange);

    // ── Animation loop ──
    const world = new THREE.Vector3();
    const toCamera = new THREE.Vector3();
    let raf = 0;
    let last = performance.now();
    let running = false;

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(64, now - last);
      last = now;
      if (!reducedMotion) timeUniform.value += dt / 1000;

      if (!s.drag) {
        if (s.target) {
          const f = 1 - Math.exp(-dt / 160);
          s.rot.x += (s.target.x - s.rot.x) * f;
          s.rot.y += (s.target.y - s.rot.y) * f;
          if (Math.abs(s.target.x - s.rot.x) + Math.abs(s.target.y - s.rot.y) < 1e-4) s.target = null;
        } else if (Math.abs(s.vel.x) + Math.abs(s.vel.y) > 1e-6) {
          s.rot.y += s.vel.y * dt;
          s.rot.x = clampTilt(s.rot.x + s.vel.x * dt);
          const decay = Math.exp(-dt / 320);
          s.vel.x *= decay;
          s.vel.y *= decay;
        } else if (
          !reducedMotion &&
          s.selected === null &&
          !s.pointer &&
          now - s.lastInteraction > IDLE_SPIN_DELAY
        ) {
          s.rot.y += SPIN_SPEED * dt;
        }
      }
      s.zoom += (s.zoomTarget - s.zoom) * (1 - Math.exp(-dt / 140));

      globe.rotation.set(s.rot.x, s.rot.y, 0);
      camera.position.set(0, 0, s.zoom);
      globe.updateMatrixWorld();
      camera.updateMatrixWorld();

      const lo = landMat.uniforms.uOpacity;
      lo.value += (landOpacity - lo.value) * (1 - Math.exp(-dt / 300));

      // Screen positions of pins, for picking and the label
      pinPositions.forEach((p, i) => {
        world.copy(p).applyMatrix4(globe.matrixWorld);
        const visible = world.dot(toCamera.copy(camera.position).sub(world)) > 0.02;
        world.project(camera);
        const sp = s.screen[i];
        sp.x = ((world.x + 1) / 2) * s.size.w;
        sp.y = ((1 - world.y) / 2) * s.size.h;
        sp.visible = visible;
      });

      if (s.pointer && s.pointer.type === "mouse" && !s.drag) setHover(pick(s.pointer, PICK_RADIUS.mouse));
      mount.classList.toggle("is-over-pin", s.hovered !== null && !s.drag);

      const pinKey = `${s.hovered}|${s.selected}`;
      if (pinKey !== s.appliedPins) {
        s.appliedPins = pinKey;
        for (let i = 0; i < CITIES.length; i++) {
          pinState.array[i] = i === s.selected ? 2 : i === s.hovered ? 1 : 0;
        }
        pinState.needsUpdate = true;
      }

      // Label the hovered pin, otherwise the selected one
      const labelled = s.hovered !== null ? s.hovered : s.selected;
      const hp = labelled !== null ? s.screen[labelled] : null;
      if (hp && hp.visible) {
        label.style.transform = `translate3d(${hp.x}px, ${hp.y}px, 0)`;
        label.classList.add("is-visible");
      } else {
        label.classList.remove("is-visible");
      }

      renderer.render(scene, camera);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Only animate while the globe is on screen.
    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
      rootMargin: "100px",
    });
    visibility.observe(mount);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      s.size = { w, h };
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      pixelRatioUniform.value = renderer.getPixelRatio();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    return () => {
      disposed = true;
      stop();
      visibility.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerCancel);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("gesturestart", onGestureStart);
      canvas.removeEventListener("gesturechange", onGestureChange);
      mask.onload = null;
      apiRef.current = null;
      scene.traverse((obj) => obj.geometry?.dispose());
      landGeo.dispose();
      [sphereMat, landMat, arcMat, pinMat].forEach((m) => m.dispose());
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  // Escape clears the selected city.
  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") apiRef.current?.select(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const labelIndex = hovered ?? selected;
  const labelCity = labelIndex === null ? null : CITIES[labelIndex];

  return (
    <section ref={rootRef} id="travel" className="travelglobe" aria-label="Places I've been">
      <div className="travelglobe-frame">
        <div
          ref={mountRef}
          className="travelglobe-canvas"
          role="img"
          aria-label={`Interactive globe marking ${CITIES.length} places I've been`}
        />

        <div ref={labelRef} className="travelglobe-label" aria-hidden="true">
          {labelCity && (
            <span>
              {labelCity.name}
              <small>{labelCity.country}</small>
            </span>
          )}
        </div>

        <div className="travelglobe-controls">
          <button type="button" className="travelglobe-control" onClick={() => apiRef.current?.zoomBy(0.8)} aria-label="Zoom in" title="Zoom in">
            <FiPlus aria-hidden="true" />
          </button>
          <button type="button" className="travelglobe-control" onClick={() => apiRef.current?.zoomBy(1.25)} aria-label="Zoom out" title="Zoom out">
            <FiMinus aria-hidden="true" />
          </button>
          <button type="button" className="travelglobe-control" onClick={() => apiRef.current?.reset()} aria-label="Reset view" title="Reset view">
            <FiRotateCcw aria-hidden="true" />
          </button>
        </div>

      </div>

      <p className="travelglobe-footer">Drag to spin · click a pin</p>
    </section>
  );
}
