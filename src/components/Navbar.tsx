"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-2 sm:px-4 md:px-6 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-white rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.6)] text-black transition-all duration-300 gap-2 sm:gap-4 md:gap-6 overflow-hidden">
        {/* HackRIT Logo */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center group decoration-none shrink-0 cursor-pointer pl-1"
        >
          <div className="relative h-8 sm:h-9 md:h-10 w-28 sm:w-36 md:w-40 flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="HackRIT Logo"
              width={240}
              height={75}
              className="w-full h-full object-contain object-left invert transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
        </Link>

        {/* Navigation Tiles */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-[10px] sm:text-[11px] lg:text-xs font-bold tracking-[0.14em] sm:tracking-[0.16em] text-black uppercase overflow-x-auto no-scrollbar py-1 px-1 whitespace-nowrap scroll-smooth">
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
        </div>

        {/* DevX 2.0 Right Action (with top-right arrow UX indicating new page / external link) */}
        <div className="flex items-center shrink-0 pr-0.5 pl-1">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full hover:bg-black/5 active:scale-95 transition-all cursor-pointer group shrink-0"
            title="DevX 2.0"
          >
            <div className="relative h-4 sm:h-5 w-18 sm:w-22 md:w-26 flex items-center">
              <Image
                src="/devx2.0 logo.png"
                alt="DevX 2.0"
                width={110}
                height={26}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        </div>
      </nav>
    </header>
  );
};
