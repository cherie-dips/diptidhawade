import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { assetUrl } from "../utils/assetUrl.js";
import { cardImage, hasVideo } from "../utils/projects.js";
import { getYoutubeEmbedSrc } from "../utils/youtubeEmbed.js";

const YOUTUBE_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

/**
 * The project's picture, shown whole: the box takes the picture's own shape once it loads, so
 * nothing is cropped. Images enlarge on click. Videos show their thumbnail with a play button and
 * only load the player (YouTube or the video file) when clicked, in a box of the same shape.
 */
function ProjectMedia({ project, name, onExpandImage }) {
  const [playing, setPlaying] = useState(false);
  const [ratio, setRatio] = useState(null); // width / height of the thumbnail, once loaded
  const image = cardImage(project);
  const isVideo = hasVideo(project);
  const shape = { aspectRatio: ratio ?? (isVideo ? 16 / 9 : 16 / 10) };

  if (isVideo && (playing || !image)) {
    const youtube = getYoutubeEmbedSrc(project.spotlight);
    return (
      <div className="project-media project-media--playing" style={shape}>
        {project.texture ? (
          <video
            src={assetUrl(project.texture)}
            poster={image ? assetUrl(image) : undefined}
            controls
            autoPlay={playing}
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <iframe
            src={`${youtube}?autoplay=1&rel=0`}
            title={`${name} — project video`}
            allow={YOUTUBE_ALLOW}
            allowFullScreen
          />
        )}
      </div>
    );
  }

  if (!image) return null;

  return (
    <button
      type="button"
      className="project-media"
      style={shape}
      onClick={() => (isVideo ? setPlaying(true) : onExpandImage(project.spotlight || image))}
      aria-label={isVideo ? `Play the ${name} video` : `Enlarge the ${name} image`}
    >
      <img
        src={assetUrl(image)}
        alt=""
        loading="lazy"
        onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
      />
      {isVideo && (
        <span className="project-play" aria-hidden>
          <FaPlay />
        </span>
      )}
    </button>
  );
}

/**
 * One project, with no frame around it: picture, categories (and award), name, what it is, both
 * paragraphs, links and the stack. `slot` sets its size and place in the staggered layout.
 */
export default function ProjectCard({ project, slot, onExpandImage }) {
  const [name, subtitle] = project.title.split(" — ");
  const kicker = [...(project.categories ?? []), project.award].filter(Boolean).join(" · ");

  return (
    <article className={`project project--${slot}`}>
      <ProjectMedia project={project} name={name} onExpandImage={onExpandImage} />

      {kicker && <p className="project-kicker">{kicker}</p>}
      <h3 className="project-title">{name}</h3>
      {subtitle && <p className="project-sub">{subtitle}</p>}
      <p className="project-desc">{project.desc}</p>
      {project.subdesc && <p className="project-desc">{project.subdesc}</p>}

      <div className="actions project-actions">
        {project.website && (
          <a className="tlink" href={project.website} target="_blank" rel="noopener noreferrer">
            {project.websiteLabel ?? "Live"} ↗<span className="sr-only"> ({name})</span>
          </a>
        )}
        {project.href && (
          <a className="tlink" href={project.href} target="_blank" rel="noopener noreferrer">
            Code ↗<span className="sr-only"> for {name}</span>
          </a>
        )}
      </div>

      {project.tags?.length > 0 && <p className="stack project-stack">{project.tags.map((tag) => tag.name).join(" · ")}</p>}
    </article>
  );
}
