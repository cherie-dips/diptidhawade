import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const hasConfig = !!(supabaseUrl && supabaseAnonKey);

let supabase = null;
if (hasConfig) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase, hasConfig };
export const NOTES_BUCKET = "Notes";
export const NOTE_ITEMS_TABLE = "note_items";
