"use client";

import React from "react";

interface CloudOrbProps {
  className?: string;
  glowColor?: string;
}

const CloudOrb: React.FC<CloudOrbProps> = ({
  className,
  glowColor = "rgba(255, 255, 255, 0.04)",
}) => {
  return (
    <div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, ${glowColor} 0%, rgba(255, 255, 255, 0.01) 45%, transparent 70%)`,
        filter: "blur(120px)",
      }}
    />
  );
};

export const CloudyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Hero Top-Left Subtle Ambient Glow */}
      <CloudOrb
        className="w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] -top-[100px] -left-[200px]"
        glowColor="rgba(255, 255, 255, 0.05)"
      />

      {/* 2. Hero Middle-Right Subtle Ambient Glow */}
      <CloudOrb
        className="w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] top-[180px] sm:top-[280px] -right-[200px]"
        glowColor="rgba(255, 255, 255, 0.04)"
      />

      {/* 3. About Section Subtle Ambient */}
      <CloudOrb
        className="w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] top-[20%] -left-[200px]"
        glowColor="rgba(255, 255, 255, 0.03)"
      />

      {/* 4. Domains / Tracks Subtle Ambient */}
      <CloudOrb
        className="w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] top-[38%] -right-[200px]"
        glowColor="rgba(255, 255, 255, 0.03)"
      />

      {/* 5. Timeline / Prizes Subtle Ambient */}
      <CloudOrb
        className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] top-[58%] -left-[250px]"
        glowColor="rgba(255, 255, 255, 0.03)"
      />

      {/* 6. Footer / Reach Out Bottom Ambient */}
      <CloudOrb
        className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] top-[80%] -right-[250px]"
        glowColor="rgba(255, 255, 255, 0.03)"
      />
    </div>
  );
};
