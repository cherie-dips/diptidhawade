import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { myProjects, projectCategories } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/projects.css";

const ALL = "All";

/**
 * Where each project sits. The first is large; the second sits beside it, lower down; the rest
 * follow in pairs whose offsets alternate (a, then b), and a last unpaired project is centred.
 * projects.css turns these names into columns and offsets for each screen width.
 */
function slotFor(index, count) {
  if (index === 0) return "big";
  if (index === 1) return "side";
  const k = index - 2;
  if (k % 2 === 0 && index === count - 1) return "solo";
  const cycle = Math.floor(k / 2) % 2 === 0 ? "a" : "b";
  return `${cycle}${(k % 2) + 1}`;
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    if (!expandedImage) return;
    const onEscape = (e) => e.key === "Escape" && setExpandedImage(null);
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [expandedImage]);

  const visible = filter === ALL ? myProjects : myProjects.filter((project) => project.categories?.includes(filter));

  return (
    <section className="projects" aria-labelledby="projects-title">
      <div className="wrap grid12 projects-head">
        <h2 className="h-section projects-title" id="projects-title">
          Projects
        </h2>
        <div className="projects-side">
          <div className="projects-tabs" role="group" aria-label="Filter projects">
            {[ALL, ...projectCategories].map((category) => (
              <button
                key={category}
                type="button"
                className="projects-tab"
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap grid12 projects-list">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            slot={slotFor(i, visible.length)}
            onExpandImage={setExpandedImage}
          />
        ))}
      </div>

      {expandedImage && (
        <div
          className="lightbox"
          onClick={() => setExpandedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image"
        >
          <button type="button" className="lightbox-close" onClick={() => setExpandedImage(null)} aria-label="Close">
            ×
          </button>
          <img src={assetUrl(expandedImage)} alt="" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
