/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky': '#23A6F0',
        'gray': '#616161',
        'black': '#191919'
      }
    },
  },
  plugins: [
  ],
}
