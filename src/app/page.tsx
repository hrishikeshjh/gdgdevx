"use client";

import React, { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { AmbientMeshBackground } from "@/components/AmbientMeshBackground";
import { FloatingTechElements } from "@/components/FloatingTechElements";
import { Navbar } from "@/components/Navbar";
import { HeroOverlay } from "@/components/HeroOverlay";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { TracksSection } from "@/components/TracksSection";
import { TimelineSection } from "@/components/TimelineSection";
import { PrizesSection } from "@/components/PrizesSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { RegisterModal } from "@/components/RegisterModal";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handlePreloadComplete = useCallback(() => {
    // Session preloading completed
  }, []);

  const handleOpenRegister = useCallback(() => {
    setIsRegisterOpen(true);
  }, []);

  const handleCloseRegister = useCallback(() => {
    setIsRegisterOpen(false);
  }, []);

  return (
    <SmoothScroll>
      <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
        {/* Preloader - only runs once per session */}
        <Preloader onComplete={handlePreloadComplete} />

        {/* Ambient Soft Mesh Gradients in Google Palette */}
        <AmbientMeshBackground />

        {/* Custom Apple Spring Cursor */}
        <CustomCursor />

        {/* Small Floating Tech Chips across background */}
        <FloatingTechElements />

        {/* Floating Glass Navigation */}
        <Navbar onOpenRegister={handleOpenRegister} />

        {/* Scroll Content Sections - Rendered immediately for instant navigation */}
        <div className="relative z-10">
          <HeroOverlay onOpenRegister={handleOpenRegister} />
          <AboutSection />
          <StatsSection />
          <TracksSection />
          <TimelineSection />
          <PrizesSection />
          <FaqSection />
          <Footer />
        </div>

        {/* Registration Modal */}
        <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
      </main>
    </SmoothScroll>
  );
}
