![header](./public/images/og.png)

<h1 align="center">Lightning</h1>

<p align="center">
  Boilerplate and building blocks for your Next project
</p>

<p align="center">
  Get started with lightning by running <code>npm create lightning-app@latest</code>
</p>

<p align="center">
  <a href="#-introduction"><strong>Introduction</strong></a> ·
  <a href="#-features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#-deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#-author"><strong>Author</strong></a>
</p>

## 👋 Introduction

Lightning is an opinionated collection of packages, utilities and a set of rules for your Next.js 13.4 project.

### Requirements

- Node.js 18+ and npm

## 🎁 Features

- [Next.js](https://nextjs.org) 13.4
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Run tests on pull request with GitHub Actions
- Absolute Imports using `@` prefix
- VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- Fonts with Next/font for optimizing custom fonts and remove external network requests

### 📦 Expansion Pack

Easily install common libraries, additional components, and configs with `create lightning-app@latest` command.

- Unit Testing with [Vitest]() and React Testing Library
- PWA with Workbox and Next-PWA plugin
- Handle user authentication with [Auth.js]() with providers like Google, Twitter, GitHub.

## 👨🏻‍💻 Getting started

**Recommended installation**<br>
To create an app using `lightning`, run any of the following three commands and answer the command prompt questions:

### npm

```bash
npm create lightning-app@latest
```

### yarn

```bash
yarn create lightning-app
```

### pnpm

```bash
pnpm create lightning-app@latest
```

\
**Default installation**
<br/>
Or run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/rikvermeulen/lightning.git project-name
cd project-name
npm install
```

Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

Then, you can run locally in development mode:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── src                             # Project folder
│   ├── app                         # App base
│   │   ├── api                     # Api router
│   ├── components                  # Default components
│   ├── lib                         # Lib folder
│   ├── styles                      # Styles folder
│   ├── types                       # Types folder
│   ├── env.mjs                      # type-safe env
│   ├── middleware.ts               # Middleware file
├── public                          # Public assets folder
│   ├── favicons                    # Favicons folder
├── tailwind.config.cjs             # Tailwind CSS configuration
├── next.config.mjs                 # Next configuration
├── tailwind.config.cjs             # Tailwind CSS configuration
├── prettierrc.cjs                  # Prettier configuration
├── README.md                       # README file
├── .eslintrc.cjs                   # Eslint config
└── tsconfig.json                   # TypeScript configuration

```

## 🚀 Deploy

Deploy Lightning on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frikvermeulen%2Flightning)

## 🗂 VSCode information (optional)

For VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-awesome-contribution`;
3. Commit your changes: `git commit -m 'feat: Add some awesome contribution'`;
4. Push to the branch: `git push origin my-awesome-contribution`.

## 📋 License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

## 👤 Author

- Rik Vermeulen ([@rikvermeulen\_](https://twitter.com/rikvermeulen_))
