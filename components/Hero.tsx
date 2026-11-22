import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./icons";

export const EMAIL = "cma166@sfu.ca";
export const GITHUB_URL = "https://github.com/ChaitanyaMittal27";
export const LINKEDIN_URL = "https://www.linkedin.com/in/chaitanya-mittal-47ab8a2a4/";

const proof = [
  { text: "5x Deans Honor Roll", dot: "bg-green-400" },
  { text: "2x Hackathon Winner", dot: "bg-amber-400" },
  { text: "Full Stack Dev @ SFU Blueprint", dot: "bg-blue-400" },
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="flex min-h-[calc(100svh-61px)] flex-col"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col px-6 pt-20 pb-10 sm:pt-28">
        <Reveal className="flex flex-col gap-7">
          <div className="flex items-center gap-3.5">
            <Image
              src="/images/profile.jpg"
              alt="Chaitanya Mittal"
              width={96}
              height={96}
              priority
              className="size-12 rounded-full border border-line object-cover"
            />
            <span className="font-mono text-[13px] tracking-wide text-muted">CS @ SFU · Vancouver · Open to co-op</span>
          </div>

          <h1 className="max-w-[900px] text-5xl leading-[1.02] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[80px]">
            I build software
            <br />
            people use.
          </h1>

          <p className="max-w-[640px] text-lg leading-relaxed text-muted sm:text-xl">
            Full-stack and backend developer. Love to build user-friendly applications that are practical and easy for people to use. Interested in AI/ML.
          </p>

          <ul className="flex flex-wrap gap-2.5" aria-label="Highlights">
            {proof.map((p) => (
              <li
                key={p.text}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm"
              >
                <span aria-hidden="true" className={`size-[7px] rounded-full ${p.dot}`} />
                {p.text}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-fg px-5 py-3 text-[15px] font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Mail aria-hidden="true" className="size-[18px]" />
              Email
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-line-strong bg-surface px-5 py-3 text-[15px] font-medium transition-colors hover:border-fg/40"
            >
              <GitHubIcon className="size-[18px]" />
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-line-strong bg-surface px-5 py-3 text-[15px] font-medium transition-colors hover:border-fg/40"
            >
              <LinkedInIcon className="size-[18px]" />
              LinkedIn
            </a>
          </div>
        </Reveal>

        <a
          href="#work"
          aria-label="Scroll to selected work"
          className="bounce mt-auto flex size-11 items-center justify-center self-center rounded-full border border-line text-muted transition-colors hover:text-fg"
        >
          <ArrowDown aria-hidden="true" className="size-[18px]" />
        </a>
      </div>
    </section>
  );
}
