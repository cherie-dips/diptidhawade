import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { notesCategories, FOLDER_TYPES } from "../constants/index.js";
import { assetUrl, getGoogleDrivePreviewUrl } from "../utils/assetUrl.js";
import "../styles/notes.css";

export default function NotesSubject() {
  const { categoryId, subjectId } = useParams();
  const navigate = useNavigate();
  const [viewingPdf, setViewingPdf] = useState(null);

  const category = notesCategories.find((c) => c.id === categoryId);
  const subject = category?.subjects.find((s) => s.id === subjectId);

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

  const openPdf = (path) => setViewingPdf(path);
  const openViewer = (pathOrUrl) => {
    const drivePreview = getGoogleDrivePreviewUrl(pathOrUrl);
    setViewingPdf(drivePreview || pathOrUrl);
  };
  const closePdf = () => setViewingPdf(null);

  const isExternalLink = (item) => !!item.link;
  const isGoogleDriveLink = (url) => !!getGoogleDrivePreviewUrl(url);

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

      <p className="notes-folder-intro">Class Notes, Past Papers</p>
      <div className="notes-folders">
        {FOLDER_TYPES.map((folderName) => {
          const pdfs = subject.folders[folderName] || [];
          return (
            <section key={folderName} className="notes-folder-section">
              <h2 className="notes-folder-title">{folderName}</h2>
              {pdfs.length === 0 ? (
                <p className="notes-empty">No notes yet.</p>
              ) : (
                <ul className="notes-pdf-list">
                  {pdfs.map((item, i) => (
                    <li key={i}>
                      {isExternalLink(item) ? (
                        isGoogleDriveLink(item.link) ? (
                          <button
                            type="button"
                            className="notes-pdf-link notes-pdf-link-external"
                            onClick={() => openViewer(item.link)}
                          >
                            {item.title} ↗
                          </button>
                        ) : (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="notes-pdf-link notes-pdf-link-external"
                          >
                            {item.title} ↗
                          </a>
                        )
                      ) : (
                        <button
                          type="button"
                          className="notes-pdf-link"
                          onClick={() => openPdf(item.path)}
                        >
                          {item.title}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>

      {viewingPdf && (
        <PdfViewerModal src={viewingPdf} onClose={() => setViewingPdf(null)} />
      )}
    </div>
  );
}

function PdfViewerModal({ src, onClose }) {
  const isExternalUrl = src.startsWith("http");
  const iframeSrc = isExternalUrl ? src : assetUrl(src) + "#toolbar=0";
  return (
    <div className="notes-pdf-overlay" onClick={onClose} onContextMenu={(e) => e.preventDefault()} role="dialog" aria-modal="true">
      <div className="notes-pdf-modal" onClick={(e) => e.stopPropagation()} onContextMenu={(e) => e.stopPropagation()}>
        <div className="notes-pdf-header">
          <span className="notes-pdf-view-only">View only — do not download or distribute</span>
          <button type="button" className="notes-pdf-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <iframe
          title="PDF viewer"
          src={iframeSrc}
          className="notes-pdf-iframe"
        />
      </div>
    </div>
  );
}
