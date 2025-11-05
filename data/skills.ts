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
    skills: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "FRONTEND",
    icon: "🎨",
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Shadcn/UI", "DOM Parsing", "Three.js", "Vite"],
  },
  {
    label: "BACKEND",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    label: "DATABASES",
    icon: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase Firestore"],
  },
  {
    label: "DEVOPS & TOOLS",
    icon: "🚀",
    skills: [
      "Git & GitHub",
      "CI/CD (GitHub Actions, Vercel)",
      "Docker",
      "Chrome Extensions (Manifest v3)",
      "Maze (Usability Testing)",
    ],
  },
  {
    label: "AI / ML",
    icon: "🤖",
    skills: [
      "Machine Learning (scikit-learn, PyTorch basics)",
      "NLP fundamentals",
      "Prompt Engineering",
      "Google Gemini API",
      "LLM Integration (OpenAI API)",
    ],
  },
  {
    label: "OTHER",
    icon: "🎯",
    skills: ["Agile/Scrum", "UI/UX Design (Figma)", "Responsive Design", "Test-Driven Development (Jest, JUnit)"],
  },
];

// Optional: Flat array for backward compatibility or other uses
export const skills: string[] = skillCategories.flatMap((category) => category.skills);
