import Section from "./Section";
import { hobbies } from "@/data/hobbies";

export default function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Beyond Coding
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          When I am not coding, you will find me pursuing these passions that
          keep me inspired and balanced
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hobbies.map((hobby, index) => (
          <div
            key={hobby.title}
            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:border-green-300 dark:hover:border-green-600"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeIn 0.6s ease-out forwards",
            }}
          >
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {hobby.emoji}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              {hobby.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              {hobby.description}
            </p>

            {/* Hover indicator */}
            <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Fun fact */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-full border border-green-200 dark:border-gray-600">
          <span className="text-2xl mr-3">💡</span>
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Each hobby teaches me something that makes me a better developer!
          </span>
        </div>
      </div>
    </Section>
  );
}
