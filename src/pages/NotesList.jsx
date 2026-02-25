import { Link } from "react-router-dom";
import { notesCategories } from "../constants/index.js";
import { assetUrl } from "../utils/assetUrl.js";
import "../styles/notes.css";

export default function NotesList() {
  return (
    <div className="notes-page page-content">
      <h1 className="notes-title">Notes</h1>
      <ul className="notes-category-list notes-category-grid">
        {notesCategories.map((cat, index) => (
          <li key={cat.id} className="notes-category-item">
            <Link to={`/notes/${cat.id}`} className="notes-category-card notes-category-box">
              <span className="notes-category-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="notes-category-image-wrap">
                <img
                  src={assetUrl(cat.image.replace(/^\//, ""))}
                  alt=""
                  className="notes-category-image"
                />
              </div>
              <span className="notes-category-title">{cat.title}</span>
              <div className="notes-category-tags">
                {(cat.subjectLabels || cat.subjects.map((s) => s.name)).slice(0, 5).map((label) => (
                  <span key={label} className="notes-category-tag">{label}</span>
                ))}
                {(cat.subjectLabels || cat.subjects.map((s) => s.name)).length > 5 && (
                  <span className="notes-category-tag notes-category-tag-more">+ more</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
