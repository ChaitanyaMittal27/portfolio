"use client";

import Section from "./Section";
import { useCarousel } from "@/hooks/useCarousel";
import { experience } from "@/data/experience";

export default function Experience() {
  const { currentIndex, next, prev, goTo } = useCarousel(experience.length);

  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My professional journey and key achievements
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {experience.map((exp, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 mx-2">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>

                  <ul className="space-y-1">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 text-lg">
                          •
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          aria-label="Previous experience"
        >
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
          aria-label="Next experience"
        >
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {experience.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 dark:bg-blue-400 scale-110"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-105"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentIndex + 1} of {experience.length}
          </span>
        </div>
      </div>
    </Section>
  );
}
