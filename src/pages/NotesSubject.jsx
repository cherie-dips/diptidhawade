import { useParams, useNavigate, Link } from "react-router-dom";
import { FOLDER_TYPES, FOLDER_SLUGS } from "../constants/index.js";
import { useNotes } from "../hooks/useNotes.js";
import { useSubjectFiles } from "../hooks/useSubjectFiles.js";
import { hasConfig } from "../supabase.js";
import "../styles/notes.css";

export default function NotesSubject() {
  const { categoryId, subjectId } = useParams();
  const navigate = useNavigate();
  const { categories } = useNotes();
  const { folders: storageFolders, error: filesError } = useSubjectFiles(categoryId, subjectId);

  const category = categories.find((c) => c.id === categoryId);
  const subject = category?.subjects.find((s) => s.id === subjectId);

  // Always show the 4 folder sections; use Storage data when available, else empty
  const folders = hasConfig
    ? { ...Object.fromEntries(FOLDER_TYPES.map((name) => [name, []])), ...storageFolders }
    : (subject?.folders || Object.fromEntries(FOLDER_TYPES.map((name) => [name, []])));

  if (!category || !subject) {
    return (
      <div className="notes-page page-content">
        <p>Subject not found.</p>
        <button type="button" onClick={() => navigate("/notes")} className="notes-back-btn">
          ← Back to Notes
        </button>
      </div>
    );
  }

  return (
    <div className="notes-page page-content">
      <button
        type="button"
        onClick={() => navigate(`/notes/${categoryId}`)}
        className="notes-back-btn"
      >
        ← Back to {category.title}
      </button>
      <h1 className="notes-title">{subject.name}</h1>

      <p className="notes-folder-intro">Class Notes, Tutorials/Assignments, Exam Practice, Past Papers</p>
      <div className="notes-folders">
        {FOLDER_TYPES.map((folderName) => {
          const pdfs = folders[folderName] || [];
          const folderSlug = FOLDER_SLUGS[folderName];
          return (
            <section key={folderName} className="notes-folder-section">
              <h2 className="notes-folder-title">
                <Link to={`/notes/${categoryId}/${subjectId}/${folderSlug}`} className="notes-folder-title-link">
                  {folderName}
                </Link>
              </h2>
              {pdfs.length === 0 && (
                <p className="notes-empty">{hasConfig && filesError ? "Could not load notes." : "No notes yet."}</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
