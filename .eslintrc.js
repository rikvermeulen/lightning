module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    '@typescript-eslint', 
    'unused-imports', 
    'tailwindcss', 
    'simple-import-sort', 
    'prettier',
  ],
  ignorePatterns: [
   'out/*', 
  'node_modules/*',
  '.eslintrc.js',
  'next.config.js',
  'next-sitemap.config.js',
  'lint-staged.config.js',
  '.prettierrc.cjs'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto"
      }
    ],
    '@next/next/no-html-link-for-pages': ['off']
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
};
