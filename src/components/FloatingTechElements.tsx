"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Zap, Globe, Code2, Layers, Cloud, Smartphone, Box } from "lucide-react";

export const FloatingTechElements: React.FC = () => {
  const techChips = [
    { label: "GEMINI 1.5", icon: Zap, pos: "top-[18%] left-[4%]", delay: 0, duration: 6 },
    { label: "AGENTIC AI", icon: Cpu, pos: "top-[28%] right-[5%]", delay: 1, duration: 7 },
    { label: "WEB3 & ZK", icon: Shield, pos: "top-[42%] left-[3%]", delay: 0.5, duration: 6.5 },
    { label: "NEXT.JS 15", icon: Globe, pos: "top-[52%] right-[4%]", delay: 1.5, duration: 7.5 },
    { label: "KUBERNETES", icon: Box, pos: "top-[64%] left-[5%]", delay: 2, duration: 8 },
    { label: "FLUTTER", icon: Smartphone, pos: "top-[74%] right-[5%]", delay: 0.8, duration: 6.2 },
    { label: "RUST & SOLICITY", icon: Terminal, pos: "top-[86%] left-[4%]", delay: 1.2, duration: 7 },
    { label: "GOOGLE CLOUD", icon: Cloud, pos: "top-[94%] right-[4%]", delay: 1.8, duration: 6.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden lg:block">
      {techChips.map((chip, idx) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [0, -18, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: chip.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            className={`absolute ${chip.pos} glass-pill px-4 py-2 flex items-center gap-2.5 backdrop-blur-xl border border-white/15 bg-white/[0.04] shadow-2xl`}
          >
            <Icon className="w-3.5 h-3.5 text-white/80" />
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-white/90 uppercase">
              {chip.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
