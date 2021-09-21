module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        secondary: '#3B82F6',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
