import { getYoutubeEmbedSrc, getYoutubeThumbnail } from "./youtubeEmbed.js";

/** True when the project's main media is a video (a file or YouTube): its tile plays it on click. */
export const hasVideo = (project) =>
  Boolean(project.texture || getYoutubeEmbedSrc(project.spotlight));

/** Image shown on the project's tile: `thumbnail`, else the `spotlight` image, else the YouTube cover. */
export function cardImage(project) {
  if (project.thumbnail) return project.thumbnail;
  if (project.spotlight && !getYoutubeEmbedSrc(project.spotlight)) return project.spotlight;
  return getYoutubeThumbnail(project.spotlight);
}
