import { useState, useEffect } from "react";
import { FOLDER_TYPES, FOLDER_SLUGS } from "../constants/index.js";
import { supabase, hasConfig, NOTES_BUCKET } from "../supabase.js";

/**
 * Fetches file lists from Supabase Storage folder-wise for a subject.
 * Path structure (must match Storage): Notes / {categoryId} / {subjectId} / {folderSlug} /
 * Example: Notes / plaksha-university / discrete-maths / past-papers /
 * Returns { folders: { "Class Notes": [{ title, storagePath }], ... }, loading, error }
 */
export function useSubjectFiles(categoryId, subjectId) {
  const [filesByFolder, setFilesByFolder] = useState(() =>
    Object.fromEntries(FOLDER_TYPES.map((name) => [name, []]))
  );
  const [loading, setLoading] = useState(!!(hasConfig && categoryId && subjectId));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!hasConfig || !supabase || !categoryId || !subjectId) {
      setLoading(false);
      return;
    }

    const prefix = `${categoryId}/${subjectId}`;
    const next = Object.fromEntries(FOLDER_TYPES.map((name) => [name, []]));

    const promises = FOLDER_TYPES.map((folderName) => {
      const slug = FOLDER_SLUGS[folderName];
      const path = `${prefix}/${slug}`;
      return supabase.storage
        .from(NOTES_BUCKET)
        .list(path, { limit: 500 })
        .then(({ data, error: err }) => ({ folderName, data: data || [], err }));
    });

    Promise.all(promises)
      .then((results) => {
        results.forEach(({ folderName, data, err }) => {
          if (err) {
            if (err.message?.includes("not found") || err.message?.includes("404")) {
              next[folderName] = [];
            } else {
              setError(err);
            }
            return;
          }
          (data || []).forEach((item) => {
            if (!item.name || item.name === ".emptyFolderPlaceholder") return;
            if (!/\.pdf$/i.test(item.name)) return;
            const slug = FOLDER_SLUGS[folderName];
            const storagePath = `${prefix}/${slug}/${item.name}`;
            const title = item.name.replace(/\.pdf$/i, "").replace(/\s*\(\d+\)\s*$/, "").trim() || item.name;
            next[folderName].push({ title, storagePath });
          });
        });
        setFilesByFolder(next);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [categoryId, subjectId]);

  return { folders: filesByFolder, loading, error };
}
