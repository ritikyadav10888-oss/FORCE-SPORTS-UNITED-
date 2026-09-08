"use client";

import { r2PublicUrl } from "@/lib/r2";
import { EventImageCarousel } from "@/components/EventImageCarousel";

export function R2EventCarousel({ folder, files }: { folder: string; files?: string[] }) {
  const photos = (files || [])
    .filter((file) => !/\.(mp4|mov|webm)$/i.test(file))
    .slice(0, 6)
    .map((file) => r2PublicUrl(`${folder}/${file}`));

  if (photos.length === 0) {
    return <div className="absolute inset-0 bg-[#1c1311]" />;
  }

  return <EventImageCarousel images={photos} alt={folder} />;
}
