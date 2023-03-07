/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  tailwindConfig: './tailwind.config.js',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
};

module.exports = config;
