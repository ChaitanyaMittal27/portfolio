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
          <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Tailwind v4 + Theme Test! 🎨
              </h1>

              {/* Debug info */}
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Debug Info:</strong>
                </p>
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                  Current classes on html: Check dev tools → Elements → html
                </p>
              </div>

              {/* Visual test sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">
                    Light Mode Card
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Should be blue-ish
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100">
                    Dark Mode Card
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Should be purple-ish
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Click the theme toggle and watch these cards change colors!
              </p>

              <div className="bg-gray-100 dark:bg-black rounded-lg p-3 font-mono text-sm border border-gray-300 dark:border-gray-600">
                <span className="text-green-500">✓</span>
                <span className="text-gray-700 dark:text-gray-300 ml-2">
                  Tailwind v4 setup complete
                </span>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}
