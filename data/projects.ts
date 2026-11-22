import { Project } from "@/types";

/**
 * Source of truth: the "Resume" master doc (Google Docs), Nov 2026.
 * Only verified numbers are used. Team projects say so, and Quarrel v2
 * is described as "deployed once", never "live".
 */
export const projects: Project[] = [
  {
    slug: "sfu-course-planner",
    title: "SFU Course Planner",
    image: "/images/projects/sfu-course-planner.png",
    featured: true,
    context: "Solo · Live in production",
    stats: [
      { value: "70+", label: "active users" },
      { value: "<5s", label: "from 13–15s load" },
      { value: "281", label: "automated tests" },
    ],
    year: "2025–26",
    short:
      "Production course-research platform used by 70+ SFU students: live offerings, 12 semesters of enrollment and grade history, comparisons, bookmarks and daily email digests.",
    bullets: [
      "Built and launched a production web app with Next.js and Spring Boot (33 REST endpoints, 12 JPA entities), used by 60+ active students to analyze enrollment and grade trends across 500+ courses.",
      "Diagnosed 13–15s response times and redesigned data retrieval to persist course metadata in PostgreSQL, cutting user-facing latency by over 60% to under 5s.",
      "Integrated Rate My Professors through its GraphQL API with a parallel multi-school search and weighted fuzzy name matching, plus a report-and-review workflow for wrong matches.",
      "Built a daily digest service (Spring @Scheduled + Resend) that re-checks bookmarked sections against the live SFU API and emails changes.",
      "Deployed the backend on AWS Elastic Beanstalk and the frontend on Vercel, with Cloudflare providing DNS and HTTPS; 281 automated tests (JUnit/Mockito + Vitest) run in GitHub Actions on every push.",
    ],
    tags: [
      "Next.js",
      "Spring Boot",
      "PostgreSQL",
      "Supabase Auth",
      "AWS Elastic Beanstalk",
      "Cloudflare",
      "Docker",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/ChaitanyaMittal27/SFU_course_planner",
      demo: "https://sfucourseplanner.com/",
    },
  },

  {
    slug: "quarrel-v2",
    title: "Quarrel v2",
    image: "/images/projects/quarrel-v2.png",
    featured: true,
    award: "🏆 Fall Hacks 2026 Winner",
    context: "Team win · solo backend rebuild",
    stats: [
      { value: "623", label: "tests" },
      { value: "25", label: "atomic Lua scripts" },
      { value: "92%", label: "server coverage" },
    ],
    year: "2026",
    demoLabel: "Play it",
    short:
      "Ground-up backend rebuild of a real-time two-player AI debate game: separate API and worker services, Redis for live state and queues, Postgres for permanent results.",
    bullets: [
      "Quarrel won Fall Hacks 2026 as a one-day team build (Next.js + Supabase Realtime); I designed its pixel-art system, then rebuilt the whole backend solo as v2.",
      "Rebuilt the backend from scratch as separate Fastify/Socket.IO API and BullMQ worker services, with Redis for live state and job queues and PostgreSQL for permanent results, designed so each tier scales independently.",
      "Made every game action atomic with 25 Redis Lua scripts, proven with race tests (20 parallel joins, exactly one winner), and built server-driven chess clocks on Redis TIME with a sorted-set deadline queue.",
      "Implemented JWT sessions with rotating refresh tokens and reuse detection, stored as hashes in Redis, and filtered every snapshot per player so private drafts never leave the server.",
      "Integrated the Gemini API (text and speech) with quota-aware model failover and per-IP rate limits, keeping games playable on the free tier.",
      "Backed it with 623 automated tests (Vitest on real Redis and Postgres, plus Playwright end-to-end) and ~92% server coverage enforced in CI; deployed once to AWS EC2 with Docker Compose and Caddy HTTPS.",
    ],
    tags: [
      "TypeScript",
      "Fastify",
      "Redis",
      "Lua",
      "BullMQ",
      "Socket.IO",
      "PostgreSQL",
      "Docker",
      "AWS EC2",
      "Playwright",
    ],
    links: {
      github: "https://github.com/ChaitanyaMittal27/quarrel-v2",
      // Live hackathon version (same design, original backend)
      demo: "https://falls-hacks-2026-quarrel.vercel.app",
    },
  },

  {
    slug: "sfu-course-predictor",
    title: "SFU Course Predictor",
    image: "/images/projects/sfu-course-predictor.png",
    featured: true,
    context: "Solo · Live, retrains itself every semester",
    stats: [
      { value: "0.86", label: "AUC (offered?)" },
      { value: "50K", label: "section records" },
      { value: "0", label: "manual steps / term" },
    ],
    year: "2026",
    demoLabel: "Try it",
    short:
      "End-to-end ML system that predicts whether an SFU course will be offered, its seat capacity and its enrollment. Ask it in plain English.",
    bullets: [
      "Trained on ~50,000 section records from 19 terms; Gradient Boosting reached 0.864 AUC and Random Forest regressors reached R² 0.886–0.906 on a held-out term of 1,522 courses.",
      "Engineered 20 leakage-free time-series features over a full course × term grid, and found and fixed a train/test leakage bug caused by a non-unique term key.",
      "Automated semesterly retraining in GitHub Actions (collect → clean → features → evaluate → refit) with automatic git rollback on failure and redeploy to Hugging Face Spaces.",
      "Added a natural-language interface with the Gemini API (extract-then-answer) with fallbacks for outages and rate limits.",
    ],
    tags: ["Python", "scikit-learn", "pandas", "SQLite", "Streamlit", "Gemini API", "GitHub Actions", "Hugging Face"],
    links: {
      demo: "https://huggingface.co/spaces/ChaitanyaMittal27/sfucoursepredictor",
    },
  },

  {
    slug: "crowdsurf",
    title: "CrowdSurf",
    image: "/images/projects/crowdsurf.png",
    context: "Team of 6 · CMPT 372",
    year: "2026",
    short:
      "Event photo-sharing platform: attendees join with a ticket, upload photos in real time and like crowd favourites to the top.",
    bullets: [
      "Full-stack platform with React, TypeScript and Express on a 12-model PostgreSQL schema in Prisma, with a 30+ endpoint REST API.",
      "My part: the shared Joi validation layer across 5 route modules, SMTP email notifications, Swagger/OpenAPI docs for 5 route groups, and the React frontend foundation (layout, routing, auth context, protected routes, dashboard).",
      "Team-built: JWT auth with ES256 keys and refresh sessions, two-layer role-based authorization, Socket.IO live updates, and 46 integration tests against a real PostgreSQL database in CI.",
      "Shipped with multi-stage Docker builds and Docker Compose on a Google Cloud VM, with Nginx serving the frontend.",
    ],
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma", "Joi", "Socket.IO", "Docker", "GCP"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/CrowdSurf",
    },
  },

  {
    slug: "firstdue",
    title: "FirstDue",
    image: "/images/projects/firstdue.png",
    context: "Solo · StormHacks 2026",
    year: "2026",
    short:
      "Where should BC put wildfire stations? Optimization over 7,032 NASA satellite-detected fires, with a map where you drag stations and watch coverage change.",
    bullets: [
      "Chose station sites from 851 candidates (521 fire halls + 330 towns) using greedy p-median and maximal-coverage optimization (PuLP, spopt/HiGHS).",
      "The optimized 10- and 20-station layouts beat all 1,000 random layouts on a held-out year; validated with leave-one-year-out testing.",
      "Built a Python data pipeline (NASA FIRMS, ERA5 wind, OpenStreetMap) and a Next.js + deck.gl map that re-scores coverage in the browser as you drag a station.",
    ],
    tags: ["Python", "pandas", "geopandas", "PuLP", "Next.js", "deck.gl", "PostgreSQL"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/firstdue",
    },
  },

  {
    slug: "ekantiksearch",
    title: "EkantikSearch",
    image: "/images/projects/ekantiksearch.png",
    context: "Solo · Live",
    year: "2025",
    short:
      "Multilingual search engine that jumps to the exact moment a question is answered across ~980 YouTube videos. Type in Hindi, English or Hinglish.",
    bullets: [
      "Indexes 5,400+ timestamped questions from ~980 videos, with Hindi/English/Hinglish input through the Microsoft Translator API.",
      "Automated nightly ingestion with GitHub Actions and Python, adding only new videos and questions to Supabase PostgreSQL; ran unattended for over 10 months.",
    ],
    tags: ["React", "TypeScript", "Python", "Supabase", "GitHub Actions", "Vercel"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/EkantikSearch",
      demo: "https://ekantiksearch.vercel.app/",
    },
  },

  {
    slug: "violin-flight",
    title: "Violin Flight",
    image: "/images/projects/violin-flight.png",
    context: "Team of 3 · StormHacks 2025",
    year: "2025",
    demoLabel: "Devpost",
    short: "Browser 3D game where you fly a violin by humming: pitch steers, volume moves you over procedurally generated terrain.",
    bullets: [
      "Built with TypeScript, Three.js and the Web Audio API over a weekend hackathon.",
      "My part: the game's pages (home, about, play, leaderboard) and in-game UI and state logic, including play, loading and game-over states and a live pitch indicator.",
    ],
    tags: ["TypeScript", "Three.js", "Web Audio API", "Vite", "Hackathon"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/violin-flight",
      demo: "https://devpost.com/software/violin-flight",
    },
  },
  {
    slug: "tom-and-jerry-maze",
    title: "Tom & Jerry Maze",
    image: "/images/projects/tom-jerry-maze.png",
    context: "Solo · CMPT 213 course project",
    year: "2024",
    short:
      "Maze game where Jerry collects cheese while dodging Tom, with object-oriented Java game logic behind a Spring Boot REST API.",
    bullets: [
      "Split the game logic into classes for movement, scoring, state and collisions.",
      "Exposed moves, reset, score and game state as REST endpoints with DTO responses for a Vue frontend.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "OOP"],
    links: {
      github: "https://github.com/ChaitanyaMittal27/TomAndJerryMazeGame-",
    },
  },
];
