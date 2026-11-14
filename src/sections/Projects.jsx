import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { myProjects, projectCategories } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/projects.css";

const ALL = "All";
const LAPTOP = "(min-width: 1024px)"; // 3 columns
const TABLET = "(min-width: 640px)"; // 2 columns, else 1

const columnCount = () =>
  window.matchMedia(LAPTOP).matches ? 3 : window.matchMedia(TABLET).matches ? 2 : 1;

/** Number of tile columns for the current screen width; updates when the window is resized. */
function useColumnCount() {
  const [count, setCount] = useState(columnCount);
  useEffect(() => {
    const queries = [LAPTOP, TABLET].map((query) => window.matchMedia(query));
    const update = () => setCount(columnCount());
    queries.forEach((mq) => mq.addEventListener("change", update));
    return () => queries.forEach((mq) => mq.removeEventListener("change", update));
  }, []);
  return count;
}

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [expandedImage, setExpandedImage] = useState(null);
  const columns = useColumnCount();

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

  const visible =
    filter === ALL
      ? myProjects
      : myProjects.filter((project) => project.categories?.includes(filter));

  // Masonry: deal the tiles out left to right (so the top row is the first projects in the list),
  // and let each column stack its tiles at their own heights.
  const stacks = Array.from({ length: columns }, (_, column) =>
    visible.filter((_, i) => i % columns === column)
  );

  return (
    <section className="projects-page">
      <div className="projects-inner">
        <div className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-filters" role="group" aria-label="Filter projects">
            {[ALL, ...projectCategories].map((category) => (
              <button
                key={category}
                type="button"
                className="projects-filter"
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-masonry">
          {stacks.map((stack, column) => (
            <div key={column} className="projects-column">
              {stack.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  onExpandImage={setExpandedImage}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {expandedImage && (
        <div
          className="projects-image-lightbox"
          onClick={() => setExpandedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image"
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
