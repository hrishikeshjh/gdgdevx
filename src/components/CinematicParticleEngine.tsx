"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  color: string;
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
  layer: number; // 0: background, 1: logo halo, 2: foreground
}

const GOOGLE_COLORS = [
  "rgba(255, 255, 255, ",   // White (dominant)
  "rgba(255, 255, 255, ",   // White
  "rgba(66, 133, 244, ",    // Google Blue
  "rgba(251, 188, 5, ",     // Google Yellow
  "rgba(234, 67, 53, ",     // Google Red
  "rgba(52, 168, 83, ",     // Google Green
];

export const CinematicParticleEngine: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 220 : 650;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let isMouseActive = false;

    let lastScrollY = window.scrollY;
    let currentScrollY = window.scrollY;
    let scrollVelocity = 0;

    // Initialize particles
    const particles: Particle[] = [];

    const initParticles = () => {
      particles.length = 0;
      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < particleCount; i++) {
        // Distribute between halo particles around logo and ambient space particles
        const isHalo = i < (isMobile ? 80 : 260);
        const layer = isHalo ? 1 : i % 2 === 0 ? 0 : 2;

        const orbitRadius = isHalo
          ? (isMobile ? 50 : 120) + Math.random() * (isMobile ? 140 : 260)
          : Math.random() * Math.max(width, height) * 0.7;

        const orbitAngle = Math.random() * Math.PI * 2;
        const orbitSpeed = (Math.random() - 0.5) * (isHalo ? 0.008 : 0.003);

        const x = centerX + Math.cos(orbitAngle) * orbitRadius;
        const y = centerY + Math.sin(orbitAngle) * orbitRadius;
        const z = Math.random() * 400 - 150;

        const colorPrefix = GOOGLE_COLORS[Math.floor(Math.random() * GOOGLE_COLORS.length)];
        const size = isHalo ? Math.random() * 2.2 + 0.8 : Math.random() * 1.8 + 0.5;
        const baseAlpha = isHalo ? Math.random() * 0.6 + 0.3 : Math.random() * 0.4 + 0.15;

        particles.push({
          x,
          y,
          z,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size,
          baseAlpha,
          alpha: baseAlpha,
          color: colorPrefix,
          orbitRadius,
          orbitAngle,
          orbitSpeed,
          layer,
        });
      }
    };

    initParticles();

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    // Mouse & Touch Interaction
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isMouseActive = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
        isMouseActive = true;
      }
    };

    const handleTouchEnd = () => {
      isMouseActive = false;
    };

    const handleScroll = () => {
      currentScrollY = window.scrollY;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Render Loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Calculate scroll velocity & dispersion phase
      scrollVelocity = (currentScrollY - lastScrollY) * 0.4;
      lastScrollY += (currentScrollY - lastScrollY) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Calculate scroll progress through hero & event reveal (0 to 1.5)
      const heroHeight = window.innerHeight;
      const scrollProgress = Math.min(Math.max(currentScrollY / heroHeight, 0), 2.5);

      // Transition stages:
      // Phase 0: Hero (progress < 0.2) - orbit around logo
      // Phase 1: Dissolve & Disperse (progress 0.2 -> 1.0) - explode outwards and stream down
      // Phase 2: Reorganize (progress 1.0 -> 1.8) - settle into constellation around Event Reveal cards
      const dispersionFactor = Math.min(scrollProgress * 2.2, 3.5);

      // Render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Orbit update
        p.orbitAngle += p.orbitSpeed * (1 + Math.abs(scrollVelocity) * 0.05);

        // Calculate target base positions
        let targetX = centerX + Math.cos(p.orbitAngle) * (p.orbitRadius + dispersionFactor * (p.layer === 1 ? 260 : 120));
        let targetY = centerY + Math.sin(p.orbitAngle) * (p.orbitRadius + dispersionFactor * (p.layer === 1 ? 260 : 120));

        // When scrolling down, push particles dynamically down/out with velocity
        if (dispersionFactor > 0.1) {
          const angleFromCenter = Math.atan2(p.y - centerY, p.x - centerX);
          targetX += Math.cos(angleFromCenter) * (dispersionFactor * 140);
          targetY += Math.sin(angleFromCenter) * (dispersionFactor * 100) - (currentScrollY * 0.35);
        }

        // Apply mouse / touch fluid repulsion
        if (isMouseActive) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = isMobile ? 120 : 220;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * (isMobile ? 12 : 25);
            p.vx -= (dx / dist) * force * dt * 60;
            p.vy -= (dy / dist) * force * dt * 60;
          }
        }

        // Spring physics toward target
        const ax = (targetX - p.x) * 0.04;
        const ay = (targetY - p.y) * 0.04;

        p.vx = (p.vx + ax) * 0.88;
        p.vy = (p.vy + ay) * 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries for infinite ambient field
        if (p.x < -100) p.x = width + 100;
        if (p.x > width + 100) p.x = -100;
        if (p.y < -100) p.y = height + 100;
        if (p.y > height + 100) p.y = -100;

        // Dynamic depth alpha & size calculation
        const perspective = 350 / (350 + p.z);
        const drawSize = Math.max(0.6, p.size * perspective * (1 + dispersionFactor * 0.3));
        const dynamicAlpha = Math.max(0.05, Math.min(1, p.baseAlpha * perspective * (1 - scrollProgress * 0.15)));

        // Render glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${dynamicAlpha})`;
        ctx.fill();

        // Extra soft bloom for larger/halo particles
        if (p.layer === 1 && drawSize > 1.4 && dynamicAlpha > 0.25) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, drawSize * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${dynamicAlpha * 0.2})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{ willChange: "transform" }}
    />
  );
};
