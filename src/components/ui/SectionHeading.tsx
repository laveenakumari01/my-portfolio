"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  category: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

export default function SectionHeading({
  category,
  title,
  subtitle,
  alignment = "left",
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {/* Category Pill */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase mb-3.5 
          bg-[#00d4d4]/15 border border-[#00d4d4]/35 text-[#00ffcc] shadow-[0_0_15px_rgba(0,212,212,0.18)]
          ${isCenter ? "justify-center" : ""}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#00ffcc] animate-pulse" />
        <span>{category}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-heading"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle glowing accent underline bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className={`mt-5 h-[2px] w-24 bg-gradient-to-r from-[#00d4d4] via-[#00ffcc] to-transparent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
