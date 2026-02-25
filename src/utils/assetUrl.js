const BASE = import.meta.env.BASE_URL || "/";
export const assetUrl = (path) => (path ? BASE + path.replace(/^\//, "") : "");

/** If url is a Google Drive file link, return the embeddable preview URL; else return null */
export function getGoogleDrivePreviewUrl(url) {
  if (!url || typeof url !== "string" || !url.includes("drive.google.com")) return null;
  const fileIdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (!fileIdMatch) return null;
  return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
}
