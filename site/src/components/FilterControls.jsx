import { useEffect, useState } from "preact/hooks";

export default function FilterControls({ entries, tags }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".timeline-entry");

    elements.forEach((el) => {
      const entryTags = el.dataset.tags.split(" ");
      const isVisible = !selected || entryTags.includes(selected);
      el.style.display = isVisible ? "flex" : "none";
    });
  }, [selected]);

  return (
    <nav class="flex flex-wrap gap-2 mb-6 justify-center">
      <button
        onClick={() => setSelected(null)}
        class={`px-3 py-1 rounded ${
          selected === null ? "bg-indigo-500 text-white" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelected(tag)}
          class={`px-3 py-1 rounded ${
            selected === tag ? "bg-indigo-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
