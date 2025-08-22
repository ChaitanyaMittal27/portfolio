import Section from "./Section";
import Image from "next/image";

export default function About() {
  return (
    <Section id="about" className="flex items-center justify-center">
      <div className="text-center max-w-4xl">
        <div className="mb-8">
          <Image
            src="/images/profile.jpg"
            alt="Chaitanya Mittal"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm Chaitanya Mittal
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">
          Full Stack Developer & AI Enthusiast
        </p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          I create exceptional digital experiences through clean code and
          thoughtful design. Passionate about building scalable applications
          that solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="../data/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </a>
          <a
            href="mailto:cma166@sfu.ca"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
}
