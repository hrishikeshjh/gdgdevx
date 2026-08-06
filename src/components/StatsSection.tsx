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
    <section className="relative z-10 py-20 px-4 sm:px-6 border-y border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-card p-5 sm:p-6 text-center flex flex-col items-center justify-center min-w-0 overflow-hidden"
          >
            <span className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-2 font-mono break-words max-w-full">
              {stat.value}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-white/90 tracking-[0.12em] uppercase leading-tight max-w-full break-words">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
