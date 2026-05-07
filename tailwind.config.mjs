/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C1926',
        secondary: '#162A3E',
        surface: '#1E3348',
        accent: '#3B82F6',
        'accent-teal': '#14B8A6',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
