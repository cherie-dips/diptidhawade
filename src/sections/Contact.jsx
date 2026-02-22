import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contact } from "../constants/index.js";
import "../styles/contact.css";

const iconMap = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  email: FaEnvelope,
};

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-inner">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-intro">
          Drop me an email or connect with me on LinkedIn or GitHub.
        </p>

        <div className="contact-block">
          <div className="contact-label">Email</div>
          <a
            href={`mailto:${contact.email}`}
            className="contact-link"
            aria-label="Email"
          >
            <span className="contact-link-icon">
              <FaEnvelope />
            </span>
            <span className="contact-link-label">{contact.email}</span>
          </a>
        </div>

        {contact.links?.length > 0 && (
          <div className="contact-block">
            <div className="contact-label">Links</div>
            <div className="contact-links">
              {contact.links.map((link, i) => {
                const Icon = link.icon ? iconMap[link.icon] : null;
                return (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label={link.label}
                  >
                    {Icon && (
                      <span className="contact-link-icon">
                        <Icon />
                      </span>
                    )}
                    <span className="contact-link-label">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
