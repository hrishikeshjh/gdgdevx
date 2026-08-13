"use client";

import React from "react";
import { motion } from "framer-motion";

export const TimelineSection: React.FC = () => {
  const schedule = [
    { time: "09:00 AM", title: "CHECK-IN & WELCOME", phase: "DAY 1", dot: "bg-[#4285F4]" },
    { time: "10:30 AM", title: "KEYNOTE & BRIEFING", phase: "DAY 1", dot: "bg-[#EA4335]" },
    { time: "11:30 AM", title: "HACKING BEGINS", phase: "DAY 1", dot: "bg-[#34A853]" },
    { time: "08:00 PM", title: "MENTORSHIP ROUND", phase: "DAY 1", dot: "bg-[#FBBC05]" },
    { time: "08:00 AM", title: "CODE FREEZE", phase: "DAY 2", dot: "bg-[#EA4335]" },
    { time: "10:30 AM", title: "PROJECT DEMOS", phase: "DAY 2", dot: "bg-[#4285F4]" },
    { time: "01:30 PM", title: "AWARD CEREMONY", phase: "DAY 2", dot: "bg-[#34A853]" },
  ];

  return (
    <section id="timeline" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill mb-6 border border-white/20">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-white">
              24-HOUR SPRINT SCHEDULE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-4 uppercase leading-tight">
            EVENT <span className="text-gradient-apple">TIMELINE</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            From initial kickoff to stage pitch demos — mark the milestones of HACKRIT 2026.
          </p>
        </motion.div>

        <div className="relative border-l border-white/20 ml-4 sm:ml-36 space-y-6 sm:space-y-8 pl-6 sm:pl-10">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-5 w-6 h-6 rounded-full bg-black border border-white/30 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <span className={`w-2 h-2 rounded-full ${item.dot} shadow-[0_0_8px_currentColor]`} />
              </div>

              <div className="hidden sm:block absolute -left-40 top-5 text-right w-28">
                <div className="text-sm font-mono font-bold text-white">{item.time}</div>
                <div className="text-[11px] font-mono text-white/50">{item.phase}</div>
              </div>

              <div className="glass-card p-5 sm:p-6 border border-white/20 hover:border-white/45 bg-white/[0.03] backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300">
                <span className="sm:hidden text-xs font-mono text-white/70 block mb-1 font-bold">
                  {item.time} · {item.phase}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wider uppercase leading-snug">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
