import { ExpItem } from "@/types";

// flat array for carousel (keeps working)
export const experience: ExpItem[] = [
  {
    role: "Full Stack Developer",
    company: "Blueprint SFU – RPRC Project",
    period: "Sep 2025 – Present",
    points: [
      "Engineered a 3-step signup flow using React and Supabase Auth, implementing email/password authentication, multi-field profile collection, and email verification to securely onboard member and admin users.",
      "Built a shared React component library (shadcn/ui, Tailwind CSS) with built-in validation and error handling, reused across 5+ form screens including signup, renewal, and profile editing flows.",
      "Implemented user deletion via Supabase RPC and auth.admin.deleteUser to fully remove records from both database and authentication layers, enforcing admin-only access control.",
    ],
  },
  {
    role: "Peer Mentor – Computer Science",
    company: "Simon Fraser University",
    period: "Sep 2024 – Dec 2024",
    points: [
      "Mentored first-year CS students in debugging, algorithm design, and foundational programming concepts through one-on-one and group sessions.",
      "Facilitated collaborative problem-solving by encouraging pair programming and reducing fear of failure in technical environments.",
      "Adapted explanations to diverse learning styles, building technical empathy and communication skills.",
    ],
  },
];
