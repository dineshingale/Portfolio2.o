import {
  Container,
  Activity,
  GitMerge,
  Cpu,
  Cloud,
  Code,
  Database,
  Terminal,
  FolderOpen,
  CheckSquare
} from 'lucide-react';

export const projects = [
  {
    title: "Resume Optimizer",
    subtitle: "Architected a modular GenAI automation tool using Gemini Pro API and Python, implementing prompt engineering to reduce manual editing time by 90%.",
    category: "AI / GenAI",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Python", "Gemini Pro", "NLP", "Git"],
    icon: Cpu,
    link: "https://github.com/dineshingale/Resume_Optimizer",
    size: "md:col-span-2 md:row-span-1",

  },
  {
    title: "System Health Monitor",
    subtitle: "Real-time cross-platform infrastructure dashboard integrating a FastAPI backend with Bash/PowerShell collectors to capture granular system metrics.",
    category: "DevOps",
    gradient: "from-orange-500 to-red-500",
    tags: ["FastAPI", "React", "Bash", "YAML"],
    icon: Activity,
    link: "https://github.com/dineshingale/System-health-monitor",
    size: "md:col-span-1 md:row-span-1",

  },
  {
    title: "Automated File Organizer",
    subtitle: "Decoupled full-stack application using FastAPI and React to manage local file systems via YAML-based automation rules.",
    category: "Automation",
    gradient: "from-yellow-400 to-orange-300",
    tags: ["Python", "FastAPI", "React", "YAML"],
    icon: FolderOpen,
    link: "https://github.com/dineshingale/File-organizer",
    size: "md:col-span-1 md:row-span-1",

  },
  {
    title: ".NET Todo App",
    subtitle: "Modern task management solution architected with .NET 10 and Razor Pages, using Entity Framework Core for strict data persistence.",
    category: "Full Stack",
    gradient: "from-violet-600 to-indigo-600",
    tags: [".NET 10", "C#", "Razor Pages", "SQLite"],
    icon: CheckSquare,
    link: "https://github.com/dineshingale/dotnet-TodoApp",
    size: "md:col-span-1 md:row-span-1",

  },
  {
    title: "Go Search Tool",
    subtitle: "High-concurrency file indexing engine and search tool with a React frontend, optimized for near-native speed data retrieval.",
    category: "Backend",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Go (Golang)", "React", "Vite", "CLI"],
    icon: Code,
    link: "https://github.com/dineshingale/go-search-tool",
    size: "md:col-span-1 md:row-span-2",

  },
  {
    title: "Gagan Yatri",
    subtitle: "MERN stack space tourism booking platform featuring automated regression testing (Cypress) and CI/CD pipelines on Render.",
    category: "Full Stack",
    gradient: "from-emerald-500 to-teal-500",
    tags: ["MERN Stack", "Cypress", "CI/CD", "Render"],
    icon: Cloud,
    link: "https://github.com/dineshingale/GaganYatri",
    size: "md:col-span-2 md:row-span-1",

  },
  {
    title: "CloudKeep CMS",
    subtitle: "Scalable content management system handling 100GB+ of unstructured data, integrating Cloudinary for media processing.",
    category: "Cloud",
    gradient: "from-indigo-500 to-violet-500",
    tags: ["TypeScript", "MongoDB", "Cloudinary", "JWT"],
    icon: Database,
    link: "https://github.com/dineshingale/Cloudkeep-client",
    size: "md:col-span-1 md:row-span-1",

  },
  {
    title: "InsuranceClaim AI",
    subtitle: "Engineered a multi-modal AI platform combining NLP and Anomaly Detection to automate claim classification and fraud detection.",
    category: "AI / ML",
    gradient: "from-emerald-400 to-cyan-400",
    tags: ["Python", "FastAPI", "React", "Scikit-Learn", "NLP"],
    icon: Terminal,
    link: "https://github.com/dineshingale/InsuranceClaim-AI",
    size: "md:col-span-1 md:row-span-1",

  },
  {
    title: "Plant Recognizer",
    subtitle: "Full-stack AI application using TensorFlow Lite and FastAPI for real-time plant species identification with optimized inference.",
    category: "AI / Computer Vision",
    gradient: "from-green-500 to-emerald-600",
    tags: ["React", "FastAPI", "TensorFlow Lite", "Docker"],
    icon: Container,
    link: "https://github.com/dineshingale/Plant-Recognizer",
    size: "md:col-span-1 md:row-span-1",

  }
];

export const skills = [
  {
    title: "Languages",
    icon: Code,
    items: ["Python", "JavaScript (ES6+)", "TypeScript", "Go (Golang)", "C# (.NET)", "SQL", "Bash/PowerShell"]
  },
  {
    title: "Full Stack & Frameworks",
    icon: Database,
    items: ["React.js", "Node.js", "Express.js", ".NET 10", "Tailwind CSS", "MongoDB"]
  },
  {
    title: "AI/ML & GenAI Integration:",
    icon: Cpu,
    items: ["LLM Integration (Gemini Pro)", "NLP", "Computer Vision", "Python", "FastAPI", "React", "Scikit-Learn"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker", "CI/CD Pipelines", "Jenkins", "GithubActions", "Vercel / Render", "YAML", "Git/GitHub"]
  },
  {
    title: "QA & Methodologies",
    icon: GitMerge,
    items: ["PlayWright", "Cypress", "Selenium", "Postman", "JIRA", "Agile/Scrum", "GitHub issues", "System Design"]
  }
];

export const experience = [
  {
    role: "Google AI/ML Intern",
    company: "EduSkills Foundation",
    date: "Jan 2025 - Mar 2025",
    desc: "Architected a scalable MERN stack application for image processing and fine-tuned pre-trained computer vision models. Implemented Docker containerization and CI/CD pipelines for automated testing and rapid deployment."
  }
];