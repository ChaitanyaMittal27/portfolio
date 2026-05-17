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
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Three.js", "Bootstrap", "Streamlit"],
  },
  {
    label: "BACKEND",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Flask", "Spring Boot", "RESTful APIs", "JWT Authentication", "OAuth 2.0 (PKCE)"],
  },
  {
    label: "DATABASES",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Supabase", "Supabase Auth"],
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
      "Vercel",
      "Cloudflare",
      "Docker",
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
      "Vitest",
      "Jest",
      "JUnit",
      "Chrome Extensions (Manifest v3)",
      "Figma",
      "Balsamiq",
    ],
  },
];
