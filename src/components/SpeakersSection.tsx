"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Code2, ExternalLink } from "lucide-react";

export const SpeakersSection: React.FC = () => {
  const speakers = [
    {
      name: "Dr. Ananya Roy",
      role: "AI Research Scientist",
      org: "Google DeepMind",
      initials: "AR",
    },
    {
      name: "Rohan Mukherjee",
      role: "Staff Cloud Architect",
      org: "Google Developer Expert",
      initials: "RM",
    },
    {
      name: "Siddharth Verma",
      role: "Lead Developer",
      org: "GDG Techno India University",
      initials: "SV",
    },
    {
      name: "Priya Sengupta",
      role: "VP of Engineering",
      org: "Tech Scaleup Founder",
      initials: "PS",
    },
  ];

  return (
    <section className="relative z-30 py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/60">
              Mentors & Judges
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extralight tracking-tight text-white mb-6">
            Learn from <span className="font-normal text-white">Industry Leaders</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto font-light">
            Guided by veteran Google Developer Experts, AI researchers, and engineering directors.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:scale-[1.03] border-white/20"
            >
              {/* Minimalist Avatar Badge */}
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xl font-light font-mono text-white mb-5 group-hover:border-white/40 transition-colors shadow-inner">
                {speaker.initials}
              </div>

              <h3 className="text-lg font-medium text-white tracking-tight mb-1">
                {speaker.name}
              </h3>
              <p className="text-xs font-mono text-white/70 mb-1">{speaker.role}</p>
              <p className="text-xs text-white/40 font-light mb-6">{speaker.org}</p>

              <div className="flex items-center gap-3 text-white/40">
                <a href="#" className="hover:text-white transition-colors" aria-label="Website">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Code Profile">
                  <Code2 className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="External Link">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
