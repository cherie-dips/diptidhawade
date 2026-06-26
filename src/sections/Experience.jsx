import { experiences } from "../constants/index.js";
import "../styles/experience.css";

export default function Experience() {
  return (
    <section className="experience-page">
      <div className="experience-inner">
        <h1 className="experience-title">Experience</h1>

        {experiences.map((exp, i) => (
          <div key={i} className="experience-item">
            <div className="experience-timeline">
              <div className="experience-dot" />
              {i < experiences.length - 1 && <div className="experience-line" />}
            </div>
            <div className="experience-item-body">
              <span className="experience-duration">{exp.duration}</span>
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-org">{exp.organization}</p>
              <p className="experience-desc">{exp.description}</p>
              {exp.tags?.length > 0 && (
                <div className="experience-tags">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="experience-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
