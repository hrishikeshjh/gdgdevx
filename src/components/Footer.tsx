"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Globe, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top HackRIT Logo */}
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="HackRIT Logo"
            width={120}
            height={60}
            className="h-6 sm:h-8 w-auto object-contain mx-auto select-none opacity-90"
          />
        </div>

        {/* Headline */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider uppercase text-white mb-2 font-futuristic">
          HACKRIT 2026 · DEVX 2.0
        </h3>

        {/* Subhead */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.18em] text-white/80 uppercase mb-3">
          SCHOOL OF THE FUTURE × GDG ON CAMPUS TECHNO INDIA UNIVERSITY
        </p>

        {/* Address */}
        <p className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          TECHNO INDIA UNIVERSITY, EM-4, SALT LAKE CITY, SECTOR V, KOLKATA, WEST BENGAL 700091, INDIA
        </p>

        {/* 3 Capsule Cards with Thin Border Black Pills & Bottom Labels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl">
          {/* Card 1: Phone */}
          <div className="flex flex-col items-center">
            <a
              href="https://wa.me/918240490034?text=Hi%20Krish,%20I%20have%20a%20query%20about%20Hackrit%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white border border-white/60 hover:border-white rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-bold hover:bg-white/10 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              <Phone className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span className="truncate">KRISH: +91 82404 90034</span>
            </a>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase mt-3">
              SPONSORSHIP & QUERIES
            </span>
          </div>

          {/* Card 2: Email */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:gdgtiudevxoffcial@gmail.com?subject=Hackrit%202026%20Inquiry"
              className="w-full bg-black text-white border border-white/60 hover:border-white rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-bold hover:bg-white/10 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              <Mail className="w-3.5 h-3.5 text-[#EA4335] shrink-0" />
              <span className="truncate">GDGTIUDEVXOFFCIAL@GMAIL.COM</span>
            </a>
            <div className="flex flex-col items-center text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase mt-3 leading-tight">
              <span>OFFICIAL INQUIRY MAIL</span>
              <span className="text-neutral-500 text-[9px] sm:text-[10px] mt-0.5">11 — 12 SEP 2026</span>
            </div>
          </div>

          {/* Card 3: GDG TIU Portal */}
          <div className="flex flex-col items-center">
            <a
              href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white border border-white/60 hover:border-white rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono font-bold hover:bg-white/10 active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            >
              <Globe className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
              <span className="truncate">GDG TIU PORTAL</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70 shrink-0" />
            </a>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase mt-3">
              KOLKATA, INDIA
            </span>
          </div>
        </div>


        {/* Copyright */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10 w-full text-center">
          <p className="text-[10px] sm:text-xs font-mono text-neutral-500 tracking-wider">
            © 2026 GDG On Campus Techno India University. Founded 2018. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
