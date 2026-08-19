export const MONSOON_MATCH_ALBUM_NAME = "Monsoon Match";
export const MONSOON_MATCH_FOLDER = "monsoon match";
export const MONSOON_MATCH_R2_FOLDER = "monsoon-match";

export const MONSOON_MATCH_R2_PHOTOS = [
  "IMG20260620103330.jpg",
  "IMG20260620103332.jpg",
  "IMG20260620103358.jpg",
  "IMG20260620103404.jpg",
  "IMG20260620103539.jpg",
  "IMG20260620103546.jpg",
  "IMG20260620121255.jpg",
  "IMG_6704.JPG",
];

export const MONSOON_MATCH_R2_VIDEOS = [
  "Copy of VID20260620135919.mp4",
  "IMG_6699.mp4",
  "IMG_6730.mp4",
  "IMG_6806.mp4",
  "IMG_6856.mp4",
  "IMG_6866.mp4",
  "IMG_6880.mp4",
  "IMG_6881.mp4",
  "IMG_6882.mp4",
  "IMG_6883.mp4",
  "IMG_6884.mp4",
  "IMG_6910.mp4",
  "VID20260620140048.mp4",
  "VID20260620140236.mp4",
];

export const MONSOON_MATCH_R2_FILES = [...MONSOON_MATCH_R2_PHOTOS, ...MONSOON_MATCH_R2_VIDEOS];

export const MONSOON_MATCH_CARD_IMAGES = MONSOON_MATCH_R2_PHOTOS.map(
  (file) =>
    `https://media.forcesportsunited.com/${MONSOON_MATCH_R2_FOLDER}/${encodeURIComponent(file)}`,
);

// Keep local public paths as a fallback for `npm run dev` without R2.
const LOCAL_FOLDER = "/monsoon%20match";
export const MONSOON_MATCH_PHOTOS = MONSOON_MATCH_CARD_IMAGES;
export const MONSOON_MATCH_FILES = MONSOON_MATCH_R2_FILES.map(
  (file) => `${LOCAL_FOLDER}/${encodeURIComponent(file)}`,
);
