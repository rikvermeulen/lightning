/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  tailwindConfig: './tailwind.config.ts',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '',
    '^@/env(.*)$',
    '^@/app/(.*)$',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  pluginSearchDirs: false,
};

module.exports = config;
