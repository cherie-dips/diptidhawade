import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import TravelGlobe from "./sections/Travelglobe.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import NotesList from "./pages/NotesList.jsx";
import NotesCategory from "./pages/NotesCategory.jsx";
import NotesSubject from "./pages/NotesSubject.jsx";

const BASE = import.meta.env.BASE_URL;

const PageWrapper = ({ children }) => (
  <div className="page-content">{children}</div>
);

const SECTION_IDS = ["hero", "projects", "contact"];

function scrollToSection(id) {
  if (!id) {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight;
  const alreadyInView = rect.top >= 0 && rect.top <= viewHeight * 0.4;
  if (!alreadyInView) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname !== "/") return;
    if (hash === "#hero") {
      window.history.replaceState(null, "", BASE);
    }
    const id = hash ? hash.slice(1) : "hero";
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [pathname, hash]);

  useEffect(() => {
    const basePath = BASE.replace(/\/$/, "");
    const onHashChange = () => {
      const isRoot = window.location.pathname === basePath || window.location.pathname === basePath + "/";
      if (!isRoot) return;
      const id = window.location.hash.slice(1);
      scrollToSection(id || "hero");
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const basePath = BASE.replace(/\/$/, "");
    const isRoot = window.location.pathname === basePath || window.location.pathname === basePath + "/";
    if (isRoot && window.location.hash === "#hero") {
      window.history.replaceState(null, "", BASE);
    }
  }, []);

  return null;
}

function ScrollSpy() {
  const updatingRef = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (updatingRef.current) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTION_IDS.includes(id) && entry.intersectionRatio >= 0.2) {
            const current = window.location.hash.slice(1);
            const nextUrl = id === "hero" ? BASE : `${BASE}#${id}`;
            const currentUrl = current === "hero" || !current ? BASE : `${BASE}#${current}`;
            if (currentUrl !== nextUrl) {
              updatingRef.current = true;
              window.history.replaceState(null, "", nextUrl);
              updatingRef.current = false;
            }
            break;
          }
        }
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.2, 0.5] }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return null;
}

function HomeScrollPage() {
  return (
    <>
      <ScrollToHash />
      <ScrollSpy />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <PageWrapper>
          <Projects />
        </PageWrapper>
      </div>
      <div className="contact-globe-row page-content">
        <div id="contact" className="contact-globe-col">
          <Contact />
        </div>
        <div id="my-journey" className="contact-globe-col">
          <TravelGlobe />
        </div>
      </div>
    </>
  );
}

const App = () => {
  return (
    <Router basename={BASE.replace(/\/$/, "")}>
      <Navbar />
      <main className="w-full min-w-0">
        <Routes>
          <Route path="/" element={<HomeScrollPage />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/:categoryId" element={<NotesCategory />} />
          <Route path="/notes/:categoryId/:subjectId" element={<NotesSubject />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
