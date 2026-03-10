import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { HiBars3 } from "react-icons/hi2";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { FOLDER_TYPES, SLUG_TO_FOLDER } from "../constants/index.js";
import { useNotes } from "../hooks/useNotes.js";
import { useSubjectFiles } from "../hooks/useSubjectFiles.js";
import { supabase, hasConfig, NOTES_BUCKET } from "../supabase.js";
import "../styles/notes.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function NotesSection() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (tabs) =>
      tabs.filter((tab) => tab.title.toLowerCase().startsWith("thumbnail")),
  });

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

  const itemsWithUrl = useMemo(() => {
    if (!hasConfig || !supabase) return [];
    return pdfs
      .map((item) => {
        const { data } = supabase.storage.from(NOTES_BUCKET).getPublicUrl(item.storagePath);
        return data?.publicUrl
          ? { ...item, url: data.publicUrl }
          : null;
      })
      .filter(Boolean);
  }, [pdfs]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const hasItems = itemsWithUrl.length > 0;
  const activeItem = hasItems ? itemsWithUrl[Math.min(activeIndex, itemsWithUrl.length - 1)] : null;

  return (
    <div className="notes-page notes-section-page page-content">
      <div className="notes-section-layout-wrap">
        <div className="notes-section-left-col">
          <button
            type="button"
            className={
              "notes-toggle-list-btn" +
              (isSidebarOpen ? " notes-toggle-list-btn-active" : "")
            }
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label={isSidebarOpen ? "Hide notes list" : "Show notes list"}
          >
            <HiBars3 aria-hidden="true" />
          </button>
          {isSidebarOpen && (
            <>
              <h2 className="notes-section-page-heading">{folderName}</h2>
              <aside className="notes-section-sidebar">
                <ul className="notes-pdf-list notes-pdf-list-sidebar">
                  {itemsWithUrl.map((item, index) => (
                    <li key={item.storagePath || index}>
                      <button
                        type="button"
                        className={
                          "notes-pdf-link notes-pdf-link-button" +
                          (index === activeIndex ? " notes-pdf-link-active" : "")
                        }
                        onClick={() => setActiveIndex(index)}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>
            </>
          )}
        </div>

        <div className="notes-section-viewer">
          {activeItem ? (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={activeItem.url}
                defaultScale={SpecialZoomLevel.PageWidth}
                theme="dark"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          ) : (
            <p className="notes-empty">
              {hasConfig && filesError ? "Could not load notes." : "No notes yet."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
