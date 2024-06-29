/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'clr-1' : '#17293A',
        'clr-2' : '#ECE9DF',
      },
    },
  },
  plugins: [],
}

