import { useCallback, useEffect, useRef } from "react";
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

const WORD_HOLE_RADIUS = 26;
const WORD_REPULSION_RADIUS = 105;
const WORD_MAX_PUSH = 22;

function readReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitDescriptionSegments(text) {
  if (!text) return [];
  return text.split(/(\s+)/).filter((p) => p.length > 0);
}

export default function HeroAboutBlock() {
  const wrapRef = useRef(null);
  const pointerRef = useRef(null);
  const reducedMotionRef = useRef(readReducedMotion());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      reducedMotionRef.current = mq.matches;
      if (mq.matches && wrapRef.current) {
        wrapRef.current.querySelectorAll(".hero-about-word").forEach((el) => {
          el.style.transform = "";
        });
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const applyWordRipple = useCallback(() => {
    const root = wrapRef.current;
    if (!root) return;
    const words = root.querySelectorAll(".hero-about-word");
    if (reducedMotionRef.current) {
      words.forEach((el) => {
        el.style.transform = "";
      });
      return;
    }
    const pt = pointerRef.current;
    if (!pt) {
      words.forEach((el) => {
        el.style.transform = "";
      });
      return;
    }
    const { x: cx, y: cy } = pt;
    for (const el of words) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) continue;
      const wx = r.left + r.width * 0.5;
      const wy = r.top + r.height * 0.55;
      const dx = wx - cx;
      const dy = wy - cy;
      const dist = Math.hypot(dx, dy);
      if (!dist || dist > WORD_REPULSION_RADIUS) {
        el.style.transform = "";
        continue;
      }
      const nx = dx / dist;
      const ny = dy / dist;
      const edge = 1 - dist / WORD_REPULSION_RADIUS;
      const strength = edge * edge;
      const holeFactor =
        dist < WORD_HOLE_RADIUS ? (1 - dist / WORD_HOLE_RADIUS) ** 1.35 : 0;
      const push = WORD_MAX_PUSH * strength + WORD_MAX_PUSH * 0.95 * holeFactor;
      el.style.transform = `translate(${nx * push}px, ${ny * push}px)`;
    }
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (e.pointerType !== "mouse" || reducedMotionRef.current) return;
      pointerRef.current = { x: e.clientX, y: e.clientY };
      applyWordRipple();
    },
    [applyWordRipple]
  );

  const onPointerLeave = useCallback(() => {
    pointerRef.current = null;
    applyWordRipple();
  }, [applyWordRipple]);

  const segments = splitDescriptionSegments(heroContent.description);

  return (
    <div className="hero-about-rail">
      <div
        ref={wrapRef}
        className="hero-about-text-ripple"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <p className="hero-description hero-description--about">
          {segments.map((segment, i) =>
            /^\s+$/.test(segment) ? (
              <span key={i} className="hero-about-segment-space">
                {segment}
              </span>
            ) : (
              <span key={i} className="hero-about-word">
                {segment}
              </span>
            )
          )}
        </p>
      </div>

      <div className="hero-tech-icons-scroll">
        <div className="hero-tech-icons-row" aria-label="Technologies">
          {techLogos.map(({ name, Icon, color }) => (
            <div key={name} className="hero-tech-item" title={name}>
              <Icon className="hero-tech-icon" style={{ color }} aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
