"use client";

import React from "react";
import { Globe, MapPin, Phone, Mail, ExternalLink, Sparkles, MessageCircle } from "lucide-react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 bg-black/60 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Hackrit Logo & Branding */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-3">
            <Image
              src="/logo.png"
              alt="Hackrit Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </div>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white block mb-1 uppercase">
            HACKRIT <span className="text-white/60 font-normal">2026</span> · DEVX 2.0
          </span>
          <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] font-mono text-white/50 px-2">
            SCHOOL OF THE FUTURE × GDG ON CAMPUS TECHNO INDIA UNIVERSITY
          </span>
        </div>

        <p className="text-xs sm:text-sm text-white/60 max-w-xl font-light leading-relaxed px-2">
          Techno India University, EM-4, Salt Lake City, Sector V, Kolkata, West Bengal 700091, India
        </p>

        {/* Contact Info Grid with Actionable Direct Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono text-white/80 w-full max-w-3xl border-y border-white/10 py-6">
          {/* WhatsApp & Call POC */}
          <div className="glass-card p-4 flex flex-col items-center justify-between gap-2 border border-white/15 rounded-2xl">
            <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
              LEAD POC (CALL / WHATSAPP)
            </span>
            <a
              href="https://wa.me/918240490034?text=Hi%20Krish,%20I%20have%20a%20query%20about%20Hackrit%202026."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3 py-2 w-full text-center border border-white/20 hover:border-white/50 active:bg-white/10 flex items-center justify-center gap-1.5 text-[11px] font-bold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#4285F4]" />
              <span>Krish: +91 82404 90034</span>
            </a>
            <span className="text-white/40 text-[10px]">SPONSORSHIP & QUERIES</span>
          </div>

          {/* Email Support */}
          <div className="glass-card p-4 flex flex-col items-center justify-between gap-2 border border-white/15 rounded-2xl">
            <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
              OFFICIAL INQUIRY MAIL
            </span>
            <a
              href="mailto:gdgtiudevxoffcial@gmail.com?subject=DEVX%202.0%20/%20Hackrit%20Inquiry"
              className="glass-pill px-3 py-2 w-full text-center border border-white/20 hover:border-white/50 active:bg-white/10 flex items-center justify-center gap-1.5 text-[11px] font-bold text-white transition-all truncate"
            >
              <Mail className="w-3.5 h-3.5 text-[#EA4335] shrink-0" />
              <span className="truncate">gdgtiudevxoffcial@gmail.com</span>
            </a>
            <span className="text-white/40 text-[10px]">11 - 12 SEP 2026</span>
          </div>

          {/* GDG Community Portal */}
          <div className="glass-card p-4 flex flex-col items-center justify-between gap-2 border border-white/15 rounded-2xl">
            <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
              OFFICIAL COMMUNITY
            </span>
            <a
              href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill px-3 py-2 w-full text-center border border-white/20 hover:border-white/50 active:bg-white/10 flex items-center justify-center gap-1.5 text-[11px] font-bold text-white transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
              <span>GDG TIU Portal</span>
              <ExternalLink className="w-3 h-3 text-white/50" />
            </a>
            <span className="text-white/40 text-[10px]">KOLKATA, INDIA</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 w-full">
          <div className="text-[10px] sm:text-xs font-mono text-white/40 tracking-wider px-2">
            © 2026 GDG On Campus Techno India University. Founded 2018. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
