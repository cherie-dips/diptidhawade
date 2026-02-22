import { useState, useEffect } from "react";
import { myProjects } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/projects.css";

export default function Projects() {
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === "Escape") setExpandedImage(null);
    };
    if (expandedImage) {
      document.addEventListener("keydown", onEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  return (
    <section className="projects-page">
      <div className="projects-inner">
        <h1 className="projects-title">Projects</h1>

        {myProjects.map((project, i) => (
          <div key={i} className="projects-item">
            <div className="projects-item-media-card">
              {project.texture ? (
                <video
                  src={assetUrl(project.texture)}
                  poster={project.thumbnail ? assetUrl(project.thumbnail) : undefined}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <button
                  type="button"
                  className="projects-item-image-btn"
                  onClick={() => setExpandedImage(project.spotlight)}
                  aria-label="Expand image"
                >
                  <img
                    src={assetUrl(project.spotlight)}
                    alt=""
                    loading="lazy"
                  />
                </button>
              )}
            </div>
            <div className="projects-item-body">
              <h3 className="projects-item-title">
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <p className="projects-item-desc">{project.desc}</p>
              {project.subdesc && (
                <p className="projects-item-subdesc">{project.subdesc}</p>
              )}
              {project.tags?.length > 0 && (
                <div className="projects-item-tags">
                  {project.tags.map((tag) => (
                    <span key={tag.id} className="projects-item-tag">
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="projects-item-view"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div
          className="projects-image-lightbox"
          onClick={() => setExpandedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expand image"
        >
          <button
            type="button"
            className="projects-lightbox-close"
            onClick={() => setExpandedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={assetUrl(expandedImage)}
            alt=""
            className="projects-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
