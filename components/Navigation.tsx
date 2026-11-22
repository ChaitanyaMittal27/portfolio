"use client";

import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#beyond", label: "Beyond code" },
];

export const RESUME_URL = "/chaitanya_mittal_resume.pdf";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
        <a href="#top" className="text-base font-semibold tracking-tight">
          Chaitanya Mittal
        </a>

        <div className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-fg px-4 py-2 font-medium text-bg transition-opacity hover:opacity-90"
          >
            <FileText aria-hidden="true" className="size-3.5" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface"
          >
            {open ? <X aria-hidden="true" className="size-4" /> : <Menu aria-hidden="true" className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 py-3 md:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-muted hover:text-fg"
              >
                {item.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-lg bg-fg px-4 py-3 font-medium text-bg"
            >
              <FileText aria-hidden="true" className="size-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
