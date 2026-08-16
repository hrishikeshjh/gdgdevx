"use client";

import React from "react";

const NOISE_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.35'/%3E%3C/svg%3E`;

interface CloudOrbProps {
  className?: string;
  isRight?: boolean;
}

const CloudOrb: React.FC<CloudOrbProps> = ({ className, isRight = false }) => {
  return (
    <div
      className={`absolute pointer-events-none transform-gpu will-change-transform ${className}`}
      style={{
        maskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 45%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.5) 45%, transparent 75%)",
      }}
    >
      {/* 1. Base Gradient Orb */}
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(180deg, #FFFEFE 27.88%, #848484 67.31%, #A3A0A0 100%)",
          filter: "blur(120px) sm:blur(180px)",
          transform: isRight
            ? "matrix(0.33, 0.94, -0.94, 0.35, 0, 0)"
            : "matrix(-0.33, -0.94, 0.94, -0.35, 0, 0)",
        }}
      />

      {/* 2. Grainy Texture Masked to White Cloud Portion (desktop only to prevent mobile SVG filter flickering) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full mix-blend-overlay opacity-35"
        style={{
          backgroundImage: `url("${NOISE_DATA_URI}")`,
          backgroundRepeat: "repeat",
          transform: isRight
            ? "matrix(0.33, 0.94, -0.94, 0.35, 0, 0)"
            : "matrix(-0.33, -0.94, 0.94, -0.35, 0, 0)",
        }}
      />
    </div>
  );
};

export const CloudyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Hero Top-Left Cloud */}
      <CloudOrb
        className="w-[500px] sm:w-[950px] md:w-[1200px] h-[450px] sm:h-[800px] md:h-[1020px] -top-[100px] sm:-top-[140px] -left-[200px] sm:-left-[380px] opacity-40 sm:opacity-55"
      />

      {/* 2. Hero Middle-Right Cloud */}
      <CloudOrb
        isRight
        className="w-[450px] sm:w-[850px] md:w-[1100px] h-[400px] sm:h-[720px] md:h-[950px] top-[260px] sm:top-[340px] -right-[200px] sm:-right-[380px] opacity-35 sm:opacity-50"
      />

      {/* 3. About / Stats Left Cloud */}
      <CloudOrb
        className="w-[450px] sm:w-[850px] md:w-[1100px] h-[400px] sm:h-[720px] md:h-[940px] top-[20%] -left-[200px] sm:-left-[380px] opacity-30 sm:opacity-45"
      />

      {/* 4. Domains / Tracks Right Cloud */}
      <CloudOrb
        isRight
        className="w-[450px] sm:w-[850px] md:w-[1100px] h-[400px] sm:h-[720px] md:h-[940px] top-[38%] -right-[200px] sm:-right-[380px] opacity-30 sm:opacity-45"
      />

      {/* 5. Timeline Left Cloud */}
      <CloudOrb
        className="w-[500px] sm:w-[950px] md:w-[1200px] h-[450px] sm:h-[800px] md:h-[1020px] top-[54%] -left-[220px] sm:-left-[400px] opacity-35 sm:opacity-50"
      />

      {/* 6. Prizes / FAQs Right Cloud */}
      <CloudOrb
        isRight
        className="w-[500px] sm:w-[950px] md:w-[1200px] h-[450px] sm:h-[800px] md:h-[1020px] top-[72%] -right-[220px] sm:-right-[400px] opacity-35 sm:opacity-50"
      />

      {/* 7. Venue / Reach Out Bottom-Left Cloud */}
      <CloudOrb
        className="w-[450px] sm:w-[850px] md:w-[1100px] h-[400px] sm:h-[720px] md:h-[940px] top-[86%] -left-[180px] sm:-left-[360px] opacity-30 sm:opacity-45"
      />
    </div>
  );
};

