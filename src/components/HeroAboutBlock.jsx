import { Link } from "react-router-dom";
import { cvPdfUrl, navBotWebsiteUrl, plakshaUniversityUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";

const introText =
  "Hi there! I'm Dipti. I spend most of my time reading CS theory books, solving DSA problems, and thinking about system design. I'm a 3rd-year CS & AI student at Plaksha University, building tools that bridge the gap between theory and practice.";
const getCvPdfHref = () => `${window.location.origin}${assetUrl(cvPdfUrl)}`;

export default function HeroAboutBlock() {
  return (
    <div className="hero-about-v2">
      <div className="hero-about-v2-top">
        <div className="hero-about-v2-intro">
          <h1 className="hero-title">Dipti Dhawade</h1>
          <p className="hero-about-v2-tagline">
            Computer Science · Artificial Intelligence · Software Developement<br />
          </p>
          <p className="hero-about-v2-body">
            {introText}
          </p>
          <div className="hero-about-v2-cta-row">
            <a
              href={getCvPdfHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-about-v2-cta hero-about-v2-cta-primary"
            >
              View Resume
            </a>
            <a href="#projects" className="hero-about-v2-cta hero-about-v2-cta-secondary">
              Explore Projects →
            </a>
          </div>
        </div>
        <div className="hero-about-v2-photo-wrap">
          <img src={assetUrl("/assets/Photo.jpeg")} alt="Dipti Dhawade" className="hero-about-v2-photo" />
        </div>
      </div>

      <div className="hero-about-featured">
        <a
          href={navBotWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-about-featured-card"
        >
          <span className="hero-about-featured-card-title">NavBot</span>
          <p className="hero-about-featured-card-desc">
            NavBot is an AI chatbot-as-a-service that plugs into any website in under five
            minutes, no AI knowledge, no backend changes, just add the script in your html head. If you need a quick smart Q&A chatbot for your site, give NavBot a try.
          </p>
          <span className="hero-about-featured-card-cta">Try NavBot →</span>
        </a>
        <Link to="/notes" className="hero-about-featured-card">
          <span className="hero-about-featured-card-title">Notes</span>
          <p className="hero-about-featured-card-desc">
            I'm exploring systems programming, building my own
            scripting language from scratch (Yes, I'm reading Robert
            Nystrom's{" "}
            <a
              href="https://craftinginterpreters.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-inline-link"
            >
              Crafting Interpreters
            </a>
            ). Also, check out my notes on Discrete Maths, Data Structure, Algorithms, ML and more for some last-minute exam prep.
          </p>
          <span className="hero-about-featured-card-cta">Browse Notes →</span>
        </Link>
      </div>
    </div>
  );
}
