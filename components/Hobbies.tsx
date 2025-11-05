import Section from "./Section";
import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Beyond Coding</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          When I am not coding, you will find me pursuing these passions
        </p>
      </div>

      {/* Compact 3-column grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => (
          <div
            key={hobby.title}
            className="group bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:border-green-400 dark:hover:border-green-500 animate-fade-in"
            style={{
              animationDelay: `${index * 60}ms`,
            }}
          >
            {/* Icon */}
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{hobby.emoji}</div>

            {/* Title */}
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {hobby.title}
            </h3>

            {/* Description - compact */}
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
