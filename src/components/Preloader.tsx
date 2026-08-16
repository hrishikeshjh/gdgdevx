"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef<boolean>(false);

  const finishLoading = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsFinished(true);
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback if browser blocks
        });
      }
    }

    // Safety fallback timer so preloader never hangs
    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 3500);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black select-none pointer-events-none overflow-hidden"
        >
          <div className="relative w-full h-full max-w-xl md:max-w-2xl max-h-[85vh] flex items-center justify-center p-4">
            <video
              ref={videoRef}
              src="/loading-screen.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={finishLoading}
              className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
