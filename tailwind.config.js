/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee', 'cursive'],
        'bungee-spice': ['Bungee Spice', 'cursive'],
        lora: ['Lora', 'serif'],
        'rubik-bubbles': ['Rubik Bubbles', 'sans-serif'],
      },
    },
  },
  plugins: [],
}