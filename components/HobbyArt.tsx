import type { HobbyArt as Art } from "@/types";

/** Line illustrations for the Beyond code cards. Hover animations live in globals.css. */
export default function HobbyArt({ art }: { art: Art }) {
  switch (art) {
    case "gaming":
      return (
        <svg aria-hidden="true" viewBox="0 0 1120 300" preserveAspectRatio="xMidYMax meet" className="absolute inset-0 h-full w-full">
          <g className="hob-jet" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" opacity="0.75">
            <path
              transform="translate(500 40) rotate(90 60 46)"
              d="M60 0 L66 30 L112 52 L112 58 L66 50 L64 78 L80 88 L80 93 L60 89 L40 93 L40 88 L56 78 L54 50 L8 58 L8 52 L54 30 Z"
            />
            <path d="M470 86 H400 M470 96 H360 M470 106 H410" strokeDasharray="6 8" opacity="0.6" />
          </g>
          <g className="hob-tank" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinejoin="round" opacity="0.7">
            <path d="M760 250 L790 222 L960 222 L985 250 Z" />
            <path d="M815 222 L830 196 L905 196 L918 222" />
            <path d="M905 206 L1010 200" />
            <rect x="770" y="250" width="225" height="26" rx="13" />
            {[790, 830, 870, 910, 950, 975].map((cx) => (
              <circle key={cx} cx={cx} cy="263" r="8" />
            ))}
          </g>
          <path d="M0 280 H1120" stroke="currentColor" strokeOpacity="0.12" />
        </svg>
      );
    case "reading":
      return (
        <svg aria-hidden="true" viewBox="0 0 260 200" className="absolute -right-2.5 -bottom-2.5 h-[200px] w-[260px]">
          <g fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7">
            <path d="M70 120 Q130 60 190 120 Z" />
            <path d="M60 122 H200" />
            <path d="M100 92 L92 70 M160 92 L168 70" />
            <g className="hob-lens">
              <circle cx="170" cy="160" r="26" />
              <path d="M189 178 L222 206" />
            </g>
          </g>
          <text x="40" y="180" fontFamily="var(--font-geist-mono), monospace" fontSize="16" fill="#FBBF24" opacity="0.8">
            221B
          </text>
        </svg>
      );
    case "running":
      return (
        <svg aria-hidden="true" viewBox="0 0 300 200" className="absolute -right-2.5 bottom-0 h-[200px] w-[300px]">
          <path
            d="M30 170 C70 120 40 80 100 70 S160 140 200 100 S240 30 280 40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <path
            className="hob-route"
            d="M30 170 C70 120 40 80 100 70 S160 140 200 100 S240 30 280 40"
            fill="none"
            stroke="#34D399"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="30" cy="170" r="6" fill="#34D399" />
          <path d="M280 40 V10 L300 18 L280 26" fill="none" stroke="#34D399" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case "food":
      return (
        <svg aria-hidden="true" viewBox="0 0 240 220" className="absolute -right-5 -bottom-7 h-[220px] w-[240px]">
          <g fill="none" stroke="#FB923C" strokeWidth="2" strokeLinecap="round" opacity="0.75">
            <circle cx="120" cy="140" r="80" />
            <circle cx="120" cy="140" r="70" opacity="0.5" />
            <circle cx="92" cy="104" r="17" />
            <circle cx="138" cy="100" r="16" />
            <circle cx="166" cy="140" r="16" />
            <ellipse cx="104" cy="160" rx="30" ry="14" transform="rotate(-18 104 160)" />
            <path d="M84 164 Q104 152 124 156" opacity="0.6" />
            <g className="hob-steam">
              <path d="M96 46 C88 34 104 26 96 12" />
              <path d="M120 50 C112 36 128 28 120 12" />
              <path d="M144 46 C136 34 152 26 144 12" />
            </g>
          </g>
        </svg>
      );
  }
}
