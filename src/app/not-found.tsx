"use client";

import Link from "next/link";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Flag } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <Layout>
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 grayscale blur-[2px]"
          style={{ backgroundImage: `url(${heroBg.src || heroBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/60 to-background" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center animate-fade-in-up w-full max-w-3xl">
          
          <div className="relative mb-8 flex justify-center items-center h-40">
            {/* Giant ghostly 404 in the background */}
            <h1 className="font-heading text-8xl md:text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-0 pointer-events-none">
              404
            </h1>
            
            {/* Glowing Icon in the foreground */}
            <div className="w-24 h-24 md:w-28 md:h-28 bg-[#1a1a1a]/80 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md border border-primary/30 shadow-[0_0_40px_rgba(242,201,76,0.15)]">
              <Flag size={40} className="text-primary animate-pulse" />
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 uppercase tracking-wider text-foreground">
            Out of <span className="text-gradient">Bounds</span>
          </h2>
          
          <div className="h-1 w-20 bg-gradient-brand mx-auto rounded-full mb-8 opacity-70" />
          
          <p className="mb-10 text-muted-foreground md:text-lg max-w-xl mx-auto leading-relaxed">
            The referee has blown the whistle! You've strayed completely off the field and into uncharted territory. The page you're looking for doesn't exist or has been permanently benched.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-brand px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary-foreground hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              <ArrowLeft size={16} /> Return to Home Field
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 border border-primary/30 bg-black/50 backdrop-blur-sm px-8 py-4 rounded font-heading text-sm tracking-wider uppercase text-primary hover:bg-primary/10 hover:border-primary/50 transition-colors w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
