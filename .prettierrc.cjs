/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  tailwindConfig: './tailwind.config.cjs',
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
};

module.exports = config;
