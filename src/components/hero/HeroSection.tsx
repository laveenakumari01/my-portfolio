"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

/** Floating hexagon SVG shape */
function FloatingHex({
  size,
  style,
  delay,
  color,
}: {
  size: number;
  style: React.CSSProperties;
  delay: number;
  color: string;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="absolute pointer-events-none"
      style={style}
      animate={{ y: [0, -14, -7, 0], rotate: [0, 5, -3, 0], opacity: [0.35, 0.7, 0.45, 0.35] }}
      transition={{ duration: 8 + delay * 1.5, repeat: Infinity, delay, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        opacity="0.8"
      />
    </motion.svg>
  );
}

/** Animated glowing orb ring behind the name */
function OrbRing() {
  return (
    <div className="absolute -top-8 -left-8 pointer-events-none" aria-hidden="true">
      {/* Outer ring */}
      <motion.div
        className="w-64 h-64 rounded-full border border-[#00d4d4]/30"
        animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Middle ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-[#00ffcc]/25"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      {/* Soft glow blob */}
      <motion.div
        className="absolute inset-16 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 212, 0.16) 0%, transparent 70%)" }}
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background soft teal glow orbs */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 180, 180, 0.15) 0%, rgba(0, 255, 204, 0.05) 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, rgba(255, 107, 107, 0.06) 0%, transparent 70%)" }}
      />

      {/* Floating hexagons in teal & aqua */}
      <FloatingHex size={60} color="#00d4d4" delay={0} style={{ top: "12%", left: "5%" }} />
      <FloatingHex size={40} color="#00ffcc" delay={1.5} style={{ top: "30%", left: "2%" }} />
      <FloatingHex size={50} color="#00b4b4" delay={2.5} style={{ top: "65%", left: "8%" }} />
      <FloatingHex size={45} color="#00d4d4" delay={0.8} style={{ top: "8%", right: "6%" }} />
      <FloatingHex size={35} color="#00ffcc" delay={3.2} style={{ top: "50%", right: "3%" }} />
      <FloatingHex size={55} color="#00b4b4" delay={2} style={{ bottom: "15%", right: "7%" }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography, Bio, CTAs, Highlights */}
        <div className="lg:col-span-7 space-y-7 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono
              bg-[#0a2626]/80 border border-[#00d4d4]/35 text-[#00ffcc] shadow-[0_0_20px_rgba(0,212,212,0.18)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffcc]" />
            </span>
            <span className="text-slate-300">SYSTEM READY:</span>
            <span className="text-[#00ffcc] font-semibold">{PORTFOLIO_DATA.personal.status}</span>
          </motion.div>

          {/* Heading with Name & Title */}
          <div className="space-y-2.5 relative">
            {/* Orb ring glowing behind name */}
            <OrbRing />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-slate-400 font-mono text-sm tracking-wide relative z-10"
            >
              <span>Hello, world! I am</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-heading relative z-10"
            >
              <span className="gradient-text-hero">{PORTFOLIO_DATA.personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 tracking-tight relative z-10"
            >
              <span className="gradient-text-accent">{PORTFOLIO_DATA.personal.title}</span>
            </motion.h2>
          </div>

          {/* Tagline Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
          >
            Building autonomous multi-agent systems and LLM-powered products. Specializing in stateful
            agent graphs (LangGraph), multi-hop hybrid RAG, and post-quantum cryptographic security.
          </motion.p>

          {/* CTAs with Coral highlight for contrast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              id="hero-cta-projects"
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-[#ff6b6b] via-[#f43f5e] to-[#fb7185] text-white shadow-[0_0_25px_rgba(255,107,107,0.35)]
                hover:shadow-[0_0_35px_rgba(255,107,107,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm
                bg-[#0a2020]/90 hover:bg-[#143636] text-slate-200 hover:text-white border border-[#143d3d] hover:border-[#00ffcc]/50
                shadow-lg hover:shadow-[0_0_20px_rgba(0,255,204,0.25)] transition-all duration-300"
            >
              <span>Contact Me</span>
              <Sparkles className="w-4 h-4 text-[#00ffcc] group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Metric Highlights Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#143d3d]"
          >
            {PORTFOLIO_DATA.personal.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#0a2020]/70 border border-[#143d3d] p-3 rounded-xl backdrop-blur-sm hover:border-[#00d4d4]/50 hover:shadow-[0_0_16px_rgba(0,212,212,0.18)] transition-all duration-300"
              >
                <div className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 leading-snug mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: AI Avatar with animated teal/aqua rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 w-full flex items-center justify-center"
        >
          <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0, 212, 212, 0.25) 0%, rgba(0, 255, 204, 0.10) 50%, transparent 70%)",
              }}
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.06, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Spinning orbit ring 1 */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-[#00d4d4]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Spinning orbit ring 2 */}
            <motion.div
              className="absolute inset-[-8px] rounded-full border border-dashed border-[#00ffcc]/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Avatar image */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#00d4d4]/40 shadow-[0_0_50px_rgba(0,212,212,0.3)]">
              <Image
                src="/ai-assets/hero-avatar.jpg"
                alt="Laveena — AI Engineer"
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover object-center scale-105"
                priority
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f1f]/70 via-transparent to-transparent" />
            </div>

            {/* Floating particle dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  background: i % 2 === 0 ? "#00d4d4" : "#00ffcc",
                  boxShadow: i % 2 === 0 ? "0 0 8px #00d4d4" : "0 0 8px #00ffcc",
                }}
                animate={{
                  x: Math.cos((deg * Math.PI) / 180) * (165 + i * 3),
                  y: Math.sin((deg * Math.PI) / 180) * (165 + i * 3),
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
