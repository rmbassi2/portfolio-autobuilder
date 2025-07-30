// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        primary: '#06B6D4',
        secondary: '#8B5CF6',
        highlight: '#F43F5E',
      },
    },
  },
  plugins: [],
};
