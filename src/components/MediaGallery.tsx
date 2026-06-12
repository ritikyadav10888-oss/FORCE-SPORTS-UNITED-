"use client";

import { useState, useEffect, useRef } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Download, Loader2 } from "lucide-react";
import { downloadZip } from "client-zip";
import { listFilesInFolder, getFileUrlFromR2 } from "@/lib/r2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import mediaImg from "@/assets/media-production.jpg";
import { R2EventCarousel } from "@/components/R2EventCarousel";

const ALBUMS = [
  { 
    id: "crce", 
    name: "Fr. CRCE Alumni Sports League", 
    r2Folder: "ASL Fr.CRCE_",
    carouselFiles: ["IMG20260606163441.jpg", "IMG_1460.JPG", "DSC_0358.JPG", "IMG_1492.JPG", "IMG_1496.JPG", "IMG_1504.JPG", "IMG20260606222548.jpg"],
    youtubeLinks: []
  },
  { 
    id: "gitanjali", 
    name: "Gitanjali Narnolia Cricket League 2026", 
    r2Folder: "Gitanjali Narnolia cricket leauge", 
    youtubeLinks: []
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
      src={coverUrl || mediaImg.src || (mediaImg as any)}
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
  const [youtubeVideos, setYoutubeVideos] = useState<string[]>([]);
  const [isLoadingAssets, setIsLoadingAssets] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState({ current: 0, total: 0 });
  const abortControllerRef = useRef<AbortController | null>(null);
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
        let keys: string[] = [];
        if ((selectedAlbum as any).r2Files && (selectedAlbum as any).r2Files.length > 0) {
          keys = (selectedAlbum as any).r2Files.map((f: string) => `${selectedAlbum!.r2Folder}/${f}`);
        } else {
          keys = await listFilesInFolder(selectedAlbum!.r2Folder);
        }
        
        const urls = await Promise.all(keys.map(key => getFileUrlFromR2(key)));
        
        if (isMounted) {
          const vids: string[] = [];
          const imgs: string[] = [];
          
          urls.forEach(url => {
            const lowerUrl = url.toLowerCase();
            if (lowerUrl.includes(".mp4") || lowerUrl.includes(".mov")) {
              vids.push(url);
            } else {
              imgs.push(url);
            }
          });
          
          setVideos(vids);
          setImages(imgs);
          setYoutubeVideos(selectedAlbum.youtubeLinks || []);
        }
      } catch (err) {
        console.error("Failed to fetch from R2:", err);
      } finally {
        if (isMounted) setIsLoadingAssets(false);
      }
    }
    
    fetchMedia();
    return () => { isMounted = false };
  }, [selectedAlbum]);

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 24, images.length));
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
              <R2EventCarousel folder={album.r2Folder} files={(album as any).carouselFiles} />
            </div>
            <div className="p-5 text-center flex flex-col items-center flex-1">
              <h3 className="font-heading text-xl font-bold mb-4">{album.name}</h3>
              <span className="bg-secondary border border-border text-foreground hover:border-primary hover:text-primary transition-colors px-6 py-2 rounded font-heading uppercase text-sm tracking-widest mt-auto">
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
      const isVideo = url.toLowerCase().includes('.mp4') || url.toLowerCase().includes('.mov');
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
            {isDownloading ? (
              <button
                onClick={() => {
                  if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                  }
                }}
                className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors font-bold uppercase tracking-wider flex items-center gap-2 shrink-0"
              >
                <Loader2 size={16} className="animate-spin" /> 
                Cancel Zipping ({downloadProgress.current}/{downloadProgress.total})
              </button>
            ) : (
              <button
                onClick={async () => {
                  const totalFiles = images.length + videos.length;
                  if (window.confirm(`Are you sure you want to download all ${totalFiles} files as a ZIP? Note: This may take a while depending on your internet speed.`)) {
                    setIsDownloading(true);
                    setDownloadProgress({ current: 0, total: totalFiles });
                    abortControllerRef.current = new AbortController();
                    try {
                      const allUrls = [...images, ...videos];
                      
                      // Fallback for browsers that don't support showSaveFilePicker
                      if (!('showSaveFilePicker' in window)) {
                        alert("Your browser does not support streaming massive ZIPs directly to your hard drive. Please use Google Chrome or Microsoft Edge to download all videos as a ZIP.");
                        setIsDownloading(false);
                        return;
                      }

                      // Ask user where to save the massive ZIP file upfront
                      const fileHandle = await (window as any).showSaveFilePicker({
                        suggestedName: `${selectedAlbum.name.replace(/\s+/g, '-')}.zip`,
                        types: [{
                          description: 'Zip Archive',
                          accept: { 'application/zip': ['.zip'] },
                        }],
                      });
                      
                      const writable = await fileHandle.createWritable();

                      // Generator function to stream files one by one without loading all in RAM
                      async function* getFiles() {
                        for (let i = 0; i < allUrls.length; i++) {
                          const url = allUrls[i];
                          // Force cache bypass to prevent CORS errors from previously cached <img> tags
                          const response = await fetch(`${url}?download=true`, { 
                            cache: 'no-store',
                            signal: abortControllerRef.current?.signal 
                          });
                          let ext = url.split('.').pop() || 'jpg';
                          ext = ext.split('?')[0]; 
                          const prefix = url.toLowerCase().includes('.mp4') || url.toLowerCase().includes('.mov') ? 'video' : 'photo';
                          
                          setDownloadProgress(prev => ({ ...prev, current: i + 1 }));
                          yield { name: `${selectedAlbum.name.replace(/\s+/g, '-')}-${prefix}-${i + 1}.${ext}`, input: response };
                        }
                      }

                      // Stream the zip directly to the hard drive
                      await downloadZip(getFiles()).body.pipeTo(writable, { signal: abortControllerRef.current.signal });
                      
                      alert("Download complete! All files have been successfully zipped to your computer.");
                    } catch (error: any) {
                      // Ignore DOMException if user cancels the save dialog or aborts
                      if (error.name !== 'AbortError') {
                        console.error("Error streaming zip:", error);
                        alert("Failed to download files. The connection might have dropped.");
                      }
                    } finally {
                      setIsDownloading(false);
                      setDownloadProgress({ current: 0, total: 0 });
                    }
                  }
                }}
                disabled={isLoadingAssets}
                className={`px-4 py-2 bg-primary text-primary-foreground rounded text-sm hover:opacity-90 transition-opacity font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 ${isLoadingAssets ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <Download size={16} /> Download All
              </button>
            )}
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
          <p className="font-heading tracking-widest uppercase">Fetching files from R2...</p>
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
                    <div key={i} className="group overflow-hidden rounded-lg bg-secondary border border-border flex flex-col">
                      <div className="relative aspect-square overflow-hidden w-full">
                        <Image src={(src as any).src || src}
                          alt={`Gallery ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3 bg-card border-t border-border flex gap-2">
                        <button
                          onClick={() => window.open((src as any).src || src, '_blank')}
                          className="flex-1 bg-secondary text-foreground py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                          title="View Image in New Tab"
                        >
                          View
                        </button>
                        <button
                          onClick={(e) => handleSingleDownload((src as any).src || src, e)}
                          className="flex-1 bg-primary text-primary-foreground py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-90 transition-opacity"
                          title="Download Image"
                        >
                          <Download size={14} /> Download
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
                    <div key={`r2-${i}`} className="group overflow-hidden rounded-lg bg-black border border-border flex flex-col">
                      <div className="relative aspect-video w-full">
                        <video 
                          src={src} 
                          controls 
                          className="w-full h-full object-contain bg-black"
                          preload="metadata"
                          playsInline
                        />
                      </div>
                      <div className="p-3 bg-card border-t border-border flex gap-2">
                        <button
                          onClick={() => window.open(src, '_blank')}
                          className="flex-1 bg-secondary text-foreground py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                          title="View Video in New Tab"
                        >
                          View
                        </button>
                        <button 
                          onClick={(e) => handleSingleDownload(src, e)}
                          className="flex-1 bg-primary text-primary-foreground py-2 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:opacity-90 transition-opacity" 
                          title="Download Video"
                        >
                          <Download size={14} /> Download
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
            {youtubeVideos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((url, i) => {
                  const yId = getYouTubeId(url);
                  return yId ? (
                    <div key={`yt-${i}`} className="group relative aspect-video overflow-hidden rounded-lg bg-black border border-border">
                      <iframe 
                        src={`https://www.youtube.com/embed/${yId}`} 
                        title="YouTube video player" 
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
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
