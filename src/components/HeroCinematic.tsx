"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroCinematicProps {
  onOpenRegister?: () => void;
}

export const HeroCinematic: React.FC<HeroCinematicProps> = ({ onOpenRegister }) => {
  // Subtle mouse tilt parallax on desktop
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-8 pt-28 sm:pt-36 pb-8 sm:pb-12 overflow-hidden select-none bg-black">
      {/* Spacer for Top Alignment */}
      <div className="w-full h-2 sm:h-4" />

      {/* 3. CLOCK BACKGROUND GRAPHIC (Offset towards left behind logo and text with blur) */}
      <div
        className="absolute top-[48%] -translate-y-1/2 left-[18%] md:left-[22%] lg:left-[24%] -translate-x-1/2 w-[480px] sm:w-[680px] md:w-[800px] lg:w-[900px] aspect-square pointer-events-none z-0 select-none opacity-90 mix-blend-screen transition-transform duration-700 blur-[3px] sm:blur-[4px]"
      >
        <Image
          src="/clock.png"
          alt="Hero Clock Graphic"
          fill
          priority
          className="object-contain"
        />

        {/* Ultra-Smooth Continuous Sweeping Red Second Hand */}
        <div
          className="absolute top-1/2 left-1/2 w-0 h-0 animate-clock-sweep pointer-events-none"
          style={{
            transformOrigin: "0 0",
          }}
        >
          {/* Main Needle pointing outward */}
          <div
            className="absolute top-0 left-0 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-[#ef4444] via-[#dc2626] to-[#b91c1c] rounded-full shadow-[0_0_10px_rgba(239,68,68,0.95)]"
            style={{
              width: "28vw",
              maxWidth: "280px",
              minWidth: "120px",
              transform: "translateY(-50%)",
            }}
          />
          {/* Counterweight tail on opposite side */}
          <div
            className="absolute top-0 right-0 h-[1.5px] sm:h-[2px] bg-[#991b1b] rounded-full"
            style={{
              width: "4vw",
              maxWidth: "40px",
              minWidth: "20px",
              transform: "translateY(-50%)",
            }}
          />
          {/* Center Hub Pip with neon red glow */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#dc2626] border border-white shadow-[0_0_8px_#dc2626]" />
        </div>
      </div>


      {/* CENTER HERO BLOCK */}
      <motion.div
        animate={{
          rotateX: -mousePos.y * 0.4,
          rotateY: mousePos.x * 0.4,
        }}
        transition={{
          rotateX: { type: "spring", damping: 30, stiffness: 200 },
          rotateY: { type: "spring", damping: 30, stiffness: 200 },
        }}
        className="relative my-auto flex flex-col items-center justify-center w-full max-w-5xl px-4 text-center"
      >
        {/* 1. LARGE HACKRIT LOGO */}
        <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl flex items-center justify-center my-3 sm:my-6">
          <Image
            src="/logo.png"
            alt="HackRIT Logo"
            width={1536}
            height={1024}
            priority
            className="w-full h-auto max-h-[190px] sm:max-h-[290px] md:max-h-[360px] lg:max-h-[430px] object-contain select-none"
          />
        </div>

        {/* 2. 24 HOUR HACKATHON */}
        <div className="flex flex-col items-center mt-4 sm:mt-6 space-y-1 sm:space-y-2">
          {/* 24 HOUR */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.12em] uppercase text-white font-futuristic leading-tight">
            <span className="text-[#dc2626]">24</span> HOUR
          </h1>

          {/* HACKATHON */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.12em] uppercase text-white font-futuristic leading-tight">
            HACKATHON
          </h2>
        </div>

        {/* 3. SUBHEAD TEXT */}
        <div className="mt-6 sm:mt-8 max-w-2xl px-2">
          <p className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.14em] sm:tracking-[0.18em] text-white/90 uppercase leading-relaxed font-mono">
            OF DEVX 2.0 ORGANIZED BY GOOGLE DEVELOPERS GROUP<br className="hidden sm:inline" /> ON CAMPUS TIU
          </p>
        </div>

        {/* 4. LARGE HERO CTA BUTTONS */}
        <div className="mt-10 sm:mt-12 flex flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
          {/* REGISTER NOW BUTTON (Big White Pill with 2-line prominent text & arrow) */}
          <button
            onClick={() => onOpenRegister && onOpenRegister()}
            className="bg-white text-black rounded-full px-8 sm:px-12 py-3.5 sm:py-4 min-h-[64px] sm:min-h-[76px] flex items-center justify-center gap-4 sm:gap-6 hover:bg-neutral-100 active:scale-95 transition-all duration-200 shadow-[0_15px_40px_rgba(255,255,255,0.2)] cursor-pointer group shrink-0"
          >
            <div className="flex flex-col items-center justify-center leading-[1.08] text-center">
              <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.2em] sm:tracking-[0.24em] uppercase text-black">
                REGISTER
              </span>
              <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.2em] sm:tracking-[0.24em] uppercase text-black">
                NOW
              </span>
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          {/* DEVX 2.0 BUTTON (Big Black Pill with Crisp Thin White Border, Larger Logo & arrow) */}
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
            className="bg-black text-white border border-white/80 hover:border-white rounded-full px-8 sm:px-12 py-3.5 sm:py-4 min-h-[64px] sm:min-h-[76px] flex items-center justify-center gap-4 sm:gap-6 hover:bg-white/10 active:scale-95 transition-all duration-200 shadow-[0_15px_40px_rgba(0,0,0,0.8)] cursor-pointer group shrink-0"
          >
            <div className="relative h-6 sm:h-8 md:h-9 w-28 sm:w-36 md:w-44 flex items-center justify-center">
              <Image
                src="/devx2.0logowhite.png"
                alt="DevX 2.0"
                width={180}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
