import "../styles/hero.css";
import HeroAboutBlock from "../components/HeroAboutBlock.jsx";
import { heroContent, cvPdfUrl, plakshaUniversityUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import { FaFilePdf } from "react-icons/fa";

const getCvPdfHref = () => `${window.location.origin}${assetUrl(cvPdfUrl)}`;

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="page-content hero-inner">
        <div className="hero-text-col">
          <div className="hero-heading-stack">
            <h1 className="hero-title">{heroContent.title}</h1>
            <p className="hero-tagline">
              {heroContent.tagline.split(/(Plaksha University)/g).map((part, i) =>
                part === "Plaksha University" ? (
                  <a
                    key={i}
                    href={plakshaUniversityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-inline-link"
                  >
                    Plaksha University
                  </a>
                ) : (
                  part
                )
              )}
            </p>
          </div>
          <HeroAboutBlock />
          {heroContent.accomplishments && heroContent.accomplishments.length > 0 && (
            <ul className="hero-accomplishments-list">
              {heroContent.accomplishments.map((item, i) => (
                <li key={i} className="hero-accomplishments-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="hero-image-col">
          <img
            src={assetUrl("/assets/Photo.jpeg")}
            alt="Dipti Dhawade"
            className="hero-image"
          />
          <div className="hero-cv-row">
            <a
              href={getCvPdfHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cv-link"
              aria-label="View CV"
            >
              <span className="hero-cv-link-icon">
                <FaFilePdf />
              </span>
              <span className="hero-cv-link-label">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
