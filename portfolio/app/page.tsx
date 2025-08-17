import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Theme Toggle Works! 🌙
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Phase 2: Dark mode is functional
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Click the toggle button in the top-right corner
          </p>
        </div>
      </main>
    </>
  );
}
