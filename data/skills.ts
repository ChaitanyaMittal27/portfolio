// Type definition for skill categories
export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}

// Organized by category with metadata
export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    icon: "💻",
    skills: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "C/C++", "HTML5", "CSS3", "SQL"],
  },
  {
    label: "FRONTEND",
    icon: "🎨",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Three.js", "Bootstrap", "Streamlit", "Socket.IO"],
  },
  {
    label: "BACKEND",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "Spring Boot",
      "RESTful APIs",
      "JWT Authentication",
      "OAuth 2.0 (PKCE)",
      "Joi",
    ],
  },
  {
    label: "DATABASES",
    icon: "🗄️",
    skills: ["PostgreSQL", "SQLite", "Supabase", "Supabase Auth", "Prisma"],
  },
  {
    label: "ML & DATA",
    icon: "🤖",
    skills: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "Feature Engineering",
      "Hugging Face Spaces",
      "Google Gemini API",
      "Azure Translator API",
    ],
  },
  {
    label: "CLOUD & DEVOPS",
    icon: "🚀",
    skills: [
      "GitHub Actions",
      "AWS Elastic Beanstalk",
      "Google Cloud Platform (GCP)",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Nginx",
      "CI/CD",
      "Hugging Face Spaces",
    ],
  },
  {
    label: "TESTING & TOOLING",
    icon: "🧪",
    skills: [
      "Git & GitHub",
      "Postman",
      "Supertest",
      "Vitest",
      "Jest",
      "JUnit",
      "Chrome Extensions (Manifest v3)",
      "Figma",
      "Balsamiq",
    ],
  },
];
