import { ExpItem } from "@/types";

// flat array for carousel (keeps working)
export const experience: ExpItem[] = [
  {
    role: "Junior Web Developer",
    company: "Blueprint SFU – RPRC Project",
    period: "Fall 2025 – Present",
    points: [
      "Joined the development team building a membership application portal for the Richmond Poverty Reduction Coalition (RPRC), a nonprofit focused on community support and poverty reduction.",
      "Contributing using the MERN stack, closely collaborating with clients to gather requirements and feedback.",
      "Working with designers and PMs to define component boundaries, authentication/authorization needs, and deployment patterns so the team can move quickly into development sprints.",
    ],
  },
  {
    role: "Student Caller",
    company: "Simon Fraser University",
    period: "2023 – Present",
    points: [
      "Reached out to alumni and students for engagement and fundraising initiatives.",
      "Built communication and persuasion skills through hundreds of live calls.",
      "Promoted university programs and strengthened alumni relations.",
    ],
  },
  {
    role: "Student Ambassador",
    company: "Simon Fraser University",
    period: "2023 – Present",
    points: [
      "Represented SFU at campus tours, orientations, and recruitment events.",
      "Welcomed new students and guided them through transition into university life.",
      "Collaborated with faculty and staff to support outreach activities.",
    ],
  },
  {
    role: "Peer Mentor – Computer Science",
    company: "Simon Fraser University",
    period: "2024 – Present",
    points: [
      "Provided one-on-one mentorship to first-year CS students.",
      "Helped with academic planning, study strategies, and technical skills.",
      "Organized small group sessions to encourage collaborative learning.",
    ],
  },
  {
    role: "Peer Mentor – Mathematics",
    company: "Simon Fraser University",
    period: "2024 – Present",
    points: [
      "Mentored undergraduate math students through problem-solving and exam prep.",
      "Supported students in building confidence with proofs and logic-based reasoning.",
      "Created and shared practice resources for core math courses.",
    ],
  },
];

// optional: organized version (if you want grouped display later)
export const experienceByCategory: Record<string, ExpItem[]> = {
  Leadership: [
    {
      role: "Student Caller",
      company: "Simon Fraser University",
      period: "2023 – Present",
      points: [
        "Reached out to alumni and students for engagement and fundraising initiatives.",
        "Built communication and persuasion skills through hundreds of live calls.",
        "Promoted university programs and strengthened alumni relations.",
      ],
    },
    {
      role: "Student Ambassador",
      company: "Simon Fraser University",
      period: "2023 – Present",
      points: [
        "Represented SFU at campus tours, orientations, and recruitment events.",
        "Welcomed new students and guided them through transition into university life.",
        "Collaborated with faculty and staff to support outreach activities.",
      ],
    },
    {
      role: "Peer Mentor – Computer Science",
      company: "Simon Fraser University",
      period: "2024 – Present",
      points: [
        "Provided one-on-one mentorship to first-year CS students.",
        "Helped with academic planning, study strategies, and technical skills.",
        "Organized small group sessions to encourage collaborative learning.",
      ],
    },
    {
      role: "Peer Mentor – Mathematics",
      company: "Simon Fraser University",
      period: "2024 – Present",
      points: [
        "Mentored undergraduate math students through problem-solving and exam prep.",
        "Supported students in building confidence with proofs and logic-based reasoning.",
        "Created and shared practice resources for core math courses.",
      ],
    },
  ],
};
