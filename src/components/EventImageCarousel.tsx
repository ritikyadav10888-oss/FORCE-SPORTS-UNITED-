"use client";

import { useEffect, useRef, useState } from "react";
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
  const slides = images;
  const firstSrc = slides[0] ? srcOf(slides[0]) : "";
  const apiRef = useRef<CarouselApi>(null);

  useEffect(() => {
    startSharedCarouselSync();
    const onTick = (event: Event) => {
      const api = apiRef.current;
      if (!api || slides.length < 2) return;
      const next = (event as CustomEvent<number>).detail % slides.length;
      api.scrollTo(next);
    };
    window.addEventListener(SYNC_EVENT, onTick);
    return () => window.removeEventListener(SYNC_EVENT, onTick);
  }, [slides.length]);

  if (!firstSrc) return null;

  return (
    <div className="absolute inset-0">
      <Carousel
        className="absolute inset-0 h-full w-full"
        opts={{ loop: slides.length > 1, duration: 32, startIndex: 0 }}
        setApi={(api) => {
          apiRef.current = api;
        }}
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((imgSrc, idx) => (
            <CarouselItem key={srcOf(imgSrc)} className="relative h-full min-h-full pl-0">
              <img
                src={srcOf(imgSrc)}
                alt={`${alt} slide ${idx + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "low"}
                decoding="async"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
