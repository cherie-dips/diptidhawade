import { useState } from "react";
import { contact, cvPdfUrl } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import TravelGlobe from "./Travelglobe.jsx";
import "../styles/contact.css";

/** Large "Let's talk", the email address with a copy button, links, and the travel globe. */
export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no clipboard access: the address is still on screen */
    }
  };

  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="wrap grid12 contact-grid">
        <h2 className="contact-talk" id="contact-title">
          Let’s <em>talk</em>.
        </h2>
        <p className="contact-text">I’m open to software and AI roles. Email is the quickest way to reach me.</p>
        <div className="contact-email-row">
          <a className="contact-email" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <button type="button" className="contact-copy" onClick={copyEmail} aria-live="polite">
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="actions contact-links">
          {contact.links.map((link) => (
            <a key={link.href} className="tlink" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </a>
          ))}
          <a className="tlink" href={assetUrl(cvPdfUrl)} target="_blank" rel="noopener noreferrer">
            Résumé ↓
          </a>
        </div>
      </div>

      {/* Wide screens: placed over the bottom of the Experience band, running off the right edge.
          Phones: sits here, under the links. */}
      <div className="contact-globe">
        <TravelGlobe />
      </div>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Dipti Dhawade</span>
        <span>Built with React and three.js</span>
      </footer>
    </section>
  );
}
