"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isBlurringOut, setIsBlurringOut] = useState<boolean>(false);

  useEffect(() => {
    // In the last 1 second (at 7.0s), initiate the smooth blur-out
    const blurTimer = setTimeout(() => {
      setIsBlurringOut(true);
    }, 7000);

    // At 8.0s, complete full animation and unmount
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      onComplete();
    }, 8000);

    return () => {
      clearTimeout(blurTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white selection:bg-none pointer-events-none select-none overflow-hidden"
        >
          {/* Complete 8s Dual-Phase Loading Animation with last-1s blur-out */}
          <motion.div
            animate={
              isBlurringOut
                ? { filter: "blur(24px)", opacity: 0, scale: 0.94 }
                : { filter: "blur(0px)", opacity: 1, scale: 1 }
            }
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="animation-wrapper"
          >
            {/* 0s - 3s: Linear slider rail and target circles */}
            <div className="phase-slider">
              <div className="slider-track" />
              <div className="slider-endpoint endpoint-left" />
              <div className="slider-endpoint endpoint-right" />
              <div className="slider-target-rings" />
              <div className="slider-orb" />
            </div>

            {/* 3s - 8s: Radial radar, rotating arm, and glowing node array */}
            <div className="phase-radar">
              <div className="radar-center-orb" />
              <div className="radar-scanner-arm" />
              <div className="radar-node n1" />
              <div className="radar-node n2" />
              <div className="radar-node n3" />
              <div className="radar-node n4" />
              <div className="radar-node n5" />
              <div className="radar-node n6" />
              <div className="radar-node n7" />
              <div className="radar-node n8" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
