/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#d5d5d5",
        "primary-200": "#212529",
        "primary-300": "#333",
        "primary-400": "#f2f2f2",
        "secondary-100": "#a18a4d",
      },
    },
  },
  plugins: [],
};
