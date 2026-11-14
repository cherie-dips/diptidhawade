import { FiArrowDown } from "react-icons/fi";
import {
  codechefUrl,
  contact,
  cvPdfUrl,
  githubUrl,
  heroStatus,
  leetcodeUrl,
  navBotWebsiteUrl,
  notesWebsiteUrl,
} from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/hero.css";

const concurrentFsUrl = "https://github.com/cherie-dips/FileSystem";
const linkedin = contact.links.find((link) => link.icon === "linkedin")?.href;

/** A link a recruiter should not miss: highlighted, with an arrow, opening in a new tab. */
const Mark = ({ href, children }) => (
  <a className="mark" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

/**
 * Intro: a very large name broken over two lines, one line about me, the photo hanging over a
 * tone block that runs off the right edge, then the intro with the key links highlighted.
 */
export default function Hero() {
  return (
    <section className="hero" aria-label="Intro">
      <div className="wrap grid12">
        {heroStatus && (
          <p className="hero-status">
            <span className="hero-dot" aria-hidden="true" />
            {heroStatus}
          </p>
        )}

        <h1 className="hero-name">
          <span>Dipti</span> <span className="hero-name-2">Dhawade</span>
        </h1>

        {/* One line at every width: phones get "CS" so it still fits */}
        <p className="hero-statement">
          <span className="hero-long">Computer Science</span>
          <span className="hero-short">CS</span> &amp; AI student at Plaksha University.
        </p>

        <div className="hero-photo-wrap">
          <img className="hero-photo" src={assetUrl("/assets/Photo.jpeg")} alt="Dipti Dhawade" width="381" height="405" />
        </div>

        <div className="hero-intro-col">
          <p className="hero-intro">
            I like problems at the intersection of theory and product. Lately that means{" "}
            <Mark href={navBotWebsiteUrl}>NavBot</Mark>, an AI chatbot any website can add with one script tag,
            and <Mark href={concurrentFsUrl}>ConcurrentFS</Mark>, a crash-safe file system in C++. I share what I
            learn in my <Mark href={notesWebsiteUrl}>notes</Mark>.
          </p>
          <div className="actions hero-actions">
            <a className="pill" href={assetUrl(cvPdfUrl)} target="_blank" rel="noopener noreferrer">
              <FiArrowDown aria-hidden />
              Résumé <small>PDF</small>
            </a>
            <a className="tlink" href={githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            {linkedin && (
              <a className="tlink" href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            )}
            <a className="tlink" href={`mailto:${contact.email}`}>
              Email ↗
            </a>
          </div>
        </div>

        <dl className="hero-facts">
          <div>
            <dt className="label">Now</dt>
            <dd className="hero-fact-nowrap">Building Mini-Borg in C++</dd>
          </div>
          <div>
            <dt className="label">Focus</dt>
            <dd>
              <span className="hero-focus-line">OS, Networks, DSA</span>{" "}
              <span className="hero-focus-line">ML &amp; AI, Backend</span>
            </dd>
          </div>
          <div>
            <dt className="label">Also on</dt>
            <dd>
              <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
              ,{" "}
              <a href={codechefUrl} target="_blank" rel="noopener noreferrer">
                CodeChef
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
