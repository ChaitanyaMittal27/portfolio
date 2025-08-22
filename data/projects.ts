import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ekantiksearch",
    title: "EkantikSearch",
    image: "/images/projects/ekantiksearch.png",
    short:
      "Multilingual YouTube indexing/search engine with CI/CD and low‑latency lookups",
    bullets: [
      "Designed and deployed a full‑stack indexing pipeline with React + TypeScript frontend and Python APIs",
      "Automated scraping, parsing, and nightly indexing via GitHub Actions; sustained 100% uptime for updates",
      "Achieved ~100ms query latency through lightweight storage (SQLite → evolving to Supabase/PostgreSQL) and modular APIs",
    ],
    tags: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "SQLite",
      "Supabase",
      "CI/CD",
      "GitHub Actions",
      "Vercel",
    ],
    links: {
      github: "https://github.com/ChaitanyaMittal27/EkantikSearch",
      demo: "https://ekantiksearch.vercel.app/",
    },
  },

  {
    slug: "course-planner-backend",
    title: "Course Planner Backend",
    image: "/images/projects/course-planner.png",
    short:
      "High‑performance Spring Boot backend providing searchable course data APIs",
    bullets: [
      "Parsed 1,000+ course records into indexed JSON endpoints with MVC‑compliant services and DTOs",
      "Kept P99 response under ~100ms via indexed retrievals and schema‑consistent payloads",
      "Integrated Postman‑driven debugging and CI pipelines for reliable deployments",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JSON",
      "Postman",
      "MVC",
      "CI/CD",
    ],
    links: {
      // add repo/demo when public:
      // github: "",
      // demo: "",
    },
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website (This Site)",
    image: "/images/projects/portfolio.png",
    short:
      "Modern portfolio with dark mode, splash animation, scroll reveals, and a11y‑focused UI",
    bullets: [
      "Implemented pre‑hydration theme script to avoid mismatches; persistent dark/light toggle",
      "Built vivid splash (typed name + console progress) and section reveal animations",
      "Optimized Lighthouse scores with `next/image`, semantic HTML, and minimal CLS",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/resume",
      demo: "/", // points to this site
    },
  },

  {
    slug: "tom-and-jerry-maze-game",
    title: "Tom & Jerry Maze Game (Backend)",
    image: "/images/projects/tom-jerry-maze.png",
    short:
      "OOP‑driven Spring Boot backend exposing stateful maze logic via stateless REST APIs",
    bullets: [
      "Implemented movement, scoring, and collision rules with clean OOP and layered architecture",
      "Refactored into MVC + DTOs for clear separation of concerns and testability",
      "Exposed all transitions as REST endpoints to enable browser‑based multiplayer clients",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "OOP", "MVC"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/TomAndJerryMazeGame-",
    },
  },

  {
    slug: "recipe-finder",
    title: "Recipe Finder",
    image: "/images/projects/recipe-finder.png",
    short:
      "Responsive recipe discovery with multi‑API search, video tutorials, and favorites",
    bullets: [
      "Built end‑to‑end React experience integrating multiple REST APIs and YouTube tutorials",
      "Implemented favorites with local storage and clean state management for UX continuity",
      "Contributed in Agile team with CI workflows and iterative feature releases",
    ],
    tags: ["React", "JavaScript", "REST APIs", "CI/CD", "Agile"],
    links: {
      demo: "https://cmpt-276-fall-2024.github.io/project-17-sunsets/",
      github: "https://github.com/CMPT-276-FALL-2024/project-17-sunsets",
    },
  },

  {
    slug: "emergency-response-map",
    title: "Emergency Response Map",
    image: "/images/projects/emergency-response.png",
    short:
      "Real‑time emergency dashboard with map visuals and accessibility‑first UI",
    bullets: [
      "Built React dashboard using map APIs and local storage for resilient, offline‑friendly UX",
      "Applied colorblind‑safe palettes and spatial clarity to support high‑stress scenarios",
      "Improved simulated response accuracy via diff‑based rendering for dynamic updates",
    ],
    tags: ["React", "JavaScript", "Map APIs", "State Management", "UX"],
    links: {
      github: "https://github.com/Yunhh-Hahn/272-Map-Assignment",
      // demo: "",
    },
  },
];
