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
  role: string; // "Software Engineer Intern"
  company: string; // "SFU Lab" or "Tech Co."
  period: string; // "May 2025 – Aug 2025"
  summary?: string; // 1–2 lines if you don't have bullets yet
  points?: string[]; // Optional: up to 3–4 resume-style bullets
}

/**
 * Project card displayed in the 2-up grid.
 * - `image` is used for the card thumbnail.
 * - `tags` are simple strings rendered as colorful chips (GitHub-style).
 * - `links` power the hover overlay icons (GitHub / Demo).
 */
export interface Project {
  id: string; // unique id
  title: string; // project name (card heading)
  image: string; // path in /public,  "/images/projects/app.png"
  short: string; // 1–2 line description shown under the title
  tags: string[]; // ["Next.js", "TypeScript", "Tailwind"]
  links?: {
    github?: string; // GitHub repo URL for hover icon
    demo?: string; // Live demo URL for hover icon
  };
  alt?: string; // optional: image alt text for a11y/SEO
}
