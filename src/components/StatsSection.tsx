"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

export const StatsSection: React.FC = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    { value: 2500, label: "REGISTRATIONS", suffix: "+" },
    { value: 500, label: "PROJECTS BUILT", suffix: "+" },
    { value: 200, label: "COLLEGES", suffix: "+" },
    { value: 300, label: "COMMUNITY BUILDERS", suffix: "+" },
  ];

  return (
    <section className="relative z-10 pt-2 pb-16 sm:pb-24 px-4 sm:px-6">
      <motion.div
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white text-black p-5 sm:p-8 text-center flex flex-col items-center justify-center rounded-[24px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 min-h-[140px] sm:min-h-[160px] transition-transform duration-300 md:hover:-translate-y-1 transform-gpu"
          >
            <div className="text-3xl sm:text-5xl font-black tracking-tight text-black mb-2 font-mono flex items-center justify-center">
              <NumberFlow
                value={inView ? stat.value : 0}
                suffix={stat.suffix}
                format={{ useGrouping: true }}
                transformTiming={{
                  duration: 1400,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                spinTiming={{
                  duration: 1400,
                  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                opacityTiming={{
                  duration: 600,
                  easing: "ease-out",
                }}
              />
            </div>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.18em] uppercase text-black font-mono leading-tight">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

