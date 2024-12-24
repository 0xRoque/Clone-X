/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#0084b4 ',
        'twitter-black': '#14171a',
        'twitter-dark-gray': '#657786',
        'twitter-light-gray': '#aab8c2',
        'twitter-extra-light-gray': '#e1e8ed',
        'twitter-background': '#1520b0', // Definindo cor personalizada
      },
    },
  },
  plugins: [],
}
