import { experience } from "@/data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="relative flex min-h-svh items-center">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-28">
        <Reveal className="mb-12">
          <SectionHeading index="03" label="Experience" title="Experience" id="exp-h" />
        </Reveal>

        <ol className="flex flex-col">
          {experience.map((exp, i) => {
            const last = i === experience.length - 1;
            return (
              <li key={`${exp.role}-${exp.company}`}>
                <Reveal delay={i * 0.05} className="flex flex-col gap-2 sm:flex-row sm:gap-10">
                  <div className="pt-1 font-mono text-[13px] text-muted sm:w-[180px] sm:shrink-0">{exp.period}</div>
                  <div
                    className={`flex min-w-0 flex-1 flex-col gap-2 border-l-2 pl-7 ${last ? "pb-2" : exp.featured ? "pb-11" : "pb-8"} ${
                      exp.featured ? "border-fg" : "border-line-strong"
                    }`}
                  >
                    <h3 className={exp.featured ? "text-xl font-semibold" : "text-lg font-semibold"}>
                      {exp.role} · {exp.company}
                    </h3>
                    {exp.summary && <p className="text-[15px] text-muted">{exp.summary}</p>}
                    {exp.featured && exp.points && (
                      <ul className="mt-1.5 flex list-disc flex-col gap-2 pl-[18px] text-[15px] leading-relaxed text-fg-soft">
                        {exp.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    )}
                    {exp.featured && exp.tags && (
                      <p className="pt-1 font-mono text-xs text-muted">{exp.tags.slice(0, 5).join(" · ")}</p>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
