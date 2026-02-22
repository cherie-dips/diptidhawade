import "../styles/hero.css";
import { heroContent, cvPdfUrl, plakshaUniversityUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";

const getCvPdfHref = () => `${window.location.origin}${assetUrl(cvPdfUrl)}`;
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaFilePdf,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

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

const Hero = () => {
  return (
    <section id="cv" className="hero-section">
      <div className="page-content hero-inner">
        <div className="hero-text-col">
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
          <p className="hero-description">
            {heroContent.description.split(/(Plaksha University)/g).map((part, i) =>
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
          <div className="hero-tech-logos">
            {techLogos.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="hero-tech-item"
                title={name}
              >
                <Icon className="hero-tech-icon" style={{ color }} />
              </div>
            ))}
          </div>
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
