export const LPL_ALBUM_NAME = "LPL";
export const LPL_R2_FOLDER = "lpl";

export const LPL_PHOTO_FILES = [
  "IMG-20260824-WA0018.jpg",
  "IMG-20260824-WA0021.jpg",
  "IMG-20260824-WA0025.jpg",
  "IMG-20260824-WA0030.jpg",
  "IMG-20260824-WA0033.jpg",
  "IMG-20260824-WA0036.jpg",
  "IMG-20260824-WA0037.jpg",
  "IMG20260823080349.jpg",
  "IMG20260823080742.jpg",
  "IMG20260823080748.jpg",
  "IMG20260823092644.jpg",
  "IMG20260823112935.jpg",
  "IMG20260823113018.jpg",
  "IMG20260823121829.jpg",
  "IMG20260823121832.jpg",
  "IMG20260823121842.jpg",
  "IMG20260823165746.jpg",
];

export const LPL_R2_FILES = LPL_PHOTO_FILES;

export const LPL_PHOTOS = LPL_PHOTO_FILES.map(
  (file) => `https://media.forcesportsunited.com/${LPL_R2_FOLDER}/${encodeURIComponent(file)}?v=2`,
);

export const LPL_CARD_IMAGES = LPL_PHOTOS.slice(0, 4);
