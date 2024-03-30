/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'hsl-color': 'hsl(230, 62%, 56%);',
        // Add more custom colors here as needed
      },
    },
  },
  plugins: [],
}

