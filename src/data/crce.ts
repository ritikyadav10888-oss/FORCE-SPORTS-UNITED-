export const CRCE_ALBUM_NAME = "Fr. CRCE Alumni Sports League";
export const CRCE_R2_FOLDER = "ASL Fr.CRCE_";

export const CRCE_R2_FILES = [
  "IMG20260606163441.jpg",
  "IMG_1460.JPG",
  "DSC_0358.JPG",
  "IMG_1492.JPG",
  "IMG_1496.JPG",
  "IMG_1504.JPG",
  "IMG20260606222548.jpg",
];

export const CRCE_CARD_IMAGES = CRCE_R2_FILES.map(
  (file) =>
    `https://media.forcesportsunited.com/${encodeURIComponent(CRCE_R2_FOLDER)}/${encodeURIComponent(file)}`,
);
