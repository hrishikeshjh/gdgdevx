"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Sparkles, ArrowRight, User, Mail, Code2, Users, Layers } from "lucide-react";
import confetti from "canvas-confetti";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    teamName: "",
    track: "AI & Agentic Systems",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti explosion
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853"],
    });

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overscroll-contain">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto glass-card p-5 sm:p-8 border border-white/25 shadow-[0_20px_80px_rgba(0,0,0,0.9)] rounded-3xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2 pr-10">
                  <Sparkles className="w-4 h-4 text-[#4285F4] shrink-0" />
                  <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#4285F4] font-bold truncate">
                    GDG ON CAMPUS · TECHNO INDIA UNIVERSITY
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 uppercase tracking-wide">
                  Register for <span className="text-gradient-apple">HACKRIT 2026</span>
                </h3>
                <p className="text-xs text-white/60 font-light mb-5 leading-relaxed">
                  Reserve your team slot for the flagship 24-hour hackathon of DEVX 2.0.
                </p>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-white/70 font-bold mb-1 tracking-wider uppercase">
                      FULL NAME *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 glass-input text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-white/70 font-bold mb-1 tracking-wider uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 glass-input text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono text-white/70 font-bold mb-1 tracking-wider uppercase">
                        GITHUB / PORTFOLIO
                      </label>
                      <div className="relative">
                        <Code2 className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          placeholder="github.com/john"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 glass-input text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none rounded-xl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-mono text-white/70 font-bold mb-1 tracking-wider uppercase">
                        TEAM NAME (OPTIONAL)
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          placeholder="CyberNova"
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 glass-input text-xs sm:text-sm text-white placeholder-white/25 focus:outline-none rounded-xl"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-white/70 font-bold mb-1 tracking-wider uppercase">
                      TARGET DOMAIN / TRACK
                    </label>
                    <div className="relative">
                      <Layers className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 glass-input text-xs sm:text-sm appearance-none bg-black/90 text-white rounded-xl focus:outline-none cursor-pointer"
                      >
                        <option value="AI & Agentic Systems" className="bg-neutral-900 text-white">AI & Machine Learning</option>
                        <option value="Web & Cloud Native" className="bg-neutral-900 text-white">Web Development</option>
                        <option value="Mobile & Cross-Platform" className="bg-neutral-900 text-white">Android Development</option>
                        <option value="Cyber Security & Web3" className="bg-neutral-900 text-white">Cybersecurity</option>
                        <option value="DevOps & Blockchain" className="bg-neutral-900 text-white">DevOps & Blockchain</option>
                        <option value="Robotics & Design" className="bg-neutral-900 text-white">Robotics & Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    data-cursor="magnetic"
                    className="w-full glass-pill py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-white bg-white/20 hover:bg-white/30 active:scale-98 backdrop-blur-xl border border-white/35 hover:border-white/70 transition-all flex items-center justify-center gap-2 mt-5 shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer"
                  >
                    <span>Confirm Registration</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            ) : (
              /* Success Confirmation Card */
              <div className="text-center py-6 sm:py-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_rgba(52,168,83,0.3)]">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase">
                  Registration Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mb-6 leading-relaxed max-w-sm mx-auto">
                  Welcome to HACKRIT 2026, <span className="text-white font-medium">{formData.name}</span>. Check your inbox for confirmation details and Discord invite.
                </p>

                <button
                  onClick={resetForm}
                  className="glass-pill px-8 py-3 text-xs font-bold uppercase tracking-wider text-white border border-white/30 hover:border-white/70 active:scale-95 transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
