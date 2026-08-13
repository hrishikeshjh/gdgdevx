"use client";

import React from "react";
import { motion } from "framer-motion";

export const StatsSection: React.FC = () => {
  const stats = [
    { value: "2500+", label: "REGISTRATIONS", color: "text-[#4285F4]" },
    { value: "500+", label: "PROJECTS BUILT", color: "text-[#EA4335]" },
    { value: "200+", label: "COLLEGES", color: "text-[#FBBC05]" },
    { value: "300+", label: "COMMUNITY BUILDERS", color: "text-[#34A853]" },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="glass-card p-6 sm:p-7 text-center flex flex-col items-center justify-center min-w-0 overflow-hidden border border-white/20 hover:border-white/45 bg-white/[0.03] backdrop-blur-2xl rounded-3xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
          >
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 font-mono break-words max-w-full">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-white/80 tracking-[0.15em] uppercase leading-tight max-w-full break-words">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
