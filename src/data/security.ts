import { Shield, Lock, Key, UserCheck, Server, Globe, EyeOff, Settings, Database, AlertTriangle } from "lucide-react";

export const securityPrinciples = [
  { title: "OWASP Top 10 Awareness", icon: Shield, description: "Understanding and mitigating the most critical web application security risks." },
  { title: "Input Validation & Sanitization", icon: AlertTriangle, description: "Ensuring all user inputs are validated and sanitized before processing." },
  { title: "JWT Authentication", icon: Key, description: "Implementing secure token-based authentication for stateless APIs." },
  { title: "Password Hashing (bcrypt)", icon: Lock, description: "Using bcrypt to securely hash and store user passwords." },
  { title: "Role-Based Access Control", icon: UserCheck, description: "Implementing RBAC to restrict resources based on user roles." },
  { title: "Secure REST API Design", icon: Server, description: "Designing APIs with proper authentication, rate limiting, and error handling." },
  { title: "Environment Variable Protection", icon: EyeOff, description: "Keeping secrets and credentials secure using environment variables." },
  { title: "CORS Configuration", icon: Globe, description: "Configuring Cross-Origin Resource Sharing to prevent unauthorized access." },
  { title: "MongoDB Injection Prevention", icon: Database, description: "Protecting against NoSQL injection attacks in MongoDB queries." },
  { title: "XSS & CSRF Mitigation", icon: Settings, description: "Implementing measures against cross-site scripting and request forgery." },
];

export const securityProjects = [
  {
    id: 1,
    title: "Secure MERN Authentication System",
    problem: "Building a production-ready authentication system with proper security measures.",
    description: "Implemented JWT authentication, bcrypt password hashing, protected routes, and role-based access control.",
    features: [
      "Access token validation",
      "Password encryption",
      "Middleware authorization",
      "Secure API routes",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "bcrypt"],
    tags: ["Authentication", "Authorization"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "REST API with Role-Based Access",
    problem: "Designing APIs that enforce strict permission boundaries between user roles.",
    description: "Designed secure REST APIs with role-based access control and request validation.",
    features: [
      "Admin/User roles",
      "Middleware-based permission checks",
      "Centralized error handling",
    ],
    tech: ["Express", "Node.js", "MongoDB", "JWT"],
    tags: ["API Security", "Authorization"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Input Validation & Injection Prevention Demo",
    problem: "Demonstrating common injection vulnerabilities and how to prevent them.",
    description: "Built a backend demo project preventing NoSQL injection and handling sanitized inputs.",
    features: [
      "Express-validator usage",
      "MongoDB query protection",
      "Controlled error exposure",
    ],
    tech: ["Express", "MongoDB", "express-validator"],
    tags: ["Validation", "API Security"],
    github: "#",
    demo: "#",
  },
];

export const securityFilters = ["All", "Authentication", "API Security", "Validation", "Authorization"];
