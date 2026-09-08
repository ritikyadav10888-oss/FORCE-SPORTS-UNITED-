export const WET_WICKET_ALBUM_NAME = "Wet Wicket";
export const WET_WICKET_FOLDER = "wet wicket/photos";
export const WET_WICKET_R2_FOLDER = "wet-wicket";

export const WET_WICKET_CAROUSEL_FILES = [
  "IMG_0263.JPG",
  "IMG_0375.JPG",
  "IMG_0405.JPG",
  "IMG_0410.JPG",
  "IMG_0413.JPG",
  "IMG_0357.JPG",
  "IMG_0360.JPG",
];

export const WET_WICKET_PHOTO_FILES = [
  ...WET_WICKET_CAROUSEL_FILES,
  "IMG_0269.JPG",
  "IMG_0270.JPG",
  "IMG_0271.JPG",
  "IMG_0272.JPG",
  "IMG_0273.JPG",
  "IMG_0274.JPG",
  "IMG_0275.JPG",
  "IMG_0276.JPG",
  "IMG_0277.JPG",
  "IMG_0285.JPG",
  "IMG_0286.JPG",
  "IMG_0287.JPG",
  "IMG_0288.JPG",
  "IMG_0289.JPG",
  "IMG_0290.JPG",
  "IMG_0293.JPG",
  "IMG_0294.JPG",
  "IMG_0295.JPG",
  "IMG_0296.JPG",
  "IMG_0298.JPG",
  "IMG_0354.JPG",
  "IMG_0397.JPG",
];

export const WET_WICKET_VIDEO_FILES = [
  "match 5 day 2 highlight - Camera1 - [20-20-26] [20-20-31].mp4",
  "omkar vvs mothya - 4 - Camera1 - [23-14-09] [23-14-14] (2).mp4",
  "semi 1 - Camera1 - [21-13-43] [21-13-48] (1).mp4",
  "shot 2222 - Camera1 - [20-23-40] [20-23-50] (1).mp4",
];

export const WET_WICKET_R2_FILES = [...WET_WICKET_PHOTO_FILES, ...WET_WICKET_VIDEO_FILES];

export const WET_WICKET_PHOTOS = WET_WICKET_PHOTO_FILES.map(
  (file) => `https://media.forcesportsunited.com/${WET_WICKET_R2_FOLDER}/${encodeURIComponent(file)}`,
);

export const WET_WICKET_VIDEOS = WET_WICKET_VIDEO_FILES.map(
  (file) => `https://media.forcesportsunited.com/${WET_WICKET_R2_FOLDER}/${encodeURIComponent(file)}`,
);

export const WET_WICKET_CARD_IMAGES = WET_WICKET_CAROUSEL_FILES.map(
  (file) => `https://media.forcesportsunited.com/${WET_WICKET_R2_FOLDER}/${encodeURIComponent(file)}`,
);
