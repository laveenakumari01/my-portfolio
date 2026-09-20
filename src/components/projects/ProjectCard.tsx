"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { Project } from "@/data/portfolioData";

const CATEGORY_COLORS: Record<string, string> = {
  "Security & AI": "text-[#ff6b6b] bg-[#ff6b6b]/10 border-[#ff6b6b]/30",
  "RAG & LLMs": "text-[#00d4d4] bg-[#00d4d4]/10 border-[#00d4d4]/30",
  "Research & Agents": "text-[#00ffcc] bg-[#00ffcc]/10 border-[#00ffcc]/30",
  "EdTech & AI Systems": "text-[#38bdf8] bg-[#38bdf8]/10 border-[#38bdf8]/30",
};

const CATEGORY_GLOW: Record<string, string> = {
  "Security & AI": "hover:border-[#ff6b6b]/60 hover:shadow-[0_4px_32px_rgba(255,107,107,0.18)]",
  "RAG & LLMs": "hover:border-[rgba(0,212,212,0.6)] hover:shadow-[0_4px_32px_rgba(0,212,212,0.18)]",
  "Research & Agents": "hover:border-[rgba(0,255,204,0.6)] hover:shadow-[0_4px_32px_rgba(0,255,204,0.18)]",
  "EdTech & AI Systems": "hover:border-[#38bdf8]/60 hover:shadow-[0_4px_32px_rgba(56,189,248,0.18)]",
};

/** 1. XCipher: Futuristic EdTech & Cyber Lab (Cyan/Aqua) */
function XCipherThumbnail() {
  return (
    <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="xcipher-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#123030" />
          <stop offset="60%" stopColor="#0a1e1e" />
          <stop offset="100%" stopColor="#071515" />
        </radialGradient>
        <filter id="xcipher-glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cyber-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d4d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      <rect width="480" height="160" fill="url(#xcipher-bg)" />

      {/* Grid */}
      <g stroke="rgba(0,212,212,0.12)" strokeWidth="0.8">
        {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" />
        ))}
        {[30, 65, 100, 135].map((y) => (
          <line key={y} x1="0" y1={y} x2="480" y2={y} />
        ))}
      </g>

      {/* Circuit lines */}
      <path
        d="M 40 80 L 110 80 L 140 45 L 210 45 M 110 80 L 140 115 L 210 115 M 270 45 L 340 45 L 370 80 L 440 80 M 270 115 L 340 115 L 370 80"
        stroke="url(#cyber-line)"
        strokeWidth="1.6"
        fill="none"
        filter="url(#xcipher-glow)"
      />

      {/* Central Hub */}
      <g transform="translate(240, 80)">
        <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(0,212,212,0.3)" strokeWidth="1" />
        <circle cx="0" cy="0" r="24" fill="rgba(10,30,30,0.8)" stroke="#00d4d4" strokeWidth="2" filter="url(#xcipher-glow)" />
        <polygon points="0,-12 10,-5 10,7 0,13 -10,7 -10,-5" fill="none" stroke="#00ffcc" strokeWidth="1.6" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" filter="url(#xcipher-glow)" />
        <text x="0" y="44" textAnchor="middle" fill="#00ffcc" fontSize="9" fontWeight="bold" fontFamily="monospace">
          XCipher EdTech Lab
        </text>
      </g>

      {/* Satellite Nodes */}
      {[
        { x: 75, y: 80, color: "#38bdf8", label: "Course CMS", sub: "Cloudflare R2" },
        { x: 175, y: 45, color: "#a78bfa", label: "Quantum Crypto", sub: "Kyber / Dilithium" },
        { x: 175, y: 115, color: "#f59e0b", label: "MetaMask", sub: "Web3 Badges" },
        { x: 305, y: 45, color: "#00d4d4", label: "10-Agent Swarm", sub: "Cyber Lab" },
        { x: 305, y: 115, color: "#10b981", label: "QR Payments", sub: "Prisma & SQL" },
        { x: 405, y: 80, color: "#ff6b6b", label: "Progress Track", sub: "Real-time Hub" },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="15" fill={node.color} fillOpacity="0.15" filter="url(#xcipher-glow)" />
          <circle cx={node.x} cy={node.y} r="7" fill={node.color} filter="url(#xcipher-glow)" />
          <text x={node.x} y={node.y - 17} textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
            {node.label}
          </text>
          <text x={node.x} y={node.y + 22} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6.5" fontFamily="monospace">
            {node.sub}
          </text>
        </g>
      ))}

      {/* Top Banner Tags */}
      <g transform="translate(16, 18)">
        <rect width="112" height="16" rx="8" fill="rgba(0,212,212,0.15)" stroke="rgba(0,212,212,0.4)" strokeWidth="0.8" />
        <text x="56" y="11" textAnchor="middle" fill="#00ffcc" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          ⚡ AI + Web3 + Quantum
        </text>
      </g>
      <g transform="translate(352, 18)">
        <rect width="112" height="16" rx="8" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.4)" strokeWidth="0.8" />
        <text x="56" y="11" textAnchor="middle" fill="#c4b5fd" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          🛡️ 10-Agent Cyber Lab
        </text>
      </g>
    </svg>
  );
}

/** 2. Quantum Security: Deep Violet/Purple, Quantum Shield & Cryptographic Lattice */
function QuantumSecurityThumbnail() {
  return (
    <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="pqc-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#251240" />
          <stop offset="60%" stopColor="#150a26" />
          <stop offset="100%" stopColor="#0b0417" />
        </radialGradient>
        <filter id="pqc-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="pqc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      <rect width="480" height="160" fill="url(#pqc-bg)" />

      {/* Quantum Lattice lines */}
      <g stroke="rgba(168,85,247,0.15)" strokeWidth="0.8">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="160" />
        ))}
        {[25, 55, 85, 115, 145].map((y) => (
          <line key={y} x1="0" y1={y} x2="480" y2={y} />
        ))}
      </g>

      {/* Diagonal quantum state rays */}
      <g stroke="rgba(236,72,153,0.12)" strokeWidth="1" strokeDasharray="3,3">
        <line x1="80" y1="0" x2="240" y2="80" />
        <line x1="400" y1="0" x2="240" y2="80" />
        <line x1="80" y1="160" x2="240" y2="80" />
        <line x1="400" y1="160" x2="240" y2="80" />
      </g>

      {/* Central Quantum Shield */}
      <g transform="translate(240, 75)">
        <polygon
          points="0,-42 34,-20 34,18 0,44 -34,18 -34,-20"
          fill="rgba(30,10,50,0.85)"
          stroke="url(#pqc-grad)"
          strokeWidth="2.5"
          filter="url(#pqc-glow)"
        />
        {/* Inner geometric key/lock */}
        <polygon
          points="0,-24 18,-10 18,12 0,26 -18,12 -18,-10"
          fill="none"
          stroke="#c084fc"
          strokeWidth="1.5"
        />
        {/* Keyhole & quantum orbit */}
        <circle cx="0" cy="-4" r="7" fill="none" stroke="#f472b6" strokeWidth="1.8" />
        <polygon points="-3,-2 3,-2 4,10 -4,10" fill="#f472b6" />
        <ellipse rx="24" ry="10" fill="none" stroke="rgba(192,132,252,0.4)" strokeWidth="1" transform="rotate(30)" />
      </g>

      {/* Left Node: Kyber-768 */}
      <g transform="translate(100, 75)">
        <rect x="-48" y="-24" width="96" height="48" rx="10" fill="rgba(25,10,45,0.85)" stroke="#a855f7" strokeWidth="1.2" filter="url(#pqc-glow)" />
        <text x="0" y="-6" textAnchor="middle" fill="#e9d5ff" fontSize="9" fontWeight="bold" fontFamily="monospace">CRYSTALS-Kyber</text>
        <text x="0" y="8" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace">ML-KEM-768</text>
        <text x="0" y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="sans-serif">Quantum Key Encapsulation</text>
      </g>

      {/* Right Node: ML-DSA-65 */}
      <g transform="translate(380, 75)">
        <rect x="-48" y="-24" width="96" height="48" rx="10" fill="rgba(25,10,45,0.85)" stroke="#ec4899" strokeWidth="1.2" filter="url(#pqc-glow)" />
        <text x="0" y="-6" textAnchor="middle" fill="#fbcfe8" fontSize="9" fontWeight="bold" fontFamily="monospace">CRYSTALS-Dilithium</text>
        <text x="0" y="8" textAnchor="middle" fill="#f472b6" fontSize="7" fontFamily="monospace">ML-DSA-65</text>
        <text x="0" y="18" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="6" fontFamily="sans-serif">Quantum Digital Signature</text>
      </g>

      {/* Top Banner Tag */}
      <g transform="translate(180, 14)">
        <rect width="120" height="16" rx="8" fill="rgba(168,85,247,0.2)" stroke="rgba(168,85,247,0.5)" strokeWidth="0.8" />
        <text x="60" y="11" textAnchor="middle" fill="#f0abfc" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          🔒 Quantum-Safe PQC
        </text>
      </g>
    </svg>
  );
}

/** 3. SecureRAG: Emerald/Green, Glowing Documents, Search Lens Overlay & Vector Flow */
function SecureRAGThumbnail() {
  return (
    <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="rag-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#082b22" />
          <stop offset="60%" stopColor="#051c16" />
          <stop offset="100%" stopColor="#020e0b" />
        </radialGradient>
        <filter id="rag-glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="doc-stream" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <rect width="480" height="160" fill="url(#rag-bg)" />

      {/* Vector Stream Waves */}
      <path d="M 0 40 Q 120 70 240 40 T 480 40" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1.2" />
      <path d="M 0 80 Q 120 110 240 80 T 480 80" fill="none" stroke="url(#doc-stream)" strokeWidth="1.6" filter="url(#rag-glow)" />
      <path d="M 0 120 Q 120 90 240 120 T 480 120" fill="none" stroke="rgba(52,211,153,0.15)" strokeWidth="1.2" />

      {/* Left: Document Stack */}
      <g transform="translate(90, 75)">
        {/* Back Doc */}
        <rect x="-34" y="-36" width="46" height="60" rx="4" fill="rgba(6,78,59,0.4)" stroke="#059669" strokeWidth="1" transform="rotate(-8)" />
        {/* Mid Doc */}
        <rect x="-26" y="-32" width="46" height="60" rx="4" fill="rgba(6,78,59,0.6)" stroke="#10b981" strokeWidth="1.2" transform="rotate(4)" />
        {/* Front Doc */}
        <rect x="-22" y="-28" width="46" height="60" rx="4" fill="rgba(4,40,30,0.9)" stroke="#34d399" strokeWidth="1.5" filter="url(#rag-glow)" />
        {/* Document content lines */}
        <line x1="-14" y1="-18" x2="14" y2="-18" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
        <line x1="-14" y1="-10" x2="8" y2="-10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-14" y1="-3" x2="12" y2="-3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-14" y1="4" x2="2" y2="4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
        {/* Lock badge on document */}
        <circle cx="10" cy="18" r="8" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <rect x="7" y="16" width="6" height="5" rx="1" fill="#34d399" />
        <path d="M 8 16 L 8 13 A 2 2 0 0 1 12 13 L 12 16" fill="none" stroke="#34d399" strokeWidth="1" />
        <text x="0" y="44" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace" fontWeight="bold">
          Vector Corpus
        </text>
      </g>

      {/* Center: Holographic Search Lens Overlay */}
      <g transform="translate(240, 75)">
        {/* Cosine similarity cache circle */}
        <circle cx="0" cy="0" r="36" fill="rgba(6,78,59,0.25)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" strokeDasharray="4,3" />
        {/* Search Lens glass */}
        <circle cx="0" cy="0" r="26" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="2.5" filter="url(#rag-glow)" />
        <line x1="18" y1="18" x2="34" y2="34" stroke="#10b981" strokeWidth="4" strokeLinecap="round" filter="url(#rag-glow)" />
        {/* Lens Crosshair */}
        <line x1="-14" y1="0" x2="14" y2="0" stroke="#34d399" strokeWidth="1" strokeDasharray="2,2" />
        <line x1="0" y1="-14" x2="0" y2="14" stroke="#34d399" strokeWidth="1" strokeDasharray="2,2" />
        <circle cx="0" cy="0" r="6" fill="#34d399" filter="url(#rag-glow)" />
        <text x="0" y="46" textAnchor="middle" fill="#34d399" fontSize="8.5" fontFamily="monospace" fontWeight="bold">
          Hybrid pgvector + BM25
        </text>
      </g>

      {/* Right: Synthesis & Semantic Cache Result */}
      <g transform="translate(390, 75)">
        <rect x="-44" y="-28" width="88" height="56" rx="8" fill="rgba(4,40,30,0.85)" stroke="#34d399" strokeWidth="1.2" filter="url(#rag-glow)" />
        <text x="0" y="-12" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold" fontFamily="monospace">Semantic Cache</text>
        <text x="0" y="2" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt; 40ms Latency</text>
        <text x="0" y="16" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="6.5" fontFamily="sans-serif">Cosine Sim &amp; Citations</text>
      </g>

      {/* Top Banner Tag */}
      <g transform="translate(16, 16)">
        <rect width="130" height="16" rx="8" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.5)" strokeWidth="0.8" />
        <text x="65" y="11" textAnchor="middle" fill="#34d399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          📄 Enterprise Document RAG
        </text>
      </g>
    </svg>
  );
}

/** 4. Research Pipeline: Indigo/Teal Multi-Agent LangGraph Swarm */
function AgentNetworkThumbnail() {
  return (
    <svg viewBox="0 0 480 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="agent-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#142636" />
          <stop offset="100%" stopColor="#0a141e" />
        </radialGradient>
        <filter id="agent-glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="480" height="160" fill="url(#agent-bg)" />

      {/* Connection lines with reflection feedback loop */}
      {[
        [60,80,200,50],[60,80,200,110],[200,50,340,30],[200,50,340,80],
        [200,110,340,80],[200,110,340,130],[340,30,420,80],[340,130,420,80],
        [340,130,200,50], // Critic -> Searcher feedback loop
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={i === 8 ? "rgba(244,63,94,0.6)" : "rgba(0,212,212,0.45)"}
          strokeWidth={i === 8 ? "1.5" : "1"}
          strokeDasharray={i === 8 ? "3,3" : undefined}
          filter="url(#agent-glow)" />
      ))}

      {/* Nodes */}
      {[
        [60,80,"#00d4d4","Planner"],
        [200,50,"#00ffcc","Searcher"],
        [200,110,"#10b981","Reader"],
        [340,30,"#38bdf8","Writer"],
        [340,80,"#f59e0b","Embedder"],
        [340,130,"#ff6b6b","Critic"],
        [420,80,"#00ffcc","Synthesis"],
      ].map(([x,y,color,label]) => (
        <g key={String(label)}>
          <circle cx={Number(x)} cy={Number(y)} r="14" fill={String(color)} fillOpacity="0.18" filter="url(#agent-glow)" />
          <circle cx={Number(x)} cy={Number(y)} r="7.5" fill={String(color)} filter="url(#agent-glow)" />
          <text x={Number(x)} y={Number(y)+23} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="monospace">
            {String(label)}
          </text>
        </g>
      ))}

      {/* Top Banner Tag */}
      <g transform="translate(16, 16)">
        <rect width="136" height="16" rx="8" fill="rgba(0,255,204,0.15)" stroke="rgba(0,255,204,0.4)" strokeWidth="0.8" />
        <text x="68" y="11" textAnchor="middle" fill="#00ffcc" fontSize="7.5" fontFamily="monospace" fontWeight="bold">
          🤖 Autonomous Agent Swarm
        </text>
      </g>
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const catColor = CATEGORY_COLORS[project.category] ?? "text-slate-300 bg-slate-800 border-slate-700";
  const catGlow = CATEGORY_GLOW[project.category] ?? "";

  const renderBanner = () => {
    switch (project.id) {
      case "xcipher":
        return <XCipherThumbnail />;
      case "quantum-security":
        return <QuantumSecurityThumbnail />;
      case "securerag":
        return <SecureRAGThumbnail />;
      case "research-pipeline":
      default:
        return <AgentNetworkThumbnail />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl bg-[#0d1f2d] backdrop-blur-xl border border-[rgba(0,212,212,0.3)]
        shadow-[0_4px_24px_rgba(0,212,212,0.08)] transition-all duration-400 group project-shimmer ${catGlow}`}
    >
      {/* Thumbnail Banner */}
      <div className="relative h-36 sm:h-44 w-full overflow-hidden rounded-t-2xl">
        {renderBanner()}
        {/* Bottom fade into card body */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0d1f2d] to-transparent" />
      </div>

      {/* Card body */}
      <div className="p-7 sm:p-9 pt-4">
        {/* Header Row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div className="space-y-1.5 flex-1">
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${catColor}`}>
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-400">{project.subtitle}</p>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#0d2424] border border-[#143d3d] text-slate-400
              hover:text-white hover:border-[#00d4d4]/60 hover:bg-[#00d4d4]/15 transition-all shrink-0"
            aria-label={`View ${project.title} on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* One-Liner Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 pb-6 border-b border-[#143d3d]">
          {project.oneLiner}
        </p>

        {/* Bullet Points */}
        <div className="space-y-2.5 mb-6">
          {project.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00ffcc] shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0d2424] border border-[#143d3d]
                text-slate-300 skill-tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
