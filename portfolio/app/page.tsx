"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import ThemeToggle from "@/components/ThemeToggle";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <ThemeToggle />
          <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
            <About />
            <Skills />
            <Experience />

            {/* Temporary verification section */}
            <section className="min-h-screen flex items-center justify-center px-6">
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Phase 6 Complete! 🎠
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                  Experience carousel with navigation is working
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Try the arrows and dot navigation in the Experience section
                </p>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
