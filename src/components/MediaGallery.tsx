"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Loader2, Play } from "lucide-react";
import { listFilesInFolder, getFileUrlFromR2 } from "@/lib/r2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import mediaImg from "@/assets/media-production.jpg";
import { R2EventCarousel } from "@/components/R2EventCarousel";
import { OPL_ALBUM_NAME, OPL_R2_AUCTION_FILES, OPL_R2_FOLDER } from "@/data/opl";
import { CRCE_ALBUM_NAME, CRCE_R2_FILES, CRCE_R2_FOLDER } from "@/data/crce";
import { MONSOON_MATCH_ALBUM_NAME, MONSOON_MATCH_R2_FILES, MONSOON_MATCH_R2_FOLDER, MONSOON_MATCH_R2_PHOTOS } from "@/data/monsoon-match";

type YouTubeLink = { title: string; url: string };

type Album = {
  id: string;
  name: string;
  r2Folder?: string;
  carouselFiles?: string[];
  r2Files?: string[];
  localFiles?: string[];
  localFolder?: string;
  youtubeLinks: YouTubeLink[];
};

const ALBUMS: Album[] = [
  {
    id: "opl",
    name: OPL_ALBUM_NAME,
    r2Folder: OPL_R2_FOLDER,
    carouselFiles: OPL_R2_AUCTION_FILES,
    youtubeLinks: [] as YouTubeLink[],
  },
  { 
    id: "crce", 
    name: CRCE_ALBUM_NAME, 
    r2Folder: CRCE_R2_FOLDER,
    carouselFiles: CRCE_R2_FILES,
    youtubeLinks: [] as YouTubeLink[],
  },
  {
    id: "monsoon-match",
    name: MONSOON_MATCH_ALBUM_NAME,
    r2Folder: MONSOON_MATCH_R2_FOLDER,
    carouselFiles: MONSOON_MATCH_R2_PHOTOS,
    r2Files: MONSOON_MATCH_R2_FILES,
    youtubeLinks: [] as YouTubeLink[],
  },
  { 
    id: "gitanjali", 
    name: "Gitanjali Narnolia Cricket League 2026", 
    r2Folder: "Gitanjali Narnolia cricket leauge", 
    youtubeLinks: [] as YouTubeLink[],
  }
];

function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function AlbumCover({ folder, alt, specificFiles }: { folder: string; alt: string; specificFiles?: string[] }) {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchCover() {
      try {
        let imageKey: string | undefined;
        if (specificFiles && specificFiles.length > 0) {
          imageKey = specificFiles.map(f => `${folder}/${f}`).find(k => !k.toLowerCase().endsWith('.mp4') && !k.toLowerCase().endsWith('.mov'));
        } else {
          const keys = await listFilesInFolder(folder);
          imageKey = keys.find(k => !k.toLowerCase().endsWith('.mp4') && !k.toLowerCase().endsWith('.mov'));
        }
        if (imageKey && isMounted) {
          const url = await getFileUrlFromR2(imageKey);
          setCoverUrl(url);
        }
      } catch (err) {
        console.error("Failed to load cover for", folder, err);
      }
    }
    fetchCover();
    return () => { isMounted = false };
  }, [folder]);

  return (
    <img
      src={coverUrl || mediaImg.src}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${!coverUrl ? 'opacity-50' : ''}`}
      loading="lazy"
    />
  );
}

export default function MediaGallery() {
  const searchParams = useSearchParams();
  const initialAlbumName = searchParams.get("album");
  
  const [selectedAlbum, setSelectedAlbum] = useState<typeof ALBUMS[0] | null>(
    ALBUMS.find(a => a.name === initialAlbumName) || null
  );
  
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeLink[]>([]);
  const [playingYouTubeId, setPlayingYouTubeId] = useState<string | null>(null);
  const [isLoadingAssets, setIsLoadingAssets] = useState(false);
  const [visibleCount, setVisibleCount] = useState(24);
  const [visibleVideoCount, setVisibleVideoCount] = useState(6);

  useEffect(() => {
    if (initialAlbumName && !selectedAlbum) {
      const album = ALBUMS.find(a => a.name === initialAlbumName);
      if (album) setSelectedAlbum(album);
    }
  }, [initialAlbumName]);

  useEffect(() => {
    if (!selectedAlbum) return;
    
    let isMounted = true;
    
    async function fetchMedia() {
      setIsLoadingAssets(true);
      setVisibleCount(24);
      setVisibleVideoCount(6);
      try {
        let urls: string[] = [];

        if (selectedAlbum!.localFiles && selectedAlbum!.localFiles.length > 0) {
          urls = selectedAlbum!.localFiles;
        } else {
          let keys: string[] = [];
          if (selectedAlbum!.r2Files && selectedAlbum!.r2Files.length > 0) {
            keys = selectedAlbum!.r2Files.map((f) => `${selectedAlbum!.r2Folder}/${f}`);
          } else if (selectedAlbum!.r2Folder) {
            keys = await listFilesInFolder(selectedAlbum!.r2Folder);
          }

          if (!keys.length && selectedAlbum!.carouselFiles?.length && selectedAlbum!.r2Folder) {
            keys = selectedAlbum!.carouselFiles.map((f) => `${selectedAlbum!.r2Folder}/${f}`);
          }

          urls = await Promise.all(keys.map(key => getFileUrlFromR2(key)));
        }
        
        if (isMounted) {
          const vids: string[] = [];
          const imgs: string[] = [];
          
          urls.forEach(url => {
            const lowerUrl = url.toLowerCase();
            if (lowerUrl.includes(".mp4") || lowerUrl.includes(".mov") || lowerUrl.includes(".webm")) {
              vids.push(url);
            } else {
              imgs.push(url);
            }
          });
          
          setVideos(vids);
          setImages(imgs);
          const links = selectedAlbum.youtubeLinks || [];
          setYoutubeVideos(links);
          setPlayingYouTubeId(links.map((item) => getYouTubeId(item.url)).find(Boolean) || null);
        }
      } catch (err) {
        console.error("Failed to fetch album media:", err);
        if (isMounted) {
          const links = selectedAlbum.youtubeLinks || [];
          setYoutubeVideos(links);
          setPlayingYouTubeId(links.map((item) => getYouTubeId(item.url)).find(Boolean) || null);
          if (selectedAlbum!.r2Folder && selectedAlbum!.carouselFiles?.length) {
            const fallbackUrls = await Promise.all(
              selectedAlbum!.carouselFiles.map((f) => getFileUrlFromR2(`${selectedAlbum!.r2Folder}/${f}`))
            );
            setImages(fallbackUrls.filter((url) => !url.toLowerCase().match(/\.(mp4|mov|webm)$/)));
            setVideos(fallbackUrls.filter((url) => url.toLowerCase().match(/\.(mp4|mov|webm)$/)));
          } else {
            const fallback = selectedAlbum!.localFiles || [];
            setImages(fallback.filter((url) => !url.toLowerCase().match(/\.(mp4|mov|webm)$/)));
            setVideos(fallback.filter((url) => url.toLowerCase().match(/\.(mp4|mov|webm)$/)));
          }
        }
      } finally {
        if (isMounted) setIsLoadingAssets(false);
      }
    }
    
    fetchMedia();
    return () => { isMounted = false };
  }, [selectedAlbum]);

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 10, images.length));
  const loadMoreVideos = () => setVisibleVideoCount(prev => Math.min(prev + 6, videos.length));

  if (!selectedAlbum) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
        {ALBUMS.map(album => (
          <div
            key={album.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors cursor-pointer group flex flex-col h-full"
            onClick={() => setSelectedAlbum(album)}
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative pointer-events-none">
              {album.localFiles?.length ? (
                <Carousel
                  className="w-full h-full"
                  plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
                >
                  <CarouselContent className="h-full ml-0">
                    {album.localFiles
                      .filter((src) => !src.toLowerCase().match(/\.(mp4|mov|webm)$/))
                      .slice(0, 6)
                      .map((src, idx) => (
                      <CarouselItem key={idx} className="relative h-full pl-0">
                        <img
                          src={src}
                          alt={`${album.name} slide ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : album.r2Folder ? (
                <R2EventCarousel folder={album.r2Folder} files={album.carouselFiles} />
              ) : (
                <img src={mediaImg.src} alt={album.name} className="w-full h-full object-cover" />
              )}
            </div>
            <div className="p-5 text-center flex flex-col items-center flex-1">
              <h3 className="font-heading text-xl font-bold mb-4">{album.name}</h3>
              <span className="bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded font-heading uppercase text-xs tracking-wider hover:opacity-90 transition-opacity mt-auto">
                View Album
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const handleSingleDownload = async (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!('showSaveFilePicker' in window)) {
      window.open(url, '_blank');
      return;
    }
    
    try {
      const isVideo = url.toLowerCase().includes('.mp4') || url.toLowerCase().includes('.mov') || url.toLowerCase().includes('.webm');
      const prefix = isVideo ? 'video' : 'photo';
      let ext = url.split('.').pop() || 'jpg';
      ext = ext.split('?')[0]; 
      
      const fileHandle = await (window as any).showSaveFilePicker({
        suggestedName: `${selectedAlbum?.name.replace(/\s+/g, '-')}-${prefix}.${ext}`,
      });
      
      const writable = await fileHandle.createWritable();
      const response = await fetch(`${url}?download=true`, { cache: 'no-store' });
      await response.body?.pipeTo(writable);
      alert(`${isVideo ? 'Video' : 'Photo'} downloaded successfully!`);
    } catch (error: any) {
      if (error.name !== 'AbortError') {
        console.error("Error downloading file:", error);
        alert("Failed to download file. The connection might have dropped.");
      }
    }
  };

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h3 className="font-heading text-2xl font-bold text-center sm:text-left">{selectedAlbum.name}</h3>
        
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex gap-4">

            <button
              onClick={() => {
                setSelectedAlbum(null);
                setImages([]);
                setVideos([]);
                setYoutubeVideos([]);
                // Update URL to remove album search param without reload
                window.history.replaceState(null, '', '/media');
              }}
              className="px-4 py-2 border border-border rounded text-sm hover:border-primary transition-colors font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground shrink-0"
            >
              Back to Albums
            </button>
          </div>
        </div>
      </div>

      {isLoadingAssets ? (
        <div className="py-20 flex flex-col items-center justify-center text-muted-foreground">
          <Loader2 size={40} className="animate-spin mb-4 text-primary" />
              <p className="font-heading tracking-widest uppercase">Loading gallery...</p>
        </div>
      ) : (
        <Tabs defaultValue="photos" className="w-full">
          {(images.length > 0 || videos.length > 0 || youtubeVideos.length > 0) && (
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary/80 border border-border">
                {images.length > 0 && <TabsTrigger value="photos" className="font-heading uppercase tracking-widest px-8">Photos ({images.length})</TabsTrigger>}
                {videos.length > 0 && <TabsTrigger value="videos" className="font-heading uppercase tracking-widest px-8">Videos ({videos.length})</TabsTrigger>}
                {youtubeVideos.length > 0 && <TabsTrigger value="matches" className="font-heading uppercase tracking-widest px-8">Matches ({youtubeVideos.length})</TabsTrigger>}
              </TabsList>
            </div>
          )}

          <TabsContent value="photos" className="animate-fade-in-up mt-0">
            {images.length > 0 ? (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {images.slice(0, visibleCount).map((src, i) => (
                    <div key={i} className="group overflow-hidden rounded-lg bg-secondary border border-border flex flex-col h-full">
                      <div className="relative aspect-square overflow-hidden w-full bg-black">
                        <Image src={(src as any).src || src}
                          alt={`Gallery ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                          unoptimized={true}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-2 sm:p-3 bg-card border-t border-border flex gap-1.5 sm:gap-2">
                        <button
                          onClick={() => window.open((src as any).src || src, '_blank')}
                          className="flex-1 bg-secondary text-foreground py-2.5 px-1 rounded font-heading text-[10px] sm:text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors min-w-0"
                          title="View Image in New Tab"
                        >
                          <span className="truncate">View</span>
                        </button>
                        <button
                          onClick={(e) => handleSingleDownload((src as any).src || src, e)}
                          className="flex-[1.2] bg-gradient-brand text-primary-foreground py-2.5 px-1 rounded font-heading text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-90 transition-opacity min-w-0"
                          title="Download Image"
                        >
                          <Download size={14} className="shrink-0" /> 
                          <span className="truncate">Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {visibleCount < images.length && (
                  <div className="flex justify-center mt-10">
                    <button 
                      onClick={loadMore}
                      className="bg-secondary border border-border px-8 py-3 rounded font-heading text-sm uppercase tracking-widest hover:border-primary transition-colors text-foreground"
                    >
                      Load More Photos
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-20 text-center text-muted-foreground">
                <p>No photos found in this album.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="videos" className="animate-fade-in-up mt-0">
            {videos.length > 0 ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.slice(0, visibleVideoCount).map((src, i) => (
                    <div key={`r2-${i}`} className="group overflow-hidden rounded-lg bg-black border border-border flex flex-col h-full">
                      <div className="relative aspect-video w-full bg-black">
                        <video 
                          src={`${src}#t=0.5`}
                          controls 
                          className="absolute inset-0 w-full h-full object-contain bg-black"
                          preload="metadata"
                          playsInline
                        />
                      </div>
                      <div className="p-2 sm:p-3 bg-card border-t border-border flex gap-1.5 sm:gap-2">
                        <button
                          onClick={() => window.open(src, '_blank')}
                          className="flex-1 bg-secondary text-foreground py-2.5 px-1 rounded font-heading text-[10px] sm:text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors min-w-0"
                          title="View Video in New Tab"
                        >
                          <span className="truncate">View</span>
                        </button>
                        <button 
                          onClick={(e) => handleSingleDownload(src, e)}
                          className="flex-[1.2] bg-gradient-brand text-primary-foreground py-2.5 px-1 rounded font-heading text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-90 transition-opacity min-w-0" 
                          title="Download Video"
                        >
                          <Download size={14} className="shrink-0" /> 
                          <span className="truncate">Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                {visibleVideoCount < videos.length && (
                  <div className="flex justify-center mt-10">
                    <button 
                      onClick={loadMoreVideos}
                      className="bg-secondary border border-border px-8 py-3 rounded font-heading text-sm uppercase tracking-widest hover:border-primary transition-colors text-foreground"
                    >
                      Load More Videos
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="py-20 text-center text-muted-foreground">
                <p>No uploaded videos found in this album.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="matches" className="animate-fade-in-up mt-0">
            {youtubeVideos.length > 0 ? (() => {
              const playingItem = youtubeVideos.find((item) => getYouTubeId(item.url) === playingYouTubeId);
              return (
              <div className="space-y-6 max-w-5xl mx-auto">
                {playingItem && playingYouTubeId && (
                    <div className="overflow-hidden rounded-lg bg-card border border-primary/40">
                      <div className="relative aspect-video bg-black">
                        <iframe
                          key={playingYouTubeId}
                          src={`https://www.youtube.com/embed/${playingYouTubeId}`}
                          title={playingItem.title}
                          className="absolute inset-0 w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-heading text-sm tracking-widest uppercase text-primary">{playingItem.title}</p>
                      </div>
                    </div>
                )}

                <div className="flex gap-3 overflow-x-auto pb-1">
                  {youtubeVideos.map((item) => {
                    const yId = getYouTubeId(item.url);
                    if (!yId) return null;
                    const isPlaying = yId === playingYouTubeId;
                    return (
                      <button
                        key={item.url}
                        type="button"
                        onClick={() => setPlayingYouTubeId(yId)}
                        className={`group min-w-[160px] sm:min-w-0 flex-1 overflow-hidden rounded-lg bg-card border text-left transition-colors ${
                          isPlaying
                            ? "border-primary"
                            : "border-border hover:border-primary/60"
                        }`}
                      >
                        <div className="relative aspect-video bg-black">
                          <img
                            src={`https://i.ytimg.com/vi/${yId}/hqdefault.jpg`}
                            alt={item.title}
                            className={`w-full h-full object-cover ${isPlaying ? "opacity-40" : "group-hover:scale-105 transition-transform duration-500"}`}
                          />
                          {isPlaying ? (
                            <span className="absolute inset-0 flex items-center justify-center font-heading text-[10px] sm:text-xs uppercase tracking-widest text-primary">
                              Now playing
                            </span>
                          ) : (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="w-10 h-10 rounded-full bg-black/70 border border-primary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Play size={16} className="ml-0.5 fill-current" />
                              </span>
                            </span>
                          )}
                        </div>
                        <div className="p-3">
                          <p className="font-heading text-xs tracking-widest uppercase text-primary truncate">{item.title}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              );
            })() : (
              <div className="py-20 text-center text-muted-foreground">
                <p>No pre-recorded matches found in this album.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
