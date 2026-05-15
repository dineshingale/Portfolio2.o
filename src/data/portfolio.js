import {
  Activity,
  Cpu,
  Code,
  Database,
  Terminal,
  Layers,
  GitMerge,
  Container
} from 'lucide-react';

export const projects = [
  {
    title: "Resume Optimizer",
    subtitle: "Engineered an AI resume optimization platform using Google Gemini LLM and advanced prompt engineering to intelligently tailor resumes against job descriptions with 100% document structure preservation.",
    category: "GenAI / NLP",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Python", "Google Gemini", "Prompt Engineering", "NLP", "JSON Parsing", "Git"],
    icon: Cpu,
    link: "https://github.com/dineshingale/Resume_Optimizer",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "ChurnPredictor",
    subtitle: "Architected an end-to-end ML pipeline using XGBoost and BigQuery for real-time customer churn prediction, achieving 87% accuracy with experiment tracking via Weights & Biases.",
    category: "Machine Learning",
    gradient: "from-orange-500 to-red-500",
    tags: ["Python", "XGBoost", "BigQuery", "Scikit-Learn", "Weights & Biases"],
    icon: Activity,
    link: "https://github.com/dineshingale/System-health-monitor",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "InsuranceClaim-AI",
    subtitle: "Built a fraud detection system utilizing Random Forest and Isolation Forest for claim assessment, achieving 89% accuracy in detecting high-risk claims with real-time API deployment.",
    category: "AI / ML",
    gradient: "from-emerald-400 to-cyan-400",
    tags: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "React", "TypeScript"],
    icon: Terminal,
    link: "https://github.com/dineshingale/InsuranceClaim-AI",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Flower Species Classifier",
    subtitle: "Developed a custom CNN using TensorFlow/Keras optimized for multi-class classification. Engineered a high-performance input pipeline via tf.data API and deployed a FastAPI REST API for real-time inference.",
    category: "Deep Learning / CV",
    gradient: "from-green-500 to-emerald-600",
    tags: ["Python", "TensorFlow", "Keras", "FastAPI", "Weights & Biases", "tf.data"],
    icon: Container,
    link: "https://github.com/dineshingale/Plant-Recognizer",
    size: "md:col-span-1 md:row-span-1",
  }
];

export const skills = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    items: ["Python", "C++", "SQL", "TypeScript (Basic)", "JavaScript (Basic)", "FastAPI"]
  },
  {
    title: "Machine Learning",
    icon: Layers,
    items: ["XGBoost", "Random Forest", "Decision Tree", "Pipelines", "Hyperparameter Tuning", "Scikit-Learn"]
  },
  {
    title: "Deep Learning & CV",
    icon: Cpu,
    items: ["TensorFlow", "Keras", "CNN", "Transfer Learning", "BatchNormalization", "Dropout"]
  },
  {
    title: "Data & Big Data",
    icon: Database,
    items: ["BigQuery", "CTEs", "QueryJobConfig", "Data Transformation", "Pandas", "NumPy"]
  },
  {
    title: "Architecture & Tools",
    icon: GitMerge,
    items: ["Weights & Biases (W&B)", "System Design", "REST APIs", "Agile/Scrum", "Git/GitHub", "SDLC"]
  }
];

export const experience = [
  {
    role: "Google AI/ML Intern",
    company: "EduSkills Foundation",
    date: "Jan 2025 - Mar 2025",
    desc: "Built a custom CNN using TensorFlow/Keras optimized for multi-class classification. Engineered a high-performance data pipeline using the tf.data API for real-time preprocessing and deployed the model via a FastAPI REST API with confidence scoring."
  }
];

export const siteConfig = {
  navbar: {
    logo: {
      part1: "ML",
      part2: "DL",
      part3: "DS"
    },
    links: [
      { name: "About", href: "#about" },
      { name: "Stack", href: "#skills" },
      { name: "Projects", href: "#projects" }
    ],
    buttonText: "Let's Talk",
    email: "dineshingale2003@gmail.com"
  },
  hero: {
    badge: "Available for Hire",
    heading: {
      line1: "Architecting",
      highlight: "Intelligent",
      line2: "ML Apps"
    },
    description: {
      part1: "I'm",
      name: "Dinesh Ingale",
      part2: ". Machine learning engineer with experience in developing",
      highlight1: "Generative AI",
      part3: "applications and",
      highlight2: "Deep learning",
      part4: "applications"
    },
    socials: {
      github: "https://github.com/dineshingale",
      linkedin: "https://www.linkedin.com/in/dineshingale/"
    },
    resumeButtonText: "View Resume",
    floatingBadge: {
      title: "Experience",
      subtitle: "Google AI/ML Intern"
    }
  },
  about: {
    heading: "About Me",
    description: {
      p1_part1: "I am a final-year",
      p1_highlight: "Information Technology",
      p1_part2: "student with a unique focus on bridging the gap between full-stack engineering and Artificial Intelligence.",
      p2_part1: "From architecting decoupled",
      p2_highlight1: "MERN",
      p2_part2: "infrastructures to fine-tuning Computer Vision models, I build systems that are not just functional but intelligent. My approach combines disciplined",
      p2_highlight2: "DevOps",
      p2_part3: "practices with creative problem-solving to deliver production-ready applications."
    },
    stats: [
      { value: "2026", label: "Graduation Year" },
      { value: "8+", label: "Projects" },
      { value: "4", label: "Certifications" }
    ],
    terminal: {
      role: "Software_Engineer & AI_Integrator",
      stack: {
        core: "MERN Stack",
        ai: "Gemini/TensorFlow",
        ops: "Docker/CI/CD"
      }
    }
  },
  skills: {
    heading: "Technical Arsenal",
    description: "A curated stack of tools I use to build robust, scalable platforms."
  },
  projects: {
    heading: "Featured Projects",
    description: "End-to-end executions from code to cloud.",
    tabs: ['all', 'infrastructure', 'mlops', 'fullstack']
  },
  experience: {
    heading: "Professional Journey",
    cta: {
      heading: "Ready to optimize your workflow?",
      description: "I'm currently accepting new projects. Whether you need a full CI/CD audit or an MLOps platform from scratch, let's connect.",
      buttonText: "Start a Project",
      email: "email@example.com"
    }
  },
  footer: {
    logo: "DevOps.AI",
    copyrightText: "© 2026 Dinesh Ingale. Crafted with code.",
    socials: {
      github: "https://github.com/dineshingale",
      linkedin: "https://www.linkedin.com/in/dineshingale/",
      activity: "#"
    }
  }
};