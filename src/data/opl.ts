export const OPL_ALBUM_NAME = "Octacrest Premier League Monsoon Edition -1";
export const OPL_R2_FOLDER = "opl";
export const OPL_LOCAL_FOLDER = "opl";

export const OPL_R2_AUCTION_FILES = [
  "auctions/IMG20260801123913.jpg",
  "auctions/IMG20260801135701_01.jpg",
  "auctions/IMG20260801135703.jpg",
  "auctions/IMG20260801140337.jpg",
  "auctions/IMG20260801153216.jpg",
  "auctions/IMG20260801153216_01.jpg",
  "auctions/IMG20260801163631.jpg",
  "auctions/IMG20260801164227.jpg",
  "auctions/IMG20260801164346.jpg",
  "auctions/IMG20260801164450.jpg",
  "auctions/IMG20260801164519.jpg",
  "auctions/IMG20260801164611.jpg",
  "auctions/IMG20260801164639_01.jpg",
  "auctions/IMG20260801170039.jpg",
  "auctions/IMG20260801171910.jpg",
  "auctions/IMG20260801171919.jpg",
  "auctions/IMG20260801172726_01.jpg",
  "auctions/IMG20260801175818.jpg",
  "auctions/IMG20260801175942.jpg",
  "auctions/IMG20260815113211.jpg",
  "auctions/IMG20260815123913.jpg",
  "auctions/IMG20260815124845_01.jpg",
  "auctions/IMG20260815130236.jpg",
  "auctions/IMG20260815170325.jpg",
  "auctions/IMG20260815192844.jpg",
  "auctions/IMG20260815192916.jpg",
  "auctions/IMG20260815203222.jpg",
  "auctions/IMG20260815213343.jpg",
  "auctions/IMG20260816104249.jpg",
  "auctions/IMG20260816115100.jpg",
  "auctions/IMG20260816115157.jpg",
  "auctions/IMG20260816155353_01.jpg",
  "auctions/IMG20260816155422.jpg",
  "auctions/IMG20260816155455.jpg",
  "auctions/IMG20260816155526.jpg",
  "auctions/IMG20260816155620.jpg",
  "auctions/IMG20260816155624.jpg",
  "auctions/IMG20260816155638.jpg",
  "auctions/IMG20260816160512_BURST003.jpg",
  "auctions/IMG20260816160515_BURST004.jpg",
  "auctions/IMG20260816160516.jpg",
  "auctions/IMG20260816181006.jpg",
  "auctions/IMG20260816181019_01.jpg",
  "auctions/IMG20260816181201.jpg",
  "auctions/IMG20260816195101_01.jpg",
  "auctions/IMG20260816195106.jpg",
  "auctions/IMG20260816200129.jpg",
  "auctions/IMG20260816200154.jpg",
  "auctions/IMG20260816200252.jpg",
  "auctions/IMG20260816203652.jpg",
];

export const OPL_R2_VIDEO_FILES = [
  "football - 1 - Camera1 - [16-11-26] [16-11-36].mp4",
  "football - 1 - Camera1 - [16-37-33] [16-37-43].mp4",
  "football - 1 - Camera1 - [19-10-15] [19-10-23].mp4",
  "MATCH 1 - 1 - Camera12 - - [13-46-29] [13-46-35].mp4",
  "MATCH 1 - 1 - Camera12 - - [14-16-00] [14-16-06].mp4",
  "MATCH 2 - 1 - Camera2 - [15-41-30] [15-41-43].mp4",
  "VID_20260809_141152600.mp4",
  "VID_20260809_174322224.mp4",
  "VID20260816154842.mp4",
  "VID20260816162938.mp4",
  "VID20260816171439.mp4",
  "VID20260816171526.mp4",
  "VID20260816183947.mp4",
  "VID20260816195541.mp4",
  "VID20260816203140.mp4",
  "VID20260816203358.mp4",
  "VID20260816203537.mp4",
];

export const OPL_R2_FILES = [...OPL_R2_AUCTION_FILES, ...OPL_R2_VIDEO_FILES];

export const OPL_AUCTION_PHOTOS = OPL_R2_AUCTION_FILES.map(
  (file) => `/opl/${file}`,
);

const OPL_CARD_FILES = [
  "auctions/IMG20260801140337.jpg",
  "auctions/IMG20260815113211.jpg",
  "auctions/IMG20260816155526.jpg",
  "auctions/IMG20260816195106.jpg",
];

export const OPL_CARD_IMAGES = OPL_CARD_FILES.map(
  (file) => `https://media.forcesportsunited.com/opl/${file.split("/").map(encodeURIComponent).join("/")}`,
);
