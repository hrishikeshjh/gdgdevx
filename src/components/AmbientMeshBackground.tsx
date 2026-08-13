"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientMeshBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-black">
      {/* Top Left: Google Blue Ambient Orb */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.12, 0.95, 1],
          opacity: [0.14, 0.22, 0.16, 0.14],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] -left-[10%] w-[320px] sm:w-[750px] md:w-[900px] h-[320px] sm:h-[750px] md:h-[900px] rounded-full bg-[#4285F4] blur-[90px] sm:blur-[180px] transform-gpu will-change-transform"
      />

      {/* Top Right: Google Red Ambient Orb */}
      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 1.10, 0.92, 1],
          opacity: [0.12, 0.18, 0.13, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -top-[10%] -right-[10%] w-[300px] sm:w-[700px] md:w-[850px] h-[300px] sm:h-[700px] md:h-[850px] rounded-full bg-[#EA4335] blur-[90px] sm:blur-[190px] transform-gpu will-change-transform"
      />

      {/* Mid Left: Google Yellow Ambient Orb */}
      <motion.div
        animate={{
          x: [0, 20, -25, 0],
          y: [0, -20, 25, 0],
          scale: [1, 1.14, 0.9, 1],
          opacity: [0.09, 0.15, 0.10, 0.09],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-[40%] -left-[15%] w-[280px] sm:w-[650px] md:w-[800px] h-[280px] sm:h-[650px] md:h-[800px] rounded-full bg-[#FBBC05] blur-[90px] sm:blur-[200px] transform-gpu will-change-transform"
      />

      {/* Mid Right / Bottom: Google Green Ambient Orb */}
      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.12, 0.94, 1],
          opacity: [0.11, 0.18, 0.12, 0.11],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-[60%] -right-[10%] w-[300px] sm:w-[700px] md:w-[850px] h-[300px] sm:h-[700px] md:h-[850px] rounded-full bg-[#34A853] blur-[90px] sm:blur-[190px] transform-gpu will-change-transform"
      />

      {/* Center Subtle White Core Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-white/[0.03] blur-[80px] sm:blur-[140px] rounded-full pointer-events-none transform-gpu" />

      {/* Subtle Grain Overlay for Cinematic Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
};
