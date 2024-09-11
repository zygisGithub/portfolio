/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will scan all your files for Tailwind CSS classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Use require to include DaisyUI
  ],
  // Optionally, you can customize DaisyUI themes or other settings here:
  daisyui: {
    themes: true, // This enables DaisyUI's built-in themes
  },
};
