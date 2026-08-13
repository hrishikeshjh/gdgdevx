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
    const startTime = Date.now();
    const duration = 2000; // Exactly 2 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setIsFinished(true);
          onComplete();
        }, 200);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white selection:bg-none pointer-events-none"
        >
          {/* Centered Composition: Logo -> Custom .loader -> Loading Bar */}
          <div className="flex flex-col items-center justify-center gap-10 sm:gap-12">
            {/* HackRIT Logo */}
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
              <NextImage
                src="/logo.png"
                alt="Hackrit Logo"
                width={256}
                height={256}
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                priority
              />
            </div>

            {/* Custom Conic Square Loader Animation */}
            <div className="loader" />

            {/* Minimal Monochrome Loading Bar */}
            <div className="w-48 sm:w-60 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
