"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, ArrowRight, ChevronDown, Flame, Code2, Globe } from "lucide-react";

interface EventRevealSectionProps {
  onOpenRegister?: () => void;
}

export const EventRevealSection: React.FC<EventRevealSectionProps> = ({ onOpenRegister }) => {
  const scrollToAbout = () => {
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(aboutEl, { offset: -80 });
      } else {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="event-reveal"
      className="relative z-10 min-h-screen py-24 sm:py-36 px-4 sm:px-6 flex flex-col justify-center items-center scroll-mt-16 select-none"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-12 sm:space-y-16">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-white/20 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#4285F4]" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/85 font-bold">
            THE HACKATHON REVEAL
          </span>
        </motion.div>

        {/* Main Headline Reveal: OFFICIAL 24-HOUR HACKATHON OF DEVX 2.0 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.06em] text-white uppercase leading-tight">
            OFFICIAL 24-HOUR HACKATHON OF{" "}
            <span className="text-gradient-apple block sm:inline mt-1 sm:mt-0 font-extrabold drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
              DEVX 2.0
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/60 font-light max-w-xl mx-auto tracking-wide leading-relaxed font-sans">
            A high-octane flagship arena uniting engineers, designers, and innovators to engineer real-world breakthrough solutions.
          </p>
        </motion.div>

        {/* Floating Glass Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl">
          {/* Date Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/20 bg-white/[0.03] backdrop-blur-2xl rounded-3xl hover:border-white/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#4285F4] uppercase font-bold">
                TIMELINE // DURATION
              </span>
              <Calendar className="w-4 h-4 text-[#4285F4]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-wide mb-1 uppercase">
                11 — 12 SEP 2026
              </h3>
              <p className="text-xs text-white/60 font-light">
                24 Hours Non-Stop Building · Mentorship · Live Pitching
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between border border-white/20 bg-white/[0.03] backdrop-blur-2xl rounded-3xl hover:border-white/40 transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#EA4335] uppercase font-bold">
                CAMPUS VENUE
              </span>
              <MapPin className="w-4 h-4 text-[#EA4335]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-1 uppercase leading-snug">
                TECHNO INDIA UNIVERSITY
              </h3>
              <p className="text-xs text-white/60 font-light">
                EM-4, Salt Lake Sector V, Kolkata, West Bengal 700091
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Discovered Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md pt-4"
        >
          {/* Primary CTA: REGISTER TEAM → */}
          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-[0.18em] text-black bg-white hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 uppercase cursor-pointer"
          >
            <span>Register Team</span>
            <ArrowRight className="w-4 h-4 text-black shrink-0" />
          </button>

          {/* Secondary CTA: EXPLORE HACKRIT ↓ */}
          <button
            onClick={scrollToAbout}
            data-cursor="magnetic"
            className="w-full sm:w-auto glass-pill px-7 sm:px-9 py-4 text-xs sm:text-sm font-bold tracking-[0.18em] text-white/90 bg-white/[0.06] hover:bg-white/15 active:scale-95 backdrop-blur-2xl border border-white/20 hover:border-white/50 transition-all duration-200 flex items-center justify-center gap-2 uppercase cursor-pointer"
          >
            <span>Explore Hackrit</span>
            <ChevronDown className="w-4 h-4 text-white/60 shrink-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
