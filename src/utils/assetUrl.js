const BASE = import.meta.env.BASE_URL || "/";
export const assetUrl = (path) => (path ? BASE + path.replace(/^\//, "") : "");
