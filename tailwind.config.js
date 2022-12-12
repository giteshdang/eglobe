const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
          colors: {
              'eglobe-red': '#A4123F',
              'eglobe-yellow':'#F3C700'
          },
          spacing:{
            ...defaultTheme.spacing,
            '400':'400px',
            '420':'420px',
            '500':'500px'
          }
      },
    },
    plugins: [
      require('daisyui'),
    ],
  }