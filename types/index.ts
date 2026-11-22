/**
 * ===============================
 * Global Type Definitions
 * ===============================
 */

export interface ExpItem {
  role: string;
  company: string;
  period: string; // "May 2025 – Aug 2025"
  summary?: string;
  points?: string[];
  type?: "work" | "volunteer";
  tags?: string[];
  /** Shown expanded (with bullets) in the timeline */
  featured?: boolean;
}

export interface ProjectStat {
  value: string; // "60+"
  label: string; // "active users"
}

export interface Project {
  slug: string;
  id?: string;
  title: string;
  image: string; // path under /public
  short: string; // 1–2 line description
  tags: string[];
  bullets?: string[];
  /** e.g. "Solo · Live in production" */
  context?: string;
  /** e.g. "Fall Hacks 2026 Winner" */
  award?: string;
  /** Featured projects get a full row; the rest go in "More projects" */
  featured?: boolean;
  /** Up to 3 headline numbers for featured rows */
  stats?: ProjectStat[];
  /** Year shown in the "More projects" list */
  year?: string;
  /** Label for the demo link, e.g. "Play it" (defaults to "Live site") */
  demoLabel?: string;
  links?: {
    github?: string;
    demo?: string;
  };
  alt?: string;
}

export type HobbyArt = "gaming" | "reading" | "running" | "food";

export interface Hobby {
  art: HobbyArt;
  label: string; // "Gaming"
  title: string; // "War Thunder"
  description: string;
  /** Spans the full row */
  wide?: boolean;
}
