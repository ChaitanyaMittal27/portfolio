import { ArrowUpRight } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "./Hero";
import { RESUME_URL } from "./Navigation";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 pt-24 pb-10">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[13px] text-muted">Open to co-op roles</span>
          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-[56px]">Let&apos;s build something.</h2>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1.5 self-start font-mono text-lg hover:text-accent sm:text-[22px]">
            {EMAIL}
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line pt-6 text-sm text-muted">
          <div className="flex flex-wrap gap-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-fg-soft hover:text-fg">
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-fg-soft hover:text-fg">
              LinkedIn
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-fg-soft hover:text-fg">
              Resume
            </a>
          </div>
          <span className="font-mono">Last updated Nov 2026 · Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
