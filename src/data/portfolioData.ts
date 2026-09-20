export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Security & AI" | "RAG & LLMs" | "Research & Agents" | "EdTech & AI Systems";
  oneLiner: string;
  bullets: string[];
  techStack: string[];
  githubUrl: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Laveena",
    title: "AI Engineering Student & Developer | LLMs & Agentic AI Systems",
    tagline: "Building AI agents, secure systems, and LLM-powered products that actually work.",
    shortBio:
      "3rd year AI student at SZABIST, Karachi, Pakistan (2024–2028, CGPA 3.9/4.0) with hands-on experience building multi-agent systems, RAG pipelines, and post-quantum security tools.",
    location: "Karachi, Pakistan",
    email: "laveena.kumari72@gmail.com",
    github: "https://github.com/laveenakumari01",
    linkedin: "https://www.linkedin.com/in/laveena-kumariofficial/",
    status: "Open to Opportunities",
    metrics: [
      { label: "CGPA", value: "3.9 / 4.0", note: "SZABIST, Karachi, Pakistan" },
      { label: "AI Agents Built", value: "10+", note: "LangGraph & LangChain" },
      { label: "Award", value: "Employee of the Month", note: "NFTCipher" },
    ],
  },

  about: {
    education: {
      degree: "Bachelors in Artificial Intelligence",
      institution: "SZABIST, Karachi, Pakistan",
      duration: "2024 – 2028 (Currently Enrolled)",
      gpa: "3.9 / 4.0",
      status: "Currently Enrolled • 2024–2028",
      highlights: [
        "Focused on deep learning, natural language processing, and intelligent systems.",
        "Core coursework in data structures, algorithms, and machine learning architectures.",
        "Building autonomous AI agents and secure AI systems alongside studies.",
      ],
    },
    narrative: [
      "I'm currently a 3rd year Bachelors student in Artificial Intelligence at SZABIST, Karachi, Pakistan (2024–2028), building real-world AI projects alongside my studies.",
      "I'm an AI engineer and developer who enjoys building things that are both smart and practical. My main interests are AI agents — programs that can plan, search, write, and check their own work automatically.",
      "I also care deeply about security. I've built systems that use the latest post-quantum cryptography standards to keep data safe, even from future quantum computers.",
      "Right now I'm focused on freelance projects and building a portfolio that shows what I can do — clean code, real results.",
    ],
    agenticStack: [
      {
        layer: "Tier 04: Execution & Swarms",
        desc: "Autonomous agents working in parallel, checking each other's work",
        color: "from-amber-500 to-rose-500",
      },
      {
        layer: "Tier 03: Memory & State",
        desc: "LangGraph state graphs, persistent memory, conversation history",
        color: "from-violet-500 to-purple-500",
      },
      {
        layer: "Tier 02: Retrieval & Caching",
        desc: "RAG pipelines, ChromaDB vector search, smart document lookup",
        color: "from-cyan-500 to-blue-500",
      },
      {
        layer: "Tier 01: LLM Foundation",
        desc: "Groq, Gemini, OpenRouter, local models via Ollama",
        color: "from-teal-400 to-emerald-500",
      },
    ],
  },

  experience: [
    {
      id: "nftcipher",
      role: "AI Engineer Intern",
      company: "NFTCipher (Karachi / Remote)",
      period: "Sep 2024 – Present",
      location: "Karachi / Remote",
      badge: "Featured Role",
      description:
        "Developing AI agents and security-focused tools for a blockchain intelligence company. Built automated research pipelines, implemented post-quantum cryptography standards, and built production RAG systems.",
      achievements: [
        "Built an autonomous multi-agent research pipeline using LangGraph, reducing manual analysis time by 70%.",
        "Designed and deployed a quantum-resilient security system using liboqs (Kyber-768 + ML-DSA-65), replacing legacy RSA-2048 encryption with modern post-quantum cryptographic standards.",
        "Engineered a high-performance RAG system over 5,000+ technical documents using hybrid search (pgvector + BM25) and semantic caching, achieving sub-40ms response times.",
        "Recognized as Employee of the Month for delivering the post-quantum security module ahead of schedule.",
      ],
      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "PostgreSQL",
        "pgvector",
        "FastAPI",
        "Docker",
        "Post-Quantum Cryptography",
        "ChromaDB",
      ],
    },
  ],

  projects: [
    {
      id: "xcipher",
      title: "XCipher — AI-Powered EdTech Platform",
      subtitle: "Full-Stack EdTech, Quantum & 10-Agent Cybersecurity Lab",
      category: "EdTech & AI Systems",
      oneLiner:
        "XCipher is a EdTech platform that combines Artificial Intelligence, Blockchain, and Quantum Computing/Cryptography education in one place. The platform offers structured courses, interactive learning modules, and an AI-powered cybersecurity lab where students can learn cutting-edge technologies. Built with a full-stack architecture including a course management system, PDF viewer, drag-and-drop uploads, QR payment integration, admin analytics dashboard, and a notification system.",
      bullets: [
        "Built a full-stack course platform with Next.js, Firebase, and Prisma — including PDF viewer, drag-and-drop file uploads, and Cloudflare R2 storage.",
        "Integrated QR-based payment flow and admin analytics dashboard for course management.",
        "Developed an AI-powered multi-agent cybersecurity lab with 10 autonomous agents for hands-on security learning.",
        "Implemented blockchain-based credential verification using MetaMask integration.",
        "Added real-time notification system and student progress tracking.",
      ],
      techStack: [
        "Next.js",
        "Firebase",
        "Prisma",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "Cloudflare R2",
        "MetaMask",
        "React",
      ],
      githubUrl: "https://github.com/laveenakumari01",
    },
    {
      id: "quantum-security",
      title: "Post-Quantum Cryptography for AI & Blockchain",
      subtitle: "Quantum-safe cryptographic library & multi-agent defense",
      category: "Security & AI",
      oneLiner:
        "Implemented Post-Quantum Cryptography (CRYSTALS-Kyber-768 + ML-DSA-65) to replace legacy encryption with modern quantum-safe cryptographic algorithms to protect AI model weights and blockchain transactions.",
      bullets: [
        "Implemented ML-KEM (Kyber-768) key encapsulation and ML-DSA-65 digital signatures using liboqs C bindings.",
        "Designed hybrid classic/post-quantum signature schemes (ECDSA + ML-DSA) for backward compatibility.",
        "Benchmarked performance across key generation, signing, and verification — achieved sub-millisecond ops on standard hardware.",
        "Applied to secure sensitive AI model weights and encrypted document pipelines.",
      ],
      techStack: ["Python", "C/C++", "liboqs", "Cryptography", "FastAPI", "Docker", "pytest"],
      githubUrl: "https://github.com/laveenakumari01",
    },
    {
      id: "securerag",
      title: "SecureRAG — Production Document Intelligence",
      subtitle: "Enterprise RAG with semantic caching & source attribution",
      category: "RAG & LLMs",
      oneLiner:
        "A fast, accurate question-answering system over private document collections with sub-40ms response times and strict source verification.",
      bullets: [
        "Hybrid search combining dense vector embeddings (SentenceTransformers) and sparse BM25 indexing over PostgreSQL pgvector.",
        "Implemented semantic cache using cosine similarity on query embeddings, cutting LLM API costs by ~45%.",
        "Integrated cross-encoder reranking (bge-reranker-large) to improve retrieval precision on complex multi-paragraph questions.",
        "Added strict citation and hallucination detection to ensure every answer references real document chunks.",
      ],
      techStack: [
        "Python",
        "LangChain",
        "PostgreSQL",
        "pgvector",
        "SentenceTransformers",
        "FastAPI",
        "ChromaDB",
        "Docker",
      ],
      githubUrl: "https://github.com/laveenakumari01",
    },
    {
      id: "research-pipeline",
      title: "Autonomous Multi-Agent Research System",
      subtitle: "LangGraph-powered stateful agent swarm",
      category: "Research & Agents",
      oneLiner:
        "A swarm of specialized AI agents that automatically research complex topics, find sources, cross-verify facts, and write structured intelligence reports.",
      bullets: [
        "Built cyclic state graphs in LangGraph with specialized nodes: Planner, Searcher, Reader, Writer, and Critic.",
        "Implemented a self-reflection loop where the Critic agent evaluates draft quality and routes back to Searcher if sources are missing.",
        "Used Groq-hosted LLaMA 3.3 for fast generation and Gemini 1.5 Pro for processing long source documents.",
        "Exported reports as structured Markdown, PDF, and interactive JSON graph views.",
      ],
      techStack: [
        "Python",
        "LangGraph",
        "Groq",
        "Gemini API",
        "Tavily Search",
        "FastAPI",
        "Pydantic",
        "AsyncIO",
      ],
      githubUrl: "https://github.com/laveenakumari01",
    },
  ],

  skills: [
    {
      title: "Languages",
      iconName: "Code2",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML/CSS"],
    },
    {
      title: "AI & Agent Frameworks",
      iconName: "BrainCircuit",
      skills: [
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "HuggingFace",
        "CrewAI",
        "Semantic Kernel",
        "AutoGPT",
      ],
    },
    {
      title: "Backend & APIs",
      iconName: "Server",
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "AsyncIO",
        "Pydantic",
        "Node.js",
        "Next.js",
      ],
    },
    {
      title: "Databases & Vector Stores",
      iconName: "Database",
      skills: [
        "PostgreSQL",
        "pgvector",
        "ChromaDB",
        "FAISS",
        "Redis",
        "Pinecone",
        "SQLite",
      ],
    },
    {
      title: "AI Security & Cryptography",
      iconName: "Cpu",
      skills: [
        "Post-Quantum Crypto",
        "ML-KEM (Kyber)",
        "ML-DSA (Dilithium)",
        "liboqs",
        "RAG Security",
        "Prompt Defense",
      ],
    },
    {
      title: "LLM Providers & Infra",
      iconName: "BarChart2",
      skills: [
        "Groq (LLaMA 3.3)",
        "Google Gemini",
        "OpenAI",
        "Anthropic",
        "Ollama (Local)",
        "OpenRouter",
      ],
    },
    {
      title: "Tools & DevOps",
      iconName: "Wrench",
      skills: [
        "Docker",
        "Git / GitHub",
        "Linux / Bash",
        "pytest",
        "Postman",
        "Vercel",
        "CI/CD",
      ],
    },
  ],

  certificates: [
    {
      id: "deeplearning-ai-agents",
      title: "AI Agentic Design Patterns with AutoGen",
      issuer: "DeepLearning.AI",
      icon: "BrainCircuit",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "deeplearning-langgraph",
      title: "AI Agents in LangGraph",
      issuer: "DeepLearning.AI",
      icon: "BrainCircuit",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: "employee-award",
      title: "Employee of the Month — Security Milestone",
      issuer: "NFTCipher (Karachi / Remote)",
      icon: "Award",
      color: "from-amber-500 to-rose-500",
    },
    {
      id: "huggingface-nlp",
      title: "Natural Language Processing with Transformers",
      issuer: "Hugging Face",
      icon: "GraduationCap",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "fastapi-cert",
      title: "High-Performance APIs with FastAPI",
      issuer: "freeCodeCamp",
      icon: "GraduationCap",
      color: "from-teal-500 to-cyan-600",
    },
  ],
};
