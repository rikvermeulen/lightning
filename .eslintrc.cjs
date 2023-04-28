/** @type {import("eslint").Linter.Config} */

const config = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['@typescript-eslint', 'tailwindcss'],
  ignorePatterns: ['out/*', 'node_modules/*', 'tailwind.config.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@next/next/no-html-link-for-pages': ['off'],
      },
      settings: {},
    },
  ],
};

module.exports = config;
