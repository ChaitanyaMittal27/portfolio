"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { useSkillFilter } from "./Providers";
import ProjectSheet from "./ProjectSheet";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  const { isActive, skill } = useSkillFilter();
  const [open, setOpen] = useState<Project | null>(null);
  const [preview, setPreview] = useState<Project>(others[0]);

  return (
    <section id="work" aria-labelledby="work-h" className="relative">
      <div className="mx-auto max-w-[1120px] px-6 pt-24 pb-12">
        <Reveal className="mb-14">
          <SectionHeading index="01" label="Work" title="Selected work" id="work-h" />
        </Reveal>

        {/* Featured: equal rows, image side alternates */}
        <div className="flex flex-col gap-24">
          {featured.map((p, i) => {
            const active = isActive(p.slug);
            return (
              <Reveal key={p.slug}>
                <article
                  id={`project-${p.slug}`}
                  className={`flex flex-col items-center gap-10 transition-opacity duration-300 md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } ${active ? "opacity-100" : "opacity-30"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(p)}
                    aria-label={`Open details for ${p.title}`}
                    className={`group w-full overflow-hidden rounded-2xl border bg-surface px-5 pt-5 transition-colors md:flex-[1.35] ${
                      skill && active ? "border-accent" : "border-line hover:border-line-strong"
                    }`}
                  >
                    <Image
                      src={p.image}
                      alt=""
                      width={1200}
                      height={750}
                      className="h-[240px] w-full rounded-t-[10px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] sm:h-[320px]"
                    />
                  </button>

                  <div className="flex w-full flex-col gap-4 md:flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs tracking-[0.06em] text-muted uppercase">{p.context}</span>
                      {p.award && (
                        <span className="rounded-full border border-amber-400/35 bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-200">
                          {p.award}
                        </span>
                      )}
                    </div>
                    <h3 className="text-[32px] font-semibold tracking-[-0.02em]">{p.title}</h3>
                    <p className="text-base leading-relaxed text-muted">{p.short}</p>

                    {p.stats && (
                      <dl className="grid grid-cols-3 gap-3 border-y border-line py-4">
                        {p.stats.map((s) => (
                          <div key={s.label} className="flex flex-col-reverse">
                            <dt className="text-[13px] text-muted">{s.label}</dt>
                            <dd className="font-mono text-2xl font-medium sm:text-[26px]">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    <p className="font-mono text-[13px] text-muted">{p.tags.slice(0, 5).join(" · ")}</p>

                    <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
                      {p.links?.demo && (
                        <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                          {p.demoLabel ?? "Live site"}
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                      )}
                      {p.links?.github && (
                        <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                          Code
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                      )}
                      <button type="button" onClick={() => setOpen(p)} className="hover:text-accent">
                        Details →
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* More projects: plain rows with a hover preview */}
        <Reveal className="mt-32 flex flex-col gap-5">
          <h3 className="text-[22px] font-semibold tracking-tight">More projects</h3>
          <div className="flex items-start gap-10">
            <ul className="min-w-0 flex-1 border-t border-line">
              {others.map((p) => {
                const active = isActive(p.slug);
                const link = p.links?.demo ?? p.links?.github;
                const isPreview = preview.slug === p.slug;
                return (
                  <li
                    key={p.slug}
                    id={`project-${p.slug}`}
                    onMouseEnter={() => setPreview(p)}
                    onFocus={() => setPreview(p)}
                    className={`flex flex-wrap items-baseline gap-x-6 gap-y-1.5 border-b border-line px-3 py-5 transition-[opacity,background-color] duration-300 ${
                      active ? "opacity-100" : "opacity-30"
                    } ${isPreview ? "bg-fg/[0.03]" : ""}`}
                  >
                    <div className="flex w-full flex-col sm:w-[180px] sm:shrink-0">
                      <button type="button" onClick={() => setOpen(p)} className="text-left text-base font-semibold hover:text-accent">
                        {p.title}
                      </button>
                      <span className="font-mono text-[11px] text-faint">{p.context}</span>
                    </div>
                    <p className="min-w-0 flex-1 basis-[260px] text-[15px] text-muted">{p.short}</p>
                    <span className="font-mono text-xs text-faint">{p.year}</span>
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium hover:text-accent">
                        {p.links?.demo ? (p.demoLabel ?? "Live") : "Code"}
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <figure className="sticky top-24 hidden w-[340px] shrink-0 flex-col gap-2.5 rounded-[14px] border border-line bg-surface p-3 lg:flex">
              <Image
                key={preview.slug}
                src={preview.image}
                alt={`${preview.title} screenshot`}
                width={680}
                height={425}
                className="h-[200px] w-full rounded-lg object-cover object-top"
              />
              <figcaption className="font-mono text-xs text-muted">{preview.title}</figcaption>
            </figure>
          </div>
        </Reveal>
      </div>

      <ProjectSheet project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
