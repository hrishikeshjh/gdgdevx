"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Smartphone, ShieldCheck, Cpu } from "lucide-react";

export const TracksSection: React.FC = () => {
  const tracks = [
    { title: "AI & MACHINE LEARNING", icon: Bot, tag: "DOMAIN 01" },
    { title: "WEB DEVELOPMENT", icon: Cloud, tag: "DOMAIN 02" },
    { title: "CYBERSECURITY", icon: ShieldCheck, tag: "DOMAIN 03" },
    { title: "ANDROID DEVELOPMENT", icon: Smartphone, tag: "DOMAIN 04" },
    { title: "DEVOPS & BLOCKCHAIN", icon: Cpu, tag: "DOMAIN 05" },
  ];

  return (
    <section id="tracks" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill mb-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-white">
              TECHNICAL FOCUS VERTICALS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-4 uppercase leading-tight">
            HACKRIT <span className="text-gradient-apple">DOMAINS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-white/40 overflow-hidden min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/15 text-white/70 font-bold">
                      {track.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wider uppercase leading-snug break-words">
                    {track.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
