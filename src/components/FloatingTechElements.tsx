"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Terminal,
  Shield,
  Zap,
  Globe,
  Code2,
  Cloud,
  Smartphone,
  Box,
  Database,
  Sparkles,
  Atom,
  Lock,
  Workflow,
  Network,
  Radio,
  Server,
  Activity,
  HardDrive,
  CheckCircle2,
  Wifi,
} from "lucide-react";

export const FloatingTechElements: React.FC = () => {
  // Computer Hardware Status Modules with Blinking LEDs
  const computerWidgets = [
    {
      title: "MAIN FRAME",
      status: "SYSTEM ONLINE",
      ledColor: "bg-emerald-400 shadow-[0_0_12px_#34d399]",
      blinkSpeed: "animate-led-pulse",
      pos: "top-[14%] right-[8%]",
      icon: Server,
      delay: 0.2,
      duration: 6.5,
    },
    {
      title: "GPU CLUSTER",
      status: "ACTIVE // 99.4%",
      ledColor: "bg-cyan-400 shadow-[0_0_12px_#22d3ee]",
      blinkSpeed: "animate-led-fast",
      pos: "top-[34%] left-[6%]",
      icon: Cpu,
      delay: 1.1,
      duration: 7.2,
    },
    {
      title: "PORT: 8080",
      status: "LISTENING...",
      ledColor: "bg-green-400 shadow-[0_0_12px_#4ade80]",
      blinkSpeed: "animate-led-pulse",
      pos: "top-[58%] right-[6%]",
      icon: Terminal,
      delay: 0.7,
      duration: 6.8,
    },
    {
      title: "SYS ENCRYPTION",
      status: "256-BIT ZK",
      ledColor: "bg-purple-400 shadow-[0_0_12px_#c084fc]",
      blinkSpeed: "animate-led-fast",
      pos: "top-[80%] left-[5%]",
      icon: HardDrive,
      delay: 1.5,
      duration: 7.6,
    },
  ];

  // Server Activity Blinking Light Strips (Data Center Hardware Effect)
  const serverLightStrips = [
    {
      pos: "top-[25%] left-[2.5%]",
      lights: [
        { color: "bg-emerald-400 shadow-[0_0_8px_#34d399]", fast: true },
        { color: "bg-emerald-400 shadow-[0_0_8px_#34d399]", fast: false },
        { color: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]", fast: true },
        { color: "bg-amber-400 shadow-[0_0_8px_#fbbf24]", fast: false },
      ],
      label: "CLUSTER-01",
      delay: 0.4,
      duration: 6,
    },
    {
      pos: "top-[70%] right-[3%]",
      lights: [
        { color: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]", fast: false },
        { color: "bg-blue-400 shadow-[0_0_8px_#60a5fa]", fast: true },
        { color: "bg-emerald-400 shadow-[0_0_8px_#34d399]", fast: true },
        { color: "bg-rose-400 shadow-[0_0_8px_#fb7185]", fast: false },
      ],
      label: "NODE-ARRAY",
      delay: 1.3,
      duration: 7.5,
    },
  ];

  // Terminal Blinking Cursor Floating Elements
  const terminalPrompts = [
    {
      text: "root@devx2.0:~$ ./deploy_ai.sh",
      pos: "top-[43%] left-[10%]",
      delay: 0.9,
      duration: 7.8,
    },
    {
      text: "PING google.com (142.250.190.46): 56 bytes",
      pos: "top-[90%] right-[10%]",
      delay: 1.8,
      duration: 6.9,
    },
  ];

  const techChips = [
    { label: "GEMINI 1.5 PRO", icon: Zap, pos: "top-[10%] left-[3%]", delay: 0, duration: 6, led: "bg-emerald-400" },
    { label: "AGENTIC AI SYSTEMS", icon: Cpu, pos: "top-[20%] right-[4%]", delay: 1, duration: 7, led: "bg-blue-400" },
    { label: "CLAUDE 3.5 SONNET", icon: Sparkles, pos: "top-[16%] left-[78%]", delay: 0.3, duration: 6.8, led: "bg-purple-400" },
    { label: "WEB3 & ZK PROOFS", icon: Shield, pos: "top-[30%] left-[2%]", delay: 0.5, duration: 6.5, led: "bg-cyan-400" },
    { label: "NEXT.JS 15 & REACT", icon: Globe, pos: "top-[36%] right-[3%]", delay: 1.5, duration: 7.5, led: "bg-white" },
    { label: "PYTORCH & TENSORFLOW", icon: Atom, pos: "top-[48%] left-[3%]", delay: 0.8, duration: 7.2, led: "bg-amber-400" },
    { label: "KUBERNETES & DOCKER", icon: Box, pos: "top-[52%] right-[4%]", delay: 2, duration: 8, led: "bg-blue-400" },
    { label: "RUST & SOLIDITY", icon: Terminal, pos: "top-[62%] left-[3%]", delay: 1.2, duration: 7, led: "bg-emerald-400" },
    { label: "CYBERSECURITY & ZK", icon: Lock, pos: "top-[66%] right-[5%]", delay: 0.4, duration: 6.4, led: "bg-rose-400" },
    { label: "FLUTTER & KOTLIN", icon: Smartphone, pos: "top-[76%] left-[3%]", delay: 0.8, duration: 6.2, led: "bg-cyan-400" },
    { label: "GOOGLE CLOUD & GCP", icon: Cloud, pos: "top-[84%] right-[4%]", delay: 1.8, duration: 6.8, led: "bg-blue-400" },
    { label: "GRAPHQL & REST", icon: Network, pos: "top-[88%] left-[3%]", delay: 1.1, duration: 7.4, led: "bg-pink-400" },
    { label: "VECTOR DB & FAISS", icon: Database, pos: "top-[94%] right-[3%]", delay: 1.6, duration: 7.1, led: "bg-emerald-400" },
  ];

  const ambientOrbs = [
    { pos: "top-[10%] left-[15%]", size: "w-72 h-72", color: "bg-blue-600/10", duration: 10, delay: 0 },
    { pos: "top-[35%] right-[10%]", size: "w-96 h-96", color: "bg-purple-600/10", duration: 12, delay: 2 },
    { pos: "top-[60%] left-[8%]", size: "w-80 h-80", color: "bg-cyan-600/10", duration: 11, delay: 1 },
    { pos: "top-[85%] right-[15%]", size: "w-96 h-96", color: "bg-indigo-600/10", duration: 13, delay: 3 },
  ];

  const floatingSymbols = [
    { symbol: "</>", pos: "top-[15%] right-[25%]", delay: 0.2, duration: 5.5 },
    { symbol: "{ }", pos: "top-[30%] left-[20%]", delay: 1.4, duration: 6.5 },
    { symbol: "0101011", pos: "top-[50%] left-[22%]", delay: 0.7, duration: 7 },
    { symbol: "◈ 0x7F4A", pos: "top-[70%] right-[22%]", delay: 1.9, duration: 6 },
    { symbol: "⚡ 2.8GHz", pos: "top-[90%] left-[25%]", delay: 0.5, duration: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
      {/* Glowing Background Ambient Orbs */}
      {ambientOrbs.map((orb, idx) => (
        <motion.div
          key={`orb-${idx}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          className={`absolute ${orb.pos} ${orb.size} ${orb.color} rounded-full blur-3xl`}
        />
      ))}

      {/* Blinking Computer Server Status Cards */}
      {computerWidgets.map((widget, idx) => {
        const Icon = widget.icon;
        return (
          <motion.div
            key={`comp-${idx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.4, 0.9, 0.4],
              y: [0, -14, 0],
            }}
            transition={{
              duration: widget.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: widget.delay,
            }}
            className={`absolute ${widget.pos} glass-card px-4 py-2.5 flex items-center gap-3 backdrop-blur-2xl border border-white/20 bg-black/40 shadow-xl`}
          >
            {/* Blinking Hardware LED Light */}
            <span className={`w-2.5 h-2.5 rounded-full ${widget.ledColor} ${widget.blinkSpeed}`} />

            <Icon className="w-4 h-4 text-white/80 shrink-0" />
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-mono font-bold tracking-widest text-white/90 uppercase leading-tight">
                {widget.title}
              </span>
              <span className="text-[8px] font-mono text-white/50 tracking-wider leading-tight">
                {widget.status}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Blinking Server Rack Light Strips */}
      {serverLightStrips.map((strip, idx) => (
        <motion.div
          key={`strip-${idx}`}
          animate={{
            y: [0, -12, 0],
            opacity: [0.5, 0.95, 0.5],
          }}
          transition={{
            duration: strip.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: strip.delay,
          }}
          className={`absolute ${strip.pos} glass-card px-3 py-2 flex flex-col gap-1.5 backdrop-blur-xl border border-white/15 bg-black/50`}
        >
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-mono font-bold text-white/40 tracking-widest uppercase">
              {strip.label}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {strip.lights.map((light, lIdx) => (
              <span
                key={lIdx}
                className={`w-2 h-2 rounded-full ${light.color} ${
                  light.fast ? "animate-led-fast" : "animate-led-pulse"
                }`}
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
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: term.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: term.delay,
          }}
          className={`absolute ${term.pos} glass-pill px-3 py-1.5 flex items-center gap-2 backdrop-blur-md bg-black/60 border border-white/15`}
        >
          <span className="text-[10px] font-mono text-green-400 font-bold tracking-wider">
            {term.text}
          </span>
          <span className="w-1.5 h-3 bg-green-400 inline-block animate-cursor-blink" />
        </motion.div>
      ))}

      {/* Floating Subtle Tech Symbols */}
      {floatingSymbols.map((item, idx) => (
        <motion.div
          key={`sym-${idx}`}
          animate={{
            y: [0, -15, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
          className={`absolute ${item.pos} font-mono text-xs font-bold text-white/40 tracking-widest`}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Tech Chips with Blinking Status Indicator Dots */}
      {techChips.map((chip, idx) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={`chip-${idx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.35, 0.8, 0.35],
              y: [0, -18, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: chip.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            className={`absolute ${chip.pos} glass-pill px-3.5 py-1.5 flex items-center gap-2 backdrop-blur-xl border border-white/15 bg-white/[0.04] shadow-lg`}
          >
            {/* Blinking Mini LED Indicator Dot */}
            <span className={`w-1.5 h-1.5 rounded-full ${chip.led} animate-led-pulse`} />

            <Icon className="w-3.5 h-3.5 text-white/80 shrink-0" />
            <span className="text-[10px] font-mono font-bold tracking-[0.15em] text-white/90 uppercase whitespace-nowrap">
              {chip.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
