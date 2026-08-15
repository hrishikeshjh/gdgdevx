"use client";

import React from "react";
import { motion } from "framer-motion";

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto">
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
              REWARDS & RECOGNITION
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.08em] text-white mb-4 uppercase leading-tight font-futuristic">
            PRIZES & PERKS
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-white/60 max-w-xl mx-auto uppercase">
            Substantial cash bounties, exclusive swags, cloud credits, and accelerator fast-tracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white text-black p-7 sm:p-9 flex flex-col justify-between rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 order-2 md:order-1 hover:-translate-y-1 transition-all duration-300 min-h-[290px] sm:min-h-[310px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-500 font-bold block">
                  1ST RUNNER UP
                </span>
                <span className="w-2 h-2 rounded-full bg-black/80" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-black mb-3 font-mono uppercase tracking-wide">
                2ND PLACE
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed">
                Cash prize, cloud credits, tech hardware swags & fast-track interviews.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500 font-bold tracking-wider uppercase">
              <span>RUNNER-UP BOUNTY</span>
              <span>02</span>
            </div>
          </motion.div>

          {/* 1st Place Grand Champion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-black p-7 sm:p-9 flex flex-col justify-between rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 order-1 md:order-2 hover:-translate-y-1 transition-all duration-300 min-h-[290px] sm:min-h-[310px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-500 font-bold block">
                  GRAND CHAMPION
                </span>
                <span className="w-2 h-2 rounded-full bg-black/80" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-black mb-3 font-mono uppercase tracking-wide">
                1ST PLACE
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed">
                Grand cash pool, winner trophy, premium dev swag kits & direct VC / incubator pitch.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500 font-bold tracking-wider uppercase">
              <span>GRAND WINNER TITLE</span>
              <span>01</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white text-black p-7 sm:p-9 flex flex-col justify-between rounded-[26px] sm:rounded-[30px] shadow-[0_12px_36px_rgba(0,0,0,0.5)] border border-neutral-100 order-3 hover:-translate-y-1 transition-all duration-300 min-h-[290px] sm:min-h-[310px]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-500 font-bold block">
                  2ND RUNNER UP
                </span>
                <span className="w-2 h-2 rounded-full bg-black/80" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-black mb-3 font-mono uppercase tracking-wide">
                3RD PLACE
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed">
                Cash reward, special category prizes, cloud vouchers & merch box.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500 font-bold tracking-wider uppercase">
              <span>PODIUM BOUNTY</span>
              <span>03</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
