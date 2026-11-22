"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/types";

interface ProjectSheetProps {
  project: Project | null;
  onClose: () => void;
}

/** Side panel with a project's full details (shadcn-style Sheet on Radix Dialog). */
export default function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-50 bg-black/60" />
        <Dialog.Content className="sheet-panel fixed inset-y-0 right-0 z-50 flex w-full max-w-[620px] flex-col gap-6 overflow-y-auto border-l border-line bg-surface-2 px-6 py-7 text-fg sm:px-10">
          {project && (
            <>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tracking-[0.06em] text-muted uppercase">
                  {[project.context, project.year].filter(Boolean).join(" · ")}
                </span>
                <Dialog.Close
                  aria-label="Close details"
                  className="flex size-11 shrink-0 items-center justify-center rounded-[10px] border border-line transition-colors hover:border-line-strong"
                >
                  <X aria-hidden="true" className="size-4" />
                </Dialog.Close>
              </div>

              <div className="flex flex-col gap-2.5">
                {project.award && (
                  <span className="self-start rounded-full border border-amber-400/35 bg-amber-400/15 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-200">
                    {project.award}
                  </span>
                )}
                <Dialog.Title className="text-[34px] font-semibold tracking-[-0.03em]">{project.title}</Dialog.Title>
                <Dialog.Description className="text-base leading-relaxed text-muted">{project.short}</Dialog.Description>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.links?.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[9px] bg-fg px-4 py-2.5 text-sm font-medium text-bg hover:opacity-90"
                  >
                    {project.demoLabel ?? "Live site"}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-[9px] border border-line-strong px-4 py-2.5 text-sm font-medium hover:border-fg/40"
                  >
                    View code
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
              </div>

              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1200}
                height={750}
                className="h-[220px] w-full rounded-[10px] border border-line object-cover object-top"
              />

              {project.bullets && project.bullets.length > 0 && (
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">What I built</h3>
                  <ul className="flex list-disc flex-col gap-2 pl-[18px] text-sm leading-relaxed text-fg-soft">
                    {project.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col gap-2.5 pb-4">
                <h3 className="font-mono text-xs font-medium tracking-[0.08em] text-muted uppercase">Stack</h3>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <li key={t} className="rounded-md border border-line px-2.5 py-1 text-[13px]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
