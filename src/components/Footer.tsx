"use client";

import React from "react";
import { Globe, MapPin, Phone, Mail, Share2, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* GDG Logo & Branding */}
        <div className="flex flex-col items-center">
          <div className="relative w-12 h-12 mb-3">
            <Image
              src="/logo.svg"
              alt="GDG Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-3xl font-light tracking-tight text-white block mb-1">
            DEVX <span className="font-semibold text-white/90">2.0</span> · HACKRIT
          </span>
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-white/50">
            SCHOOL OF THE FUTURE × GDG ON CAMPUS TECHNO INDIA UNIVERSITY
          </span>
        </div>

        <p className="text-sm text-white/60 max-w-xl font-light leading-relaxed">
          Techno India University, EM-4, Salt Lake City, Sector V, Kolkata, West Bengal 700091, IN
        </p>

        {/* Contact Info Grid with Actionable Redirect Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono text-white/80 w-full max-w-3xl border-y border-white/5 py-6">
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">CALL / WHATSAPP</span>
            <div className="flex flex-col items-center gap-1">
              <a href="tel:+918240490034" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-blue-400" />
                <span>Krish: +91 82404 90034</span>
              </a>
              <a href="tel:+918017806837" className="hover:text-red-400 transition-colors flex items-center gap-1">
                <Phone className="w-3 h-3 text-red-400" />
                <span>Adarsh: +91 80178 06837</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">EMAIL CONTACT</span>
            <a
              href="mailto:gdgoncampustiu@gmail.com?subject=DEVX%202.0%20/%20Hackrit%20Inquiry"
              className="text-white hover:underline flex items-center gap-1 font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-white/60" />
              <span>gdgoncampustiu@gmail.com</span>
            </a>
            <span className="text-white/40 text-[10px]">11 - 12 SEP 2026</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">COMMUNITY PORTAL</span>
            <a
              href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline flex items-center gap-1 font-bold"
            >
              <Globe className="w-3.5 h-3.5 text-white/60" />
              <span>Official GDG Portal</span>
              <ExternalLink className="w-3 h-3 text-white/40" />
            </a>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="space-y-3 pt-2 w-full">
          <div className="text-sm font-mono tracking-wider text-white/80 flex items-center justify-center gap-2">
            <span>Made by your kitresu</span>
            <a
              href="https://www.instagram.com/hrishikeshhjha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold underline hover:text-yellow-300 transition-colors flex items-center gap-1"
            >
              <span>Hrishikesh Jha</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60" />
            </a>
          </div>

          <div className="text-xs font-mono text-white/30 tracking-wider">
            © 2026 GDG On Campus Techno India University. Founded 2018. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
