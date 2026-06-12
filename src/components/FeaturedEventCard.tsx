"use client";

import { useRouter } from "next/navigation";
import { Trophy } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { R2EventCarousel } from "@/components/R2EventCarousel";

interface FeaturedEventCardProps {
  event: any;
  className?: string;
}

export default function FeaturedEventCard({ event, className = "" }: FeaturedEventCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (event.albumName) {
      router.push(`/media?album=${encodeURIComponent(event.albumName)}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group flex flex-col ${event.albumName ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="overflow-hidden aspect-[4/3] w-full relative bg-[#1c1311]">
        {event.r2Folder ? (
          <R2EventCarousel folder={event.r2Folder} files={event.r2Files} />
        ) : event.hasImage && Array.isArray(event.image) ? (
          <Carousel
            className="w-full h-full group/carousel"
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          >
            <CarouselContent className="h-full ml-0">
              {event.image.map((imgSrc: any, idx: number) => (
                <CarouselItem key={idx} className="relative h-full pl-0">
                  <img src={imgSrc.src || imgSrc} alt={`${event.title} slide ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500" loading="lazy" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : event.hasImage && event.image ? (
          <img src={(event.image as any)?.src || event.image as string} alt={event.title} className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${(event as any).containImage ? "object-contain bg-white p-2" : "object-cover"}`} loading="lazy" width={800} height={600} />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1110] group-hover:scale-105 transition-transform duration-500">
            <Trophy size={40} className="text-primary mb-4" />
            <span className="font-heading text-xl font-bold tracking-widest text-primary uppercase">Upcoming</span>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        {event.category && (
          <span className="text-primary font-heading uppercase tracking-widest text-xs mb-2">{event.category}</span>
        )}
        <h3 className={`font-heading text-xl font-bold mb-4 uppercase ${event.titleColor || ''}`}>{event.title}</h3>
        
        {event.stats && event.stats.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {event.stats.slice(0, 3).map((stat: any, i: number) => (
              <div key={i} className="bg-white/5 rounded-md p-3 text-center flex flex-col justify-center">
                <span className="text-primary font-bold text-base">{stat.value}</span>
                <span className="text-muted-foreground text-xs mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-3 mb-4">
            {event.teams && <span className="text-xs bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.teams}</span>}
            {event.players && <span className="text-xs bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.players}</span>}
          </div>
        )}
        
        <p className="text-muted-foreground text-sm flex-1 mt-2">{event.desc}</p>
      </div>
    </div>
  );
}
