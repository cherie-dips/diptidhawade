import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { navLinks } from "../constants/index.js";
import "../styles/navbar.css";

const THEME_KEY = "dipti-profile-theme";
const BASE = import.meta.env.BASE_URL;

const scrollToHero = () => {
  const el = document.getElementById("hero");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavItems = ({ onNavigate }) => {
  const location = useLocation();
  const basePath = BASE.replace(/\/$/, "");
  const isNotesPage = location.pathname === basePath + "/notes" || location.pathname.startsWith(basePath + "/notes/");
  const isRoot = location.pathname === basePath || location.pathname === basePath + "/";

  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, hash, name, path }) => (
        <li key={id} className="nav-li">
          {path ? (
            <Link
              to={path}
              className={`nav-li_a ${path === "/notes" && isNotesPage ? "nav-li_a-active" : ""}`}
              onClick={onNavigate}
            >
              {name}
            </Link>
          ) : hash === "hero" ? (
            <Link
              to="/"
              className="nav-li_a"
              onClick={(e) => {
                if (isRoot) {
                  e.preventDefault();
                  scrollToHero();
                }
                onNavigate?.();
              }}
            >
              {name}
            </Link>
          ) : (
            <a
              href={`${BASE}#${hash}`}
              className="nav-li_a"
              onClick={onNavigate}
            >
              {name}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === "light";
    } catch {
      return false;
    }
  });
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("theme-light");
      try {
        localStorage.setItem(THEME_KEY, "light");
      } catch {}
    } else {
      document.body.classList.remove("theme-light");
      try {
        localStorage.setItem(THEME_KEY, "dark");
      } catch {}
    }
  }, [isLight]);

  return (
    <header className="navbar-header">
      <div className="navbar-inner page-content">
        <a
          href={BASE}
          className="nav-name-link navbar-name"
          onClick={(e) => {
            const basePath = BASE.replace(/\/$/, "");
            const isRoot = window.location.pathname === basePath || window.location.pathname === basePath + "/";
            if (isRoot) {
              e.preventDefault();
              window.history.replaceState(null, "", BASE);
              scrollToHero();
            }
            closeMenu();
          }}
        >
          Dipti Dhawade
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="navbar-toggle"
          aria-label="Toggle menu"
        >
          <img
            src={isOpen ? `${BASE}assets/close.svg` : `${BASE}assets/menu.svg`}
            alt=""
            className="navbar-toggle-icon"
          />
        </button>
        <div className="navbar-actions">
          <nav className="navbar-desktop">
            <NavItems />
          </nav>
          <button
            type="button"
            className="navbar-theme-btn"
            onClick={() => setIsLight((prev) => !prev)}
            aria-label={isLight ? "Switch to dark background" : "Switch to light background"}
            title={isLight ? "Dark background" : "Light background"}
          >
            {isLight ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "navbar-sidebar-open" : "navbar-sidebar-closed"}`}>
        <nav className="navbar-sidebar-inner">
          <NavItems onNavigate={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
