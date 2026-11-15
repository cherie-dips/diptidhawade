import { experiences } from "../constants/index.js";
import "../styles/experience.css";

/** "June 2026 – July 2026" → "Jun – Jul 2026"; "Oct 2024 – May 2025" stays as is. */
function shortDuration(duration) {
  const match = duration.match(/^(\w+)\s+(\d{4})\s*[–-]\s*(\w+)\s+(\d{4})$/);
  if (!match) return duration;
  const [, fromMonth, fromYear, toMonth, toYear] = match;
  const mon = (month) => month.slice(0, 3);
  return fromYear === toYear
    ? `${mon(fromMonth)} – ${mon(toMonth)} ${toYear}`
    : `${mon(fromMonth)} ${fromYear} – ${mon(toMonth)} ${toYear}`;
}

/** The one tonal band on the page: dates on the left, every other entry indented. */
export default function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="wrap grid12">
        <h2 className="h-section experience-title" id="experience-title">
          Experience
        </h2>

        <ol className="experience-list">
          {experiences.map((exp) => (
            <li key={`${exp.organization}-${exp.duration}`}>
              <p className="experience-when">{shortDuration(exp.duration)}</p>
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-org">{exp.organization}</p>
                <p className="experience-desc">{exp.description}</p>
                {exp.tags?.length > 0 && <p className="stack experience-stack">{exp.tags.join(" · ")}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
