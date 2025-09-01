"use client";

import { useState, useRef, useEffect } from "react";

const resumeOptions = [
  {
    title: "Web Development",
    description: "Frontend & fullstack web focus",
    path: "/data/chaitanya-mittal-webdev-resume.pdf",
  },
  {
    title: "Software Engineering",
    description: "Systems & backend engineering",
    path: "/data/chaitanya-mittal-swe-resume.pdf",
  },
  {
    title: "AI/ML Engineering",
    description: "Machine learning & AI focus",
    path: "/data/chaitanya-mittal-aiml-resume.pdf",
  },
];

export default function ResumeMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
      >
        View Resume
        <svg
          className={`ml-2 w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
          <div className="py-2">
            {resumeOptions.map((option, index) => (
              <a
                key={index}
                href={option.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{option.title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {option.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
