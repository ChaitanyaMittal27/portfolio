/**
 * Every skill points at the work that proves it.
 * `usedIn` holds project slugs (from data/projects.ts) or plain labels
 * for work that isn't a project card (e.g. "Blueprint", "Coursework").
 * Source: "Resume" master doc, Skills tab (Nov 2026).
 */
export interface Skill {
  name: string;
  usedIn: string[];
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf", "firstdue", "ekantiksearch", "violin-flight", "Blueprint"] },
      { name: "Java", usedIn: ["sfu-course-planner", "tom-and-jerry-maze"] },
      { name: "Python", usedIn: ["sfu-course-predictor", "firstdue", "ekantiksearch"] },
      { name: "SQL", usedIn: ["sfu-course-planner", "quarrel-v2", "sfu-course-predictor", "firstdue"] },
      { name: "Lua", usedIn: ["quarrel-v2"] },
      { name: "C/C++", usedIn: ["Coursework"] },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf", "ekantiksearch", "Blueprint"] },
      { name: "Next.js", usedIn: ["sfu-course-planner", "firstdue", "Blueprint"] },
      { name: "Tailwind CSS", usedIn: ["sfu-course-planner", "firstdue", "Blueprint"] },
      { name: "shadcn/ui", usedIn: ["sfu-course-planner", "Blueprint"] },
      { name: "React Hook Form", usedIn: ["Blueprint"] },
      { name: "Three.js", usedIn: ["violin-flight"] },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js / Express", usedIn: ["crowdsurf"] },
      { name: "Fastify", usedIn: ["quarrel-v2"] },
      { name: "Spring Boot", usedIn: ["sfu-course-planner", "tom-and-jerry-maze"] },
      { name: "REST APIs", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf", "tom-and-jerry-maze"] },
      { name: "Socket.IO", usedIn: ["quarrel-v2", "crowdsurf"] },
      { name: "BullMQ", usedIn: ["quarrel-v2"] },
      { name: "JWT / OAuth", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf"] },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "PostgreSQL", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf", "firstdue", "ekantiksearch", "Blueprint"] },
      { name: "Redis", usedIn: ["quarrel-v2"] },
      { name: "Supabase", usedIn: ["sfu-course-planner", "ekantiksearch", "Blueprint"] },
      { name: "Prisma", usedIn: ["crowdsurf"] },
      { name: "SQLite", usedIn: ["sfu-course-predictor"] },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", usedIn: ["sfu-course-planner", "quarrel-v2"] },
      { name: "Docker", usedIn: ["sfu-course-planner", "quarrel-v2", "crowdsurf"] },
      { name: "GitHub Actions", usedIn: ["sfu-course-planner", "sfu-course-predictor", "ekantiksearch", "quarrel-v2"] },
      { name: "Vercel", usedIn: ["sfu-course-planner", "ekantiksearch"] },
      { name: "Cloudflare", usedIn: ["sfu-course-planner"] },
      { name: "Nginx", usedIn: ["quarrel-v2", "crowdsurf"] },
    ],
  },
  {
    label: "Testing & ML",
    skills: [
      { name: "Vitest", usedIn: ["sfu-course-planner", "quarrel-v2", "firstdue", "Blueprint"] },
      { name: "Playwright", usedIn: ["quarrel-v2"] },
      { name: "JUnit", usedIn: ["sfu-course-planner"] },
      { name: "scikit-learn", usedIn: ["sfu-course-predictor"] },
      { name: "pandas", usedIn: ["sfu-course-predictor", "firstdue"] },
      { name: "Gemini API", usedIn: ["sfu-course-predictor", "quarrel-v2", "firstdue"] },
    ],
  },
];
