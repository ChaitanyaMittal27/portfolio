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

      {/* Two-column grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <div
            key={hobby.title}
            className="flex gap-3 items-start animate-fade-in"
            style={{
              animationDelay: `${index * 80}ms`,
            }}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <span className="text-3xl">{hobby.emoji}</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{hobby.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
