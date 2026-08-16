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
    }, 500);
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

    // Safety fallback timer (10s) to guarantee site accessibility if video decoding fails
    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, 10000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 w-screen h-screen bg-black select-none pointer-events-auto overflow-hidden flex items-center justify-center"
        >
          {/* Fullscreen Video Frame Filling Entire Viewport */}
          <video
            ref={videoRef}
            src="/loading-screen.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={finishLoading}
            className="w-full h-full object-cover"
          />

          {/* Minimal Skip Indicator (top right) */}
          <button
            onClick={finishLoading}
            className="absolute top-6 right-6 z-10 text-[10px] font-mono font-bold tracking-[0.2em] text-white/40 hover:text-white/80 transition-colors uppercase px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer"
          >
            SKIP →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
