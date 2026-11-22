"use client";

import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { useSkillFilter } from "./Providers";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const titleBySlug = new Map(projects.map((p) => [p.slug, p.title]));

export default function Skills() {
  const { skill, usedIn, pick } = useSkillFilter();

  const jumpTo = (slug: string) => {
    document.getElementById(`project-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="skills" aria-labelledby="skills-h" className="relative flex min-h-svh items-center">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-28">
        <Reveal>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <SectionHeading index="02" label="Skills" title="Skills" id="skills-h" />
            {skill && (
              <button
                type="button"
                onClick={() => pick(null)}
                className="min-h-11 font-mono text-[13px] text-muted hover:text-fg"
              >
                Clear selection
              </button>
            )}
          </div>
          <p className="mb-8 text-base text-muted">
            Every skill is backed by a project. Pick one to see where I used it; the projects above dim to match.
          </p>

          <div
            aria-live="polite"
            className="mb-10 flex min-h-[60px] flex-wrap items-center gap-2.5 rounded-xl border border-line bg-surface px-5 py-4"
          >
            <span className="font-mono text-[13px] text-muted">{skill ? `${skill} is used in` : "Pick a skill below"}</span>
            {usedIn.map((u) => {
              const title = titleBySlug.get(u);
              return title ? (
                <button
                  key={u}
                  type="button"
                  onClick={() => jumpTo(u)}
                  className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent-fg hover:underline"
                >
                  {title} ↑
                </button>
              ) : (
                <span key={u} className="rounded-md bg-accent-soft px-2.5 py-1 text-sm font-medium text-accent-fg">
                  {u}
                </span>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.05} className="flex flex-col gap-3">
              <h3 className="font-mono text-xs tracking-[0.08em] text-faint uppercase">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => {
                  const selected = s.name === skill;
                  return (
                    <button
                      key={s.name}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => pick(selected ? null : s.name, s.usedIn)}
                      onMouseEnter={() => pick(s.name, s.usedIn)}
                      className={`min-h-9 rounded-lg border px-3 py-2 text-sm transition-colors ${
                        selected
                          ? "border-fg bg-fg text-bg"
                          : "border-line bg-surface text-fg-soft hover:border-line-strong"
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
