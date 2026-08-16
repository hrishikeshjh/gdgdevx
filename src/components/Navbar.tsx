"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  // Smooth scroll handler with Lenis and fallback
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

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
    if (onOpenRegister) {
      onOpenRegister();
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-2 sm:px-4 md:px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-6xl px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-black transition-all duration-300 gap-2 sm:gap-4 md:gap-6 overflow-hidden">
        {/* HackRIT Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group decoration-none shrink-0 cursor-pointer pl-1"
        >
          <div className="relative h-6 sm:h-7 md:h-8 w-20 sm:w-28 md:w-32 flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="HackRIT Logo"
              width={200}
              height={60}
              className="w-full h-full object-contain object-left invert transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Navigation Tiles - Directly visible on all screens (including mobile) */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-7 text-[10px] sm:text-[11px] lg:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] text-black uppercase overflow-x-auto no-scrollbar py-1 px-1 whitespace-nowrap scroll-smooth">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="hover:opacity-60 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            ABOUT
          </a>
          <a
            href="#tracks"
            onClick={(e) => scrollToSection(e, "tracks")}
            className="hover:opacity-60 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            DOMAINS
          </a>
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, "timeline")}
            className="hover:opacity-60 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            TIMELINE
          </a>
          <a
            href="#prizes"
            onClick={(e) => scrollToSection(e, "prizes")}
            className="hover:opacity-60 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            PRIZES
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection(e, "faq")}
            className="hover:opacity-60 transition-opacity duration-200 cursor-pointer shrink-0"
          >
            FAQS
          </a>

          {/* DevX 2.0 Tile inside navbar items */}
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="flex items-center gap-1 hover:opacity-75 transition-opacity cursor-pointer group shrink-0 pl-1"
            title="DevX 2.0"
          >
            <div className="relative h-4 sm:h-5 w-16 sm:w-20 md:w-24 flex items-center">
              <Image
                src="/devx2.0 logo.png"
                alt="DevX 2.0"
                width={100}
                height={24}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <ArrowRight className="w-3 h-3 text-black group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
        </div>

        {/* Register Button - Framed cleanly inside pill */}
        <div className="flex items-center shrink-0 pr-0.5">
          <button
            onClick={handleRegisterClick}
            className="bg-black text-white rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] hover:bg-neutral-800 active:scale-95 flex items-center gap-1.5 transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
          >
            <span>REGISTER</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
          </button>
        </div>
      </nav>
    </header>
  );
};
