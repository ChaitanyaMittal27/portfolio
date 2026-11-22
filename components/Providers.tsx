"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";

interface SkillFilterValue {
  /** The skill currently picked in the Skills section, or null */
  skill: string | null;
  /** Projects (slugs) and labels that use the picked skill */
  usedIn: string[];
  pick: (skill: string | null, usedIn?: string[]) => void;
  /** True when a project should be shown at full strength */
  isActive: (slug: string) => boolean;
}

const SkillFilterContext = createContext<SkillFilterValue | null>(null);

export function useSkillFilter() {
  const ctx = useContext(SkillFilterContext);
  if (!ctx) throw new Error("useSkillFilter must be used inside <Providers>");
  return ctx;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [skill, setSkill] = useState<string | null>(null);
  const [usedIn, setUsedIn] = useState<string[]>([]);

  const value: SkillFilterValue = {
    skill,
    usedIn,
    pick: (next, nextUsedIn = []) => {
      setSkill(next);
      setUsedIn(next ? nextUsedIn : []);
    },
    isActive: (slug) => !skill || usedIn.includes(slug),
  };

  return (
    <MotionConfig reducedMotion="user">
      <SkillFilterContext.Provider value={value}>{children}</SkillFilterContext.Provider>
    </MotionConfig>
  );
}
