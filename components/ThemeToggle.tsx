"use client";

import { Moon, Sun } from "lucide-react";

/** Dark is the default; this switches to light and remembers the choice. */
export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const nowDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", nowDark ? "dark" : "light");
    } catch {
      /* storage unavailable: the choice lasts for this visit only */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface text-fg transition-colors hover:border-line-strong"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
    </button>
  );
}
