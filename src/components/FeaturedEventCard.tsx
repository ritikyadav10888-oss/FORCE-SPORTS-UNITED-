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
      className={`@container bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group flex flex-col min-w-0 ${event.albumName ? 'cursor-pointer' : ''} ${className}`}
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
            <Trophy size={40} className="text-primary" />
          </div>
        )}
      </div>
      <div className="p-[clamp(0.75rem,4.2cqi,1.5rem)] flex-1 flex flex-col min-w-0">
        {event.category && (
          <span className="text-primary font-heading uppercase tracking-[0.16em] text-[clamp(0.6rem,2.8cqi,0.75rem)] mb-[clamp(0.25rem,1.2cqi,0.5rem)]">
            {event.category}
          </span>
        )}
        <h3 className={`font-heading font-bold mb-[clamp(0.6rem,2.4cqi,1rem)] uppercase leading-tight text-[clamp(0.85rem,5cqi,1.25rem)] ${event.titleColor || ''}`}>
          {event.title}
        </h3>
        
        {event.stats && event.stats.length > 0 ? (
          <div className="grid grid-cols-3 gap-[clamp(0.25rem,1.6cqi,0.5rem)] mb-[clamp(0.6rem,2.4cqi,1rem)]">
            {event.stats.slice(0, 3).map((stat: any, i: number) => {
              const value = String(stat.value);
              const valueSize = `clamp(0.62rem, ${Math.max(0.62, 4.6 / value.length)}rem, 1rem)`;

              return (
                <div
                  key={i}
                  className="min-w-0 bg-white/5 rounded-md px-1.5 py-2.5 text-center flex flex-col justify-center"
                >
                  <span
                    className="block w-full text-primary font-bold leading-tight"
                    style={{ fontSize: valueSize }}
                  >
                    {value}
                  </span>
                  <span className="block w-full text-muted-foreground leading-tight mt-0.5 text-[0.65rem]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-[clamp(0.4rem,1.8cqi,0.75rem)] mb-[clamp(0.6rem,2.4cqi,1rem)]">
            {event.teams && <span className="text-[clamp(0.6rem,2.6cqi,0.75rem)] bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.teams}</span>}
            {event.players && <span className="text-[clamp(0.6rem,2.6cqi,0.75rem)] bg-[#241a18] px-3 py-1.5 rounded text-primary">{event.players}</span>}
          </div>
        )}
        
        <p className="text-muted-foreground text-[clamp(0.7rem,3.2cqi,0.875rem)] leading-relaxed flex-1 mt-[clamp(0.25rem,1.2cqi,0.5rem)]">
          {event.desc}
        </p>
      </div>
    </div>
  );
}
