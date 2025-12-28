import { 
  Container, 
  Activity, 
  GitMerge, 
  Cpu, 
  Cloud, 
  Code, 
  Database, 
  Terminal 
} from 'lucide-react';

export const projects = [
  {
    title: "Resume Optimizer",
    subtitle: "A GenAI automation tool using Python and Google Gemini API to analyze resumes against JDs, reducing manual editing time by 90% while maintaining context.",
    category: "GenAI / Automation",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Python", "Google Gemini API", "NLP", "File I/O"],
    icon: Activity,
    link: "#",
    size: "md:col-span-2 md:row-span-1",
    type: "ai"
  },
  {
    title: "CloudKeep",
    subtitle: "Full-stack note-taking platform for creative individuals. Designed scalable schemas and conducted Non-Functional Testing (NFT) for performance and data capacity.",
    category: "Full Stack",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "JIRA"],
    icon: Container,
    link: "#",
    size: "md:col-span-1 md:row-span-2",
    type: "fullstack"
  },
  {
    title: "GaganYatri",
    subtitle: "Space travel booking web app. Automated regression tests for critical flows using Cypress/Selenium and verified REST API reliability with Postman.",
    category: "Web Dev / QA",
    gradient: "from-orange-500 to-red-500",
    tags: ["React", "Node.js", "Cypress", "Selenium", "Postman"],
    icon: Cloud,
    link: "#",
    size: "md:col-span-1 md:row-span-1",
    type: "qa"
  }
];

export const skills = [
  {
    title: "Languages",
    icon: Code,
    items: ["Python", "Javascript", "TypeScript", "Bash / Shell", "SQL", "Rust"]
  },
  {
    title: "Cloud & Infra",
    icon: Cloud,
    items: ["AWS (Solutions Architect)", "Terraform", "Ansible", "Linux Admin", "Azure", "GCP"]
  },
  {
    title: "DevOps & CI/CD",
    icon: GitMerge,
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "ArgoCD", "Helm Charts"]
  },
  {
    title: "MLOps & Data",
    icon: Database,
    items: ["MLflow", "Kubeflow", "Airflow", "Pinecone", "PyTorch", "Grafana / Prometheus"]
  }
];

export const experience = [
  { 
    role: "Senior DevOps Engineer", 
    company: "TechFlow Systems", 
    date: "2022 - Present", 
    desc: "Spearheading the migration of legacy monoliths to microservices on EKS. Reduced deployment time by 60% and infrastructure costs by 25% via spot instances." 
  },
  { 
    role: "ML Infrastructure Engineer", 
    company: "DataScale AI", 
    date: "2020 - 2022", 
    desc: "Designed and implemented a custom ML training platform serving 30+ Data Scientists. Automating model versioning and rollout using MLflow and Jenkins." 
  },
   { 
    role: "Software Engineer", 
    company: "Innovate Corp", 
    date: "2018 - 2020", 
    desc: "Full stack development using React and Python. Introduced containerization (Docker) to the development workflow, eliminating environment parity issues." 
  }
];