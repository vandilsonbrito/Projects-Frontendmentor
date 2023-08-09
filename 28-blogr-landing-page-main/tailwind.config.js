/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './dist/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'Light-red': 'hsl(356, 100%, 66%)',
        'Very-light-red': 'hsl(355, 100%, 74%)',
        'Very-dark-blue': 'hsl(208, 49%, 24%)',
        'White': 'hsl(0, 0%, 100%)',
        'White-off': 'hsl(0, 0%, 90%)',
        'White-grayish': 'hsl(0, 0%, 97%)',
        'Grayish-blue': 'hsl(240, 2%, 79%)',
        'Very-dark-grayish-blue' : 'hsl(207, 13%, 34%)',
        'Very-dark-black-blue': 'hsl(240, 10%, 16%)',
        'Very-light-red' : 'hsl(13, 100%, 72%)',
        'Light-light-red': 'hsl(353, 100%, 62%)',
        'Very-dark-gray-blue':' hsl(237, 17%, 21%)',
        'Very-dark-desaturated-blue': 'hsl(237, 23%, 32%)'
      }
    },
    fontFamily: {
      Overpass: ['Overpass', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif']
    },
    /* backgroundImage: {
      'bgPatternCircles': "url('/images/bg-pattern-circles.svg')",
      'bgPatternIntroDesktop': "url('/images/bg-pattern-intro-desktop.svg')",
      'bgPatternIntroMobile': "url('/images/bg-pattern-intro-mobile.svg')",
      'iconArrowDark': "url('/images/icon-arrow-dark.svg')",
      'iconArrowLight': "url('/images/icon-arrow-light.svg')",
      'iconClose': "url('/images/icon-close.svg')",
      'iconHamb': "url('/images/icon-hamburger.svg')",
      'illustrationEditorDesktop': "url('/images/illustration-editor-desktop.svg')",
      'illustrationEditorMobile': "url('/images/illustration-editor-mobile.svg')",
      'illustrationLaptopDesktop': "url('/images/illustration-laptop-desktop.svg')",
      'illustrationLaptopMobile': "url('/images/illustration-laptop-mobile.svg')",
      'illustrationPhones': "url('/images/illustration-phones.svg')",
      'logo': "url('/images/logo.svg')",
    },   */
  },
  plugins: [],
}

