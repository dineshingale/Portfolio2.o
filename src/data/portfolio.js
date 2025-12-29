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
    title: "Self-Healing K8s Cluster",
    subtitle: "Implemented an event-driven autoscaler using Prometheus metrics to predict load spikes and preemptively scale nodes, reducing downtime by 99.9%.",
    category: "Infrastructure",
    gradient: "from-blue-600 to-cyan-500",
    tags: ["Kubernetes", "Go", "Prometheus", "AWS EKS"],
    icon: Container,
    link: "#",
    size: "md:col-span-1 md:row-span-2",
    type: "infrastructure"
  },
  {
    title: "LLM RAG Pipeline Engine",
    subtitle: "End-to-end MLOps pipeline for training and deploying Retrieval Augmented Generation models. Includes drift detection, automated retraining triggers, and vector DB indexing.",
    category: "AI / MLOps",
    gradient: "from-purple-600 to-pink-500",
    tags: ["Python", "LangChain", "Docker", "Pinecone", "MLflow"],
    icon: Activity,
    link: "#",
    size: "md:col-span-2 md:row-span-1",
    type: "mlops"
  },
  {
    title: "Enterprise GitOps Dashboard",
    subtitle: "A centralized control plane visualizing ArgoCD application states across 5 environments (Dev to Prod) with one-click rollback capabilities.",
    category: "DevOps",
    gradient: "from-orange-500 to-red-500",
    tags: ["React", "TypeScript", "ArgoCD", "GraphQL"],
    icon: GitMerge,
    link: "#",
    size: "md:col-span-1 md:row-span-1",
    type: "fullstack"
  },
  {
    title: "Edge Vision Inference",
    subtitle: "Deployed quantized YOLOv8 models to a fleet of raspberry pis using Ansible and K3s for real-time manufacturing defect detection.",
    category: "Edge ML",
    gradient: "from-emerald-500 to-teal-500",
    tags: ["TensorFlow Lite", "Ansible", "MQTT", "K3s"],
    icon: Cpu,
    link: "#",
    size: "md:col-span-2 md:row-span-1",
    type: "mlops"
  },
  {
    title: "Terraform Module Registry",
    subtitle: "Created a private registry of compliant infrastructure modules used by 20+ squads to provision secure AWS resources.",
    category: "IaC",
    gradient: "from-indigo-500 to-violet-500",
    tags: ["Terraform", "AWS", "OPA Policy"],
    icon: Cloud,
    link: "#",
    size: "md:col-span-1 md:row-span-1",
    type: "infrastructure"
  }
];

export const skills = [
  {
    title: "Languages",
    icon: Code,
    items: ["JavaScript (ES6+)", "Python", "C/C++", "Java", "SQL", "TypeScript"]
  },
  {
    title: "Full Stack & Frameworks",
    icon: Database,
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Docker", "Git/GitHub", "CI/CD Concepts", "Vercel / Render"]
  },
  {
    title: "Testing & Automation",
    icon: GitMerge,
    items: ["Selenium", "Cypress", "Postman (API Testing)", "JIRA", "Manual Testing", "Figma"]
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