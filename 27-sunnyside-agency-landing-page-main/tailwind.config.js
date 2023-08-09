/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './dist/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gallery-cone-mobile': "url('/images/mobile/image-gallery-cone.jpg')",
        'gallery-milkbottles-mobile': "url('/images/mobile/image-gallery-milkbottles.jpg')",
        'gallery-orange-mobile': "url('/images/mobile/image-gallery-orange.jpg')",
        'gallery-sugar-cubes-mobile': "url('/images/mobile/image-gallery-sugar-cubes.jpg')",
        'graphic-design-mobile': "url('/images/mobile/image-graphic-design.jpg')",
        'header-mobile': "url('/images/mobile/image-header.jpg')",
        'photography-mobile': "url('/images/mobile/image-photography.jpg')",
        'stand-out-mobile': "url('/images/mobile/image-stand-out.jpg')",
        'transform-mobile': "url('/images/mobile/image-transform.jpg')",
        'image-emily': "url('/images/image-emily.jpg')",
        'image-jennie': "url('/images/image-jennie.jpg')",
        'image-thomas': "url('/images/image-thomas.jpg')",

        'gallery-cone': "url('/images/desktop/image-gallery-cone.jpg')",
        'gallery-milkbottles': "url('/images/desktop/image-gallery-milkbottles.jpg')",
        'gallery-orange': "url('/images/desktop/image-gallery-orange.jpg')",
        'gallery-sugar-cubes': "url('/images/desktop/image-gallery-sugarcubes.jpg')",
        'graphic-design': "url('/images/desktop/image-graphic-design.jpg')",
        'header': "url('/images/desktop/image-header.jpg')",
        'photography': "url('/images/desktop/image-photography.jpg')",
        'stand-out': "url('/images/desktop/image-stand-out.jpg')",
        'transform': "url('/images/desktop/image-transform.jpg')",
      },
      colors: {
        'Soft-red': 'hsl(7, 99%, 70%)',
        'Yellow': 'hsl(51, 100%, 49%)',
        'White': 'hsl(0, 0%, 100%)',
        'Dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
        'Dark-blue': 'hsl(198, 62%, 26%)',
        'Dark-moderate-cyan': 'hsl(168, 34%, 58%)',
        'Very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'Very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'Dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'Grayish-blue': 'hsl(210, 4%, 67%)',
        'neutral-white':'hsl(0, 0%, 100%)',
        'neutral-blue': '#75d5ff'
        
      },
      fontFamily: {
        Barlow: ['Barlow', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

