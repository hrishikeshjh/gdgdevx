"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can participate in HACKRIT 2026?",
      a: "HACKRIT 2026 is open to all university students, developers, and tech enthusiasts. Beginners and seasoned hackers are both welcome!",
    },
    {
      q: "What is the team size limit?",
      a: "Teams can range from 1 to 4 members. You can either register as an established team or form a team on our official Discord server before hacking begins.",
    },
    {
      q: "Is participation free?",
      a: "Yes, HACKRIT 2026 is 100% free of charge. Full hospitality including meals, energy snacks, swags, mentor sessions, and high-speed networking are provided.",
    },
    {
      q: "Where is the hackathon hosted?",
      a: "The hackathon is hosted in-person at Techno India University, Salt Lake Sector V, Kolkata, organized by GDG On Campus TIU in collaboration with School of the Future.",
    },
    {
      q: "What should I bring to the venue?",
      a: "Bring your laptop, charger, student ID/government ID, hardware components (if hacking in IoT/Robotics), and your unstoppable hacker spirit!",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
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
              HACKATHON INTELLIGENCE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-4 uppercase leading-tight">
            FREQUENTLY ASKED <span className="text-gradient-apple">QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about eligibility, logistics, and event rules.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card border border-white/20 hover:border-white/45 bg-white/[0.03] backdrop-blur-2xl rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-xl font-bold text-white tracking-wide uppercase group-hover:text-white transition-colors">
                    {faq.q}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 shrink-0 group-hover:border-white/50 group-hover:bg-white/20 transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 sm:px-8 pb-6 sm:pb-8 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/10 pt-4"
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
