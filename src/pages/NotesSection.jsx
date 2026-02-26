import { useParams, useNavigate } from "react-router-dom";
import { FOLDER_TYPES, FOLDER_SLUGS, SLUG_TO_FOLDER } from "../constants/index.js";
import { useNotes } from "../hooks/useNotes.js";
import { useSubjectFiles } from "../hooks/useSubjectFiles.js";
import { supabase, hasConfig, NOTES_BUCKET } from "../supabase.js";
import "../styles/notes.css";

/**
 * Single section page: e.g. /notes/plaksha-university/discrete-maths/past-papers
 * Shows only the PDF list for that section (e.g. Past Papers).
 */
export default function NotesSection() {
  const { categoryId, subjectId, folderSlug } = useParams();
  const navigate = useNavigate();
  const { categories } = useNotes();
  const { folders, error: filesError } = useSubjectFiles(categoryId, subjectId);

  const folderName = SLUG_TO_FOLDER[folderSlug];
  const category = categories.find((c) => c.id === categoryId);
  const subject = category?.subjects.find((s) => s.id === subjectId);
  const pdfs = folderName && folders ? (folders[folderName] || []) : [];

  if (!folderName || !FOLDER_TYPES.includes(folderName)) {
    return (
      <div className="notes-page page-content">
        <p>Section not found.</p>
        <button type="button" onClick={() => navigate("/notes")} className="notes-back-btn">
          ← Back to Notes
        </button>
      </div>
    );
  }

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

  const getPdfUrl = (storagePath) => {
    if (!hasConfig || !supabase) return null;
    const { data } = supabase.storage.from(NOTES_BUCKET).getPublicUrl(storagePath);
    return data.publicUrl;
  };

  return (
    <div className="notes-page page-content">
      <button
        type="button"
        onClick={() => navigate(`/notes/${categoryId}/${subjectId}`)}
        className="notes-back-btn"
      >
        ← Back to {subject.name}
      </button>
      <h2 className="notes-section-page-heading">{folderName}</h2>

      {pdfs.length === 0 ? (
          <p className="notes-empty">{hasConfig && filesError ? "Could not load notes." : "No notes yet."}</p>
        ) : (
          <ul className="notes-pdf-list notes-pdf-list-section-page">
            {pdfs.map((item, i) => {
              const url = getPdfUrl(item.storagePath);
              return (
                <li key={i}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="notes-pdf-link notes-pdf-link-external"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span className="notes-pdf-link">{item.title}</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}

    </div>
  );
}
