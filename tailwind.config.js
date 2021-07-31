module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        car: "url('./img/car.jpg')",
        moon: "url('./img/moon.jpg')",
        galaxy: "url('./img/galaxy.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
