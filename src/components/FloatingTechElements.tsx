"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Terminal,
  Shield,
  Zap,
  Globe,
  Box,
  Database,
  Sparkles,
  Atom,
  Lock,
  Smartphone,
  Cloud,
  Network,
  Server,
  HardDrive,
} from "lucide-react";

export const FloatingTechElements: React.FC = () => {
  // Computer Hardware Status Modules with subtle single-color glow
  const computerWidgets = [
    {
      title: "MAIN FRAME",
      status: "SYSTEM ONLINE",
      pos: "top-[14%] right-[8%]",
      icon: Server,
      delay: 0.2,
      duration: 7,
    },
    {
      title: "GPU CLUSTER",
      status: "ACTIVE // 99.4%",
      pos: "top-[34%] left-[6%]",
      icon: Cpu,
      delay: 1.1,
      duration: 8,
    },
    {
      title: "PORT: 8080",
      status: "LISTENING...",
      pos: "top-[58%] right-[6%]",
      icon: Terminal,
      delay: 0.7,
      duration: 7.5,
    },
    {
      title: "SYS ENCRYPTION",
      status: "256-BIT ZK",
      pos: "top-[80%] left-[5%]",
      icon: HardDrive,
      delay: 1.5,
      duration: 8.5,
    },
  ];

  // Server Activity Status Strips (single-color monochromatic glow)
  const serverLightStrips = [
    {
      pos: "top-[25%] left-[2.5%]",
      label: "CLUSTER-01",
      delay: 0.4,
      duration: 7,
    },
    {
      pos: "top-[70%] right-[3%]",
      label: "NODE-ARRAY",
      delay: 1.3,
      duration: 8,
    },
  ];

  // Terminal Floating Elements
  const terminalPrompts = [
    {
      text: "root@hackrit:~$ ./run_model.sh",
      pos: "top-[43%] left-[10%]",
      delay: 0.9,
      duration: 8,
    },
    {
      text: "PING google.com (142.250.190.46): 56 bytes",
      pos: "top-[90%] right-[10%]",
      delay: 1.8,
      duration: 7.5,
    },
  ];

  const techChips = [
    { label: "GEMINI 1.5 PRO", icon: Zap, pos: "top-[10%] left-[3%]", delay: 0, duration: 7 },
    { label: "AGENTIC AI SYSTEMS", icon: Cpu, pos: "top-[20%] right-[4%]", delay: 1, duration: 8 },
    { label: "CLAUDE 3.5 SONNET", icon: Sparkles, pos: "top-[16%] left-[78%]", delay: 0.3, duration: 7.5 },
    { label: "WEB3 & ZK PROOFS", icon: Shield, pos: "top-[30%] left-[2%]", delay: 0.5, duration: 7 },
    { label: "NEXT.JS 15 & REACT", icon: Globe, pos: "top-[36%] right-[3%]", delay: 1.5, duration: 8.5 },
    { label: "PYTORCH & TENSORFLOW", icon: Atom, pos: "top-[48%] left-[3%]", delay: 0.8, duration: 8 },
    { label: "KUBERNETES & DOCKER", icon: Box, pos: "top-[52%] right-[4%]", delay: 2, duration: 9 },
    { label: "RUST & SOLIDITY", icon: Terminal, pos: "top-[62%] left-[3%]", delay: 1.2, duration: 7.8 },
    { label: "CYBERSECURITY & ZK", icon: Lock, pos: "top-[66%] right-[5%]", delay: 0.4, duration: 7.2 },
    { label: "FLUTTER & KOTLIN", icon: Smartphone, pos: "top-[76%] left-[3%]", delay: 0.8, duration: 7 },
    { label: "GOOGLE CLOUD & GCP", icon: Cloud, pos: "top-[84%] right-[4%]", delay: 1.8, duration: 7.5 },
    { label: "GRAPHQL & REST", icon: Network, pos: "top-[88%] left-[3%]", delay: 1.1, duration: 8.2 },
    { label: "VECTOR DB & FAISS", icon: Database, pos: "top-[94%] right-[3%]", delay: 1.6, duration: 8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
      {/* Computer Server Status Cards */}
      {computerWidgets.map((widget, idx) => {
        const Icon = widget.icon;
        return (
          <motion.div
            key={`comp-${idx}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.18, 0.35, 0.18],
              y: [0, -12, 0],
            }}
            transition={{
              duration: widget.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: widget.delay,
            }}
            className={`absolute ${widget.pos} px-3.5 py-2 flex items-center gap-2.5 backdrop-blur-xl border border-white/10 rounded-2xl bg-white/[0.02] shadow-[0_0_15px_rgba(255,255,255,0.03)]`}
          >
            {/* Subtle Monochrome LED Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.4)] animate-led-pulse" />

            <Icon className="w-3.5 h-3.5 text-white/50 shrink-0" />
            <div className="flex flex-col text-left">
              <span className="text-[8px] font-mono font-bold tracking-widest text-white/70 uppercase leading-tight">
                {widget.title}
              </span>
              <span className="text-[7px] font-mono text-white/40 tracking-wider leading-tight">
                {widget.status}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Server Rack Light Strips */}
      {serverLightStrips.map((strip, idx) => (
        <motion.div
          key={`strip-${idx}`}
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: strip.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: strip.delay,
          }}
          className={`absolute ${strip.pos} px-3 py-1.5 flex flex-col gap-1 backdrop-blur-xl border border-white/10 rounded-xl bg-white/[0.02]`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[7px] font-mono font-bold text-white/30 tracking-widest uppercase">
              {strip.label}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3].map((lIdx) => (
              <span
                key={lIdx}
                className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-led-pulse"
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Terminal Blinking Cursor Elements */}
      {terminalPrompts.map((term, idx) => (
        <motion.div
          key={`term-${idx}`}
          animate={{
            y: [0, -8, 0],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: term.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: term.delay,
          }}
          className={`absolute ${term.pos} px-3 py-1 flex items-center gap-1.5 backdrop-blur-md bg-black/40 border border-white/10 rounded-full`}
        >
          <span className="text-[9px] font-mono text-white/60 font-medium tracking-wider">
            {term.text}
          </span>
          <span className="w-1 h-2.5 bg-white/60 inline-block animate-cursor-blink" />
        </motion.div>
      ))}

      {/* Tech Chips with Subtle Monochromatic Glow */}
      {techChips.map((chip, idx) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={`chip-${idx}`}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.18, 0.38, 0.18],
              y: [0, -14, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: chip.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            className={`absolute ${chip.pos} px-3 py-1.5 flex items-center gap-2 backdrop-blur-xl border border-white/12 rounded-full bg-white/[0.02] shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:border-white/30 transition-colors`}
          >
            {/* Subtle Monochromatic Dot */}
            <span className="w-1 h-1 rounded-full bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.4)]" />

            <Icon className="w-3 h-3 text-white/60 shrink-0" />
            <span className="text-[9px] font-mono font-medium tracking-[0.15em] text-white/60 uppercase whitespace-nowrap">
              {chip.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
