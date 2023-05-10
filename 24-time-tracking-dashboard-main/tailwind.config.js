/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '62': '252px',
        '30': '125px',
        '-12.5': '-52.5px',
      },
      colors: {
        'Blue': '#5847EB',
        'Light-red-work': '#FF8C66',
        'Soft-blue': '#56C2E6',
        'Light-red': '#FF5C7C',
        'Lime-green': '#4ACF81',
        'Violet': '#7536D3',
        'Soft-orange': '#F1C65B',
        'Very-dark-blue': '#0F1424',
        'Dark-blue': '#1C1F4A',
        'Dark-blue-hover': '#21255a',
        'Desaturated-blue': '#6F76C8',
        'Pale-Blue': '#BDC1FF',
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '4.7xl': '2.5rem', // ou 36px
        '5.5xl': '3.5rem',
      },
    },
  },
  plugins: [],
}

