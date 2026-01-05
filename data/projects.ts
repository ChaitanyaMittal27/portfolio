import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "course-planner-backend",
    title: "SFU Course Planner",
    image: "/images/projects/sfu-course-planner.png",
    short: "High‑performance Spring Boot backend providing searchable course data APIs",
    bullets: [
      "Built and deployed a production full-stack web application using Next.js (TS) and Spring Boot, delivering live enrollment analytics and historical insights for 500+ courses across 50+ departments.",
      "Designed and operated a multi-cloud production architecture (Vercel, AWS EB, Supabase, Cloudflare), implementing CI/CD pipelines, HTTPS reverse proxying, and achieving 100–200 ms average API response times",
      "Implemented a scalable REST API (30+ endpoints) with DTO-based contracts, JWT authentication, OAuth 2.0 (PKCE), and role-based access control, with historical enrollment and grade data (6,000+ offerings)",
    ],
    tags: [],
    links: {
      github: "https://github.com/ChaitanyaMittal27/SFU_course_planner",
      demo: "https://sfucourseplanner.com/",
    },
  },

  {
    slug: "ekantiksearch",
    title: "EkantikSearch",
    image: "/images/projects/ekantiksearch.png",
    short: "Multilingual YouTube indexing/search engine with CI/CD and low‑latency lookups",
    bullets: [
      "Designed and deployed a full‑stack indexing pipeline with React + TypeScript frontend and Python APIs",
      "Automated scraping, parsing, and nightly indexing via GitHub Actions; sustained 100% uptime for updates",
      "Achieved ~100ms query latency through lightweight storage (SQLite → evolving to Supabase/PostgreSQL) and modular APIs",
    ],
    tags: ["React", "TypeScript", "Python", "Flask", "SQLite", "Supabase", "CI/CD", "GitHub Actions", "Vercel"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/EkantikSearch",
      demo: "https://ekantiksearch.vercel.app/",
    },
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website (This Site)",
    image: "/images/projects/portfolio.png",
    short: "Modern portfolio with dark mode, splash animation, scroll reveals, and a11y‑focused UI",
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
    short: "OOP‑driven Spring Boot backend exposing stateful maze logic via stateless REST APIs",
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
    short: "Responsive recipe discovery with multi‑API search, video tutorials, and favorites",
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
    short: "Real‑time emergency dashboard with map visuals and accessibility‑first UI",
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
  {
    slug: "ytbookmarker",
    title: "YTBookmarker",
    image: "/images/projects/ytbookmarker.png",
    short: "In-player YouTube bookmarker with a '+' button, timestamp jump, and persistent local storage",
    bullets: [
      "Injected a custom '+' control into the YouTube player to capture timestamps and titles inline",
      "Implemented ordered local persistence, 'Go To' jump playback, and delete management across sessions",
      "Handled long videos vs Shorts with adaptive navigation logic using lightweight, dependency-free JS",
    ],
    tags: ["Chrome Extensions", "JavaScript", "DOM", "Local Storage", "YouTube"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/YTbookmarker",
      // demo: "",
    },
  },
  {
    slug: "violin-flight",
    title: "Violin Flight",
    image: "/images/projects/violin-flight.png",
    short: "StormHacks game where a flying violin navigates procedural terrain using voice-driven controls",
    bullets: [
      "Built a TypeScript + Three.js prototype with procedurally generated terrain and obstacle logic",
      "Mapped mic input (Web Audio API) to movement vectors for pitch/volume-based navigation",
      "Delivered a 24-hour MVP; planned AI enemy logic and perf optimizations for smoother play",
    ],
    tags: ["Hackathon", "TypeScript", "Three.js", "Web Audio API", "Vite"],
    links: {
      github: "https://github.com/AndreiSva/stormhacks-2025",
      demo: "https://devpost.com/software/violin-flight",
    },
  },
];
