"use client";

import { useEffect, useState } from "react";

/**
 * A fixed layer behind the page: a dot grid plus a soft glow whose colour
 * and position change with the section in view. Each glow is its own layer
 * so the change is a smooth cross-fade.
 */
const GLOWS = [
  { id: "top", color: "59,130,246", pos: "50% -10%" }, // blue
  { id: "work", color: "139,92,246", pos: "95% 45%" }, // violet
  { id: "skills", color: "16,185,129", pos: "5% 40%" }, // green
  { id: "experience", color: "245,158,11", pos: "95% 55%" }, // amber
  { id: "beyond", color: "249,115,22", pos: "10% 50%" }, // orange
];

export default function BackgroundGlow() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    GLOWS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dot-grid absolute inset-0" />
      {GLOWS.map((g) => (
        <div
          key={g.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{
            opacity: active === g.id ? "var(--glow-strength)" : 0,
            background: `radial-gradient(900px circle at ${g.pos}, rgba(${g.color},0.16), transparent 60%)`,
          }}
        />
      ))}
    </div>
  );
}
