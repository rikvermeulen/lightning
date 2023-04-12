const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("tailwindcss").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

module.exports = config;
