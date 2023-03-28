<h1 align="center">Lightning</h1>

<p align="center">
  Boilerplate and building blocks for your Next project
</p>
<p align="center">
  Get started with lightning by running <code>npm create lightning-app@latest</code>
</p>

![header](./.github/header.png)

<p align="center">
  <a href="https://github.com/rikvermeulen/lightning">
    <img src="https://img.shields.io/github/stars/rikvermeulen/lightning?label=rikvermeulen%2Flightning" alt="Lightning repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

## 👋 Introduction

Lightning is an opinionated collection of packages, utilities and a set of rules for your Next.js 13.2 project.

### Requirements

- Node.js 18+ and npm

## 🎁 Features

- [Next.js](https://nextjs.org) 13.2
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Strict Mode for TypeScript and React 18
- Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Unit Testing with Vitest and React Testing Library
- Run tests on pull request with GitHub Actions
- Absolute Imports using `@` prefix
- VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- Expansion Pack — Easily install common libraries, additional components, and configs

## 👨🏻‍💻 Getting started

**Recommended installation**<br> 
To create an app using `lighting`, run any of the following three commands and answer the command prompt questions:

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

Then, you can run locally in development mode:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── __tests__                       # Mocks for testing
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── src                             
│   ├── app                         # App base
│   │   ├── api                     # Api router
│   ├── components                  # Default components
│   ├── config                      # Config folder
│   ├── styles                      # Styles folder
├── public                          # Public assets folder
│   ├── favicons                    # Favicons folder
├── tailwind.config.js              # Tailwind CSS configuration
├── next.config.js                  # Next configuration
├── vitest.config.ts                # Vitest configuration
├── README.md                       # README file
├── .eslintrc.json                  # Eslint config
└── tsconfig.json                   # TypeScript configuration

```

## 🚀 Deploy

Deploy Lightning on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frikvermeulen%2Flightning)

## 📅 Roadmap

- [x] Add PWA
- [x] Add test
- [ ] NPM integration with 'npm create lightning-app' 

## 🗂 VSCode information (optional)

For VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

## 🤝 Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-awesome-contribution`;
3. Commit your changes: `git commit -m 'feat: Add some awesome contribution'`;
4. Push to the branch: `git push origin my-awesome-contribution`.

## 📋 License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

## 👤 Author

- Rik Vermeulen ([@rikvermeulen_](https://twitter.com/rikvermeulen_))
