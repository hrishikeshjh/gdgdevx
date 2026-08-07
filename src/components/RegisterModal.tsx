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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg glass-card p-8 border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-xs uppercase font-mono tracking-widest text-blue-400">
                    GDG TECHNO INDIA UNIVERSITY
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white mb-2">
                  Register for <span className="font-semibold text-gradient-apple">DEVX 2026</span>
                </h3>
                <p className="text-xs text-white/50 font-light mb-6">
                  Reserve your slot for the flagship 24-hour developer hackathon.
                </p>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5">
                      FULL NAME
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-2.5 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-2.5 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5">
                        GITHUB / LINKEDIN
                      </label>
                      <div className="relative">
                        <Code2 className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          placeholder="github.com/john"
                          value={formData.github}
                          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                          className="w-full glass-input pl-10 pr-4 py-2.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 mb-1.5">
                        TEAM NAME
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                        <input
                          type="text"
                          placeholder="CyberNova"
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          className="w-full glass-input pl-10 pr-4 py-2.5 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5">
                      TARGET TRACK
                    </label>
                    <div className="relative">
                      <Layers className="absolute left-3.5 top-3 w-4 h-4 text-white/40" />
                      <select
                        value={formData.track}
                        onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                        className="w-full glass-input pl-10 pr-4 py-2.5 text-sm appearance-none bg-black/60"
                      >
                        <option value="AI & Agentic Systems">AI & Agentic Systems</option>
                        <option value="Web & Cloud Native">Web & Cloud Native</option>
                        <option value="Mobile & Cross-Platform">Mobile & Cross-Platform</option>
                        <option value="Cyber Security & Web3">Cyber Security & Web3</option>
                        <option value="Robotics & Design">Robotics & Design</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    data-cursor="magnetic"
                    className="w-full glass-pill py-3.5 text-sm font-bold tracking-wider text-white bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 hover:border-white/60 transition-all flex items-center justify-center gap-2 mt-6 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  >
                    <span>Confirm Registration</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            ) : (
              /* Success Confirmation Card */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-light text-white mb-2">
                  Registration Confirmed!
                </h3>
                <p className="text-sm text-white/60 font-light mb-6">
                  Welcome to DEVX 2026, <span className="text-white font-medium">{formData.name}</span>. Check your inbox for confirmation details and Discord invite.
                </p>

                <button
                  onClick={resetForm}
                  className="glass-pill px-6 py-2.5 text-xs font-medium text-white border border-white/20"
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
