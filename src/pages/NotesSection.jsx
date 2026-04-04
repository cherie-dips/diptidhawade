import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { HiBars3, HiChevronRight, HiChevronDown } from "react-icons/hi2";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { FOLDER_TYPES, FOLDER_SLUGS, SLUG_TO_FOLDER } from "../constants/index.js";
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

  const itemsByFolder = useMemo(() => {
    const empty = Object.fromEntries(FOLDER_TYPES.map((n) => [n, []]));
    if (!hasConfig || !supabase || !folders) return empty;
    const result = { ...empty };
    for (const name of FOLDER_TYPES) {
      const list = folders[name] || [];
      result[name] = list
        .map((item) => {
          const { data } = supabase.storage.from(NOTES_BUCKET).getPublicUrl(item.storagePath);
          return data?.publicUrl ? { ...item, url: data.publicUrl } : null;
        })
        .filter(Boolean);
    }
    return result;
  }, [folders]);

  const [activeStoragePath, setActiveStoragePath] = useState(null);
  const [expandedSlugs, setExpandedSlugs] = useState(
    () => new Set(folderSlug ? [folderSlug] : [])
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!folderSlug) return;
    setExpandedSlugs((prev) => new Set(prev).add(folderSlug));
  }, [folderSlug]);

  useEffect(() => {
    if (!folderName || !FOLDER_TYPES.includes(folderName)) {
      setActiveStoragePath(null);
      return;
    }
    const items = itemsByFolder[folderName] || [];
    if (items.length === 0) {
      setActiveStoragePath(null);
      return;
    }
    setActiveStoragePath((prev) => {
      if (prev && items.some((i) => i.storagePath === prev)) return prev;
      return items[0].storagePath;
    });
  }, [folderSlug, folderName, itemsByFolder]);

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

  const itemsWithUrl = itemsByFolder[folderName] || [];
  const activeItem =
    itemsWithUrl.find((i) => i.storagePath === activeStoragePath) ?? itemsWithUrl[0] ?? null;

  const toggleExpanded = (slug) => {
    setExpandedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const openFolderCategory = (name) => {
    const slug = FOLDER_SLUGS[name];
    setExpandedSlugs((prev) => new Set(prev).add(slug));
    navigate(`/notes/${categoryId}/${subjectId}/${slug}`);
  };

  const selectPdf = (folderDisplayName, item) => {
    const slug = FOLDER_SLUGS[folderDisplayName];
    setExpandedSlugs((prev) => new Set(prev).add(slug));
    setActiveStoragePath(item.storagePath);
    if (folderSlug !== slug) {
      navigate(`/notes/${categoryId}/${subjectId}/${slug}`);
    }
  };

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
            <aside className="notes-section-sidebar notes-section-sidebar-tree">
              <ul className="notes-tree-root" role="tree" aria-label="Notes folders">
                {FOLDER_TYPES.map((fname) => {
                  const slug = FOLDER_SLUGS[fname];
                  const expanded = expandedSlugs.has(slug);
                  const files = itemsByFolder[fname] || [];
                  const isActiveFolder = folderSlug === slug;

                  return (
                    <li key={fname} className="notes-tree-folder" role="treeitem" aria-expanded={expanded}>
                      <div className="notes-tree-folder-row">
                        <button
                          type="button"
                          className="notes-tree-chevron"
                          aria-label={expanded ? `Collapse ${fname}` : `Expand ${fname}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpanded(slug);
                          }}
                        >
                          {expanded ? (
                            <HiChevronDown aria-hidden="true" className="notes-tree-chevron-icon" />
                          ) : (
                            <HiChevronRight aria-hidden="true" className="notes-tree-chevron-icon" />
                          )}
                        </button>
                        <button
                          type="button"
                          className={
                            "notes-tree-folder-label" +
                            (isActiveFolder ? " notes-tree-folder-label-active" : "")
                          }
                          onClick={() => openFolderCategory(fname)}
                        >
                          {fname}
                        </button>
                      </div>
                      {expanded && files.length > 0 && (
                        <ul className="notes-tree-files" role="group">
                          {files.map((item) => {
                            const isActivePdf =
                              isActiveFolder && activeItem?.storagePath === item.storagePath;
                            return (
                              <li key={item.storagePath} className="notes-tree-file">
                                <button
                                  type="button"
                                  className={
                                    "notes-tree-file-btn" +
                                    (isActivePdf ? " notes-tree-file-btn-active" : "")
                                  }
                                  onClick={() => selectPdf(fname, item)}
                                >
                                  {item.title}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </aside>
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
