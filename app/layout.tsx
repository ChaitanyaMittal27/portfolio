import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya Mittal – Full-Stack & Backend Developer",
  description:
    "Portfolio of Chaitanya Mittal, CS student at SFU. Production apps, backend systems and ML projects: SFU Course Planner, Quarrel v2, SFU Course Predictor.",
  icons: "/favicon.ico",
  metadataBase: new URL("https://chaitanya-mittal.vercel.app"),
  openGraph: {
    title: "Chaitanya Mittal – Full-Stack & Backend Developer",
    description: "I build software people actually use.",
    url: "https://chaitanya-mittal.vercel.app",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

// Runs before paint: dark unless the visitor explicitly chose light.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (t === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
} catch (e) { document.documentElement.classList.add('dark'); }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
