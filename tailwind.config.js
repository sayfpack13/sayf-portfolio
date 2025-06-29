// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-blue-500',
    'bg-red-500',
    'bg-blue-400',
    'bg-green-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-orange-600',
    'bg-blue-600',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-red-700',
    'bg-gray-500',
    'bg-orange-400',
    'bg-pink-500',
    'bg-blue-700',
    'bg-blue-800',
    'bg-indigo-700',
  ],
  theme: {
    extend: {
      // Overrides the default 'blue' color palette
      colors: {
        blue: {
          '50': '#f0fdf4',
          '100': '#dcfce7',
          '200': '#bbf7d0',
          '300': '#86efac',
          '400': '#4ade80',
          '500': '#22c55e', // Your new main color
          '600': '#16a34a',
          '700': '#15803d',
          '800': '#166534',
          '900': '#14532d',
          '950': '#052e16',
        },
        // You can still extend other colors
        gray: {
          '100': '#f3f4f6',
          '200': '#e5e7eb',
          // ... and so on
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}