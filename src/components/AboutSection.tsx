"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      tag: "01 // BUILD",
      dot: "bg-[#4285F4]",
      title: (
        <>
          WHAT YOU<br />BUILD
        </>
      ),
      desc: "ONE PROTOTYPE, BUILT AND DEMOED IN 24 HOURS — NOT A SLIDE DECK.",
    },
    {
      tag: "02 // CONNECT",
      dot: "bg-[#EA4335]",
      title: (
        <>
          WHO YOU<br />MEET
        </>
      ),
      desc: "MENTORS, JUDGES, AND 2,500+ BUILDERS ACROSS SIX DOMAINS.",
    },
    {
      tag: "03 // REWARDS",
      dot: "bg-[#FBBC05]",
      title: (
        <>
          WHAT YOU<br />WIN
        </>
      ),
      desc: "CASH PRIZES, CLOUD CREDITS, AND DIRECT INTERVIEW FAST-TRACKS.",
    },
    {
      tag: "04 // TAKEAWAY",
      dot: "bg-[#34A853]",
      title: (
        <>
          WHAT YOU<br />GET
        </>
      ),
      desc: "CERTIFICATE, SWAG, AND A WORKING PROJECT FOR YOUR PORTFOLIO.",
    },
  ];

  return (
    <section id="about" className="relative z-10 pt-16 sm:pt-24 pb-6 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* ABOUT HACKRIT HEADER BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto px-2"
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
              OFFICIAL GOOGLE DEVELOPER GROUP ON CAMPUS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[0.1em] text-white mb-6 uppercase leading-tight font-futuristic">
            ABOUT HACKRIT
          </h2>

          {/* Primary Paragraph */}
          <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.14em] sm:tracking-[0.16em] text-white/90 max-w-4xl mx-auto uppercase leading-relaxed mb-4">
            HACKRIT IS THE OFFICIAL HACKATHON OF DEVX 2.0, RUN BY GDG ON CAMPUS TECHNO INDIA UNIVERSITY IN COLLABORATION WITH SCHOOL OF THE FUTURE.
          </p>

          {/* Secondary Paragraph */}
          <p className="text-[10px] sm:text-xs md:text-sm font-medium tracking-[0.14em] sm:tracking-[0.16em] text-white/60 max-w-3xl mx-auto uppercase leading-relaxed">
            2,500+ BUILDERS WORK ACROSS AI & MACHINE LEARNING, WEB DEVELOPMENT, CYBERSECURITY, ANDROID, DEVOPS & BLOCKCHAIN, AND ROBOTICS.
          </p>
        </motion.div>

        {/* 4 Value Pillars (White Tiles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white text-black p-6 sm:p-7 flex flex-col justify-start rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 min-w-0 hover:-translate-y-1 transition-all duration-300 min-h-[220px] sm:min-h-[240px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-800 uppercase">
                  {pillar.tag}
                </span>
                <span className={`w-2 h-2 rounded-full ${pillar.dot}`} />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-black mb-3 tracking-wide uppercase leading-tight">
                {pillar.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-600 font-mono tracking-wider uppercase leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
