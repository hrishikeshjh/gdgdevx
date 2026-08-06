"use client";

import React, { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingTechElements } from "@/components/FloatingTechElements";
import { Navbar } from "@/components/Navbar";
import { HeroCanvas } from "@/components/HeroCanvas";
import { HeroOverlay } from "@/components/HeroOverlay";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { TracksSection } from "@/components/TracksSection";
import { TimelineSection } from "@/components/TimelineSection";
import { PrizesSection } from "@/components/PrizesSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  const handlePreloadComplete = useCallback((images: HTMLImageElement[]) => {
    setLoadedImages(images);
    setIsReady(true);
  }, []);

  return (
    <SmoothScroll>
      <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
        {/* Preloader */}
        <Preloader onComplete={handlePreloadComplete} />

        {/* Custom Apple Spring Cursor */}
        <CustomCursor />

        {/* Small Floating Tech Chips across background */}
        <FloatingTechElements />

        {/* Floating Glass Navigation */}
        <Navbar />

        {/* Fixed Background Frame Sequence across entire document */}
        {isReady && <HeroCanvas images={loadedImages} />}

        {/* Scroll Content Sections */}
        {isReady && (
          <div className="relative z-10">
            <HeroOverlay />
            <AboutSection />
            <StatsSection />
            <TracksSection />
            <TimelineSection />
            <PrizesSection />
            <FaqSection />
            <Footer />
          </div>
        )}
      </main>
    </SmoothScroll>
  );
}
