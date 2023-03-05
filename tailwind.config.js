/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#194DF5",
          50: "#C9D5FD",
          100: "#B5C6FC",
          200: "#8EA8FA",
          300: "#678AF8",
          400: "#406BF7",
          500: "#194DF5",
          600: "#0937CD",
          700: "#072997",
          800: "#041A61",
          900: "#020C2C",
        },
        black: "#080808",
      },
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
  corePlugins: {
    preflight: false,
  },
};
