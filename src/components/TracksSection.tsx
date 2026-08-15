"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Cloud, Smartphone, ShieldCheck, Cpu, Cog, ArrowRight } from "lucide-react";

export const TracksSection: React.FC = () => {
  const tracks = [
    {
      title: "AI & MACHINE LEARNING",
      icon: Bot,
      tag: "DOMAIN 01",
      desc: "LLMs, Agentic Workflows, Neural Networks, Computer Vision & Multimodal AI.",
    },
    {
      title: "WEB DEVELOPMENT",
      icon: Cloud,
      tag: "DOMAIN 02",
      desc: "Scalable Full-Stack, Serverless, Realtime Web & Cloud Native Architectures.",
    },
    {
      title: "CYBERSECURITY",
      icon: ShieldCheck,
      tag: "DOMAIN 03",
      desc: "Zero-Knowledge Proofs, Threat Intelligence, Cryptography & Network Defense.",
    },
    {
      title: "ANDROID DEVELOPMENT",
      icon: Smartphone,
      tag: "DOMAIN 04",
      desc: "Modern Android, Kotlin Multiplatform, Flutter & Edge Device Interfaces.",
    },
    {
      title: "DEVOPS & BLOCKCHAIN",
      icon: Cpu,
      tag: "DOMAIN 05",
      desc: "Kubernetes, CI/CD Automations, Smart Contracts & Distributed Ledgers.",
    },
    {
      title: "ROBOTICS & DESIGN",
      icon: Cog,
      tag: "DOMAIN 06",
      desc: "Embedded Systems, IoT, Hardware Hacking & Futuristic User Experience Design.",
    },
  ];

  return (
    <section id="tracks" className="relative z-10 py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
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
              TECHNICAL FOCUS VERTICALS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.08em] text-white mb-4 uppercase leading-tight font-futuristic">
            HACKRIT DOMAINS
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-white/60 max-w-2xl mx-auto uppercase">
            Choose your arena and build transformative solutions across six industry tracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="bg-white text-black p-7 sm:p-8 flex flex-col justify-between rounded-2xl sm:rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-neutral-100 group hover:-translate-y-1 transition-all duration-300 min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 font-bold">
                      {track.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-black tracking-wide uppercase leading-snug break-words mb-2">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-sans leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between text-xs font-mono font-bold text-black/70 group-hover:text-black transition-colors">
                  <span>PROBLEM STATEMENTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
