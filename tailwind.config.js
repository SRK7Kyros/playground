/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
