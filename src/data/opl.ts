export const OPL_ALBUM_NAME = "Octacrest Premier League Monsoon Edition -1";
export const OPL_R2_FOLDER = "opl";
export const OPL_LOCAL_FOLDER = "opl";

export const OPL_YOUTUBE_LINKS = [
  { title: "Auction", url: "https://www.youtube.com/live/niKCWdXfKsY" },
  { title: "Day 1", url: "https://www.youtube.com/live/158IqYorEMA" },
  { title: "Day 2", url: "https://www.youtube.com/live/x2ubCdFuQo0" },
  { title: "Final Day", url: "https://www.youtube.com/live/xkdqwNT4XEY" },
];

// Event-card carousel uses auction photos only.
// The media album lists everything under the R2 `opl/` prefix.

export const OPL_AUCTION_PHOTOS = [
  "/opl/auctions/IMG20260801123913.jpg",
  "/opl/auctions/IMG20260801135701_01.jpg",
  "/opl/auctions/IMG20260801135703.jpg",
  "/opl/auctions/IMG20260801140337.jpg",
  "/opl/auctions/IMG20260801153216.jpg",
  "/opl/auctions/IMG20260801153216_01.jpg",
  "/opl/auctions/IMG20260801163631.jpg",
  "/opl/auctions/IMG20260801164227.jpg",
  "/opl/auctions/IMG20260801164346.jpg",
  "/opl/auctions/IMG20260801164450.jpg",
  "/opl/auctions/IMG20260801164519.jpg",
  "/opl/auctions/IMG20260801164611.jpg",
  "/opl/auctions/IMG20260801164639_01.jpg",
  "/opl/auctions/IMG20260801170039.jpg",
  "/opl/auctions/IMG20260801171910.jpg",
  "/opl/auctions/IMG20260801171919.jpg",
  "/opl/auctions/IMG20260801172726_01.jpg",
  "/opl/auctions/IMG20260801175818.jpg",
  "/opl/auctions/IMG20260801175942.jpg",
];

export const OPL_R2_AUCTION_FILES = OPL_AUCTION_PHOTOS.map((path) => path.replace(/^\/opl\//, ""));

export const OPL_CARD_IMAGES = OPL_R2_AUCTION_FILES.map(
  (file) => `https://media.forcesportsunited.com/opl/${file.split("/").map(encodeURIComponent).join("/")}`,
);
