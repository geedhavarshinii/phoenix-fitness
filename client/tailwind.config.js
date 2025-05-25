/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      phoenixPink: '#ff5f8a',
      phoenixOrange: '#ff9f1c',
      phoenixWhite: '#fefefe',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
}

