"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Award, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const ICON_MAP: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        category="Certifications & Awards"
        title="Learning & Recognition"
        subtitle="Professional credentials, technical certifications, and recognitions earned along the journey."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.certificates.map((cert, idx) => {
          const isAward = cert.id === "employee-award";

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl backdrop-blur-xl p-6 shadow-[0_4px_24px_rgba(0,212,212,0.08)]
                transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                  isAward
                    ? "bg-gradient-to-b from-amber-950/30 via-[#0d1f2d]/90 to-[#0d1f2d]/95 border-2 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]"
                    : "bg-[#0d1f2d] border border-[rgba(0,212,212,0.3)] hover:border-[rgba(0,212,212,0.6)] hover:shadow-[0_4px_32px_rgba(0,212,212,0.18)]"
                }`}
            >
              {/* Gold / Teal shimmer line across top */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] ${
                  isAward
                    ? "bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20"
                    : "bg-gradient-to-r from-transparent via-[#00ffcc]/40 to-transparent"
                }`}
              />

              {/* Top Row: Icon + Badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${
                    isAward
                      ? "bg-gradient-to-tr from-amber-600 to-yellow-400 shadow-amber-500/20"
                      : "bg-gradient-to-tr from-[#00d4d4] to-teal-700 text-white"
                  }`}
                >
                  {isAward ? <Award className="w-6 h-6 text-white" /> : (ICON_MAP[cert.icon] ?? <Award className="w-6 h-6" />)}
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                    isAward
                      ? "text-amber-300 bg-amber-950/60 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      : "text-[#00ffcc] bg-[#00d4d4]/15 border-[#00d4d4]/40"
                  }`}
                >
                  {isAward ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>Award</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ffcc]" />
                      <span>Verified</span>
                    </>
                  )}
                </span>
              </div>

              {/* Main Info */}
              <div className="space-y-2 mb-4">
                <h3 className="text-base font-bold text-white font-heading leading-snug group-hover:text-[#00ffcc] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">{cert.issuer}</p>
              </div>

              {/* Footer status pill */}
              <div className="pt-3 border-t border-[#143d3d] flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isAward ? "bg-amber-400" : "bg-[#00ffcc]"}`} />
                  {isAward ? "NFTCipher • 2024" : "Credential Active"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
