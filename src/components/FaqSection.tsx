"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can participate in DEVX 2026?",
      a: "DEVX 2026 is open to all developers, students, and tech enthusiasts.",
    },
    {
      q: "What is the team size limit?",
      a: "Teams can range from 1 to 4 members.",
    },
    {
      q: "Is participation free?",
      a: "Yes, DEVX 2026 is 100% free of charge.",
    },
    {
      q: "Where is the event hosted?",
      a: "Organized by Google Developer Groups Techno India University.",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/70">
              FAQ
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6">
            Frequently Asked <span className="font-semibold text-gradient-apple">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-2xl font-light text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8 text-lg text-white/70 font-light leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
