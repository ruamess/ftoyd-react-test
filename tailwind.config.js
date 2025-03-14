/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-bg": "#090909",
        "rose": "#EB0237",
        "lime": "#43AD28",
        "flame-orange": "#EB6402",

        "refresh-button-hover": "#A01131",
        "refresh-button-inactive": "#701328",

        "ui-item": "#0B0E12",
        "card-item": "#101318",

        "dropdown-hover": "#0F1318",
        "dropdown-acive-border": "#171D25",
      },
    },
  },
  plugins: [],
}
