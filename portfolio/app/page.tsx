"use client";

import { useState } from "react";
import Splash from "@/components/Splash";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <ThemeToggle />
          <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 animate-slide-up">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Splash Screen Complete! ✨
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Phase 3: Loading animation works
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Refresh to see the splash screen again
              </p>
            </div>
          </main>
        </>
      )}
    </>
  );
}
