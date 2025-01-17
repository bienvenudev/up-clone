/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#d5d5d5",
        "primary-300": "#333",
        "secondary-100": "#a18a4d",
      },
    },
  },
  plugins: [],
};
