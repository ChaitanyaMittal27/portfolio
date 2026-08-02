import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "crowdsurf",
    title: "CrowdSurf",
    image: "/images/projects/crowdsurf.png",
    short:
      "Full-stack event photo-sharing platform with real-time uploads, role-based access, and a 12-entity Prisma/PostgreSQL schema.",
    bullets: [
      "Built a full-stack event photo-sharing platform where attendees join a live event feed via QR code, upload photos in real time, and vote crowd favorites to the top of the gallery — backed by a 12-entity PostgreSQL schema modeled in Prisma across 8 migrations.",
      "Implemented JWT authentication with an asymmetric ES256 keypair and refresh-token sessions, architecting a two-layer role-based authorization system (Admin, Organizer, User) enforced at the Express middleware layer so unauthorized access is blocked even if frontend guards are bypassed.",
      "Integrated Socket.IO to broadcast photo uploads and likes in real time across event rooms, wrapping multi-table writes (event creation, join-request approval) in Prisma transaction blocks to guarantee atomicity.",
      "Wrote 46 integration tests across 23 suites with Node's test runner and Supertest against a live PostgreSQL instance, then containerized the backend with a multi-stage Docker build and deployed the full stack via Docker Compose to a Google Cloud VM with Nginx serving the frontend.",
    ],
    tags: ["React", "Express", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO", "Docker", "GitHub Actions"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/CrowdSurf",
    },
  },

  {
    slug: "sfu-course-planner",
    title: "SFU Course Planner",
    image: "/images/projects/sfu-course-planner.png",
    short:
      "Production full-stack course discovery and analytics platform serving 35+ SFU students, with real-time enrollment tracking and automated notifications.",
    bullets: [
      "Designed and deployed a production full-stack web application at sfucourseplanner.com, supporting 35+ active users browsing 500+ courses across 50+ departments with enrollment insights not available through official SFU channels.",
      "Diagnosed and resolved a performance bottleneck causing 13–15s response times through root-cause analysis, redesigning data retrieval to persist course and offering metadata in PostgreSQL and cutting end-user latency to under 5s.",
      "Built an administrative dashboard for user management and system monitoring, and shipped an automated notification service using Spring Scheduler to detect enrollment changes and dispatch status-update emails via the Resend API.",
      "Architected a multi-service cloud deployment across Vercel, AWS Elastic Beanstalk, and Cloudflare, solving a mixed HTTPS/HTTP communication issue between the two hosts by configuring Cloudflare as a reverse proxy — cutting HTTPS setup complexity without AWS Certificate Manager.",
    ],
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Supabase", "AWS Elastic Beanstalk", "Vercel", "Cloudflare", "OAuth", "JWT"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/SFU_course_planner",
      demo: "https://sfucourseplanner.com/",
    },
  },

  {
    slug: "course-planner-backend",
    title: "SFU Course Planner",
    image: "/images/projects/sfu-course-planner.png",
    short:
      "Production full-stack app for SFU course analytics with multi-cloud architecture, OAuth authentication, and personalized enrollment alerts.",
    bullets: [
      "Built and deployed a production full-stack app using Next.js and Spring Boot enabling students to explore enrollment trends, visualize grade distributions, and compare courses across 500+ offerings and 50+ departments.",
      "Implemented OAuth 2.0 PKCE and Supabase Auth supporting Google SSO and email login, enabling users to create accounts, bookmark courses, and receive daily enrollment alerts via EmailJS.",
      "Reduced API response time from 7–8s to under 2s by diagnosing slow query patterns and introducing structured indexing on course codes and department keys in Supabase.",
      "Designed a multi-cloud architecture (Vercel, AWS EB, Supabase, Cloudflare) with automated 24-hour data refresh via GitHub Actions, integrating grade data and RateMyProfessors ratings alongside live SFU enrollment data.",
    ],
    tags: [
      "Spring Boot",
      "Next.js",
      "AWS EB",
      "OAuth 2.0",
      "JWT",
      "Supabase",
      "Cloudflare",
      "GitHub Actions",
      "EmailJS",
    ],
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
    slug: "tom-and-jerry-maze-game",
    title: "Tom & Jerry Maze Game",
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
];
