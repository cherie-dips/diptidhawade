import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import { assetUrl } from "../utils/assetUrl.js";
import { cardImage, hasVideo } from "../utils/projects.js";
import { getYoutubeEmbedSrc } from "../utils/youtubeEmbed.js";

const YOUTUBE_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

/**
 * Top of a tile. Images enlarge on click. Videos show their thumbnail with a play button and only
 * load the player (YouTube or the video file) when clicked, so the section stays light.
 */
function TileMedia({ project, onExpandImage }) {
  const [playing, setPlaying] = useState(false);
  const image = cardImage(project);
  const isVideo = hasVideo(project);

  if (isVideo && (playing || !image)) {
    const youtube = getYoutubeEmbedSrc(project.spotlight);
    return (
      <div className="project-tile-media project-tile-media--video">
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
            title={`${project.title} — project video`}
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
      className={`project-tile-media${isVideo ? " project-tile-media--video" : ""}`}
      onClick={() => (isVideo ? setPlaying(true) : onExpandImage(project.spotlight))}
      aria-label={isVideo ? `Play the ${project.title} video` : `Enlarge the ${project.title} image`}
    >
      <img
        src={assetUrl(image)}
        alt=""
        loading="lazy"
        style={project.thumbPosition ? { objectPosition: project.thumbPosition } : undefined}
      />
      {isVideo && (
        <span className="project-tile-play" aria-hidden>
          <FaPlay />
        </span>
      )}
    </button>
  );
}

/** One project tile: media, title, both descriptions, then code/site links and tags. */
export default function ProjectCard({ project, onExpandImage }) {
  const primaryHref = project.website || project.href;
  return (
    <article className="project-tile">
      <TileMedia project={project} onExpandImage={onExpandImage} />

      <h3 className="project-tile-title">
        <a href={primaryHref} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      </h3>
      <p className="project-tile-desc">{project.desc}</p>
      {project.subdesc && <p className="project-tile-subdesc">{project.subdesc}</p>}

      <div className="project-tile-footer">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-tile-btn"
          title="View source on GitHub"
        >
          <FaGithub aria-hidden /> Code
          <span className="project-tile-sr"> for {project.title}</span>
        </a>
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-tile-btn project-tile-btn--icon"
            aria-label={`${project.title} website`}
            title="Visit website"
          >
            <FaExternalLinkAlt aria-hidden />
          </a>
        )}
        {project.tags?.map((tag) => (
          <span key={tag.id} className="project-tile-tag">
            {tag.name}
          </span>
        ))}
      </div>
    </article>
  );
}
