import { useState, useEffect, useMemo } from "react";
import { notesCategories, FOLDER_TYPES } from "../constants/index.js";
import { supabase, hasConfig, NOTE_ITEMS_TABLE } from "../supabase.js";

/**
 * Fetches note items from Supabase and merges them into the static categories/subjects.
 * Table row: { category_id, subject_id, folder_type, title, storage_path, order? }
 * Only PDFs from Storage (storage_path) are shown; no external links.
 */
export function useNotes() {
  const [dbItems, setDbItems] = useState([]);
  const [loading, setLoading] = useState(hasConfig);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!hasConfig || !supabase) {
      setLoading(false);
      return;
    }
    supabase
      .from(NOTE_ITEMS_TABLE)
      .select("*")
      .order("order", { ascending: true })
      .order("title")
      .then(({ data, error: err }) => {
        if (err) {
          setError(err);
          setDbItems([]);
        } else {
          setDbItems(data || []);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    if (!hasConfig || error) return notesCategories;

    const base = notesCategories.map((cat) => ({
      ...cat,
      subjects: cat.subjects.map((subj) => ({
        ...subj,
        folders: Object.fromEntries(
          FOLDER_TYPES.map((folderName) => [folderName, []])
        ),
      })),
    }));

    dbItems.forEach((row) => {
      const categoryId = row.category_id;
      const subjectId = row.subject_id;
      const folderType = row.folder_type;
      const cat = base.find((c) => c.id === categoryId);
      const subj = cat?.subjects.find((s) => s.id === subjectId);
      if (!subj || !FOLDER_TYPES.includes(folderType) || !row.storage_path) return;
      subj.folders[folderType].push({
        title: row.title,
        storagePath: row.storage_path,
      });
    });

    return base;
  }, [dbItems, error]);

  return { categories, loading, error };
}
