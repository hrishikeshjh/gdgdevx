"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Globe, ExternalLink } from "lucide-react";

export const ReachOutSection: React.FC = () => {
  return (
    <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Single Exact Venue & Contact White Tile */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white text-black rounded-[30px] sm:rounded-[36px] p-7 sm:p-10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] border border-neutral-100 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 transform-gpu"
        >

          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Top Venue Tag */}
            <div className="flex items-center gap-2 mb-2 text-[#EA4335]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                OFFICIAL EVENT VENUE
              </span>
            </div>

            {/* University Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase leading-tight font-futuristic text-black mb-3">
              TECHNO INDIA<br />UNIVERSITY
            </h3>

            {/* Address */}
            <p className="text-[10px] sm:text-xs text-neutral-600 font-mono tracking-wider uppercase leading-relaxed mb-6">
              EM-4, SALT LAKE CITY, SECTOR V, KOLKATA, WEST BENGAL 700091, INDIA
            </p>

            {/* Left Contact Pills (Phone & Email) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Phone Pill */}
              <a
                href="https://wa.me/918240490034?text=Hi%20Krish,%20I%20have%20a%20query%20about%20Hackrit%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white rounded-full px-5 py-2.5 inline-flex items-center gap-2.5 text-xs font-mono font-bold hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-white/80" />
                <span>KRISH: +91 82404 90034</span>
              </a>

              {/* Email Pill */}
              <a
                href="mailto:gdgtiudevxoffcial@gmail.com?subject=Hackrit%202026%20Inquiry"
                className="bg-black text-white rounded-full px-5 py-2.5 inline-flex items-center gap-2.5 text-xs font-mono font-bold hover:bg-neutral-800 active:scale-95 transition-all shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#EA4335] shrink-0" />
                <span>GDGTIUDEVXOFFCIAL@GMAIL.COM</span>
              </a>
            </div>
          </div>

          {/* Right Action Button (Official GDG Portal) */}
          <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
            <a
              href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white rounded-full px-7 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold hover:bg-neutral-800 active:scale-95 transition-all shadow-xl w-full sm:w-auto"
            >
              <Globe className="w-4 h-4 text-[#4285F4] shrink-0" />
              <span className="tracking-wider uppercase">OFFICIAL GDG PORTAL</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70 shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
