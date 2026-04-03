import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { layoutNextLine, prepareWithSegments } from "@chenglou/pretext";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { heroContent } from "../constants/index.js";

const techLogos = [
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", Icon: FaPython, color: "#3776AB" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Git", Icon: FaGitAlt, color: "#F05032" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED" },
];

const PAIR_COUNT = 4;

const LOGO_MARGIN = 6;

function buildCanvasFontString(el) {
  const cs = getComputedStyle(el);
  const style = cs.fontStyle === "normal" ? "" : `${cs.fontStyle} `;
  return `${style}${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`.trim();
}

function parseLineHeightPx(cs, fallbackPx) {
  const lh = cs.lineHeight;
  if (lh === "normal") return fallbackPx * 1.6;
  const n = Number.parseFloat(lh);
  return Number.isFinite(n) ? n : fallbackPx * 1.6;
}

function logoBoxInColumn(logoRect, columnRect) {
  const inflate = LOGO_MARGIN;
  return {
    left: logoRect.left - columnRect.left - inflate,
    top: logoRect.top - columnRect.top - inflate,
    right: logoRect.right - columnRect.left + inflate,
    bottom: logoRect.bottom - columnRect.top + inflate,
  };
}

function insetsForLineBand(boxes, y0, y1, fullW) {
  let leftInset = 0;
  let rightInset = 0;
  for (const b of boxes) {
    if (b.bottom <= y0 || b.top >= y1) continue;
    const cx = (b.left + b.right) / 2;
    if (cx < fullW * 0.5) {
      leftInset = Math.max(leftInset, Math.min(fullW, b.right));
    } else {
      rightInset = Math.max(rightInset, Math.max(0, fullW - b.left));
    }
  }
  const maxW = Math.max(64, fullW - leftInset - rightInset);
  return { maxW, leftInset, rightInset };
}

function rectsIntersect(a, b) {
  return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
}

function linesSignature(rows) {
  return rows
    .map((r) => `${r.key}|${r.leftInset}|${r.rightInset}|${r.text}`)
    .join("\u001e");
}

function readReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function renderLogoSlot(item, i, opts) {
  const { name, Icon: TechIcon, color } = item;
  const {
    motionRefs,
    activePair,
    reducedMotion,
    onPairEnd,
  } = opts;

  const isLeftPartner = i < 4 && i === activePair;
  const isRightPartner = i >= 4 && i === 7 - activePair;
  let motionClass = "hero-tech-seq-motion";
  if (!reducedMotion && isLeftPartner) {
    motionClass += " hero-tech-seq-motion--active-left";
  } else if (!reducedMotion && isRightPartner) {
    motionClass += " hero-tech-seq-motion--active-right";
  }

  return (
    <div key={name} className="hero-tech-rail-slot">
      <div
        ref={(el) => {
          motionRefs.current[i] = el;
        }}
        className={motionClass}
        onAnimationEnd={isLeftPartner ? onPairEnd : undefined}
      >
        <div className="hero-tech-item" title={name}>
          <TechIcon className="hero-tech-icon" style={{ color }} aria-hidden />
        </div>
      </div>
    </div>
  );
}

export default function HeroAboutBlock() {
  const columnRef = useRef(null);
  const measureRef = useRef(null);
  const motionRefs = useRef([]);
  const preparedRef = useRef(null);
  const fontKeyRef = useRef("");
  const linesSigRef = useRef("");
  const activePairRef = useRef(0);
  const reducedMotionRef = useRef(readReducedMotion());

  const [activePair, setActivePair] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(readReducedMotion);
  const [lines, setLines] = useState([]);
  const [fallback, setFallback] = useState(true);

  useEffect(() => {
    activePairRef.current = activePair;
  }, [activePair]);

  useEffect(() => {
    reducedMotionRef.current = reducedMotion;
  }, [reducedMotion]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const syncPrepared = useCallback(() => {
    const measure = measureRef.current;
    if (!measure) return;
    const font = buildCanvasFontString(measure);
    const key = `${font}|${heroContent.description}`;
    if (preparedRef.current && fontKeyRef.current === key) return;
    preparedRef.current = prepareWithSegments(heroContent.description, font);
    fontKeyRef.current = key;
  }, []);

  const layoutFrame = useCallback(() => {
    const column = columnRef.current;
    const prepared = preparedRef.current;
    if (!column || !prepared) return;

    const colRect = column.getBoundingClientRect();
    const fullW = column.clientWidth;
    if (fullW <= 0) return;

    const measure = measureRef.current;
    const cs = getComputedStyle(measure ?? column);
    const fontSize = Number.parseFloat(cs.fontSize) || 16;
    const lineHeightPx = parseLineHeightPx(cs, fontSize);

    const boxes = [];
    if (!reducedMotionRef.current) {
      const k = activePairRef.current;
      const leftIdx = k;
      const rightIdx = 7 - k;
      for (const idx of [leftIdx, rightIdx]) {
        const motionEl = motionRefs.current[idx];
        if (!motionEl) continue;
        const lr = motionEl.getBoundingClientRect();
        if (rectsIntersect(lr, colRect)) {
          boxes.push(logoBoxInColumn(lr, colRect));
        }
      }
    }

    const nextLines = [];
    let cursor = { segmentIndex: 0, graphemeIndex: 0 };
    let y = 0;

    while (true) {
      const { maxW, leftInset, rightInset } = insetsForLineBand(
        boxes,
        y,
        y + lineHeightPx,
        fullW
      );
      const line = layoutNextLine(prepared, cursor, maxW);
      if (line === null) break;
      nextLines.push({
        key: `${line.start.segmentIndex}-${line.start.graphemeIndex}`,
        text: line.text,
        leftInset,
        rightInset,
      });
      cursor = line.end;
      y += lineHeightPx;
    }

    if (nextLines.length === 0) return;

    const sig = linesSignature(nextLines);
    if (sig !== linesSigRef.current) {
      linesSigRef.current = sig;
      setLines(nextLines);
    }
    setFallback(false);
  }, []);

  const onPairEnd = useCallback(() => {
    setActivePair((p) => (p + 1) % PAIR_COUNT);
  }, []);

  const slotOpts = {
    motionRefs,
    activePair,
    reducedMotion,
    onPairEnd,
  };

  useLayoutEffect(() => {
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      syncPrepared();
      layoutFrame();
    };
    if (document.fonts?.ready) {
      document.fonts.ready.then(start);
    } else {
      start();
    }
    const ro = new ResizeObserver(() => {
      syncPrepared();
      layoutFrame();
    });
    if (columnRef.current) ro.observe(columnRef.current);
    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [layoutFrame, syncPrepared]);

  useEffect(() => {
    if (reducedMotion) return undefined;
    let id = 0;
    function tick() {
      layoutFrame();
      id = requestAnimationFrame(tick);
    }
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [layoutFrame, reducedMotion]);

  return (
    <div className="hero-about-rail">
      <div className="hero-tech-rail hero-tech-rail--left" aria-label="Technologies left">
        {techLogos.slice(0, 4).map((item, slot) => renderLogoSlot(item, slot, slotOpts))}
      </div>

      <div className="hero-pretext-column" ref={columnRef}>
        <span
          ref={measureRef}
          className="hero-flow-line hero-font-measurer"
          aria-hidden
        >
          A
        </span>

        {reducedMotion && (
          <p className="hero-description">{heroContent.description}</p>
        )}

        {!reducedMotion && fallback && (
          <p className="hero-description hero-description--pretext-fallback">
            {heroContent.description}
          </p>
        )}

        {!reducedMotion &&
          !fallback &&
          lines.map(({ key, text, leftInset, rightInset }) => (
            <p
              key={key}
              className="hero-flow-line"
              style={{
                paddingLeft: leftInset > 0 ? `${leftInset}px` : undefined,
                paddingRight: rightInset > 0 ? `${rightInset}px` : undefined,
                transition:
                  "padding-left 0.18s ease-out, padding-right 0.18s ease-out",
              }}
            >
              {text}
            </p>
          ))}
      </div>

      <div className="hero-tech-rail hero-tech-rail--right" aria-label="Technologies right">
        {techLogos.slice(4, 8).map((item, slot) =>
          renderLogoSlot(item, slot + 4, slotOpts)
        )}
      </div>
    </div>
  );
}
