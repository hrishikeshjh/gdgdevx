"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Gift } from "lucide-react";

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              REWARDS & RECOGNITION
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.1em] text-white mb-6 uppercase">
            PRIZES & <span className="text-gradient-apple">PERKS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card p-10 flex flex-col justify-between order-2 md:order-1"
          >
            <div>
              <Award className="w-10 h-10 text-white mb-6" />
              <span className="text-xs font-mono tracking-widest uppercase text-white/70 font-bold block mb-2">
                2ND RUNNER UP
              </span>
              <h3 className="text-4xl font-bold text-white my-2 font-mono uppercase">2ND PLACE</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card p-10 flex flex-col justify-between border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-black to-black order-1 md:order-2 md:-translate-y-4 shadow-[0_0_50px_rgba(251,188,5,0.15)]"
          >
            <div>
              <Trophy className="w-12 h-12 text-yellow-400 mb-6" />
              <span className="text-xs font-mono tracking-widest uppercase text-yellow-400 font-bold block mb-2">
                GRAND CHAMPION
              </span>
              <h3 className="text-5xl font-bold text-white my-2 font-mono uppercase">1ST PLACE</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-10 flex flex-col justify-between order-3"
          >
            <div>
              <Gift className="w-10 h-10 text-white mb-6" />
              <span className="text-xs font-mono tracking-widest uppercase text-white/70 font-bold block mb-2">
                3RD RUNNER UP
              </span>
              <h3 className="text-4xl font-bold text-white my-2 font-mono uppercase">3RD PLACE</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
