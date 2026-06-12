"use client";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Completely hide after fade out (2.5 seconds)
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
      <div className="animate-fade-in-up flex flex-col items-center">
        <div className="mb-6 relative" style={{ perspective: "1000px" }}>
          <img src="/logo.png" alt="Force Sports United Logo" className="w-24 h-24 rounded-full object-cover shadow-[0_0_30px_rgba(242,201,76,0.3)] animate-coin-flip" />
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-wider mb-3 text-center">
          <span className="bg-gradient-to-b from-[#F2C94C] via-[#F2D675] to-[#B8902E] bg-clip-text text-transparent">FORCE</span> <span className="text-white">SPORTS UNITED</span>
        </h1>
        <p className="text-primary font-heading tracking-[0.2em] uppercase text-xs md:text-sm text-center px-4">
          The Force Behind The Game
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
