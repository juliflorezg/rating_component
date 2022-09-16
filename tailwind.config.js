/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#fb7413',
        'light-grey': '#959eac',
        'medium-grey': '#2a384c',
        'dark-blue': '#252d37',
        'very-dark-blue': '#121417',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        15: ['15px', '15px'],
        16: ['16px', '16px'],
        '2-5xl' : ['1.75rem', '1.75rem']
      },
    },
  },

  plugins: [],
}
