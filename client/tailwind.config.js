/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
    rise: {
      '0%':   { transform: 'translate(-50%, 100%)', opacity: '0' },
      '70%':  { opacity: '1' },
      '100%': { transform: 'translate(-50%, -120%)', opacity: '0' },
    },
  },
  animation: {
    rise: 'rise 1s ease-in-out forwards',
  },
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

