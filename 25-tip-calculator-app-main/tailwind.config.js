/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        'Strong-cyan': 'hsl(172, 67%, 45%)',
        'Dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'Very-dark-cyan': 'hsl(183, 100%, 15%)',
        'Grayish-cyan': 'hsl(184, 14%, 56%)',
        'Light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'Very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'White': '#FFF',
      },
      fontFamily: {
        SapceMono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

  