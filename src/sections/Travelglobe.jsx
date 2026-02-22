import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { cities as CITIES } from "../constants/index.js";
import "../styles/travelglobe.css";

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

function createArcPoints(start, end, segments = 60) {
  const pts = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3().lerpVectors(start, end, t);
    p.normalize().multiplyScalar(1 + Math.sin(Math.PI * t) * 0.35);
    pts.push(p);
  }
  return pts;
}

const CARD_W = 220;
const CARD_H = 200;
const ZOOM_MIN = 1.2;
const ZOOM_MAX = 9;

// ─── Component ────────────────────────────────────────────────────────────────
export default function TravelGlobe() {
  const mountRef = useRef(null);
  const worldSectionRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const globeRef = useRef(null);
  const markersRef = useRef([]);
  const arcsRef = useRef([]);
  const frameRef = useRef(null);

  // Interaction refs (no re-render needed)
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const prevMouse = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ x: 0.3, y: 0 });
  const currentRot = useRef({ x: 0.3, y: 0 });
  const autoRotate = useRef(true);
  const autoTimer = useRef(null);
  const targetCamZ = useRef(3.2);
  const currentCamZ = useRef(3.2);

  // React state
  const [selectedCity, setSelectedCity] = useState(null);
  const [cardScreenPos, setCardScreenPos] = useState(null); // {x, y}
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // Keep in refs for animation loop access
  const selectedCityRef = useRef(null);
  selectedCityRef.current = selectedCity;

  // ── Scene setup ────────────────────────────────────────────────────────────
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 3.2);
    cameraRef.current = camera;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dir = new THREE.DirectionalLight(0x88aaff, 1.2);
    dir.position.set(5, 5, 5);
    scene.add(dir);
    const rim = new THREE.DirectionalLight(0xff8844, 0.3);
    rim.position.set(-5, -2, -5);
    scene.add(rim);

    // Globe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeRef.current = globeGroup;

    // Earth textures
    const loader = new THREE.TextureLoader();
    const earthTex = loader.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg");
    const bumpTex  = loader.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg");
    const specTex  = loader.load("https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png");

    globeGroup.add(new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({
        map: earthTex, bumpMap: bumpTex, bumpScale: 0.05,
        specularMap: specTex, specular: new THREE.Color(0x334466), shininess: 25,
      })
    ));

    // Atmosphere
    globeGroup.add(new THREE.Mesh(
      new THREE.SphereGeometry(1.06, 64, 64),
      new THREE.MeshPhongMaterial({ color: 0x4488ff, transparent: true, opacity: 0.08, side: THREE.FrontSide })
    ));

    // Stars
    const starPos = new Float32Array(1500 * 3);
    for (let i = 0; i < starPos.length; i++) starPos[i] = (Math.random() - 0.5) * 80;
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.6 })));

    // City markers
    CITIES.forEach((city) => {
      const pos = latLngToVec3(city.lat, city.lng, 1.01);

      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.018, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff6644 })
      );
      dot.position.copy(pos);
      dot.userData.cityId = city.id;
      globeGroup.add(dot);

      const ring = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff8866, transparent: true, opacity: 0.3 })
      );
      ring.position.copy(pos);
      globeGroup.add(ring);

      markersRef.current.push({ dot, ring, city, pos });
    });

    // Arcs
    for (let i = 0; i < CITIES.length - 1; i++) {
      const a = latLngToVec3(CITIES[i].lat, CITIES[i].lng, 1.01);
      const b = latLngToVec3(CITIES[i + 1].lat, CITIES[i + 1].lng, 1.01);
      const arc = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(createArcPoints(a, b)),
        new THREE.LineBasicMaterial({ color: 0xff7755, transparent: true, opacity: 0.4 })
      );
      globeGroup.add(arc);
      arcsRef.current.push(arc);
    }

    // Animation loop
    let t = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      t += 0.01;

      if (autoRotate.current) targetRot.current.y += 0.002;

      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.06;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.06;
      globeGroup.rotation.x = currentRot.current.x;
      globeGroup.rotation.y = currentRot.current.y;

      // Smooth zoom
      currentCamZ.current += (targetCamZ.current - currentCamZ.current) * 0.08;
      camera.position.z = currentCamZ.current;

      // Pulse rings
      markersRef.current.forEach(({ ring }, idx) => {
        const p = 1 + 0.4 * Math.sin(t * 2 + idx);
        ring.scale.setScalar(p);
        ring.material.opacity = 0.12 + 0.15 * Math.sin(t * 2 + idx);
      });

      // Animate arc opacity
      arcsRef.current.forEach((arc, idx) => {
        arc.material.opacity = 0.2 + 0.2 * Math.sin(t + idx * 0.5);
      });

      // Update card screen position to track the selected city dot
      const sel = selectedCityRef.current;
      if (sel) {
        const marker = markersRef.current.find(m => m.city.id === sel.id);
        if (marker) {
          // World position of the dot
          const worldPos = marker.pos.clone().applyMatrix4(globeGroup.matrixWorld);
          // Check if facing camera
          const toCam = new THREE.Vector3(0, 0, 1);
          const dotNormal = worldPos.clone().normalize();
          const facing = dotNormal.dot(toCam);

          if (facing > 0) {
            // Project to NDC then to screen pixels
            const ndc = worldPos.clone().project(camera);
            const rect = container.getBoundingClientRect();
            const sx = ((ndc.x + 1) / 2) * rect.width;
            const sy = ((-ndc.y + 1) / 2) * rect.height;
            setCardScreenPos({ x: sx, y: sy, visible: true });
          } else {
            setCardScreenPos(p => p ? { ...p, visible: false } : null);
          }
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const W2 = container.clientWidth;
      const H2 = container.clientHeight;
      renderer.setSize(W2, H2);
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  // ── Interaction handlers ───────────────────────────────────────────────────
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const resetAutoRotate = () => {
      autoRotate.current = false;
      clearTimeout(autoTimer.current);
      autoTimer.current = setTimeout(() => { autoRotate.current = true; }, 3000);
    };

    // Zoom via scroll wheel
    const onWheel = (e) => {
      e.preventDefault();
      resetAutoRotate();
      const delta = e.deltaY > 0 ? 0.3 : -0.3;
      targetCamZ.current = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, targetCamZ.current + delta));
    };

    const onMouseDown = (e) => {
      isDragging.current = true;
      dragMoved.current = false;
      autoRotate.current = false;
      prevMouse.current = { x: e.clientX, y: e.clientY };
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (isDragging.current) {
        const dx = e.clientX - prevMouse.current.x;
        const dy = e.clientY - prevMouse.current.y;
        if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved.current = true;
        targetRot.current.y += dx * 0.005;
        targetRot.current.x = Math.max(-1.2, Math.min(1.2, targetRot.current.x + dy * 0.005));
        prevMouse.current = { x: e.clientX, y: e.clientY };
        return;
      }
      // Hover raycasting
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const rc = new THREE.Raycaster();
      rc.setFromCamera(mouse, cameraRef.current);
      const hits = rc.intersectObjects(markersRef.current.map(m => m.dot));
      if (hits.length > 0) {
        setHoveredId(hits[0].object.userData.cityId);
        container.style.cursor = "pointer";
      } else {
        setHoveredId(null);
        container.style.cursor = "grab";
      }
    };

    const onMouseUp = (e) => {
      container.style.cursor = "grab";
      const wasDrag = dragMoved.current;
      isDragging.current = false;
      dragMoved.current = false;
      resetAutoRotate();
      if (wasDrag) return;

      // Click → open city card
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );
      const rc = new THREE.Raycaster();
      rc.setFromCamera(mouse, cameraRef.current);
      const hits = rc.intersectObjects(markersRef.current.map(m => m.dot));
      if (hits.length > 0) {
        const city = CITIES.find(c => c.id === hits[0].object.userData.cityId);
        setSelectedCity(city);
        setPhotoIndex(0);
        setPhotoLoading(true);
      } else {
        setSelectedCity(null);
        setCardScreenPos(null);
      }
    };

    // Touch
    const onTouchStart = (e) => {
      isDragging.current = true;
      dragMoved.current = false;
      autoRotate.current = false;
      prevMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchMove = (e) => {
      const dx = e.touches[0].clientX - prevMouse.current.x;
      const dy = e.touches[0].clientY - prevMouse.current.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) dragMoved.current = true;
      targetRot.current.y += dx * 0.005;
      targetRot.current.x = Math.max(-1.2, Math.min(1.2, targetRot.current.x + dy * 0.005));
      prevMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDragging.current = false;
      resetAutoRotate();
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      clearTimeout(autoTimer.current);
    };
  }, []);

  // Update marker colours
  useEffect(() => {
    markersRef.current.forEach(({ dot, city }) => {
      const isSel = selectedCity?.id === city.id;
      const isHov = hoveredId === city.id;
      dot.material.color.set(isSel ? 0xffdd44 : isHov ? 0xff9966 : 0xff6644);
      dot.scale.setScalar(isSel ? 1.9 : isHov ? 1.4 : 1);
    });
  }, [selectedCity, hoveredId]);

  // Compute clamped card position (keep card within world square section, in foreground)
  const computeCardStyle = () => {
    if (!cardScreenPos || !mountRef.current) return null;
    const canvasRect = mountRef.current.getBoundingClientRect();
    const W = canvasRect.width;
    const H = canvasRect.height;
    const dotX = cardScreenPos.x;
    const dotY = cardScreenPos.y;

    // Default: open right of dot
    let left = dotX + 14;
    let top = dotY - CARD_H / 2;

    // Clamp to world section bounds so photo card always stays inside the square
    const pad = 20;
    let minLeft = pad;
    let maxLeft = W - CARD_W - pad;
    let minTop = pad;
    let maxTop = H - CARD_H - pad;
    if (worldSectionRef.current) {
      const sectionRect = worldSectionRef.current.getBoundingClientRect();
      const innerLeft = sectionRect.left + 24;
      const innerTop = sectionRect.top + 24;
      const innerRight = sectionRect.right - 24;
      const innerBottom = sectionRect.bottom - 24;
      // Convert section bounds to canvas-relative (same origin as mountRef)
      minLeft = Math.max(pad, innerLeft - canvasRect.left);
      maxLeft = Math.min(W - CARD_W - pad, innerRight - canvasRect.left - CARD_W);
      minTop = Math.max(pad, innerTop - canvasRect.top);
      maxTop = Math.min(H - CARD_H - pad, innerBottom - canvasRect.top - CARD_H);
    }

    // Flip to left of dot if overflowing right
    if (left > maxLeft) left = dotX - CARD_W - 14;
    left = Math.max(minLeft, Math.min(maxLeft, left));
    top = Math.max(minTop, Math.min(maxTop, top));

    return { left, top };
  };

  const cardStyle = computeCardStyle();
  const showCard = selectedCity && cardScreenPos?.visible !== false && cardStyle;

  return (
    <section
      ref={worldSectionRef}
      id="travel"
      className="travelglobe-world"
      style={{
        width: "min(50vw, 50vh)",
        height: "min(50vw, 50vh)",
        maxWidth: "min(50vw, 50vh, 420px)",
        maxHeight: "min(50vw, 50vh, 420px)",
        background: "radial-gradient(ellipse at 30% 40%, #0a0e1a 0%, #050709 70%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(68,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(68,102,255,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div className="travelglobe-layout">
      <div className="travelglobe-globe-col" style={{ position: "relative", zIndex: 2 }}>
        <div className="travelglobe-canvas-wrap" ref={mountRef} />

        {/* Overlay card — in foreground, clamped to world square */}
        {showCard && (
          <div
            className="travelglobe-card-overlay"
            style={{
              position: "absolute",
              left: cardStyle.left,
              top: cardStyle.top,
              width: CARD_W,
              pointerEvents: "auto",
              animation: "cardIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both",
            }}
          >
            {/* Small connector line from dot to card */}
            <div style={{
              position: "absolute",
              // Left side of card if card is to the right, right side if to the left
              [cardStyle.left > cardScreenPos.x ? "left" : "right"]: "-14px",
              top: "50%",
              width: "14px",
              height: "1px",
              background: "rgba(255,119,85,0.45)",
              transform: "translateY(-50%)",
            }} />

            <div
              className="travelglobe-card-box"
              style={{
                background: "rgba(7, 9, 17, 0.93)",
                borderRadius: "14px",
                overflow: "hidden",
                backdropFilter: "blur(18px)",
                boxShadow: "0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >

              {/* Photo */}
              <div style={{ position: "relative", width: "100%", height: "130px", overflow: "hidden" }}>
                <img
                  key={selectedCity.id + photoIndex}
                  src={selectedCity.photos[photoIndex].startsWith("http") ? selectedCity.photos[photoIndex] : (import.meta.env.BASE_URL + selectedCity.photos[photoIndex])}
                  alt={selectedCity.name}
                  onLoad={() => setPhotoLoading(false)}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover", display: "block",
                    opacity: photoLoading ? 0 : 1,
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* Spinner while loading */}
                {photoLoading && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(7,9,17,0.85)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{
                      width: "20px", height: "20px",
                      border: "2px solid rgba(255,119,85,0.25)",
                      borderTopColor: "#ff7755",
                      borderRadius: "50%",
                      animation: "spin 0.65s linear infinite",
                    }} />
                  </div>
                )}

                {/* Close button — top left */}
                <button
                  onClick={() => { setSelectedCity(null); setCardScreenPos(null); }}
                  style={{
                    position: "absolute", top: "7px", left: "7px",
                    width: "20px", height: "20px",
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "10px",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: 0, lineHeight: 1,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(220,60,40,0.65)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
                >
                  ✕
                </button>

                {/* Left / Right arrows — edges of photo, circular white style */}
                <button
                  type="button"
                  className="travelglobe-photo-arrow travelglobe-photo-arrow-left"
                  onClick={() => { setPhotoLoading(true); setPhotoIndex(i => (i - 1 + selectedCity.photos.length) % selectedCity.photos.length); }}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="travelglobe-photo-arrow travelglobe-photo-arrow-right"
                  onClick={() => { setPhotoLoading(true); setPhotoIndex(i => (i + 1) % selectedCity.photos.length); }}
                  aria-label="Next photo"
                >
                  ›
                </button>

                {/* Photo dot indicators — bottom centre */}
                <div style={{
                  position: "absolute", bottom: "6px", left: "50%", transform: "translateX(-50%)",
                  display: "flex", gap: "4px", alignItems: "center",
                }}>
                  {selectedCity.photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setPhotoLoading(true); setPhotoIndex(i); }}
                      style={{
                        width: i === photoIndex ? "14px" : "5px",
                        height: "5px",
                        borderRadius: "3px",
                        background: i === photoIndex ? "#ff7755" : "rgba(255,255,255,0.35)",
                        border: "none", cursor: "pointer", padding: 0,
                        transition: "all 0.25s ease",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* City info row */}
              <div style={{ padding: "9px 12px 11px", display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ fontSize: "18px", lineHeight: 1 }}>{selectedCity.emoji}</span>
                <div>
                  <div className="travelglobe-card-city-name" style={{ fontFamily: "'Georgia', serif", fontSize: "13px", fontWeight: "400", lineHeight: 1.25 }}>
                    {selectedCity.name}
                  </div>
                  <div className="travelglobe-card-country" style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "1px" }}>
                    {selectedCity.country}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}