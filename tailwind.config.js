const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./slices/**/*.{vue,js}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.625rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '2.875rem',
      '6xl': '3.75rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontFamily: {
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
