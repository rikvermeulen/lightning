<h1 align="center">Lightning</h1>

<p align="center">
  Boilerplate and building blocks for your Next project
</p>
<p align="center">
  Get started with lightning by running <code>npm create lightning-app@latest</code>
</p>

<p align="center">
  <a href="https://twitter.com/rikvermeulen_">
    <img src="https://img.shields.io/twitter/follow/rikvermeulen_?style=flat&label=rikvermeulen_&logo=twitter&color=0bf&logoColor=fff" alt="Rik Vermeulen Twitter follower count" />
  </a>
  <a href="https://github.com/rikvermeulen/lightning">
    <img src="https://img.shields.io/github/stars/rikvermeulen/lightning?label=rikvermeulen%2Flightning" alt="Lightning repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ยท
  <a href="#deploy"><strong>One-click Deploy</strong></a> ยท
  <a href="#features"><strong>Tech Stack + Features</strong></a> ยท
  <a href="#author"><strong>Author</strong></a>
</p>

## Introduction

Lightning is an opinionated collection of packages, utilities and a set of rules for your Next.js 13.2 project.

## Requirements

- Node.js 18+ and npm

## Features

- โก [Next.js](https://nextjs.org) 13.2
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- ๐ Integrate with [Tailwind CSS](https://tailwindcss.com)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ฆบ Unit Testing with Vitest and React Testing Library
- ๐ท Run tests on pull request with GitHub Actions
- ๐ก Absolute Imports using `@` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

## Getting started

**Recommended installation**<br> 
To create an app using `lighting`, run any of the following three commands and answer the command prompt questions:

### npm

```bash
npm create lighting-app@latest
```

### yarn

```bash
yarn create lighting-app
```

### pnpm

```bash
pnpm create lighting-app@latest
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
โโโ __tests__                       # Mocks for testing
โโโ .husky                          # Husky configuration
โโโ .vscode                         # VSCode configuration
โโโ src                             
โ   โโโ app                         # App base
โ   โ   โโโ components              # Default components
โ   โ   โโโ api                         # Next JS api 
โ   โ   โโโ styles                      # Styles folder
โโโ public                          # Public assets folder
โ   โโโ favicons                    # Favicons folder
โโโ tailwind.config.js              # Tailwind CSS configuration
โโโ next.config.js                  # Next configuration
โโโ vitest.config.ts                # Vitest configuration
โโโ README.md                       # README file
โโโ .eslintrc.json                  # Eslint config
โโโ tsconfig.json                   # TypeScript configuration

```

## Deploy

### Deploy to Vercel

Deploy Lightning on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frikvermeulen%2Flightning)

## Roadmap

- [x] Add PWA
- [x] Add test
- [ ] NPM integration with 'npm create lightning-app' 

### VSCode information (optional)

For VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

## License

Licensed under the MIT License, Copyright ยฉ 2022

See [LICENSE](LICENSE) for more information.

## Author

- Rik Vermeulen ([@rikvermeulen_](https://twitter.com/rikvermeulen_))
