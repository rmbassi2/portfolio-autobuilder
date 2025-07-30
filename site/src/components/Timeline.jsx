// Timeline.jsx
export default function Timeline({ entries, filterTag }) {
  const filtered = entries.filter(e => !filterTag || (e.data.tags ?? []).includes(filterTag));

  return (
    <div class="relative ml-6 before:absolute before:-left-2 before:top-0 before:h-full before:w-px before:bg-gray-300 dark:before:bg-gray-600">
      {filtered.map(e => (
        <div class="group mb-10 flex items-start">
          <span class="mt-1 h-4 w-4 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
          <div class="ml-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <h3 class="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
              {e.data.title}
            </h3>
            <time class="block text-gray-500 dark:text-gray-400 mt-1 mb-3">{e.data.date}</time>
            <div class="prose dark:prose-invert">{e.body}</div>
            {e.data.repo && (
              <a href={e.data.repo} class="inline-block mt-3 text-indigo-500 hover:underline">
                View Repo →
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
