"use client";

import React, { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { CinematicParticleEngine } from "@/components/CinematicParticleEngine";
import { AmbientMeshBackground } from "@/components/AmbientMeshBackground";
import { Navbar } from "@/components/Navbar";
import { HeroCinematic } from "@/components/HeroCinematic";
import { EventRevealSection } from "@/components/EventRevealSection";
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
        {/* Preloader - 2-second tech initialization screen */}
        <Preloader onComplete={handlePreloadComplete} />

        {/* Signature Interactive GPU-Accelerated Particle Physics Engine */}
        <CinematicParticleEngine />

        {/* Ambient Soft Mesh Atmospheric Glow in Google Palette */}
        <AmbientMeshBackground />

        {/* Custom Apple Spring Cursor */}
        <CustomCursor />

        {/* Minimal Floating Glass Navigation */}
        <Navbar onOpenRegister={handleOpenRegister} />

        {/* Scroll Experience Flow */}
        <div className="relative z-10">
          {/* SECTION 01 — MINIMAL CINEMATIC HERO (Centered HackRIT Logo, Orbiting Glass Pills, No CTA Buttons) */}
          <HeroCinematic />

          {/* SECTION 02 — THE EVENT REVEAL (Particle Transition Reveal, Date/Venue Cards, Discovered CTAs) */}
          <EventRevealSection onOpenRegister={handleOpenRegister} />

          {/* SECTION 03 — ABOUT & PILLARS */}
          <AboutSection />

          {/* SECTION 04 — STATS */}
          <StatsSection />

          {/* SECTION 05 — DOMAINS & TRACKS */}
          <TracksSection />

          {/* SECTION 06 — 24H EVENT TIMELINE */}
          <TimelineSection />

          {/* SECTION 07 — PRIZES & PERKS */}
          <PrizesSection />

          {/* SECTION 08 — FAQS */}
          <FaqSection />

          {/* SECTION 09 — FOOTER & CONTACT */}
          <Footer />
        </div>

        {/* Registration Modal */}
        <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
      </main>
    </SmoothScroll>
  );
}
