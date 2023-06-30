const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {},
    colors: {
      blue: colors.blue,
      'grey-light': '#F5F5F5',
      'grey-dark': '#DFD7BF',
      'brown-light': '#F2EAD3',
      'brown-dark': '#3F2305'
    }
  },
  plugins: [],
}

