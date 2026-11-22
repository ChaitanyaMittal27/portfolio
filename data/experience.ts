import { ExpItem } from "@/types";

// Newest first. Source: "Resume" master doc (Experience tabs), Nov 2026.
export const experience: ExpItem[] = [
  {
    role: "Full Stack Developer",
    company: "SFU Blueprint",
    period: "Sep 2025 – Present",
    type: "work",
    featured: true,
    summary:
      "Membership portal for the Richmond Poverty Reduction Coalition, with a team of ~8 developers, designers and PMs.",
    points: [
      "Engineered a 3-step member onboarding flow in React and TypeScript with Supabase Auth, and implemented admin-only user deletion via Supabase RPC on PostgreSQL.",
      "Built 8 reusable, schema-driven form components with React Hook Form, Zod and shadcn/ui, and composed them into accessible individual and organization sign-up forms (fieldset/legend structure, aria-describedby errors, focus on the first invalid field).",
      "Wrote 71 Vitest/React Testing Library tests covering fields, sections, forms and submit edge cases; shipped in Agile sprints through peer code review and team QA.",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "React Hook Form", "Zod", "shadcn/ui", "Vitest"],
  },
  {
    role: "Student Ambassador",
    company: "SFU Faculty of Applied Sciences",
    period: "Jan 2025 – Sep 2026",
    type: "volunteer",
    summary: "Campus tours, orientations and recruitment events for prospective students and families.",
    points: [
      "Represented the Faculty of Applied Sciences at recruitment events, campus tours and orientation sessions, helping prospective students and families navigate university life.",
      "Helped new students feel welcome and get involved, supporting retention.",
    ],
  },
  {
    role: "Student Caller",
    company: "SFU Annual Giving",
    period: "Jan 2024 – Present",
    type: "work",
    summary: "Reconnecting alumni with SFU and handling objections live on the phone.",
    points: [
      "Reconnect SFU alumni with the university over the phone and ask for support for student initiatives.",
      "Handle objections live and adjust the conversation to keep calls productive.",
    ],
  },
  {
    role: "Peer Mentor – Computing Science",
    company: "Simon Fraser University",
    period: "Sep 2024 – Dec 2024",
    type: "volunteer",
    summary: "Debugging help, coding workshops and pair programming for CS students.",
    points: [
      "Mentored computing science students through debugging, problem-solving and programming fundamentals.",
      "Led coding workshops and encouraged collaborative problem-solving through pair programming.",
    ],
  },
];
