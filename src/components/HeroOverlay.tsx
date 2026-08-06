"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Calendar, MapPin, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const HeroOverlay: React.FC = () => {
  const { scrollY } = useScroll();

  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const titleY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-between items-center px-4 sm:px-6 pt-32 sm:pt-36 pb-16 text-center">
      {/* Hero Header */}
      <motion.div
        style={{ opacity: titleOpacity, y: titleY }}
        className="flex flex-col items-center max-w-6xl mx-auto my-auto w-full"
      >
        {/* School of the Future Tagline Pill */}
        <div className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full glass-pill mb-6 sm:mb-8 max-w-full overflow-hidden">
          <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.18em] font-bold text-white truncate">
            SCHOOL OF THE FUTURE × GDG ON CAMPUS TECHNO INDIA UNIVERSITY
          </span>
        </div>

        {/* Futuristic Bold Title: DEVX 2.0 */}
        <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold tracking-[0.08em] text-white leading-none mb-3 uppercase max-w-full break-words">
          DEVX <span className="text-gradient-apple font-bold">2.0</span>
        </h1>

        {/* Hackrit Subhead */}
        <div className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em] text-white/90 mb-6 uppercase max-w-full break-words">
          HACKRIT <span className="text-white/40 font-mono text-lg sm:text-3xl ml-2 font-normal">2026</span>
        </div>

        {/* Date & Location Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs md:text-sm font-mono text-white mb-10 uppercase tracking-wider max-w-full">
          <div className="flex items-center gap-2 glass-pill px-4 sm:px-5 py-2">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span className="font-bold">11 - 12 SEP 2026</span>
          </div>
          <div className="flex items-center gap-2 glass-pill px-4 sm:px-5 py-2">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
            <span className="font-bold truncate">TECHNO INDIA UNIVERSITY, KOLKATA</span>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <button
            onClick={(e) => e.preventDefault()}
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-black bg-white hover:bg-white/90 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 uppercase cursor-default"
          >
            <span>Register Team</span>
            <ArrowRight className="w-4 h-4 text-black shrink-0" />
          </button>
          <Link
            href="/sponsors"
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.15em] text-white border border-white/30 hover:border-white transition-all duration-300 flex items-center justify-center gap-2 uppercase"
          >
            <ShieldAlert className="w-4 h-4 text-yellow-300 shrink-0" />
            <span>Sponsors & POCs</span>
          </Link>
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
