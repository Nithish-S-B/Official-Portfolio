export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'GenAI & LLMs' | 'Computer Vision' | 'MLOps & Systems' | 'Reinforcement Learning';
  thumbnail: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    architecture: string[];
    results: string[];
    codeSnippet?: string;
  };
}

export interface TechItem {
  name: string;
  category: 'Languages' | 'AI / ML' | 'Frameworks' | 'Databases & Vector' | 'Cloud & MLOps' | 'Tools';
  level: string;
  featured?: boolean;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  role: string;
  organization: string;
  description: string;
  skills: string[];
  type: 'Education' | 'Internship' | 'Research' | 'Milestone';
}

export interface Capability {
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Nithish",
    role: "AI & Machine Learning Engineer",
    tagline: "Designing Scalable AI Architecture, Building LLM Systems & Exploring Multi-Agent Workflows",
    bio: "B.Tech AI & ML student (2022–2026) specializing in Large Language Models, Retrieval-Augmented Generation, Computer Vision, and Reinforcement Learning. Passionate about building production-grade AI systems at the intersection of deep learning research and real-world engineering.",
    status: "Open to AI Engineer & ML Roles",
    location: "India / Remote",
    email: "nithish.sb.work@gmail.com",
    github: "https://github.com/Nithish-S-B",
    linkedin: "https://www.linkedin.com/in/nithish-s-b-/",
    resumeUrl: "/S B Nithish Resume.pdf",
    stats: [
      { label: "AI/ML Projects Built", value: "4+" },
      { label: "Hallucination Reduction", value: "~80%" },
      { label: "Best RL Model", value: "Double DQN" },
      { label: "Internships Completed", value: "4" },
    ],
  },

  about: {
    philosophy: "I believe AI engineering is more than training models—it's about building complete, reliable systems. My approach combines software engineering principles with machine learning to create applications that are accurate, maintainable, and production-ready. I emphasize clean architecture, retrieval over guesswork, thoughtful evaluation, and user-focused design to ensure AI systems are both useful and trustworthy.",
    education: {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "SRIHER (DU)",
      period: "2022 — 2026",
      coursework: ["Deep Learning & Neural Networks", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Data Structures & Algorithms"],
    },
    exploring: [
      { title: "System Design", detail: "Understanding distributed architectures, scalability patterns, and how large-scale ML systems are designed for reliability and throughput." },
      { title: "Large Language Models", detail: "Going deep on LLM internals—fine-tuning, RLHF, RAG architectures, serving at scale with vLLM, and evaluation frameworks." },
      { title: "Multi-Agent Systems", detail: "Exploring autonomous agent frameworks, typed communication graphs, tool-calling patterns, and orchestration with LangGraph." },
    ],
    principles: [
      { title: "Research Meets Engineering", description: "Translating academic papers into production systems—whether it's implementing RAG from scratch or running RL experiments in simulation environments." },
      { title: "Metrics-Driven Evaluation", description: "Never deploying without proper benchmarks. Using Dice Coefficient for segmentation, reward curves for RL, and hallucination rates for LLM pipelines." },
      { title: "Clean, Modular Code", description: "Building AI components as reusable, swappable modules so models, retrievers, and APIs can be upgraded without rewriting everything." },
    ],
  },

  projects: [
    {
      id: "ai-doctor-copilot",
      title: "AI Doctor Copilot — Clinical RAG System",
      subtitle: "Evidence-grounded medical response system with ~80% hallucination reduction using Llama 3 & FAISS",
      description: "A clinical decision support system using Llama 3, Ollama, FAISS, and Retrieval-Augmented Generation (RAG) to provide evidence-grounded medical responses from curated medical PDFs.",
      category: "GenAI & LLMs",
      thumbnail: "/projects/ai-doctor.webp",
      tags: ["Python", "Llama 3", "Ollama", "FAISS", "RAG", "all-MiniLM-L6-v2"],
      metrics: [
        { label: "Hallucination Reduction", value: "~80%" },
        { label: "Languages Supported", value: "3" },
        { label: "Retrieval Model", value: "MiniLM-L6-v2" },
      ],
      githubUrl: "https://github.com/Nithish-S-B/ai-doctor-copilot",
      caseStudy: {
        overview: "Developed a clinical decision support system at SRIHER(DU) to provide evidence-grounded medical responses, reducing over-reliance on LLM hallucinations through semantic retrieval from authoritative medical PDFs.",
        challenge: "Baseline LLMs hallucinate medical facts at unacceptable rates in clinical contexts. The system needed multilingual support (English, Hindi, Tamil), emergency detection, and mandatory source citations while maintaining conversational quality.",
        architecture: [
          "Semantic retrieval pipeline using all-MiniLM-L6-v2 embeddings with FAISS vector store for top-k document retrieval from curated medical PDFs.",
          "Llama 3 via Ollama as the generative backbone for locally-hosted, privacy-preserving inference.",
          "Multi-layer safety framework: emergency symptom detection, confidence scoring, mandatory source citation, and medical disclaimers.",
          "Multilingual support across English, Hindi, and Tamil using language-aware prompt routing.",
        ],
        results: [
          "Reduced factual hallucinations by approximately 80% compared to a baseline LLM through retrieval-based generation.",
          "Successfully handled multilingual queries across English, Hindi, and Tamil.",
          "Implemented full safety guardrails including emergency detection and source attribution.",
        ],
        codeSnippet: `# Semantic retrieval pipeline
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = FAISS.load_local("medical_kb", embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# RAG chain with safety layer
chain = RetrievalQA.from_chain_type(
    llm=Ollama(model="llama3"),
    retriever=retriever,
    chain_type="stuff",
    return_source_documents=True
)`
      }
    },
    {
      id: "rl-traffic-signal",
      title: "Adaptive Traffic Signal Control via RL",
      subtitle: "Comparative study of Q-Learning, DQN & Double DQN for adaptive traffic optimization in SUMO",
      description: "A comparative RL study using Q-Learning, Deep Q-Network (DQN), and Double DQN for adaptive traffic signal optimization, simulated in SUMO with a Python fallback environment.",
      category: "Reinforcement Learning",
      thumbnail: "/projects/rl-traffic.webp",
      tags: ["Python", "PyTorch", "SUMO", "Q-Learning", "DQN", "Double DQN", "Reinforcement Learning"],
      metrics: [
        { label: "Best Model", value: "Double DQN" },
        { label: "Algorithms Compared", value: "3" },
        { label: "Simulation", value: "SUMO" },
      ],
      githubUrl: "https://github.com/Nithish-S-B/rl-traffic-signal-comparative-study",
      caseStudy: {
        overview: "Conducted a rigorous comparative study of three RL algorithms for adaptive traffic signal control at a four-way intersection, with a modular framework designed for future multi-intersection extension.",
        challenge: "Traditional fixed-time traffic signals fail under variable traffic loads. The challenge was designing a reward function and state representation that generalizes across different traffic density patterns.",
        architecture: [
          "Simulated a four-way traffic intersection using SUMO (Simulation of Urban MObility) with a Python fallback environment for reproducible experimentation.",
          "Implemented Q-Learning (tabular), Deep Q-Network (DQN), and Double DQN with experience replay and target networks.",
          "Evaluated models using reward curves, queue length, waiting time, and signal phase transitions across equal test episodes.",
          "Designed a modular RL framework supporting future extensions to multi-intersection traffic systems.",
        ],
        results: [
          "Double DQN achieved the best overall performance across all evaluation metrics.",
          "Significant reduction in average queue length and waiting time compared to fixed-time baselines.",
          "Modular framework is ready for extension to multi-intersection cooperative control.",
        ],
      }
    },
    {
      id: "brain-tumor-segmentation",
      title: "Automated Brain Tumor Segmentation from MRI",
      subtitle: "U-Net CNN architecture for whole tumor, tumor core & enhancing tumor region segmentation",
      description: "An automated brain tumor segmentation system using a U-Net based CNN architecture, evaluated using Dice Coefficient and IoU metrics on multi-modal MRI scans.",
      category: "Computer Vision",
      thumbnail: "/projects/brain-tumor.webp",
      tags: ["Python", "PyTorch", "U-Net", "CNN", "Medical Imaging", "Dice Coefficient", "IoU"],
      metrics: [
        { label: "Architecture", value: "U-Net" },
        { label: "Metric", value: "Dice / IoU" },
        { label: "Regions", value: "3 Segments" },
      ],
      githubUrl: "https://github.com/Nithish-S-B",
      caseStudy: {
        overview: "Implemented an automated brain tumor segmentation system at SRIHER(DU), targeting three clinically critical tumor sub-regions from multi-modal MRI scans to assist radiological workflows.",
        challenge: "Brain tumor boundaries are highly irregular and class-imbalanced. Accurately segmenting all three sub-regions (whole tumor, tumor core, enhancing tumor) simultaneously with a single model requires careful architecture design.",
        architecture: [
          "U-Net based CNN architecture with encoder-decoder skip connections for high-resolution segmentation output.",
          "Multi-class segmentation targeting whole tumor, tumor core, and enhancing tumor regions simultaneously.",
          "Data augmentation pipeline to handle limited medical imaging dataset sizes and class imbalance.",
          "Evaluation using Dice Coefficient and Intersection over Union (IoU) as primary metrics.",
        ],
        results: [
          "Successfully segmented all three tumor sub-regions: whole tumor, tumor core, and enhancing tumor.",
          "Model evaluated using Dice Coefficient and IoU metrics demonstrating strong boundary localization.",
        ],
      }
    },
    {
      id: "leukemia-detection",
      title: "Leukemia Detection Using CNN (VGG19)",
      subtitle: "Deep learning classification of leukemia stages from microscopic blood smear images",
      description: "A deep learning-based leukemia detection system using Convolutional Neural Networks with VGG19 architecture, trained on microscopic blood smear images with data augmentation.",
      category: "Computer Vision",
      thumbnail: "/projects/leukemia.webp",
      tags: ["Python", "TensorFlow", "VGG19", "CNN", "Data Augmentation", "Medical AI"],
      metrics: [
        { label: "Architecture", value: "VGG19" },
        { label: "Domain", value: "Hematology AI" },
        { label: "Input", value: "Blood Smears" },
      ],
      githubUrl: "https://github.com/Nithish-S-B",
      caseStudy: {
        overview: "Developed a deep learning-based leukemia detection and staging system using microscopic blood smear images, leveraging transfer learning on VGG19 for accurate classification.",
        challenge: "Microscopic blood smear images vary significantly in staining, magnification, and cell morphology. The model needed to generalize across these variations while classifying multiple stages of leukemia.",
        architecture: [
          "Transfer learning with VGG19 pretrained on ImageNet, fine-tuned on microscopic blood smear datasets.",
          "Image preprocessing pipeline including normalization, color jitter, and spatial augmentation.",
          "Data augmentation techniques (rotation, flipping, zoom) to improve model generalization on limited medical datasets.",
          "Classification head trained to differentiate multiple stages of leukemia.",
        ],
        results: [
          "Successfully classified various stages of Leukemia from microscopic blood smear images.",
          "Data augmentation significantly improved model generalization on limited training data.",
        ],
      }
    },
  ] as Project[],

  techStack: [
    // Languages
    { name: "Python", category: "Languages", level: "Expert", featured: true },
    { name: "TypeScript", category: "Languages", level: "Intermediate", featured: true },
    { name: "JavaScript", category: "Languages", level: "Intermediate", featured: true },
    { name: "SQL", category: "Languages", level: "Advanced", featured: true },

    // AI / ML
    { name: "PyTorch", category: "AI / ML", level: "Advanced", featured: true },
    { name: "NumPy & pandas", category: "AI / ML", level: "Expert", featured: true },
    { name: "Llama 3 / Ollama", category: "AI / ML", level: "Intermediate", featured: true },
    { name: "FAISS", category: "AI / ML", level: "Intermediate", featured: true },
    { name: "U-Net / CNN", category: "AI / ML", level: "Intermediate", featured: false },

    // Frameworks
    { name: "FastAPI", category: "Frameworks", level: "Intermediate", featured: true },
    { name: "Next.js", category: "Frameworks", level: "Intermediate", featured: true },
    { name: "React", category: "Frameworks", level: "Intermediate", featured: true },

    // Databases & Vector
    { name: "PostgreSQL", category: "Databases & Vector", level: "Intermediate", featured: true },
    { name: "FAISS Vector Store", category: "Databases & Vector", level: "Intermediate", featured: true },

    // Cloud & MLOps
    { name: "Docker", category: "Cloud & MLOps", level: "Intermediate", featured: true },
    { name: "Vercel", category: "Cloud & MLOps", level: "Intermediate", featured: true },
    { name: "Git & GitHub", category: "Cloud & MLOps", level: "Advanced", featured: true },

    // Tools
    { name: "VS Code", category: "Tools", level: "Expert", featured: true },
  ] as TechItem[],

  timeline: [
    {
      id: "timeline-1",
      year: "2025 — Exploring Deeper",
      title: "Advanced AI — Deep Learning, NLP, CV, RL",
      role: "Self-Directed Research",
      organization: "Independent",
      description: "Going deep into advanced AI: deep learning architectures, natural language processing, computer vision pipelines, and reinforcement learning. Focused on understanding systems from fundamentals to production.",
      skills: ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "Research"],
      type: "Milestone"
    },
    {
      id: "timeline-2",
      year: "2024",
      title: "AI & ML Core",
      role: "Student",
      organization: "SRIHER (DU)",
      description: "Dove into core AI and ML: neural networks, supervised/unsupervised learning, computer vision, and building first real ML models. First internships in medical AI.",
      skills: ["Machine Learning", "Neural Networks", "Computer Vision", "Python"],
      type: "Education"
    },
    {
      id: "timeline-3",
      year: "2023",
      title: "Frontend Development",
      role: "Student",
      organization: "Self-Taught",
      description: "Built a strong foundation in frontend: HTML, CSS, JavaScript, and React. Developed web projects and gained appreciation for the full engineering stack that powers modern AI products.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      type: "Milestone"
    },
    {
      id: "timeline-4",
      year: "2022",
      title: "B.Tech AI & Machine Learning — Joined",
      role: "Student",
      organization: "SRIHER (DU)",
      description: "Began undergraduate studies in Artificial Intelligence & Machine Learning. Started the journey into programming, mathematics, and the foundations of AI.",
      skills: ["Python", "Mathematics", "Algorithms", "AI Fundamentals"],
      type: "Education"
    }
  ] as TimelineItem[],

  capabilities: [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Building end-to-end RAG pipelines with semantic vector retrieval (FAISS, Qdrant), embedding models, and grounded LLM generation — with safety layers for production clinical and enterprise use.",
      tags: ["FAISS", "MiniLM Embeddings", "Llama 3", "Ollama", "Python"],
      iconName: "Database"
    },
    {
      title: "Computer Vision & Medical Imaging",
      description: "Implementing CNN architectures (U-Net, VGG19) for medical image segmentation and classification. Experience with data augmentation, transfer learning, and evaluation metrics like Dice & IoU.",
      tags: ["U-Net", "VGG19", "PyTorch", "TensorFlow", "Medical AI"],
      iconName: "Eye"
    },
    {
      title: "Reinforcement Learning",
      description: "Designing and comparing RL algorithms (Q-Learning, DQN, Double DQN) in simulation environments like SUMO. Building modular RL frameworks for real-world control problems.",
      tags: ["Q-Learning", "DQN", "Double DQN", "SUMO", "PyTorch"],
      iconName: "Zap"
    },
    {
      title: "LLM Integration & Prompt Engineering",
      description: "Integrating open-weight LLMs (Llama 3) via Ollama for local inference, designing multi-layer safety frameworks, multilingual prompt routing, and confidence scoring systems.",
      tags: ["Llama 3", "Ollama", "RAG", "Multilingual", "Safety"],
      iconName: "Bot"
    },
    {
      title: "Full-Stack AI Product Development",
      description: "Building end-to-end AI products with Next.js, FastAPI, TypeScript, and Python backends. Deploying with Docker and Vercel with clean API contracts.",
      tags: ["Next.js", "FastAPI", "TypeScript", "Docker", "Vercel"],
      iconName: "Cpu"
    },
    {
      title: "Exploring System Design & Multi-Agents",
      description: "Currently going deep into distributed system design patterns and multi-agent orchestration frameworks — learning how scalable, production AI systems are architected.",
      tags: ["System Design", "Multi-Agents", "LangGraph", "Architecture"],
      iconName: "BarChart3"
    }
  ] as Capability[],

  github: {
    username: "Nithish-S-B",
    totalContributions: 320,
    currentStreak: "Active",
    topRepos: [
      {
        name: "ai-doctor-copilot",
        stars: 0,
        forks: 0,
        language: "Python",
        description: "AI-powered clinical decision support system leveraging Retrieval-Augmented Generation (RAG), Llama 3, Ollama, and FAISS for evidence-based medical assistance.",
        url: "https://github.com/Nithish-S-B/ai-doctor-copilot"
      },
      {
        name: "rl-traffic-signal-comparative-study",
        stars: 0,
        forks: 0,
        language: "Python",
        description: "Comparative study of Q-Learning, DQN & Double DQN for adaptive traffic signal control using SUMO simulation.",
        url: "https://github.com/Nithish-S-B/rl-traffic-signal-comparative-study"
      },
      {
        name: "grocery-app",
        stars: 0,
        forks: 0,
        language: "JavaScript",
        description: "A grocery management web application built with modern frontend technologies.",
        url: "https://github.com/Nithish-S-B/grocery-app"
      },
    ],
    recentCommits: [
      {
        repo: "ai-doctor-copilot",
        message: "feat: implement RAG pipeline with FAISS and Llama 3",
        time: "Recent"
      },
      {
        repo: "ai-doctor-copilot",
        message: "feat: add multilingual clinical chat with source citations",
        time: "Recent"
      },
      {
        repo: "rl-traffic-signal-comparative-study",
        message: "eval: compare Double DQN against DQN and Q-Learning",
        time: "Earlier"
      },
      {
        repo: "grocery-app",
        message: "feat: initial release of grocery shopping application",
        time: "Earlier"
      }
    ]
  },

  aiAssistant: {
    systemPrompt: "You are Ask Nithish AI, a personal assistant representing S B Nithish, a B.Tech AI & ML student (2022-2026) at SRIHER(DU). Answer questions concisely, professionally, and accurately using Nithish's background. He has completed 4 AI/ML internships, built RAG systems, RL agents, and medical imaging models.",
    samplePrompts: [
      "Tell me about the AI Doctor Copilot project.",
      "What RL algorithms did Nithish compare for traffic control?",
      "What is Nithish's tech stack?",
      "How can I contact Nithish?",
    ],
    knowledgeBase: [
      {
        keywords: ["rag", "doctor", "medical", "clinical", "llama", "faiss", "hallucination", "copilot"],
        response: "Nithish built an **AI Doctor Copilot** using Llama 3, Ollama, FAISS, and RAG at SRIHER(DU) (Apr–Jun 2026). It provides evidence-grounded medical responses from curated medical PDFs using all-MiniLM-L6-v2 embeddings. It features multilingual support (English, Hindi, Tamil), emergency symptom detection, confidence scoring, and mandatory source citations — reducing hallucinations by approximately **80%** compared to a baseline LLM."
      },
      {
        keywords: ["traffic", "rl", "reinforcement", "dqn", "double", "sumo", "q-learning", "signal"],
        response: "Nithish conducted a comparative RL study at SRIHER(DU) (Feb–Apr 2026) comparing **Q-Learning, DQN, and Double DQN** for adaptive traffic signal control. He simulated a four-way intersection using SUMO. **Double DQN** achieved the best performance across reward, queue length, waiting time, and signal phase transitions. The framework is modular for future multi-intersection extensions. Repo: [rl-traffic-signal-comparative-study](https://github.com/Nithish-S-B/rl-traffic-signal-comparative-study)"
      },
      {
        keywords: ["brain", "tumor", "mri", "segmentation", "unet", "dice", "iou", "medical"],
        response: "Nithish implemented an **automated brain tumor segmentation** system at SRIHER(DU) (May–Jun 2025) using a U-Net CNN architecture. It segments three clinically critical regions: whole tumor, tumor core, and enhancing tumor from multi-modal MRI scans. Evaluated using Dice Coefficient and IoU metrics."
      },
      {
        keywords: ["leukemia", "blood", "vgg19", "cnn", "classification", "detection"],
        response: "Nithish built a **leukemia detection system** at SRIHER(DU) (Aug–Oct 2024) using VGG19 CNN with transfer learning. He performed image preprocessing and data augmentation on microscopic blood smear images to classify various stages of leukemia."
      },
      {
        keywords: ["skills", "tech", "stack", "python", "pytorch", "tools", "languages"],
        response: "Nithish's core technical stack includes **Python, SQL, TypeScript, JavaScript, PyTorch, FastAPI, pandas, NumPy, PostgreSQL, Docker, Vercel, Git, GitHub, VS Code, and Postman**. In AI/ML he works with FAISS, Llama 3, Ollama, U-Net, VGG19, DQN/Double DQN, and MiniLM embeddings. He's currently exploring system design, advanced LLMs, and multi-agent frameworks."
      },
      {
        keywords: ["contact", "email", "reach", "hire", "linkedin", "resume"],
        response: "You can reach Nithish at **nithish.sb.work@gmail.com**, connect on [LinkedIn](https://www.linkedin.com/in/nithish-s-b-/), or browse his work on [GitHub](https://github.com/Nithish-S-B). He is open to AI Engineer and ML Engineer opportunities!"
      },
      {
        keywords: ["education", "college", "btech", "degree", "university", "sriher"],
        response: "Nithish is pursuing a **B.Tech in Artificial Intelligence & Machine Learning** at SRIHER(DU), graduating in 2026. His journey: 2022 joined AI/ML program → 2023 frontend dev → 2024 AI/ML core + first medical AI internships → 2025 advanced deep learning, NLP, CV, RL → 2026 production AI systems and exploring multi-agents & system design."
      },
      {
        keywords: ["exploring", "learning", "currently", "interests", "multi-agent", "system design"],
        response: "Nithish is currently exploring: (1) **System Design** — distributed architectures and scalability patterns for large ML systems; (2) **LLMs** — going deep on fine-tuning, RAG, vLLM serving, and evaluation frameworks; (3) **Multi-Agent Systems** — autonomous agent orchestration with LangGraph, tool-calling, and typed communication graphs."
      },
      {
        keywords: ["projects", "work", "portfolio", "internship", "built"],
        response: "Nithish's featured AI/ML projects:\n1. **AI Doctor Copilot** — Clinical RAG with Llama 3 & FAISS, ~80% hallucination reduction\n2. **RL Traffic Signal Control** — Comparative study of Q-Learning, DQN, Double DQN in SUMO\n3. **Brain Tumor Segmentation** — U-Net CNN for MRI segmentation (Dice/IoU)\n4. **Leukemia Detection** — VGG19 CNN on microscopic blood smear images"
      },
    ],
    defaultResponse: "Nithish is a B.Tech AI & ML student (2022–2026) at SRIHER(DU) with 4 completed AI/ML internships. He builds clinical RAG systems, RL agents, and medical imaging models. Ask me about his projects, tech stack, education, or how to contact him!"
  }
};
