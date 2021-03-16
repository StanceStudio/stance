const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./slices/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['"heldane"', "sans-serif"],
      body: ['"Manrope"', "sans-serif"],
      serif: ['"heldane"', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      violet: "#c9c1e0",
      magenta : {
        light: '#f8e3ff',
        DEFAULT: "#cd3df6",
        dark: '#d8d2e9'
      },
      black: "#292929"
    },
    extend: {
      transitionDelay: {
        "0": "0ms",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
