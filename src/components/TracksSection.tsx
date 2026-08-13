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
      accent: "bg-[#4285F4]",
    },
    {
      title: "WEB DEVELOPMENT",
      icon: Cloud,
      tag: "DOMAIN 02",
      desc: "Scalable Full-Stack, Serverless, Realtime Web & Cloud Native Architectures.",
      accent: "bg-[#EA4335]",
    },
    {
      title: "CYBERSECURITY",
      icon: ShieldCheck,
      tag: "DOMAIN 03",
      desc: "Zero-Knowledge Proofs, Threat Intelligence, Cryptography & Network Defense.",
      accent: "bg-[#FBBC05]",
    },
    {
      title: "ANDROID DEVELOPMENT",
      icon: Smartphone,
      tag: "DOMAIN 04",
      desc: "Modern Android, Kotlin Multiplatform, Flutter & Edge Device Interfaces.",
      accent: "bg-[#34A853]",
    },
    {
      title: "DEVOPS & BLOCKCHAIN",
      icon: Cpu,
      tag: "DOMAIN 05",
      desc: "Kubernetes, CI/CD Automations, Smart Contracts & Distributed Ledgers.",
      accent: "bg-[#4285F4]",
    },
    {
      title: "ROBOTICS & DESIGN",
      icon: Cog,
      tag: "DOMAIN 06",
      desc: "Embedded Systems, IoT, Hardware Hacking & Futuristic User Experience Design.",
      accent: "bg-[#34A853]",
    },
  ];

  return (
    <section id="tracks" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill mb-6 border border-white/20">
            {/* Google Colors Micro Dots */}
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-white">
              TECHNICAL FOCUS VERTICALS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-4 uppercase leading-tight">
            HACKRIT <span className="text-gradient-apple">DOMAINS</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Choose your arena and build transformative solutions across six industry tracks.
          </p>
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
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="glass-card p-7 sm:p-8 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl group transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.1)] min-w-0"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white/50 group-hover:bg-white/[0.1] transition-all">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md">
                      <span className={`w-1.5 h-1.5 rounded-full ${track.accent}`} />
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 font-bold">
                        {track.tag}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wider uppercase leading-snug break-words mb-3">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
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
