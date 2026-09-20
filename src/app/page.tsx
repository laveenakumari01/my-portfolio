import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import NeuralBackground from "@/components/ui/NeuralBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import SkillsSection from "@/components/skills/SkillsSection";
import CertificatesSection from "@/components/certificates/CertificatesSection";
import ContactSection from "@/components/contact/ContactSection";

/** Animated gradient divider between major sections */
function SectionDivider() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
      <div className="section-divider" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#1a1035] text-slate-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-white">
      {/* Deep space ambient background layers */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(6,182,212,0.07) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 20% 80%, rgba(139,92,246,0.10) 0%, transparent 55%), #1a1035",
        }}
      />

      {/* Interactive Neural Background Canvas */}
      <NeuralBackground />

      {/* Cursor violet glow */}
      <CursorGlow />

      {/* Top Scroll Depth Progress Bar */}
      <ScrollProgress />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Single-Page Scroll Content */}
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <CertificatesSection />
        <SectionDivider />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

