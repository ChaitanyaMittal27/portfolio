"use client";

import { useEffect, useState } from "react";

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [displayedName, setDisplayedName] = useState("");
  const [displayedCode, setDisplayedCode] = useState("");
  const [progress, setProgress] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullName = "Chaitanya Mittal";
  const codeText = "console.log('Welcome to my portfolio! 🚀');";

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Stage 1: Name typewriter (after 0.5s delay)
  useEffect(() => {
    if (currentStage === 1) {
      let index = 0;
      const nameInterval = setInterval(() => {
        if (index <= fullName.length) {
          setDisplayedName(fullName.slice(0, index));
          index++;
        } else {
          clearInterval(nameInterval);
          setTimeout(() => setCurrentStage(2), 400);
        }
      }, 80);
      return () => clearInterval(nameInterval);
    }
  }, [currentStage, fullName]);

  // Stage 2: Code typing + progress
  useEffect(() => {
    if (currentStage === 2) {
      let charIndex = 0;
      const codeInterval = setInterval(() => {
        if (charIndex <= codeText.length) {
          setDisplayedCode(codeText.slice(0, charIndex));
          setProgress((charIndex / codeText.length) * 100);
          charIndex++;
        } else {
          clearInterval(codeInterval);
          setTimeout(() => setCurrentStage(3), 600);
        }
      }, 40);
      return () => clearInterval(codeInterval);
    }
  }, [currentStage, codeText]);

  // Initial delay
  useEffect(() => {
    const timer = setTimeout(() => setCurrentStage(1), 300);
    return () => clearTimeout(timer);
  }, []);

  // Fade out
  useEffect(() => {
    if (currentStage === 3) {
      const timer = setTimeout(() => {
        setCurrentStage(4);
        setTimeout(onComplete, 400);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentStage, onComplete]);

  if (currentStage === 4) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-400 ${
        currentStage === 3 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center max-w-2xl w-full px-6">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-xl font-bold text-white">
              {fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>

        {/* Name Typewriter */}
        {currentStage >= 1 && (
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-mono">
              {displayedName}
              {currentStage === 1 && showCursor && (
                <span className="text-green-400">|</span>
              )}
            </h1>
            {displayedName === fullName && (
              <p className="text-lg text-gray-300 animate-fade-in">
                Student Developer
              </p>
            )}
          </div>
        )}

        {/* Simple Code Line */}
        {currentStage >= 2 && (
          <div className="bg-black rounded-lg border border-gray-700 p-4 max-w-lg mx-auto">
            <div className="text-left">
              <span className="text-gray-500 text-sm font-mono">01</span>
              <span className="ml-3 text-blue-400 font-mono text-sm">
                {displayedCode}
                {currentStage === 2 && showCursor && (
                  <span className="text-green-400">|</span>
                )}
              </span>
            </div>

            {/* Mini Progress Bar */}
            <div className="mt-3">
              <div className="bg-gray-800 rounded-full h-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Success indicator */}
        {currentStage === 3 && (
          <div className="mt-4 animate-fade-in">
            <span className="text-green-400 text-sm font-mono">✓ Ready</span>
          </div>
        )}
      </div>
    </div>
  );
}
