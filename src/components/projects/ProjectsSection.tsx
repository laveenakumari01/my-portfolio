"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export default function ProjectsSection() {
  const projects: Project[] = PORTFOLIO_DATA.projects as Project[];

  return (
    <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <SectionHeading
        category="Featured Projects"
        title="Things I've Built"
        subtitle="Real projects with real code — AI agents, secure document systems, and automated research tools."
      />

      <div className="space-y-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
