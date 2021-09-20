module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#34D399',
        secondary: '#F87171',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
