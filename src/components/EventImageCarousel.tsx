"use client";

import { useEffect, useRef } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const SYNC_EVENT = "force-carousel-sync";
const SYNC_MS = 4000;
let syncStarted = false;
let syncIndex = 0;

function startSharedCarouselSync() {
  if (syncStarted || typeof window === "undefined") return;
  syncStarted = true;
  window.setInterval(() => {
    syncIndex += 1;
    window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: syncIndex }));
  }, SYNC_MS);
}

function srcOf(img: string | { src: string }) {
  return typeof img === "string" ? img : img.src;
}

export function EventImageCarousel({
  images,
  alt,
}: {
  images: Array<string | { src: string }>;
  alt: string;
}) {
  const slides = images.map(srcOf).filter(Boolean).slice(0, 6);
  const apiRef = useRef<CarouselApi>(null);

  useEffect(() => {
    startSharedCarouselSync();
    const onTick = (event: Event) => {
      const api = apiRef.current;
      if (!api || slides.length < 2) return;
      api.scrollTo((event as CustomEvent<number>).detail % slides.length);
    };
    window.addEventListener(SYNC_EVENT, onTick);
    return () => window.removeEventListener(SYNC_EVENT, onTick);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <Carousel
      className="absolute inset-0 h-full w-full"
      opts={{ loop: slides.length > 1, duration: 28, align: "start" }}
      setApi={(api) => {
        apiRef.current = api;
      }}
    >
      <CarouselContent className="ml-0 h-full">
        {slides.map((src, idx) => (
          <CarouselItem key={src} className="h-full min-h-0 basis-full pl-0">
            <img
              src={src}
              alt={`${alt} slide ${idx + 1}`}
              className="h-full w-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "low"}
              decoding="async"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
