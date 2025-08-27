"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import RightBar from "@/components/RightBar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Analytics />
          <Navigation />
          <ThemeToggle />
          <RightBar />

          <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Add padding-top to account for fixed navigation */}
            <div className="pt-20">
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Hobbies />
            </div>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}
