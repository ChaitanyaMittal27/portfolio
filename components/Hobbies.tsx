import { hobbies } from "@/data/hobbies";
import type { HobbyArt as Art } from "@/types";
import HobbyArt from "./HobbyArt";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tint: Record<Art, { bg: string; label: string }> = {
  gaming: { bg: "bg-blue-500/[0.06]", label: "text-blue-700 dark:text-blue-300" },
  reading: { bg: "bg-amber-500/[0.06]", label: "text-amber-700 dark:text-amber-300" },
  running: { bg: "bg-emerald-500/[0.06]", label: "text-emerald-700 dark:text-emerald-300" },
  food: { bg: "bg-orange-500/[0.06]", label: "text-orange-700 dark:text-orange-300" },
};

export default function Hobbies() {
  return (
    <section id="beyond" aria-labelledby="beyond-h" className="relative flex min-h-svh items-center">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-28">
        <Reveal className="mb-10 flex flex-col gap-4">
          <SectionHeading index="04" label="Beyond code" title="Beyond code" id="beyond-h" />
          <p className="text-base text-muted">What I do when I&apos;m not shipping. Hover a card.</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {hobbies.map((h, i) => (
            <Reveal key={h.art} delay={i * 0.06} className={h.wide ? "md:col-span-3" : ""}>
              <article
                className={`hob-card relative overflow-hidden rounded-2xl border border-line p-7 ${tint[h.art].bg} ${
                  h.wide ? "h-[300px]" : "h-[260px]"
                }`}
              >
                <HobbyArt art={h.art} />
                <div className={`relative flex flex-col gap-2 ${h.wide ? "max-w-[360px]" : "max-w-[220px]"}`}>
                  <span className={`font-mono text-xs ${tint[h.art].label}`}>
                    {String(i + 1).padStart(2, "0")} · {h.label}
                  </span>
                  <h3 className={`font-semibold tracking-[-0.02em] ${h.wide ? "text-2xl" : "text-[22px]"}`}>{h.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{h.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
