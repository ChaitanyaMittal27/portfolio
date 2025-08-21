import Section from "./Section";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Technologies I work with to bring ideas to life...
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="group px-3 py-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-600"
            style={{
              animationDelay: `${index * 50}ms`,
              animation: "fadeIn 0.6s ease-out forwards",
            }}
          >
            <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
