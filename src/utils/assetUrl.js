const BASE = import.meta.env.BASE_URL || "/";
export const assetUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return BASE + path.replace(/^\//, "");
};
