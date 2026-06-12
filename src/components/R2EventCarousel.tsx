"use client";
import { useEffect, useState } from "react";
import { listFilesInFolder, getFileUrlFromR2 } from "@/lib/r2";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function R2EventCarousel({ folder, files }: { folder: string; files?: string[] }) {
  const [media, setMedia] = useState<{ url: string; isVideo: boolean }[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMedia() {
      try {
        let selectedKeys: string[] = [];
        if (files && files.length > 0) {
          selectedKeys = files.map(f => `${folder}/${f}`);
        } else {
          const keys = await listFilesInFolder(folder);
          selectedKeys = keys.slice(0, 6);
        }
        
        const urls = await Promise.all(
          selectedKeys.map(async (key) => ({
            url: await getFileUrlFromR2(key),
            isVideo: key.toLowerCase().endsWith(".mp4") || key.toLowerCase().endsWith(".mov")
          }))
        );
        
        setMedia(urls);
      } catch (err: any) {
        console.error("Failed to load R2 media for", folder, err);
        setErrorMsg(err?.message || "Unknown error occurred connecting to R2");
      }
    }
    fetchMedia();
  }, [folder]);

  if (errorMsg) {
    return (
      <div className="w-full h-full bg-red-950/20 flex items-center justify-center p-4 text-center">
        <span className="text-red-500 font-bold">R2 Error: {errorMsg}</span>
      </div>
    );
  }

  if (media.length === 0) {
    return (
      <div className="w-full h-full bg-[#1c1311] flex items-center justify-center animate-pulse">
        <span className="text-primary/50 text-sm tracking-widest uppercase">Loading assets...</span>
      </div>
    );
  }

  return (
    <Carousel 
      className="w-full h-full group/carousel" 
      plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
    >
      <CarouselContent className="h-full ml-0">
        {media.map((item, idx) => (
          <CarouselItem key={idx} className="relative h-full pl-0">
            {item.isVideo ? (
              <video 
                src={item.url} 
                controls 
                className="w-full h-full object-contain bg-black transition-transform duration-500" 
                preload="metadata"
                playsInline
              />
            ) : (
              <img 
                src={item.url} 
                alt={`${folder} slide ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500" 
                loading="lazy" 
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
