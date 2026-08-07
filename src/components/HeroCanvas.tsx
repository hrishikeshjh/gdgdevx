"use client";

import React, { useRef, useEffect } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

interface HeroCanvasProps {
  images: HTMLImageElement[];
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ images }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Track global scroll from top of page (0) to bottom of page (1)
  const { scrollYProgress } = useScroll();

  // Ultra-smooth spring physics for Apple inertia across whole page
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 280,
    mass: 0.3,
    restDelta: 0.0001,
  });

  // Camera scale morph effect across whole page
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 0.95]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const progress = Math.max(0, Math.min(1, smoothProgress.get()));
      const rawIndex = progress * (images.length - 1);
      const currentIndex = Math.floor(rawIndex);
      const nextIndex = Math.min(currentIndex + 1, images.length - 1);
      const factor = rawIndex - currentIndex;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const currentImg = images[currentIndex];
      const nextImg = images[nextIndex];

      if (currentImg && currentImg.complete) {
        const imgAspect = currentImg.width / currentImg.height;
        const screenAspect = width / height;

        let drawWidth: number;
        let drawHeight: number;

        if (screenAspect > imgAspect) {
          drawHeight = height * 0.9;
          drawWidth = drawHeight * imgAspect;
        } else {
          drawWidth = width * 0.92;
          drawHeight = drawWidth / imgAspect;
        }

        const x = (width - drawWidth) / 2;
        const y = (height - drawHeight) / 2;

        // Draw current frame
        ctx.globalAlpha = 1 - factor * 0.15;
        ctx.drawImage(currentImg, x, y, drawWidth, drawHeight);

        // Blend next frame seamlessly
        if (nextImg && nextImg.complete && factor > 0.01) {
          ctx.globalAlpha = factor * 0.85;
          ctx.drawImage(nextImg, x, y, drawWidth, drawHeight);
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth * (window.devicePixelRatio || 1);
        canvas.height = window.innerHeight * (window.devicePixelRatio || 1);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [images, smoothProgress]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
      <motion.canvas
        ref={canvasRef}
        style={{ scale }}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
};
