"use client";

import { useReveal } from "@/hooks/useReveal";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      id={id}
      className={`px-6 py-16 max-w-6xl mx-auto transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}
