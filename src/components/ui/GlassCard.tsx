"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "amber" | "teal" | "aqua";
  interactive?: boolean;
}

export default function GlassCard({
  children,
  className,
  glowColor = "teal",
  interactive = true,
  ...props
}: GlassCardProps) {
  const glowStyles = {
    teal: "hover:border-[rgba(0,212,212,0.6)] hover:shadow-[0_4px_32px_rgba(0,212,212,0.18)]",
    aqua: "hover:border-[rgba(0,255,204,0.6)] hover:shadow-[0_4px_32px_rgba(0,255,204,0.18)]",
    cyan: "hover:border-cyan-400/60 hover:shadow-[0_4px_32px_rgba(6,182,212,0.18)]",
    amber: "hover:border-amber-400/60 hover:shadow-[0_4px_32px_rgba(245,158,11,0.18)]",
    violet: "hover:border-[rgba(0,212,212,0.6)] hover:shadow-[0_4px_32px_rgba(0,212,212,0.18)]",
  }[glowColor];

  const glowBackground = {
    teal: "#00d4d4",
    aqua: "#00ffcc",
    cyan: "#00b4b4",
    amber: "#F59E0B",
    violet: "#00d4d4",
  }[glowColor];

  return (
    <motion.div
      whileHover={interactive ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={clsx(
        "relative rounded-2xl p-6 sm:p-8 transition-all duration-300",
        "bg-[#0d1f2d] backdrop-blur-xl border border-[rgba(0,212,212,0.3)]",
        "shadow-[0_4px_24px_rgba(0,212,212,0.08)] overflow-hidden",
        interactive && glowStyles,
        className
      )}
      {...props}
    >
      {/* Ambient background highlight shimmer inside card */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-15"
        style={{
          background: glowBackground,
        }}
      />
      {children}
    </motion.div>
  );
}
