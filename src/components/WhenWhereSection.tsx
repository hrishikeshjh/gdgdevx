"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export const WhenWhereSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          {/* White Pill with 4 Google Dots */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white text-black mb-6 shadow-[0_4px_20px_rgba(255,255,255,0.15)] border border-white">
            <div className="flex items-center gap-1 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] uppercase text-black">
              SCHEDULE & VENUE LOCATION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.1em] text-white uppercase leading-tight font-futuristic">
            WHEN & WHERE
          </h2>
        </motion.div>

        {/* 2 White Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* WHEN (Date & Timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-6 sm:p-8 flex flex-col justify-between rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 min-h-[190px] sm:min-h-[220px] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#4285F4] uppercase">
                TIMELINE // DURATION
              </span>
              <Calendar className="w-4 h-4 text-[#4285F4]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-black font-mono tracking-tight uppercase leading-tight mb-2">
                11 — 12 SEPTEMBER<br />2026
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-600 font-mono tracking-wider uppercase leading-relaxed">
                24 HOURS NON-STOP BUILDING · MENTORSHIP · LIVE PITCHING
              </p>
            </div>
          </motion.div>

          {/* WHERE (Venue) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white text-black p-6 sm:p-8 flex flex-col justify-between rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 min-h-[190px] sm:min-h-[220px] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#EA4335] uppercase">
                CAMPUS VENUE
              </span>
              <MapPin className="w-4 h-4 text-[#EA4335]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase leading-tight mb-2 font-futuristic">
                TECHNO INDIA<br />UNIVERSITY
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-600 font-mono tracking-wider uppercase leading-relaxed">
                EM-4, SALT LAKE SECTOR V, KOLKATA, WEST BENGAL 700091
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
