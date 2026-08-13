"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Phone, Calendar, Users, Building2, ExternalLink, Navigation, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-pill mb-6 max-w-full overflow-hidden border border-white/20">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] font-bold text-white truncate">
              OFFICIAL GOOGLE DEVELOPER GROUP ON CAMPUS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.08em] text-white mb-6 uppercase leading-tight">
            ABOUT <span className="text-gradient-apple">HACKRIT</span>
          </h2>
          <p className="text-base sm:text-xl text-white/90 max-w-4xl mx-auto font-normal leading-relaxed mb-4 uppercase tracking-wide px-2">
            Hackrit is the premier hackathon of DevX 2.0, organized by GDG on Campus Techno India University in collaboration with School of the Future.
          </p>
          <p className="text-xs sm:text-base text-white/60 max-w-3xl mx-auto font-light leading-relaxed px-2">
            Empowering 2,500+ builders in AI & Machine Learning, Web Development, Cybersecurity, Android, DevOps & Blockchain, and Robotics.
          </p>
        </motion.div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden min-w-0 hover:shadow-[0_0_30px_rgba(66,133,244,0.12)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">01 // SKILLS</span>
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Skilled Builders</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Connect with passionate student hackers creating impactful real-world software & systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden min-w-0 hover:shadow-[0_0_30px_rgba(234,67,53,0.12)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">02 // EXPOSURE</span>
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Product Demos</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Showcase cutting-edge developer platforms, APIs, and modern toolchains directly to builders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden min-w-0 hover:shadow-[0_0_30px_rgba(251,188,5,0.12)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">03 // BRANDING</span>
                <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">High Visibility</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Prominent brand positioning on-stage, across official merchandise, and digital broadcasts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 sm:p-7 flex flex-col justify-between border border-white/20 hover:border-white/50 bg-white/[0.03] backdrop-blur-2xl rounded-3xl overflow-hidden min-w-0 hover:shadow-[0_0_30px_rgba(52,168,83,0.12)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase font-bold">04 // NETWORK</span>
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide uppercase leading-snug break-words">Mentorship</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Direct engagement with technical leaders, workshop conductors, and hiring partners.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chapter Venue & Headquarters Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 border border-white/25 hover:border-white/50 bg-white/[0.04] backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden min-w-0 relative"
        >
          {/* Subtle Google Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4285F4]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="space-y-4 max-w-2xl min-w-0 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md text-[10px] sm:text-xs font-mono text-white/80 tracking-widest uppercase font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#EA4335] shrink-0" />
              <span>OFFICIAL EVENT VENUE</span>
            </div>
            <h4 className="text-2xl sm:text-4xl font-bold text-white tracking-wider uppercase leading-tight break-words">
              Techno India University
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed break-words">
              EM-4, Salt Lake City, Sector V, Kolkata, West Bengal 700091, India
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-white pt-2 font-mono font-bold">
              <a
                href="tel:+918240490034"
                className="glass-pill px-4 py-2 border border-white/20 hover:border-white/50 flex items-center gap-2 transition-all bg-white/[0.04]"
              >
                <Phone className="w-3 h-3 text-[#4285F4]" />
                <span>Krish: +91 82404 90034</span>
              </a>
              <a
                href="mailto:gdgtiudevxoffcial@gmail.com?subject=DEVX%202.0%20/%20Hackrit%20Inquiry"
                className="glass-pill px-4 py-2 border border-white/20 hover:border-white/50 flex items-center gap-2 transition-all bg-white/[0.04]"
              >
                <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                <span>gdgtiudevxoffcial@gmail.com</span>
              </a>
            </div>
          </div>

          <a
            href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            className="glass-pill px-6 sm:px-8 py-4 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white flex items-center gap-3 border border-white/30 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-xl shrink-0 uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative z-10"
          >
            <Globe className="w-4 h-4 text-[#4285F4]" />
            <span>Official GDG Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
