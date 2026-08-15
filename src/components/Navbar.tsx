"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Phone, Trophy, HelpCircle, Calendar, Layers, Info, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <header className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-5 sm:px-8 py-2.5 sm:py-3 bg-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-black transition-all duration-300">
          {/* HackRIT Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center group decoration-none shrink-0 cursor-pointer"
          >
            <div className="relative h-6 sm:h-7 w-24 sm:w-28 flex items-center shrink-0">
              <Image
                src="/logo.png"
                alt="HackRIT Logo"
                width={140}
                height={40}
                className="w-full h-full object-contain object-left invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-xs font-bold tracking-[0.18em] text-black uppercase">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              ABOUT
            </a>
            <a
              href="#tracks"
              onClick={(e) => scrollToSection(e, "tracks")}
              className="hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              DOMAINS
            </a>
            <a
              href="#timeline"
              onClick={(e) => scrollToSection(e, "timeline")}
              className="hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              TIMELINE
            </a>
            <a
              href="#prizes"
              onClick={(e) => scrollToSection(e, "prizes")}
              className="hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              PRIZES
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            >
              FAQS
            </a>
          </div>

          {/* Actions: DevX 2.0 Link & Register Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* DevX 2.0 Logo Link with Arrow */}
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="hidden sm:flex items-center gap-1.5 hover:opacity-75 transition-opacity cursor-pointer group"
              title="DevX 2.0"
            >
              <div className="relative h-5 sm:h-6 w-24 sm:w-28 flex items-center">
                <Image
                  src="/devx2.0 logo.png"
                  alt="DevX 2.0"
                  width={120}
                  height={28}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>

            {/* Desktop Register Button */}
            <button
              onClick={handleRegisterClick}
              className="hidden md:flex bg-black text-white rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.15em] hover:bg-neutral-800 active:scale-95 items-center gap-1.5 transition-all duration-200 cursor-pointer shrink-0"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black active:scale-95 transition-all cursor-pointer"
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
                  <Info className="w-4 h-4 text-white/70" />
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
                  <Layers className="w-4 h-4 text-white/70" />
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
                  <Calendar className="w-4 h-4 text-white/70" />
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
                  <Trophy className="w-4 h-4 text-white/70" />
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
                  <Phone className="w-3 h-3 text-white/70" />
                  <span>WhatsApp Krish</span>
                </a>
                <a
                  href="mailto:gdgtiudevxoffcial@gmail.com?subject=DEVX%202.0%20/%20Hackrit%20Inquiry"
                  className="glass-pill py-2.5 border border-white/15 flex items-center justify-center gap-1.5 text-white/80 active:bg-white/10 truncate px-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
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
