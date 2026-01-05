// Type definition for skill categories
export interface SkillCategory {
  label: string;
  icon: string;
  skills: string[];
}

// Single source of truth - organized by category with metadata
export const skillCategories: SkillCategory[] = [
  {
    label: "LANGUAGES",
    icon: "💻",
    skills: ["Java", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3", "C/C++"],
  },
  {
    label: "FRONTEND",
    icon: "🎨",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Vite",
      "DOM Manipulation",
      "Responsive Design",
      "UI/UX Design",
    ],
  },
  {
    label: "BACKEND",
    icon: "⚙️",
    skills: ["Spring Boot", "Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Authentication", "OAuth 2.0 (PKCE)"],
  },
  {
    label: "DATABASES",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    label: "CLOUD & DEVOPS",
    icon: "🚀",
    skills: ["AWS (EB, S3)", "Vercel", "Cloudflare", "CI/CD (GitHub Actions)", "Docker", "Environment Configuration"],
  },
  {
    label: "TESTING & TOOLING",
    icon: "🧪",
    skills: ["Git & GitHub", "Postman", "Vitest", "Jest", "JUnit", "Chrome Extensions (Manifest v3)"],
  },
  {
    label: "AI / LLM INTEGRATION",
    icon: "🤖",
    skills: ["Prompt Engineering", "Google Gemini API", "OpenAI API", "LLM Integration", "NLP Fundamentals"],
  },
  {
    label: "OTHER",
    icon: "🎯",
    skills: ["Agile/Scrum", "Accessibility (WCAG)", "Usability Testing (Maze)", "Figma", "Balsamiq"],
  },
];

// Optional: Flat array for backward compatibility or other uses
export const skills: string[] = skillCategories.flatMap((category) => category.skills);
