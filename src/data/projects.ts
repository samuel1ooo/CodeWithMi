/*
Title:
    projects.ts
Description:
    Defines the project data model and portfolio project collection.
Authors:
    Oluwapelumi Samuel Coker
*/

export interface Project{
    id: number,
    title: string,
    description: string,
    technologies: string[];
    category: string;
    status: "Planned" | "In Progress" | "Completed";
    github: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart City Network Simulation",
    description:
      "Developing a smart city edge network simulation to investigate network performance, observability, and resilience. The project explores latency, packet loss, jitter, and automated anomaly detection under different network conditions.",
    technologies: ["C++", "Python", "ns-3"],
    category: "Networking",
    status: "In Progress",
    github: ""
  },
  {
    id: 2,
    title: "Secure Web Authentication System",
    description:
      "Building a full-stack application to explore secure authentication and authorisation. Planned features include user registration, password hashing, session management, OAuth 2.0, multi-factor authentication, and role-based access control.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL"
    ],
    category: "Cybersecurity",
    status: "Planned",
    github: ""
  },
  {
    id: 3,
    title: "Distributed System Monitoring Dashboard",
    description:
      "Designing a monitoring platform for distributed services, providing real-time visibility into application health, response times, error rates, and service availability. The project will explore metrics collection, containerisation, and alerting.",
    technologies: [
      "React",
      "Python",
      "Docker",
      "Prometheus",
      "Grafana"
    ],
    category: "Distributed Systems",
    status: "Planned",
    github: ""
  },
  {
    id: 4,
    title: "AI Code Review Assistant",
    description:
      "Developing an AI-assisted code review tool that analyses GitHub pull requests, identifies potential defects and maintainability concerns, and generates contextual suggestions to support developers during code review.",
    technologies: [
      "Python",
      "GitHub API",
      "LLM API",
      "FastAPI"
    ],
    category: "Artificial Intelligence",
    status: "Planned",
    github: ""
  },
  {
    id: 5,
    title: "Collaborative Project Management",
    description:
      "Creating a full-stack project management application that allows teams to organise tasks, manage project boards, assign responsibilities, and track progress. Planned features include authentication, drag-and-drop task management, and real-time collaboration.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets"
    ],
    category: "Full-Stack Development",
    status: "Planned",
    github: ""
  },
  {
    id: 6,
    title: "Personal Cloud Storage System",
    description:
      "Building a cloud-based file management application that supports secure file uploads, downloads, folder organisation, and controlled file sharing. The project will explore object storage, access permissions, and scalable backend design.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Azure Blob Storage"
    ],
    category: "Cloud Computing",
    status: "Planned",
    github: ""
  },
  {
    id: 7,
    title: "Mini CI/CD Pipeline Engine",
    description:
      "Developing a lightweight continuous integration system that responds to repository changes, executes automated tests in isolated environments, and reports build results. The project will explore job scheduling, pipeline execution, and automation.",
    technologies: [
      "Python",
      "Docker",
      "GitHub Webhooks",
      "FastAPI"
    ],
    category: "DevOps",
    status: "Planned",
    github: ""
  },
  {
    id: 8,
    title: "AI-Powered Adaptive Learning Platform",
    description:
        "Designed and developed a full-stack AI-powered learning platform for personalised Object-Oriented Programming education. Integrated a Dueling Deep Q-Network reinforcement learning agent to dynamically recommend lessons based on student performance, alongside GPT-4 to generate adaptive quizzes, coding challenges, explanations, and feedback. Evaluated the system using simulated learner profiles and user testing to assess its effectiveness against traditional learning approaches.",
    technologies: [
        "React",
        "Python",
        "FastAPI",
        "PyTorch",
        "Reinforcement Learning",
        "GPT-4",
        "WebSockets",
        "SQLAlchemy"
    ],
    category: "Artificial Intelligence",
    status: "Completed",
    github: ""
  }
];
