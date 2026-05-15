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
    title: "ChurnPredictor",
    subtitle: "Architected end-to-end ML pipeline using XGBoost, scikit-learn, and BigQuery for real-time customer churn prediction, achieving 87% model accuracy on testing.",
    category: "Machine Learning",
    gradient: "from-orange-500 to-red-500",
    tags: ["XGBoost", "Scikit-Learn", "BigQuery", "Weights & Biases", "Python"],
    icon: Activity,
    link: "https://github.com/dineshingale/System-health-monitor",
    size: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Flower Species Classifier",
    subtitle: "Built a custom CNN using TensorFlow/Keras optimized for 5 flower species. Engineered a tf.data pipeline and deployed a FastAPI REST API for real-time classification.",
    category: "Deep Learning / CV",
    gradient: "from-green-500 to-emerald-600",
    tags: ["Python", "TensorFlow", "FastAPI", "Weights & Biases", "tf.data"],
    icon: Container,
    link: "https://github.com/dineshingale/Plant-Recognizer",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "InsuranceClaim-AI",
    subtitle: "Built fraud detection system for insurance claims utilizing Random Forest and Isolation Forest; deployed API model achieving 89% fraud detection accuracy.",
    category: "AI / ML",
    gradient: "from-emerald-400 to-cyan-400",
    tags: ["Python", "FastAPI", "Scikit-Learn", "Pandas", "React", "TypeScript"],
    icon: Terminal,
    link: "https://github.com/dineshingale/InsuranceClaim-AI",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Resume Optimizer",
    subtitle: "Engineered AI resume optimization platform using Google Gemini LLMs to analyze and tailor resumes against job descriptions intelligently with 100% document structure preservation.",
    category: "GenAI / NLP",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Python", "Google Gemini LLM", "Prompt Engineering", "NLP", "JSON Parsing"],
    icon: Cpu,
    link: "https://github.com/dineshingale/Resume_Optimizer",
    size: "md:col-span-1 md:row-span-1",
  }
];

export const skills = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    items: ["Python", "C++", "SQL", "TypeScript (Basic)", "JavaScript (Basic)"]
  },
  {
    title: "Machine Learning",
    icon: Layers,
    items: ["XGBoost", "Random Forest", "Decision Tree", "Pipelines", "Cross-Validation", "Tuning", "Data Leakage Prevention"]
  },
  {
    title: "Deep Learning & CV",
    icon: Cpu,
    items: ["TensorFlow", "Keras", "CNN", "Transfer Learning", "BatchNormalization", "Dropout", "EarlyStopping", "ReLU", "Sigmoid"]
  },
  {
    title: "Data & Big Data",
    icon: Database,
    items: ["BigQuery", "CTEs", "Joins", "QueryJobConfig", "Dataframes", "Pandas", "NumPy", "Data Transformation"]
  },
  {
    title: "Architecture & Tools",
    icon: GitMerge,
    items: ["Weights & Biases (W&B)", "System Design", "Microservices", "REST APIs", "Agile/Scrum", "Git/GitHub", "SDLC"]
  }
];

export const experience = [
  {
    role: "Google AI/ML Intern",
    company: "EduSkills Foundation",
    date: "Jan 2025 - Mar 2025",
    desc: "Built a CNN using TensorFlow/Keras with Conv2D, BatchNormalization, and Dropout layers optimized for 5 flower species. Engineered a pipeline using tf.data API and deployed a FastAPI REST API for real-time classification with preprocessing and confidence scoring."
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
      line1: "Building",
      highlight: "End-to-End",
      line2: "ML Pipelines"
    },
    description: {
      part1: "I'm",
      name: "Dinesh Ingale",
      part2: ". Machine learning engineer experienced in developing",
      highlight1: "ML & DL models",
      part3: "with high accuracy and deploying them into",
      highlight2: "production environments",
      part4: "."
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
      p1_part1: "I am a",
      p1_highlight: "Machine Learning Engineer",
      p1_part2: "building end-to-end ML pipelines, from data engineering to model deployment.",
      p2_part1: "Experienced in GenAI/LLM integration, experiment tracking (W&B), and cloud data platforms like",
      p2_highlight1: "BigQuery",
      p2_part2: ". Strong foundation in Python, SQL, system design, and",
      p2_highlight2: "REST API",
      p2_part3: "development with a proven track record."
    },
    stats: [
      { value: "2026", label: "Graduation Year" },
      { value: "3+", label: "Projects" },
      { value: "3", label: "Certifications" }
    ],
    terminal: {
      role: "Machine_Learning_Engineer",
      stack: {
        core: "Python/SQL",
        ai: "TensorFlow/XGBoost",
        ops: "FastAPI/BigQuery"
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
    tabs: ['all', 'mlops', 'fullstack']
  },
  experience: {
    heading: "Professional Journey",
    cta: {
      heading: "Ready to build intelligent systems?",
      description: "I'm currently open to new opportunities. Whether you need an end-to-end ML pipeline, GenAI integration, or predictive analytics, let's connect.",
      buttonText: "Let's Collaborate",
      email: "dineshingale2003@gmail.com"
    }
  },
  footer: {
    logo: "MLDLDS",
    copyrightText: "© 2026 Dinesh Ingale. Crafted with code.",
    socials: {
      github: "https://github.com/dineshingale",
      linkedin: "https://www.linkedin.com/in/dineshingale/",
      activity: "#"
    }
  }
};
