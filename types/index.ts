/**
 * ===============================
 * Global Type Definitions
 * ===============================
 * Keep all cross-app interfaces here so components & data
 * stay consistent and easy to refactor.
 */

/**
 * Experience item shown in the carousel.
 */
export interface ExpItem {
  role: string;
  company: string;
  period: string; // format: "May 2025 – Aug 2025"
  summary?: string;
  points?: string[];
}

/**
 * Project card displayed in the 2-up grid.
 * - `image` is used for the card thumbnail.
 * - `tags` are simple strings rendered as colorful chips (GitHub-style).
 * - `links` power the hover overlay icons (GitHub / Demo).
 */
export interface Project {
  slug: string;
  id?: string;
  title: string;
  image: string; // path
  short: string; // 1–2 line description
  tags: string[]; // ["Next.js", "TypeScript", "Tailwind"]
  bullets?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  alt?: string;
}
