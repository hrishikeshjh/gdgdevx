"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import { Terminal, Cpu, ShieldCheck, Zap } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const TERMINAL_LOGS = [
  "INITIALIZING HACKRIT_CORE_v2.6",
  "HANDSHAKING GDG_ON_CAMPUS_TIU_GRID",
  "COMPILING DEVX_2.0_24H_PROTOCOLS",
  "CALIBRATING SALT_LAKE_SECTOR_V_NODE",
  "SYSTEM_ONLINE // ACCESS_GRANTED",
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [logIndex, setLogIndex] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // Exactly 2 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      // Advance tech log stream
      const currentLog = Math.min(
        TERMINAL_LOGS.length - 1,
        Math.floor((elapsed / duration) * TERMINAL_LOGS.length)
      );
      setLogIndex(currentLog);

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          onComplete();
        }, 250);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 bg-black text-white selection:bg-none overflow-hidden"
        >
          {/* Tech Cyber Grid Background & Scanlines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black pointer-events-none" />

          {/* Ambient Google Color Pulse Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-gradient-to-tr from-[#4285F4]/20 via-[#EA4335]/15 to-[#34A853]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          {/* Top HUD Status Bar */}
          <div className="relative z-10 w-full max-w-5xl flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-white/50 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-ping" />
              <span className="text-white/80 font-bold tracking-widest uppercase">
                GDG TIU // DEVX 2.0
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 tracking-widest text-white/40">
              <span>LAT: 22.57° N</span>
              <span>LNG: 88.43° E</span>
              <span>SALT LAKE SECTOR V</span>
            </div>

            <div className="flex items-center gap-1.5 font-bold text-white/80">
              <span className="text-[#4285F4]">SYS</span>
              <span className="text-[#EA4335]">TEM</span>
              <span className="text-[#FBBC05]">ACT</span>
              <span className="text-[#34A853]">IVE</span>
            </div>
          </div>

          {/* Centerpiece: Tech Radar Rings & Hackrit Logo */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            {/* Concentric Tech HUD Rings */}
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 flex items-center justify-center">
              {/* Outer dashed spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-white/20 pointer-events-none"
              />

              {/* Inner fast counter-spinning radar border */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-white/10 border-t-white/40 pointer-events-none"
              />

              {/* Corner crosshairs */}
              <span className="absolute -top-2 -left-2 text-white/30 text-xs font-mono">+</span>
              <span className="absolute -top-2 -right-2 text-white/30 text-xs font-mono">+</span>
              <span className="absolute -bottom-2 -left-2 text-white/30 text-xs font-mono">+</span>
              <span className="absolute -bottom-2 -right-2 text-white/30 text-xs font-mono">+</span>

              {/* Hackrit Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center p-2"
              >
                <NextImage
                  src="/logo.png"
                  alt="Hackrit Logo"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                  priority
                />
              </motion.div>
            </div>

            {/* Sub-label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-6 text-center space-y-1.5"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white font-mono uppercase">
                HACKRIT <span className="text-white/60">2026</span>
              </h2>
              <p className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white/40 uppercase">
                24-HOUR FLAGSHIP HACKATHON
              </p>
            </motion.div>
          </div>

          {/* Bottom HUD: Dynamic Terminal Log Stream & Precision Progress Bar */}
          <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-4">
            {/* Terminal Live Stream */}
            <div className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-3.5 py-2 flex items-center gap-2.5 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5 text-[#4285F4] shrink-0 animate-pulse" />
              <div className="text-[10px] sm:text-xs font-mono text-white/80 tracking-wider truncate flex-1">
                <span className="text-green-400 font-bold">&gt; </span>
                {TERMINAL_LOGS[logIndex]}
              </div>
              <span className="w-2 h-3.5 bg-white/70 animate-pulse shrink-0" />
            </div>

            {/* Futuristic Progress Bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853] rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>

              <div className="w-full flex justify-between items-center text-[10px] sm:text-xs font-mono text-white/50 tracking-widest font-bold">
                <span className="text-white/40">BUFFERING ASSETS</span>
                <span className="text-white font-mono text-sm tracking-wider">
                  {progress.toString().padStart(2, "0")}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
