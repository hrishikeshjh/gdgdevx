"use client";

import React from "react";
import { motion } from "framer-motion";

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "2500+", label: "REGISTRATIONS" },
    { value: "500+", label: "PROJECTS BUILT" },
    { value: "200+", label: "COLLEGES" },
    { value: "300+", label: "COMMUNITY BUILDERS" },
  ];

  return (
    <section className="relative z-10 pt-2 pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="bg-white text-black p-6 sm:p-8 text-center flex flex-col items-center justify-center rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 min-h-[140px] sm:min-h-[160px] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-2 font-mono">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.18em] uppercase text-black font-mono leading-tight">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
