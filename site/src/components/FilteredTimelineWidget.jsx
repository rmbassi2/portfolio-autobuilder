import { useState } from 'preact/hooks';
import Timeline from './Timeline.jsx';

export default function FilteredTimelineWidget({ entries, tags }) {
  const [selected, setSelected] = useState(null);
  const filteredEntries = entries.filter(e => !selected || (e.data.tags ?? []).includes(selected));

  return (
    <div>
      <nav class="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setSelected(null)}
          class={`px-3 py-1 rounded ${
            selected === null
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        >
          All
        </button>

        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelected(tag)}
            class={`px-3 py-1 rounded ${
              selected === tag
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </nav>
      <Timeline entries={filteredEntries} filterTag={selected} />
    </div>
  );
}
