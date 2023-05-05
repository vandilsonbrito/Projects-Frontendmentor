/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/*.{html,js}",
        ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'brown': '#885566',
        'pink': '#ff49db'
      },
    },
  },
  plugins: [],
}

