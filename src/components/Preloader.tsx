"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += 4;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            onComplete();
          }, 400);
        }, 200);
      } else {
        setProgress(current);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white selection:bg-none"
        >
          {/* Official GDG Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6 mb-10"
          >
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 flex items-center justify-center">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-90 animate-pulse" />
              
              <NextImage
                src="/logo.svg"
                alt="GDG Logo"
                width={256}
                height={256}
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                priority
              />
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70 font-mono font-bold text-center px-4">
              GOOGLE DEVELOPER GROUPS ON CAMPUS · TECHNO INDIA UNIVERSITY
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-10"
          >
            DEVX <span className="font-semibold text-white/90">2026</span>
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-64 flex flex-col items-center gap-3">
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="w-full flex justify-between items-center text-xs font-mono text-white/40 tracking-wider">
              <span>LOADING EXPERIENCE</span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
