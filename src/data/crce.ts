export const CRCE_ALBUM_NAME = "Fr. CRCE Alumni Sports League";
export const CRCE_R2_FOLDER = "ASL Fr.CRCE_";

export const CRCE_CAROUSEL_FILES = [
  "IMG20260606163441.jpg",
  "IMG_1460.JPG",
  "DSC_0358.JPG",
  "IMG_1492.JPG",
];

export const CRCE_PHOTO_FILES = [
  ...CRCE_CAROUSEL_FILES,
  "DSC_0354.JPG",
  "DSC_0397.JPG",
  "DSC_0414.JPG",
  "DSC_0427.JPG",
  "DSC_0471.JPG",
  "DSC_0477.JPG",
  "DSC_0496.JPG",
  "DSC_0521.JPG",
  "DSC_0526.JPG",
  "DSC_0533.JPG",
  "DSC_0539.JPG",
  "DSC_0613.JPG",
  "DSC_0614.JPG",
  "DSC_0650.JPG",
  "DSC_0653.JPG",
  "IMG_1461.JPG",
  "IMG_1477.JPG",
  "IMG_1483.JPG",
  "IMG_1496.JPG",
  "IMG_1504.JPG",
  "IMG_1510.JPG",
  "IMG_1521.JPG",
  "IMG_1543.JPG",
  "IMG_1545.JPG",
  "IMG_1548.JPG",
  "IMG_1577.JPG",
  "IMG_1609.JPG",
  "IMG_1610.JPG",
  "IMG_1784.JPG",
  "IMG_6681.jpg",
  "IMG20260606194846.jpg",
  "IMG20260606210201.jpg",
  "IMG20260606222548.jpg",
];

export const CRCE_VIDEO_FILES = [
  "Img 6628-h264.mp4",
  "Img 6660-h264.mp4",
  "Img 6662-h264.mp4",
  "Img 6887-h264.mp4",
  "Img 6897-h264.mp4",
  "Img 6917-h264.mp4",
  "Img 6921-h264.mp4",
  "Img 6925-h264.mp4",
  "VID20260606224618-h264.mp4",
  "VID20260606224906-h264.mp4",
  "VID20260606230915-h264.mp4",
  "VID20260606232715-h264.mp4",
  "VID20260606232740-h264.mp4",
  "VIDEO-h264.mp4",
];

export const CRCE_R2_FILES = [...CRCE_PHOTO_FILES, ...CRCE_VIDEO_FILES];

export const CRCE_PHOTOS = CRCE_PHOTO_FILES.map(
  (file) =>
    `https://media.forcesportsunited.com/${encodeURIComponent(CRCE_R2_FOLDER)}/${encodeURIComponent(file)}`,
);

export const CRCE_VIDEOS = CRCE_VIDEO_FILES.map(
  (file) =>
    `https://media.forcesportsunited.com/${encodeURIComponent(CRCE_R2_FOLDER)}/${encodeURIComponent(file)}`,
);

export const CRCE_CARD_IMAGES = CRCE_CAROUSEL_FILES.map(
  (file) =>
    `https://media.forcesportsunited.com/${encodeURIComponent(CRCE_R2_FOLDER)}/${encodeURIComponent(file)}`,
);
