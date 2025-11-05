import Section from "./Section";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I work with to bring ideas to life</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-5">
        {skillCategories.map((category, index) => (
          <div
            key={category.label}
            className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Category Badge */}
            <div className="flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 shadow-lg">
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm font-bold text-white uppercase tracking-wide">{category.label}</span>
              </div>
            </div>

            {/* Skills List */}
            <div className="flex-1 flex items-center">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{category.skills.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
