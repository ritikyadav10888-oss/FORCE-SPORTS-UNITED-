import type { MetadataRoute } from "next";

const SITE_URL = "https://forcesportsunited.com";

const routes = [
  "",
  "/about",
  "/services",
  "/events",
  "/media",
  "/blog",
  "/contact",
  "/quote",
  "/community",
  "/corporate",
  "/government",
  "/partner",
  "/careers",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
