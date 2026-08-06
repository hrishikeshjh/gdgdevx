"use client";

import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, ShieldCheck, Zap, Award, Mail } from "lucide-react";

export const SponsorsSection: React.FC = () => {
  const sponsorshipTiers = [
    {
      tier: "Title Sponsor",
      price: "$3,000",
      icon: Crown,
      highlight: "EXCLUSIVE TITLE RIGHTS",
      border: "border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-black to-black",
      features: [
        "Exclusive Stage Screen & Merchandise Branding",
        "Keynote Presentation at Opening Ceremony",
        "Dedicated Problem Statement",
        "Dedicated Sponsor Booth & Stall Setup",
        "30-Min Initial API/Product Demo",
        "Full Resume & Github Profile Access",
      ],
    },
    {
      tier: "Diamond",
      price: "$2,200",
      icon: Sparkles,
      highlight: "MAXIMUM VISIBILITY",
      border: "border-blue-500/30",
      features: [
        "Dedicated Problem Statement",
        "15-Min API/Product Demo",
        "Dedicated Sponsor Booth",
        "Recruiter Invites & Resume Access",
        "Logo on Banners & Website",
      ],
    },
    {
      tier: "Platinum",
      price: "$1,500",
      icon: ShieldCheck,
      highlight: "TECH EXPOSURE",
      border: "border-purple-500/30",
      features: [
        "10-Min API/Product Demo",
        "Pre-event Workshops & Quizzes",
        "Access to Participant Profiles",
        "Send Mentors & Judges",
        "Logo on Website & Mails",
      ],
    },
    {
      tier: "Gold",
      price: "$1,000",
      icon: Zap,
      highlight: "BRAND AWARENESS",
      border: "border-green-500/30",
      features: [
        "Send Technical Mentors",
        "Resume Access & Profile List",
        "Social Media Mentions",
        "Logo in Website Slides",
      ],
    },
    {
      tier: "Silver",
      price: "$600",
      icon: Award,
      highlight: "COMMUNITY ENGAGEMENT",
      border: "border-white/20",
      features: [
        "Logo on Website & Swags",
        "Special Channel in Discord",
        "Recruiting Material Distribution",
        "Social Media Visibility",
      ],
    },
  ];

  return (
    <section id="sponsors" className="relative z-10 py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/70">
              SPONSORSHIP PROSPECTUS
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6">
            Become a <span className="font-semibold text-gradient-apple">Sponsor</span>
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto font-light">
            Partner with Hackrit 2026 to gain direct access to 2,500+ skilled developers, showcase your tools, and recruit top university talent.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipTiers.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`glass-card p-8 flex flex-col justify-between ${tier.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/60">
                      {tier.highlight}
                    </span>
                  </div>

                  <h3 className="text-3xl font-light text-white mb-1 tracking-tight">
                    {tier.tier}
                  </h3>
                  <div className="text-4xl font-mono text-white mb-6">
                    {tier.price}
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-white/5 pt-6 text-xs sm:text-sm text-white/70 font-light">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="mailto:gdgoncampustiu@gmail.com?subject=Hackrit%202026%20Sponsorship%20Inquiry"
                  className="glass-pill py-3 px-4 text-center text-xs font-mono tracking-wider uppercase text-white hover:border-white/40 block transition-all"
                >
                  Inquire Package
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Sponsor Lead Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass-card p-8 text-center flex flex-col items-center justify-center"
        >
          <Mail className="w-8 h-8 text-white mb-4" />
          <h4 className="text-2xl font-light text-white mb-2">Custom Sponsorship Inquiries</h4>
          <p className="text-sm text-white/60 font-light mb-6">
            Reach out directly to our sponsorship team at <span className="text-white font-mono">gdgoncampustiu@gmail.com</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-white/70">
            <span>Krish: +91 82404 90034</span>
            <span>•</span>
            <span>Adarsh: +91 80178 06837</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
