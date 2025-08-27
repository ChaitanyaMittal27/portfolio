"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are a few of my favorite projects that I have built over the past
          few years!
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            onClick={() => setSelectedProject(project)}
            onMouseEnter={() => setHoveredProject(project.slug)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              animationDelay: `${index * 150}ms`,
              transform:
                hoveredProject === project.slug
                  ? "translateY(-8px)"
                  : "translateY(0px)",
            }}
          >
            {/* Project Image */}
            <div className="relative h-48 md:h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={320}
                height={320}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay that appears on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.slug ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Skills Pills on Hover */}
                <div
                  className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
                    hoveredProject === project.slug
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-gray-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Icons */}
                  <div className="flex space-x-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        aria-label="View source code"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}

                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-blue-600/80 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        aria-label="View live demo"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    {/* Click for Details Hint */}
                    <div className="flex-1 flex justify-end">
                      <span className="px-3 py-2 bg-white/20 text-white text-xs rounded-full font-medium backdrop-blur-sm">
                        Click for details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {project.short}
              </p>

              {/* Default visible tech stack (2-3 main ones) */}
              <div
                className={`mt-4 transition-all duration-300 ${
                  hoveredProject === project.slug ? "opacity-30" : "opacity-100"
                }`}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Indicator */}
            <div
              className={`absolute top-4 right-4 transition-all duration-300 ${
                hoveredProject === project.slug
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
            >
              <div className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm">
                <svg
                  className="w-4 h-4 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}
