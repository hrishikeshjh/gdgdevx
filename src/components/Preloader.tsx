"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";

interface PreloaderProps {
  onComplete: (images: HTMLImageElement[]) => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const totalFrames = 100;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      const frameIndexStr = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameIndexStr}.png`;

      img.onload = () => {
        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalFrames) * 100);
        setProgress(currentProgress);

        if (loadedCount === totalFrames) {
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              onComplete(loadedImages);
            }, 600);
          }, 300);
        }
      };

      img.onerror = () => {
        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalFrames) * 100);
        setProgress(currentProgress);
        if (loadedCount === totalFrames) {
          setIsFinished(true);
          onComplete(loadedImages);
        }
      };

      loadedImages[i - 1] = img;
    }
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <div className="relative w-16 h-16">
              <NextImage
                src="/logo.svg"
                alt="GDG Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-medium">
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
