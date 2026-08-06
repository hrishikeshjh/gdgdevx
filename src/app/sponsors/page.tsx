"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, ShieldCheck, Zap, Award, Mail, Phone, MapPin, ArrowLeft, Check, Send, Globe, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingTechElements } from "@/components/FloatingTechElements";
import confetti from "canvas-confetti";

export default function SponsorsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    tier: "Title Sponsor ($3,000)",
    message: "",
  });

  const sponsorshipTiers = [
    {
      tier: "Title Sponsor",
      price: "$3,000",
      icon: Crown,
      highlight: "EXCLUSIVE TITLE RIGHTS",
      border: "border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-black to-black shadow-[0_0_50px_rgba(251,188,5,0.15)]",
      features: [
        "Exclusive Title Rights & Stage Branding",
        "Keynote Presentation at Opening Ceremony",
        "Dedicated Problem Statement in Hackathon",
        "Dedicated On-Ground Stall & Booth Setup",
        "30-Min Initial API & Product Demo Slot",
        "Full Resume, GitHub & Portfolio Access",
        "One Company Representative on Judge Panel",
      ],
    },
    {
      tier: "Diamond Sponsor",
      price: "$2,200",
      icon: Sparkles,
      highlight: "MAXIMUM VISIBILITY",
      border: "border-blue-500/30 bg-white/[0.02]",
      features: [
        "Dedicated Problem Statement",
        "15-Min API / Product Demo Slot",
        "Dedicated Sponsor Booth",
        "Send Company Recruiters to Venue",
        "Access to Profile: Github, Mail & Portfolio",
        "Logos on Banners, Standees & Website",
      ],
    },
    {
      tier: "Platinum Sponsor",
      price: "$1,500",
      icon: ShieldCheck,
      highlight: "TECH & API EXPOSURE",
      border: "border-purple-500/30 bg-white/[0.02]",
      features: [
        "10-Min Initial API / Product Demo",
        "Pre-event Workshops, Contests & Quizzes",
        "Send Technical Mentors",
        "Full Resume & Participant Profile Access",
        "Logo in Welcome Kit Guide & Mails",
      ],
    },
    {
      tier: "Gold Sponsor",
      price: "$1,000",
      icon: Zap,
      highlight: "BRAND AWARENESS",
      border: "border-green-500/30 bg-white/[0.02]",
      features: [
        "Send Technical Mentors",
        "Resume & Participant Profile Access",
        "Recruiting Material Distribution",
        "Logo in Website Slides & Banners",
        "Social Media Mentions across handles",
      ],
    },
    {
      tier: "Silver Sponsor",
      price: "$600",
      icon: Award,
      highlight: "COMMUNITY IMPACT",
      border: "border-white/20 bg-white/[0.02]",
      features: [
        "Logo on Official Website & Swags",
        "Dedicated Special Channel in Discord",
        "Recruiting Material Distribution",
        "Social Media Visibility",
      ],
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setFormSubmitted(true);
  };

  return (
    <main className="relative bg-black text-white min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
      <CustomCursor />
      <FloatingTechElements />
      <Navbar />

      {/* Main Container */}
      <div className="relative z-10 pt-36 pb-32 px-4 sm:px-6 max-w-6xl mx-auto space-y-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-white/60 hover:text-white transition-colors glass-pill px-4 py-2 uppercase font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO LANDING PAGE</span>
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-pill">
            <Image
              src="/logo.svg"
              alt="GDG Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-white">
              DEVX 2.0 × HACKRIT 2026 SPONSORSHIP PROSPECTUS
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold tracking-[0.08em] text-white uppercase leading-tight">
            PARTNER & <span className="text-gradient-apple">SPONSOR US</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
            Connect directly with 2,500+ student developers, recruit top technical talent, showcase your developer tools, and gain prominent brand visibility across Eastern India's largest university hackathon.
          </p>
        </motion.div>

        {/* Sponsorship Packages Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-wider uppercase">Sponsorship Packages</h2>
            <p className="text-xs text-white/60 font-mono tracking-widest uppercase">CHOOSE THE RIGHT PACKAGE FOR YOUR BRAND</p>
          </div>

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
                  className={`glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-w-0 ${tier.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 text-white/70 font-bold truncate">
                        {tier.highlight}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-wider uppercase">
                      {tier.tier}
                    </h3>
                    <div className="text-3xl sm:text-4xl font-mono text-white mb-6 font-bold">
                      {tier.price}
                    </div>

                    <ul className="space-y-3 mb-8 border-t border-white/5 pt-6 text-xs sm:text-sm text-white/80 font-normal">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                          <span className="break-words">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#inquiry-form"
                    onClick={() => setInquiryData({ ...inquiryData, tier: `${tier.tier} (${tier.price})` })}
                    className="glass-pill py-3 px-4 text-center text-xs font-mono tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all font-bold block"
                  >
                    Select Package
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Points of Contact (POCs) Section with Redirect Links */}
        <div className="space-y-12">
          <div className="text-center">
            <span className="text-xs font-mono text-white/50 tracking-[0.25em] uppercase block mb-2 font-bold">DIRECTORY</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-wider uppercase">Points of Contact (POCs)</h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-normal mt-3">
              Reach out directly via Call, WhatsApp, or Email to our team leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* POC 1: Krish */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-w-0"
            >
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-blue-400 tracking-widest uppercase block mb-3 font-bold">
                  SPONSORSHIP & COMMUNITY LEAD
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wider uppercase">Krish</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal mb-6">
                  Google Developer Groups On Campus · Techno India University
                </p>

                <div className="space-y-3 text-xs sm:text-sm font-mono border-t border-white/5 pt-6 font-bold">
                  {/* Call Redirect */}
                  <a
                    href="tel:+918240490034"
                    className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Call: +91 82404 90034</span>
                  </a>

                  {/* WhatsApp Redirect */}
                  <a
                    href="https://wa.me/918240490034?text=Hi%20Krish,%20I'm%20interested%20in%20sponsoring%20DevX%202.0%20/%20Hackrit%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span>WhatsApp: +91 82404 90034</span>
                  </a>

                  {/* Mail Redirect */}
                  <a
                    href="mailto:gdgoncampustiu@gmail.com?subject=Sponsorship%20Inquiry%20-%20DevX%202.0"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="break-all">Email: gdgoncampustiu@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* POC 2: Adarsh */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between overflow-hidden min-w-0"
            >
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-red-400 tracking-widest uppercase block mb-3 font-bold">
                  LOGISTICS & OPERATIONS LEAD
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wider uppercase">Adarsh</h3>
                <p className="text-xs sm:text-sm text-white/70 font-normal mb-6">
                  Google Developer Groups On Campus · Techno India University
                </p>

                <div className="space-y-3 text-xs sm:text-sm font-mono border-t border-white/5 pt-6 font-bold">
                  {/* Call Redirect */}
                  <a
                    href="tel:+918017806837"
                    className="flex items-center gap-3 text-white hover:text-red-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Call: +91 80178 06837</span>
                  </a>

                  {/* WhatsApp Redirect */}
                  <a
                    href="https://wa.me/918017806837?text=Hi%20Adarsh,%20I'm%20interested%20in%20sponsoring%20DevX%202.0%20/%20Hackrit%202026."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                    <span>WhatsApp: +91 80178 06837</span>
                  </a>

                  {/* Mail Redirect */}
                  <a
                    href="mailto:gdgoncampustiu@gmail.com?subject=Sponsorship%20Inquiry%20-%20DevX%202.0"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/60 shrink-0" />
                    <span className="break-all">Email: gdgoncampustiu@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Primary Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 overflow-hidden min-w-0"
        >
          <div className="space-y-2 sm:space-y-3 max-w-2xl min-w-0">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-white/60 tracking-widest uppercase font-bold">
              <MapPin className="w-4 h-4 text-white shrink-0" />
              OFFICIAL VENUE & HEADQUARTERS
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase break-words">Techno India University</h4>
            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed break-words">
              EM-4, Salt Lake City, Sector V, Kolkata, West Bengal 700091, IN
            </p>
          </div>

          <a
            href="https://gdg.community.dev/gdg-on-campus-techno-india-university-kolkata-india/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            className="glass-pill px-6 sm:px-8 py-3.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white flex items-center gap-3 hover:border-white shrink-0 uppercase"
          >
            <Globe className="w-4 h-4 text-white" />
            <span>Official GDG Community Portal</span>
            <ExternalLink className="w-4 h-4 text-white/60" />
          </a>
        </motion.div>

        {/* Sponsor Inquiry Form */}
        <div id="inquiry-form" className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-6 sm:p-12 border-white/20 overflow-hidden"
          >
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-white/50 tracking-[0.25em] uppercase block mb-2 font-bold">DIRECT PROPOSAL</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wider uppercase">Submit Sponsorship Inquiry</h3>
              <p className="text-xs sm:text-sm text-white/70 font-normal">
                Fill out the details below and our sponsorship lead will contact you within 24 hours.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Google / Acme Corp"
                      value={inquiryData.companyName}
                      onChange={(e) => setInquiryData({ ...inquiryData, companyName: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                      CONTACT PERSON
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={inquiryData.contactName}
                      onChange={(e) => setInquiryData({ ...inquiryData, contactName: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                      BUSINESS EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                      PHONE NUMBER
                    </label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="w-full glass-input px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                    PREFERRED PACKAGE
                  </label>
                  <select
                    value={inquiryData.tier}
                    onChange={(e) => setInquiryData({ ...inquiryData, tier: e.target.value })}
                    className="w-full glass-input px-4 py-3 text-sm bg-black/80 font-bold"
                  >
                    <option value="Title Sponsor ($3,000)">Title Sponsor ($3,000)</option>
                    <option value="Diamond Sponsor ($2,200)">Diamond Sponsor ($2,200)</option>
                    <option value="Platinum Sponsor ($1,500)">Platinum Sponsor ($1,500)</option>
                    <option value="Gold Sponsor ($1,000)">Gold Sponsor ($1,000)</option>
                    <option value="Silver Sponsor ($600)">Silver Sponsor ($600)</option>
                    <option value="Custom Partnership">Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/70 mb-2 uppercase font-bold">
                    MESSAGE / SPECIFIC REQUIREMENTS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand goals or API integration requests..."
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    className="w-full glass-input px-4 py-3 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="magnetic"
                  className="w-full glass-pill py-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-black bg-white hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] uppercase"
                >
                  <span>Submit Sponsorship Proposal</span>
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase">Proposal Received!</h4>
                <p className="text-xs sm:text-sm text-white/70 font-normal max-w-md mx-auto">
                  Thank you, <span className="text-white font-bold">{inquiryData.contactName}</span>. Krish & Adarsh will reach out to <span className="text-white font-mono">{inquiryData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="glass-pill px-6 py-2.5 text-xs font-mono font-bold text-white border border-white/20 mt-4 uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
