"use client";

import React, { useState, useCallback } from "react";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { HeroCinematic } from "@/components/HeroCinematic";
import { EventRevealSection } from "@/components/EventRevealSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { WhenWhereSection } from "@/components/WhenWhereSection";
import { TracksSection } from "@/components/TracksSection";
import { TimelineSection } from "@/components/TimelineSection";
import { PrizesSection } from "@/components/PrizesSection";
import { FaqSection } from "@/components/FaqSection";
import { ReachOutSection } from "@/components/ReachOutSection";
import { CloudyBackground } from "@/components/CloudyBackground";
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
        {/* Cloudy Whitish Gradient Ambient Background */}
        <CloudyBackground />

        {/* Preloader - 2-second tech initialization screen */}
        <Preloader onComplete={handlePreloadComplete} />

        {/* Custom Apple Spring Cursor */}
        <CustomCursor />

        {/* Minimal Floating Glass Navigation */}
        <Navbar onOpenRegister={handleOpenRegister} />

        {/* Scroll Experience Flow */}
        <div className="relative z-10">
          {/* SECTION 01 — HERO SECTION */}
          <HeroCinematic onOpenRegister={handleOpenRegister} />

          {/* SECTION 02 — ABOUT & PILLARS */}
          <AboutSection />

          {/* SECTION 03 — STATS */}
          <StatsSection />

          {/* SECTION 04 — WHEN & WHERE */}
          <WhenWhereSection />

          {/* SECTION 05 — DOMAINS & TRACKS */}
          <TracksSection />

          {/* SECTION 06 — 24H EVENT TIMELINE */}
          <TimelineSection />

          {/* SECTION 07 — PRIZES & PERKS */}
          <PrizesSection />

          {/* SECTION 08 — FAQS */}
          <FaqSection />

          {/* SECTION 09 — REACH OUT TO US (CONTACT TILE) */}
          <ReachOutSection />

          {/* SECTION 10 — FOOTER */}
          <Footer />
        </div>

        {/* Registration Modal */}
        <RegisterModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
      </main>
    </SmoothScroll>
  );
}
