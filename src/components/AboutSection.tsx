"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Phone, Calendar, Users, Building2, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-pill mb-6 max-w-full overflow-hidden">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold text-white truncate">
              OFFICIAL GOOGLE DEVELOPER GROUP ON CAMPUS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-6 uppercase leading-tight">
            ABOUT <span className="text-gradient-apple">HACKRIT</span>
          </h2>
          <p className="text-base sm:text-xl text-white/90 max-w-4xl mx-auto font-normal leading-relaxed mb-6 uppercase tracking-wide px-2">
            Hackrit is the official hackathon of DevX 2.0, organized by GDG on Campus Techno India University in collaboration with School of the Future.
          </p>
          <p className="text-xs sm:text-base text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-2">
            Empowering university students in AI & Machine Learning, Web Development, Cybersecurity, Android Development, and DevOps & Blockchain.
          </p>
        </motion.div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-w-0"
          >
            <div>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-2 font-bold">01 // SKILLS</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Skilled Builders</h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Connect with student builders developing real projects across AI, Web, and Cloud.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-w-0"
          >
            <div>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-2 font-bold">02 // EXPOSURE</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Product Demos</h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Introduce developer tools, APIs, and platforms directly to hackathon participants.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-w-0"
          >
            <div>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-2 font-bold">03 // BRANDING</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">High Visibility</h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                High-impact visibility across stage screens, merchandise, and digital media.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between overflow-hidden min-w-0"
          >
            <div>
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase block mb-2 font-bold">04 // NETWORK</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Mentorship</h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed">
                Engage directly through dedicated problem statements and technical workshops.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chapter Venue & Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 overflow-hidden min-w-0"
        >
          <div className="space-y-3 max-w-2xl min-w-0">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-white/60 tracking-widest uppercase font-bold">
              <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
              VENUE & HEADQUARTERS
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase leading-tight break-words">Techno India University</h4>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed break-words">
              EM-4, Salt Lake City, Sector V, Kolkata, West Bengal 700091, IN
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white pt-2 font-mono font-bold">
              <a href="tel:+918240490034" className="hover:text-blue-400 flex items-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Krish: +91 82404 90034</span>
              </a>
              <span className="text-white/30">•</span>
              <a href="tel:+918017806837" className="hover:text-red-400 flex items-center gap-1.5 transition-colors">
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>Adarsh: +91 80178 06837</span>
              </a>
            </div>
          </div>

          <a
            href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            className="glass-pill px-6 sm:px-8 py-3.5 text-[10px] sm:text-xs font-bold tracking-[0.12em] text-white flex items-center gap-2.5 hover:border-white shrink-0 uppercase"
          >
            <Globe className="w-3.5 h-3.5 text-white" />
            <span>Official GDG Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
