"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export const HeroCinematic: React.FC = () => {
  const { scrollY } = useScroll();

  // Scroll animations for logo dissolving into particles
  const logoOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 380], [1, 1.12]);
  const logoFilter = useTransform(scrollY, [0, 380], ["blur(0px)", "blur(12px)"]);
  const logoY = useTransform(scrollY, [0, 380], [0, -60]);

  // Floating pills fade and move outward on scroll
  const pillsOpacity = useTransform(scrollY, [0, 220], [1, 0]);
  const pillsYTop = useTransform(scrollY, [0, 220], [0, -40]);
  const pillsYBottom = useTransform(scrollY, [0, 220], [0, 40]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Mouse tilt parallax on desktop
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-8 pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden select-none">
      {/* Subtle Volumetric Atmospheric Glow Behind Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[580px] h-[320px] sm:h-[580px] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4285F4]/15 via-[#EA4335]/10 to-[#34A853]/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse" />
        <div className="absolute inset-10 bg-[#FBBC05]/8 rounded-full blur-[80px]" />
      </div>

      {/* TOP FLOATING PILLS (Outer Orbit - Never overlapping the center logo) */}
      <motion.div
        style={{ opacity: pillsOpacity, y: pillsYTop }}
        className="w-full max-w-6xl flex items-center justify-between pointer-events-auto"
      >
        {/* Top-Left Pill: School of the Future × GDG */}
        <motion.div
          animate={{
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4 + [0, -4, 0][1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
          </div>
          <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.18em] font-mono text-white/75 font-semibold">
            SOTF × GDG TIU
          </span>
        </motion.div>

        {/* Top-Right Pill: DevX 2.0 Orbit Tag */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.4,
            y: -mousePos.y * 0.4,
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-led-fast shrink-0" />
          <span className="text-[8.5px] sm:text-[10px] uppercase tracking-[0.18em] font-mono text-white/75 font-semibold">
            DEVX 2.0
          </span>
          <ArrowUpRight className="w-3 h-3 text-white/50" />
        </motion.div>
      </motion.div>

      {/* CENTERPIECE: FLOATING CINEMATIC HACKRIT LOGO (The Solo Hero Focal Point) */}
      <motion.div
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          filter: logoFilter,
          y: logoY,
        }}
        className="relative my-auto flex flex-col items-center justify-center w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4 pointer-events-none"
      >
        {/* Interactive Tilt & Float Container */}
        <motion.div
          animate={{
            rotateX: -mousePos.y * 0.8,
            rotateY: mousePos.x * 0.8,
            y: [0, -10, 0],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateX: { type: "spring", damping: 30, stiffness: 200 },
            rotateY: { type: "spring", damping: 30, stiffness: 200 },
          }}
          className="relative w-full flex items-center justify-center filter drop-shadow-[0_0_50px_rgba(255,255,255,0.25)]"
        >
          <Image
            src="/logo.png"
            alt="HackRIT Logo"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto max-h-[160px] sm:max-h-[260px] md:max-h-[320px] lg:max-h-[380px] object-contain select-none"
          />
        </motion.div>
      </motion.div>

      {/* BOTTOM FLOATING PILLS & SCROLL INDICATOR */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        {/* Bottom Orbit Pills (Metadata chips with wide negative spacing) */}
        <motion.div
          style={{ opacity: pillsOpacity, y: pillsYBottom }}
          className="w-full flex items-center justify-between pointer-events-auto"
        >
          {/* Bottom-Left Pill: 24H Grid */}
          <motion.div
            animate={{
              x: mousePos.x * 0.3,
              y: mousePos.y * 0.3,
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 bg-white/[0.02] backdrop-blur-xl text-[9px] font-mono text-white/50 tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            <span>24H_HACKATHON_CORE</span>
          </motion.div>

          {/* Bottom-Right Pill: Coordinates */}
          <motion.div
            animate={{
              x: -mousePos.x * 0.3,
              y: -mousePos.y * 0.3,
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 bg-white/[0.02] backdrop-blur-xl text-[9px] font-mono text-white/50 tracking-widest uppercase"
          >
            <span>KOLKATA // 22.57° N</span>
          </motion.div>
        </motion.div>

        {/* Minimal Subtle Scroll Indicator */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="flex flex-col items-center gap-2 cursor-pointer pointer-events-auto pb-2"
          onClick={() => {
            const revealSection = document.getElementById("event-reveal");
            if (revealSection) {
              if (window.__lenis) {
                window.__lenis.scrollTo(revealSection, { offset: -60 });
              } else {
                revealSection.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 font-bold hover:text-white/70 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
