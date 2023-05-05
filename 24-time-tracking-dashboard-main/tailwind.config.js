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
        'pink': '#ff49db',
        'LightRed' : 'hsl(var(--Light-red) / <alpha-value>)',
        Blue: 'hsl(var(--Blue) / <alpha-value>)',
        SoftBlue: 'hsl(var(--Soft-blue) / <alpha-value>)',
        LightRedStudy: 'hsl(var(--Light-red) / <alpha-value>)',
        LimeGreen: 'hsl(var(--Lime-green) / <alpha-value>)',
        Violet: 'hsl(var(--Violet) / <alpha-value>)',
        SoftOrange: 'hsl(var(--Soft-orange) / <alpha-value>)',
        VeryDarkBlue: 'hsl(var(--Very-dark-blue) / <alpha-value>)',
        DarkBlue: 'hsl(var(--Dark-blue) / <alpha-value>)',
        DesaturedBlue: 'hsl(var(--Desaturated-blue) / <alpha-value>)',
        PaleBlue: 'hsl(var(--Pale-Blue) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

