export const ASSL_ALBUM_NAME = "ASSL";
export const ASSL_R2_FOLDER = "assl";

export const ASSL_CAROUSEL_FILES = [
  "8e3536d9-fc01-4878-ad97-49fb0bc818f5.jpg",
  "e0f87341-dfdb-45b8-989b-83cd2798e667.jpg",
  "IMG-20240317-WA0012.jpg",
  "IMG-20240318-WA0078.jpg",
  "WhatsApp Image 2024-03-18 at 1.52.49 PM.jpeg",
];

export const ASSL_PHOTO_FILES = [
  ...ASSL_CAROUSEL_FILES,
  "0310346d-382b-4f50-84ee-79cc7b14400c.jpg",
  "19b6cfcc-c28e-4d0e-8078-7fd8186f3225.jpg",
  "6654b1b5-4045-407b-9b4f-e5fbe2bfd1c7.jpg",
  "77a340c5-1797-4dd5-9373-515a69fe520a.jpg",
  "8dfc3a9b-21a2-4302-87d9-3dd104aa1601.jpg",
  "a88bdf6d-69ee-4453-a0a9-ba28d68d250b.jpg",
  "af2f3128-f09b-473d-b155-977f4a771f3e.jpg",
  "b5a7c946-a09c-4863-bcb8-6913a7161129.jpg",
  "Batsman.jpeg",
  "bfa372d4-dbf1-404b-9766-751e6e90245c.jpg",
  "Bowler.jpeg",
  "edb9aece-41c1-4a75-bae7-2caca00510f1.jpg",
  "f9a694bc-e6ff-4087-bee7-1d47189dcb24.jpg",
  "IMG_8808 (1).JPG",
  "IMG_8813.JPG",
  "IMG_8834.JPG",
  "IMG_8837.JPG",
  "IMG_8844.JPG",
  "IMG_8846.JPG",
  "IMG_8848.JPG",
  "IMG_8852.JPG",
  "IMG_8855.JPG",
  "IMG_8865.JPG",
  "IMG-20240317-WA0118.jpg",
  "IMG-20240318-WA0023.jpg",
  "IMG-20240318-WA0059.jpg",
  "IMG-20240318-WA0060.jpg",
  "IMG-20240318-WA0061.jpg",
  "IMG-20240318-WA0075.jpg",
  "IMG-20240318-WA0076.jpg",
  "IMG20240317164448.jpg",
  "IMG20240317165031.jpg",
  "Man of the series .jpeg",
  "WhatsApp Image 2024-03-17 at 10.17.01 AM (1).jpeg",
  "WhatsApp Image 2024-03-17 at 7.10.32 AM (1).jpeg",
  "WhatsApp Image 2024-03-17 at 7.11.36 AM.jpeg",
  "WhatsApp Image 2024-03-18 at 1.30.02 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 1.30.03 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 1.30.05 PM (1).jpeg",
  "WhatsApp Image 2024-03-18 at 1.52.50 PM (1).jpeg",
  "WhatsApp Image 2024-03-18 at 1.52.50 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 1.52.51 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 1.52.52 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 11.43.47 AM.jpeg",
  "WhatsApp Image 2024-03-18 at 12.53.59 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 12.54.01 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 12.54.02 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 12.54.10 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 5.30.21 PM.jpeg",
  "WhatsApp Image 2024-03-18 at 5.30.24 PM.jpeg",
];

export const ASSL_VIDEO_FILES = [
  "ASSL Reel - Final0.mp4",
  "VID-20240317-WA0027.mp4",
  "VID-20240317-WA0028.mp4",
  "VID-20240317-WA0119.mp4",
  "VID-20240317-WA0141.mp4",
  "VID-20240317-WA0142.mp4",
];

export const ASSL_R2_FILES = [...ASSL_PHOTO_FILES, ...ASSL_VIDEO_FILES];

export const ASSL_PHOTOS = ASSL_PHOTO_FILES.map(
  (file) => `https://media.forcesportsunited.com/${ASSL_R2_FOLDER}/${encodeURIComponent(file)}`,
);

export const ASSL_VIDEOS = ASSL_VIDEO_FILES.map(
  (file) => `https://media.forcesportsunited.com/${ASSL_R2_FOLDER}/${encodeURIComponent(file)}`,
);

export const ASSL_CARD_IMAGES = ASSL_CAROUSEL_FILES.map(
  (file) => `https://media.forcesportsunited.com/${ASSL_R2_FOLDER}/${encodeURIComponent(file)}`,
);
