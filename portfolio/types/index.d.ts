export interface ExpItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  short: string;
  bullets: string[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

// Add this new interface
export interface Hobby {
  icon: string;
  title: string;
  description: string;
  emoji: string;
}
