"use client";

import React from "react";
import { motion } from "framer-motion";

export const TimelineSection: React.FC = () => {
  const schedule = [
    { time: "09:00 AM", title: "CHECK-IN & WELCOME", phase: "DAY 1" },
    { time: "10:30 AM", title: "KEYNOTE & BRIEFING", phase: "DAY 1" },
    { time: "11:30 AM", title: "HACKING BEGINS", phase: "DAY 1" },
    { time: "08:00 PM", title: "MENTORSHIP ROUND", phase: "DAY 1" },
    { time: "08:00 AM", title: "CODE FREEZE", phase: "DAY 2" },
    { time: "10:30 AM", title: "PROJECT DEMOS", phase: "DAY 2" },
    { time: "01:30 PM", title: "AWARD CEREMONY", phase: "DAY 2" },
  ];

  return (
    <section id="timeline" className="relative z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              24-HOUR SPRINT
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.1em] text-white mb-6 uppercase">
            EVENT <span className="text-gradient-apple">TIMELINE</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/15 ml-4 sm:ml-32 space-y-8 pl-6 sm:pl-10">
          {schedule.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-6 h-6 rounded-full bg-black border border-white/40 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white" />
              </div>

              <div className="hidden sm:block absolute -left-36 top-3 text-right w-24">
                <div className="text-sm font-mono font-bold text-white">{item.time}</div>
                <div className="text-xs font-mono text-white/50">{item.phase}</div>
              </div>

              <div className="glass-card p-6">
                <span className="sm:hidden text-xs font-mono text-white/70 block mb-1 font-bold">
                  {item.time} · {item.phase}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
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
