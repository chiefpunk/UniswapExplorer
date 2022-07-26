module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': '1644px',
      xl: '970px',
      lg: '680px',
    },
    colors: {
      blue: {
        primary: '#336399',
        secondary: '#5783bc',
        100: '#86b9ff',
      },
      white: {
        100: '#f2f3f5',
        400: '#fff',
      },
      gray: {
        100: '#828c99',
        200: '#353e48',
        300: '#2f3740',
        400: '#000',
        500: '#404b57',
      },
      black: {
        400: '#000',
      },
      pink: {
        primary: '#ff64a4',
      },
      red: {
        primary: '#ff0000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
