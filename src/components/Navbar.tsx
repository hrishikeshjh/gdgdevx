"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, X, Phone, Trophy, HelpCircle, Calendar, Layers, Info, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler with Lenis and fallback
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const cleanId = sectionId.replace("#", "");
    const target = document.getElementById(cleanId);
    if (target) {
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -85 });
      } else {
        const topPos = target.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }
  };

  const handleRegisterClick = () => {
    setMobileMenuOpen(false);
    if (onOpenRegister) {
      onOpenRegister();
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-7 py-3 sm:py-3.5 transition-all duration-300 rounded-2xl sm:rounded-[28px] ${
            isScrolled || mobileMenuOpen
              ? "bg-black/90 backdrop-blur-2xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              : "bg-white/[0.05] backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Hackrit Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group text-white decoration-none shrink-0"
            data-cursor="magnetic"
          >
            <div className="relative h-7 sm:h-8 w-24 sm:w-28 flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="Hackrit Logo"
                width={140}
                height={40}
                className="w-full h-full object-contain object-left filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="#tracks"
              onClick={(e) => scrollToSection(e, "tracks")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Domains
            </a>
            <a
              href="#timeline"
              onClick={(e) => scrollToSection(e, "timeline")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Timeline
            </a>
            <a
              href="#prizes"
              onClick={(e) => scrollToSection(e, "prizes")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Prizes
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              FAQs
            </a>
          </div>

          {/* Actions: DevX 2.0 CTA Pill & Register Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Go to DevX 2.0 Pill Button */}
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              data-cursor="magnetic"
              className="glass-pill px-3 sm:px-5 py-2 text-[9px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.12em] text-white bg-gradient-to-r from-[#4285F4]/20 via-white/10 to-[#34A853]/20 backdrop-blur-xl border border-white/30 hover:border-white/70 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-95 flex items-center gap-1.5 group transition-all duration-200 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] animate-led-fast shrink-0" />
              <span className="whitespace-nowrap hidden sm:inline">Go to DevX 2.0</span>
              <span className="whitespace-nowrap sm:hidden">DevX 2.0</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Desktop Register Button */}
            <button
              onClick={handleRegisterClick}
              data-cursor="magnetic"
              className="hidden md:flex glass-pill px-5 py-2 text-xs font-bold tracking-[0.15em] text-white bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 hover:border-white/60 active:scale-95 items-center gap-2 group transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <span>Register</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-4 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-between overflow-y-auto overscroll-contain"
          >
            {/* Ambient Mobile Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#4285F4]/15 blur-3xl rounded-full pointer-events-none" />

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3 pt-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold px-2">
                EVENT NAVIGATION
              </span>

              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="glass-card p-4 flex items-center justify-between text-sm font-bold tracking-wider text-white uppercase border border-white/15 active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-[#4285F4]" />
                  <span>About Hackrit</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>

              <a
                href="#tracks"
                onClick={(e) => scrollToSection(e, "tracks")}
                className="glass-card p-4 flex items-center justify-between text-sm font-bold tracking-wider text-white uppercase border border-white/15 active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Layers className="w-4 h-4 text-[#EA4335]" />
                  <span>Hackathon Domains</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>

              <a
                href="#timeline"
                onClick={(e) => scrollToSection(e, "timeline")}
                className="glass-card p-4 flex items-center justify-between text-sm font-bold tracking-wider text-white uppercase border border-white/15 active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-[#FBBC05]" />
                  <span>Event Timeline</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>

              <a
                href="#prizes"
                onClick={(e) => scrollToSection(e, "prizes")}
                className="glass-card p-4 flex items-center justify-between text-sm font-bold tracking-wider text-white uppercase border border-white/15 active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Trophy className="w-4 h-4 text-[#34A853]" />
                  <span>Prizes & Perks</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>

              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className="glass-card p-4 flex items-center justify-between text-sm font-bold tracking-wider text-white uppercase border border-white/15 active:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-white/70" />
                  <span>FAQs</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40" />
              </a>
            </div>

            {/* Mobile Actions & Quick Contact Support */}
            <div className="space-y-4 pt-6 relative z-10 border-t border-white/10 mt-6">
              {/* Big Mobile Register Button */}
              <button
                onClick={handleRegisterClick}
                className="w-full py-4 glass-pill bg-white text-black font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register Team Now</span>
              </button>

              {/* Quick WhatsApp & Email Support */}
              <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                <a
                  href="https://wa.me/918240490034?text=Hi%20Krish,%20I%20have%20a%20query%20about%20Hackrit%202026."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-pill py-2.5 border border-white/15 flex items-center justify-center gap-1.5 text-white/80 active:bg-white/10"
                >
                  <Phone className="w-3 h-3 text-[#4285F4]" />
                  <span>WhatsApp Krish</span>
                </a>
                <a
                  href="mailto:gdgtiudevxoffcial@gmail.com?subject=DEVX%202.0%20/%20Hackrit%20Inquiry"
                  className="glass-pill py-2.5 border border-white/15 flex items-center justify-center gap-1.5 text-white/80 active:bg-white/10 truncate px-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
