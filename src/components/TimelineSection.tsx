"use client";

import React from "react";
import { motion } from "framer-motion";

export const TimelineSection: React.FC = () => {
  const schedule = [
    { time: "09:00 AM", title: "CHECK-IN & WELCOME" },
    { time: "10:30 AM", title: "KEYNOTE & BRIEFING" },
    { time: "11:30 AM", title: "HACKING BEGINS" },
    { time: "08:00 PM", title: "MENTORSHIP ROUND" },
    { time: "08:00 AM", title: "CODE FREEZE" },
    { time: "10:30 AM", title: "PROJECT DEMOS" },
    { time: "01:30 PM", title: "AWARD CEREMONY" },
  ];

  return (
    <section id="timeline" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
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
              24-HOUR SPRINT SCHEDULE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.08em] text-white mb-4 uppercase leading-tight font-futuristic">
            EVENT TIMELINE
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-white/60 max-w-xl mx-auto uppercase">
            Every checkpoint, start to finish.
          </p>
        </motion.div>

        {/* Stacked White Pill Rows */}
        <div className="space-y-3 sm:space-y-3.5">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white text-black rounded-full px-6 sm:px-10 py-3.5 sm:py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-neutral-100 hover:scale-[1.01] transition-transform duration-200"
            >
              {/* Left: Time */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="w-2 h-2 rounded-full bg-black/80 shrink-0" />
                <span className="text-xs sm:text-sm font-black font-mono tracking-wider text-black">
                  {item.time}
                </span>
              </div>

              {/* Right: Title */}
              <div className="text-right pl-4">
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.14em] text-black">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
