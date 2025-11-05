"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "about", label: "About" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "projects", label: "Projects" },
  { href: "hobbies", label: "Hobbies" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach(({ href }) => {
      const element = document.getElementById(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Custom CSS for navbar transitions */}
      <style jsx>{`
        .navbar-transparent {
          background: rgba(255, 255, 255, 0);
          border-bottom: 1px solid transparent;
          box-shadow: none;
          backdrop-filter: none;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(229, 231, 235, 1);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(12px);
        }

        :global(.dark) .navbar-transparent {
          background: rgba(15, 23, 42, 0);
          border-bottom: 1px solid transparent;
          box-shadow: none;
        }

        :global(.dark) .navbar-scrolled {
          background: linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(17, 24, 39, 0.95), rgba(30, 41, 59, 0.95));
          border-bottom: 1px solid rgba(51, 65, 85, 0.5);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(99, 102, 241, 0.1);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name with enhanced styling */}
            <button
              onClick={() => scrollToSection("about")}
              className={`text-xl font-bold transition-all duration-300 ${
                isScrolled
                  ? "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-400"
                  : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-indigo-300"
              }`}
            >
              <span className="relative">
                Chaitanya Mittal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-400 dark:to-purple-400 transition-all duration-300 hover:w-full"></span>
              </span>
            </button>

            {/* Desktop Navigation with enhanced styling */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === href
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-600 dark:to-purple-600 text-white shadow-lg dark:shadow-indigo-500/25"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {label}
                  {activeSection === href && (
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-indigo-600/20 dark:from-indigo-600/20 dark:to-purple-600/20 blur-lg -z-10"></span>
                  )}
                </button>
              ))}

              {/* Enhanced Resume Link */}
              <a
                href="/Chaitanya_Mittal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/60 group"
              >
                Resume
                <svg
                  className="w-3 h-3 inline ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              title="Toggle Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isMobileMenuOpen
                  ? "text-blue-600 dark:text-indigo-400 bg-gray-100 dark:bg-slate-800/60"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800/60"
              }`}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="space-y-2 py-2">
              {navItems.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === href
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-indigo-600 dark:to-purple-600 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800/60 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Mobile Resume Link */}
              <a
                href="/Chaitanya_Mittal_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800/60 hover:text-gray-900 dark:hover:text-white"
              >
                Resume
                <svg className="w-3 h-3 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation background glow effect for dark theme */}
        {isScrolled && (
          <div className="absolute inset-0 -z-10 dark:opacity-30 opacity-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-blue-600/10 blur-3xl"></div>
          </div>
        )}
      </nav>
    </>
  );
}
