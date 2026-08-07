"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none"
        >
          <nav
            className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-7 py-4 transition-all duration-500 rounded-[28px] ${
              isScrolled
                ? "bg-black/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                : "bg-white/[0.04] backdrop-blur-md border border-white/10"
            }`}
          >
            {/* GDG Logo & Branding */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group text-white decoration-none"
              data-cursor="magnetic"
            >
              <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.svg"
                  alt="GDG Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.15em] text-white flex items-center gap-2 leading-none uppercase">
                  DEVX <span className="text-white/50 font-normal">2.0</span>
                </span>
                <span className="text-[9px] text-white/50 tracking-[0.2em] font-mono uppercase hidden sm:block mt-1">
                  GDG ON CAMPUS · TIU
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#tracks"
                className="hover:text-white transition-colors duration-200"
              >
                Domains
              </a>
              <a
                href="#timeline"
                className="hover:text-white transition-colors duration-200"
              >
                Timeline
              </a>
              <a
                href="#prizes"
                className="hover:text-white transition-colors duration-200"
              >
                Prizes
              </a>
              <Link
                href="/sponsors"
                className="hover:text-white transition-colors duration-200 text-yellow-300/90"
              >
                Sponsors & POCs
              </Link>
            </div>

            {/* Register Button (Does nothing for now) */}
            <button
              onClick={(e) => e.preventDefault()}
              data-cursor="magnetic"
              className="glass-pill px-6 py-2.5 text-xs font-bold tracking-[0.15em] text-white bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/50 flex items-center gap-2 group transition-all duration-300 cursor-default"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
