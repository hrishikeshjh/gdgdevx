"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Code2, Sparkles, Layers, Cpu } from "lucide-react";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[580px] h-[320px] sm:h-[580px] pointer-events-none -z-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#4285F4]/15 via-[#EA4335]/10 to-[#34A853]/15 rounded-full blur-[100px] sm:blur-[140px] animate-pulse" />
        <div className="absolute inset-10 bg-[#FBBC05]/8 rounded-full blur-[80px]" />
      </div>

      {/* BACKGROUND FLOATING GLASS ELEMENTS (Depth Layer Behind the Logo - Same Color & Blur) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        {/* Floating Element 1: Top-Left-Mid AI / Agents Chip */}
        <motion.div
          animate={{
            x: mousePos.x * 0.6 + [0, -12, 0][1],
            y: mousePos.y * 0.6 + [0, 14, 0][1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ opacity: pillsOpacity }}
          className="absolute top-[28%] left-[8%] sm:left-[18%] px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2 text-[8px] sm:text-[9.5px] font-mono text-white/50 tracking-wider uppercase opacity-45 sm:opacity-60"
        >
          <Cpu className="w-3 h-3 text-[#4285F4]/70" />
          <span>AI_MODELS × AGENTS</span>
        </motion.div>

        {/* Floating Element 2: Top-Right-Mid 24H Code Chip */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.5 + [0, 15, 0][1],
            y: mousePos.y * 0.5 + [0, -12, 0][1],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ opacity: pillsOpacity }}
          className="absolute top-[26%] right-[8%] sm:right-[16%] px-3.5 py-1.5 rounded-full border border-white/12 bg-white/[0.03] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2 text-[8px] sm:text-[9.5px] font-mono text-white/50 tracking-wider uppercase opacity-45 sm:opacity-60"
        >
          <Code2 className="w-3 h-3 text-[#EA4335]/70" />
          <span>{"{ 24H_HACKATHON }"}</span>
        </motion.div>

        {/* Floating Element 3: Mid-Left Campus Node Badge */}
        <motion.div
          animate={{
            x: mousePos.x * 0.4 + [0, 10, 0][1],
            y: -mousePos.y * 0.4 + [0, -10, 0][1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ opacity: pillsOpacity }}
          className="hidden md:flex absolute top-[52%] left-[10%] px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] items-center gap-2 text-[9px] font-mono text-white/40 tracking-widest uppercase opacity-50"
        >
          <span className="w-1 h-1 rounded-full bg-[#FBBC05] animate-ping" />
          <span>TIU_SECTOR_V // NODE_01</span>
        </motion.div>

        {/* Floating Element 4: Mid-Right Grid Chip */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.4 + [0, -12, 0][1],
            y: mousePos.y * 0.4 + [0, 12, 0][1],
          }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{ opacity: pillsOpacity }}
          className="hidden md:flex absolute top-[50%] right-[10%] px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] items-center gap-2 text-[9px] font-mono text-white/40 tracking-widest uppercase opacity-50"
        >
          <Layers className="w-3 h-3 text-[#34A853]/70" />
          <span>SYS_MATRIX_v2.0</span>
        </motion.div>

        {/* Floating Element 5: Bottom-Left-Mid Binary Badge */}
        <motion.div
          animate={{
            x: mousePos.x * 0.5 + [0, -8, 0][1],
            y: -mousePos.y * 0.5 + [0, 10, 0][1],
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ opacity: pillsOpacity }}
          className="absolute bottom-[28%] left-[12%] sm:left-[22%] px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl text-[7.5px] sm:text-[8.5px] font-mono text-white/35 tracking-widest uppercase opacity-40 sm:opacity-55"
        >
          <span>01001000 // HACK</span>
        </motion.div>

        {/* Floating Element 6: Bottom-Right-Mid Innovate Chip */}
        <motion.div
          animate={{
            x: -mousePos.x * 0.5 + [0, 10, 0][1],
            y: mousePos.y * 0.5 + [0, -8, 0][1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          style={{ opacity: pillsOpacity }}
          className="absolute bottom-[26%] right-[12%] sm:right-[20%] px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl text-[7.5px] sm:text-[8.5px] font-mono text-white/35 tracking-widest uppercase opacity-40 sm:opacity-55"
        >
          <span>INNOVATE · BUILD</span>
        </motion.div>
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
