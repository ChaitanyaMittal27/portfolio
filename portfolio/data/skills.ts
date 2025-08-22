// flat array (for existing Skills.tsx)
export const skills: string[] = [
  // Languages
  "JavaScript (ES6+)",
  "TypeScript",
  "Java",
  "Python",
  "SQL",
  "HTML5",
  "CSS3",

  // Frontend
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Shadcn/UI",
  "Framer Motion",

  // Backend
  "Node.js",
  "Express.js",
  "Spring Boot",
  "REST APIs",
  "GraphQL",

  // Databases
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Firebase Firestore",

  // DevOps & Tools
  "Git & GitHub",
  "CI/CD (GitHub Actions, Vercel)",
  "Docker",
  "AWS (EC2, S3, Lambda basics)",

  // AI / ML / Data
  "Machine Learning (scikit-learn, PyTorch basics)",
  "NLP fundamentals",
  "Prompt Engineering",
  "LLM Integration (OpenAI API)",

  // Other
  "Agile/Scrum",
  "UI/UX Design (Figma)",
  "Responsive Design",
  "Test-Driven Development (Jest, JUnit)",
];

// organized version (optional future use)
export const skillsByCategory: Record<string, string[]> = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Java",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Shadcn/UI",
    "Framer Motion",
  ],
  Backend: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "Supabase", "Firebase Firestore"],
  "DevOps & Tools": [
    "Git & GitHub",
    "CI/CD (GitHub Actions, Vercel)",
    "Docker",
    "AWS (EC2, S3, Lambda basics)",
  ],
  "AI / ML / Data": [
    "Machine Learning (scikit-learn, PyTorch basics)",
    "NLP fundamentals",
    "Prompt Engineering",
    "LLM Integration (OpenAI API)",
  ],
  Other: [
    "Agile/Scrum",
    "UI/UX Design (Figma)",
    "Responsive Design",
    "Test-Driven Development (Jest, JUnit)",
  ],
};
