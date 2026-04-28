import { Link } from "react-router-dom";
import { cvPdfUrl, heroContent, navBotWebsiteUrl, plakshaUniversityUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";

function splitAccolade(item) {
  const [title, rest] = item.split(" - ");
  return { title, subtitle: rest ?? "" };
}

const craftingInterpretersUrl = "https://craftinginterpreters.com/";
const spDuttAwardVideoUrl = "https://www.youtube.com/watch?v=HWLXG5a1gso";
const travelMapCtaText = "Check out my travel map 👣 →";
const introProjectsText =
  "Hi there! I’m Dipti. I like to read theoretical computer science books, and I spend most of my time figuring out how things work under the hood. I’ve built projects targeting real-world issues, such as lightweight text segmentation and automated chronic wound assessment. Apart from work, I like to play badminton and travel. Check out my travel map 👣 →";
const getCvPdfHref = () => `${window.location.origin}${assetUrl(cvPdfUrl)}`;

export default function HeroAboutBlock() {
  const accolades = (heroContent.accomplishments ?? []).map(splitAccolade);
  const leftAccolades = accolades.slice(0, 3);
  const rightAccolades = accolades.slice(3, 6);

  return (
    <div className="hero-about-v2">
      <div className="hero-about-v2-top">
        <div className="hero-about-v2-intro">
          <h1 className="hero-title">Dipti Dhawade</h1>
          <p className="hero-about-v2-degree">
            Computer Science & AI ·{" "}
            <a
              href={plakshaUniversityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-inline-link"
            >
              Plaksha University
            </a>{" "}
            · BTech
          </p>
          <p className="hero-about-v2-body">
            {introProjectsText.replace(travelMapCtaText, "").trim()}{" "}
            <a href="#my-journey" className="hero-inline-link">
              {travelMapCtaText}
            </a>
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

      <p className="hero-about-v2-label">What I'm currently upto?</p>
      <div className="hero-about-v2-lines">
        <article className="hero-about-v2-line">
          <p className="hero-about-v2-line-title">Building NavBot</p>
          <p className="hero-about-v2-line-text">
            NavBot is an AI chatbot-as-a-service that plugs into any website in under five
            minutes, no AI knowledge, no backend changes, just add the script in your html head. If you need a quick smart Q&A chatbot for your site, give NavBot a try.
          </p>
          <a href={navBotWebsiteUrl} target="_blank" rel="noopener noreferrer" className="hero-inline-link">
            Try NavBot →
          </a>
        </article>

        <article className="hero-about-v2-line">
          <p className="hero-about-v2-line-title">Writing Notes</p>
          <p className="hero-about-v2-line-text">
            Right now, I'm exploring systems programming, building my own
            scripting language from scratch (Yes, I'm reading Robert
            Nystrom's{" "}
            <a
              href={craftingInterpretersUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-inline-link"
            >
              Crafting Interpreters
            </a>
            ). Also, check out my notes for some last-minute exam prep.
          </p>
          <Link to="/notes" className="hero-inline-link">
              Browse notes →
            </Link>
        </article>

        <article className="hero-about-v2-line">
          <p className="hero-about-v2-line-title">Beyond the Screen</p>
          <p className="hero-about-v2-line-text">
            When I'm not on my computer, you'll find me building something in the robotics lab.
            My 3D designed and printed project, Grippers for Underwater Manipulation won:
            <br />
            <a
              href={spDuttAwardVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-inline-link"
            >
              🏆 3rd Place — SP Dutt Award for Innovation and Impact.
            </a>
          </p>
        </article>
      </div>
{/*
      <div className="hero-about-v2-accolades">
        <ul className="hero-about-v2-accolade-group">
          {leftAccolades.map((item) => (
            <li key={item.title} className="hero-about-v2-accolade-item">
              {item.title}
              {item.subtitle ? ` - ${item.subtitle}` : ""}
            </li>
          ))}
        </ul>
        <ul className="hero-about-v2-accolade-group">
          {rightAccolades.map((item) => (
            <li key={item.title} className="hero-about-v2-accolade-item">
              {item.title}
              {item.subtitle ? ` - ${item.subtitle}` : ""}
            </li>
          ))}
        </ul>
      </div>
*/}
    </div>
  );
}
