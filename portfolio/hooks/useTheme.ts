/**
 * useTheme Hook for dark/light themes
 *
 * Responsibilities:
 * - Detect system preference on first load
 * - Respect and persist user choice (via localStorage)
 * - Syncs Tailwind’s "dark" class on <html> element
 *
 * Usage:
 * const { theme, toggleTheme, mounted } = useTheme();
 *
 * - theme: current theme ('light' | 'dark')
 * - toggleTheme(): switch between light and dark
 * - mounted: boolean, true once hydrated (prevents SSR mismatch)
 */

"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = saved || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme, mounted };
}
