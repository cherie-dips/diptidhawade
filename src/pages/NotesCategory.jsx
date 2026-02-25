import { Link, useParams, useNavigate } from "react-router-dom";
import { notesCategories } from "../constants/index.js";
import "../styles/notes.css";

export default function NotesCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = notesCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="notes-page page-content">
        <p>Category not found.</p>
        <button type="button" onClick={() => navigate("/notes")} className="notes-back-btn">
          ← Back to Notes
        </button>
      </div>
    );
  }

  return (
    <div className="notes-page notes-category-page page-content">
      <button type="button" onClick={() => navigate("/notes")} className="notes-back-btn">
        ← Back to Notes
      </button>
      <h1 className="notes-title">{category.title}</h1>
      {category.subheading && (
        <p className="notes-subheading">{category.subheading}</p>
      )}
      <ul className="notes-subject-list">
        {category.subjects.map((subj) => (
          <li key={subj.id}>
            <Link to={`/notes/${categoryId}/${subj.id}`} className="notes-subject-card">
              {subj.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
