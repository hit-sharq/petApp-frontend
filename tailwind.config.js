/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "var(--dark-grey)",
        greyish: "var(--greyish)",
        "variable-collection-light-green":
          "var(--variable-collection-light-green)",
        "variable-collection-primary-color":
          "var(--variable-collection-primary-color)",
      },
    },
  },
  plugins: [],
};