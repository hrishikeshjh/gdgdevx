"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface HeroOverlayProps {
  onOpenRegister?: () => void;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ onOpenRegister }) => {
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const titleY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div className="relative z-10 min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16 text-center">
      {/* Hero Header */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex flex-col items-center max-w-6xl mx-auto my-auto w-full"
      >
        {/* School of the Future Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-6 py-2 sm:py-3 rounded-full glass-pill mb-5 sm:mb-8 max-w-full overflow-hidden border border-white/20">
          <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.18em] font-bold text-white truncate">
            SCHOOL OF THE FUTURE × GDG ON CAMPUS TECHNO INDIA UNIVERSITY
          </span>
        </div>

        {/* Hackrit Hero Logo */}
        <div className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-4 my-2 sm:my-5 flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            alt="HACKRIT 2026 Logo"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto max-h-[120px] sm:max-h-[220px] md:max-h-[280px] lg:max-h-[340px] object-contain select-none hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Hackrit Edition & DevX 2.0 Subhead */}
        <div className="flex items-center gap-2 text-[11px] sm:text-sm md:text-base font-mono tracking-[0.15em] sm:tracking-[0.2em] text-white/90 mb-6 sm:mb-8 uppercase max-w-full flex-wrap justify-center px-2">
          <span className="text-white/60">OFFICIAL 24-HOUR HACKATHON OF</span>
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/25 text-white font-bold tracking-widest">
            DEVX 2.0
          </span>
        </div>

        {/* Date & Location Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs md:text-sm font-mono text-white mb-8 sm:mb-10 uppercase tracking-wider w-full max-w-md sm:max-w-none">
          <div className="flex items-center justify-center gap-2 glass-pill px-4 sm:px-5 py-2.5 sm:py-2 border border-white/20 w-full sm:w-auto">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 shrink-0" />
            <span className="font-bold">11 - 12 SEP 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 glass-pill px-4 sm:px-5 py-2.5 sm:py-2 border border-white/20 w-full sm:w-auto">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70 shrink-0" />
            <span className="font-bold truncate">TECHNO INDIA UNIVERSITY, KOLKATA</span>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-white bg-white/20 hover:bg-white/30 active:scale-95 backdrop-blur-2xl border border-white/35 hover:border-white/70 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.18)] flex items-center justify-center gap-3 uppercase cursor-pointer"
          >
            <span>Register Team</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </button>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("about");
              if (el) {
                if (window.__lenis) {
                  window.__lenis.scrollTo(el, { offset: -80 });
                } else {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-7 sm:px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-white/90 bg-white/[0.06] hover:bg-white/15 active:scale-95 backdrop-blur-xl border border-white/20 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2 uppercase"
          >
            <span>Explore Hackrit</span>
            <ChevronDown className="w-4 h-4 text-white/60 shrink-0" />
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: titleOpacity }}
        className="flex flex-col items-center gap-2.5"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/50 font-bold">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
};
