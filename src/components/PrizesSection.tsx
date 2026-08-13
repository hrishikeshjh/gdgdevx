"use client";

import React from "react";
import { motion } from "framer-motion";

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto">
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
              REWARDS & RECOGNITION
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-4 uppercase leading-tight">
            PRIZES & <span className="text-gradient-apple">PERKS</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light leading-relaxed">
            Substantial cash bounties, exclusive swags, cloud credits, and accelerator fast-tracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-7 sm:p-9 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl order-2 md:order-1 hover:shadow-[0_0_35px_rgba(66,133,244,0.15)] transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/60 font-bold block">
                  1ST RUNNER UP
                </span>
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono uppercase tracking-wide">
                2ND PLACE
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                Cash prize, cloud credits, tech hardware swags & fast-track interviews.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#4285F4] font-bold tracking-wider uppercase">
              <span>RUNNER-UP BOUNTY</span>
              <span>02</span>
            </div>
          </motion.div>

          {/* 1st Place Grand Champion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-7 sm:p-9 flex flex-col justify-between border border-yellow-400/40 bg-gradient-to-b from-yellow-500/10 via-black/40 to-black/60 backdrop-blur-2xl rounded-3xl order-1 md:order-2 shadow-[0_0_50px_rgba(251,188,5,0.15)] hover:border-yellow-400/70 transition-all duration-300 relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FBBC05]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-yellow-400 font-bold block">
                  GRAND CHAMPION
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FBBC05] shadow-[0_0_10px_#FBBC05]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono uppercase tracking-wide">
                1ST PLACE
              </h3>
              <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                Grand cash pool, winner trophy, premium dev swag kits & direct VC / incubator pitch.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-yellow-400 font-bold tracking-wider uppercase relative z-10">
              <span>GRAND WINNER TITLE</span>
              <span>01</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-7 sm:p-9 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl order-3 hover:shadow-[0_0_35px_rgba(52,168,83,0.15)] transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/60 font-bold block">
                  2ND RUNNER UP
                </span>
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-mono uppercase tracking-wide">
                3RD PLACE
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                Cash reward, special category prizes, cloud vouchers & merch box.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#34A853] font-bold tracking-wider uppercase">
              <span>PODIUM BOUNTY</span>
              <span>03</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
