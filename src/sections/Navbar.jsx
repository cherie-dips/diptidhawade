import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { cvPdfUrl, navLinks, notesWebsiteUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/navbar.css";

// New key: the old one ("dipti-profile-theme") was written on every visit, so every past visitor
// had "dark" saved. This one is written only when someone clicks the theme button.
const THEME_KEY = "dd-theme";
const BASE = import.meta.env.BASE_URL;

const isHome = () => {
  const basePath = BASE.replace(/\/$/, "");
  return window.location.pathname === basePath || window.location.pathname === basePath + "/";
};

const scrollToTop = () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth", block: "start" });

/** Section links plus Notes (an external site), in the order they appear in the nav. */
function NavLinks({ onNavigate }) {
  const [first, second, ...rest] = navLinks;
  const section = ({ id, hash, name }) => (
    <a key={id} href={`${BASE}#${hash}`} onClick={onNavigate}>
      {name}
    </a>
  );
  return (
    <>
      {[first, second].filter(Boolean).map(section)}
      <a href={notesWebsiteUrl} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
        Notes <span aria-hidden="true">↗</span>
      </a>
      {rest.map(section)}
    </>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem(THEME_KEY, next ? "dark" : "light");
    } catch {
      /* private mode: the choice just isn't remembered */
    }
  };

  // Escape closes the phone menu; growing past phone width closes it too.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const wide = window.matchMedia("(min-width: 721px)");
    const onWide = () => wide.matches && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a
          href={BASE}
          className="nav-brand"
          onClick={(e) => {
            if (isHome()) {
              e.preventDefault();
              window.history.replaceState(null, "", BASE);
              scrollToTop();
            }
            closeMenu();
          }}
        >
          Dipti Dhawade
        </a>

        <nav className="nav-links" aria-label="Sections">
          <NavLinks />
        </nav>

        <div className="nav-end">
          <a className="pill pill-sm" href={assetUrl(cvPdfUrl)} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
          <button
            type="button"
            className="nav-icon"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Light theme" : "Dark theme"}
          >
            {dark ? <FiSun aria-hidden /> : <FiMoon aria-hidden />}
          </button>
          <button
            type="button"
            className="nav-icon nav-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-sheet"
          >
            {menuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </button>
        </div>
      </div>

      <nav id="nav-sheet" className="nav-sheet" aria-label="Menu" hidden={!menuOpen}>
        <div className="wrap nav-sheet-links">
          <NavLinks onNavigate={closeMenu} />
        </div>
      </nav>
    </header>
  );
}
