<h1 align="center">Lightning</h1>

<p align="center">
  Boilerplate and building blocks for your Next project
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
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#deploy"><strong>One-click Deploy</strong></a> ·
  <a href="#features"><strong>Tech Stack + Features</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>

## Introduction

Lightning is an opinionated collection of packages, utilities and a set of rules for your Next.js 13+ project.

## Requirements

- Node.js 16+ and npm

## Features

- ⚡ [Next.js](https://nextjs.org) 13+
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Vitest and React Testing Library
- 👷 Run tests on pull request with GitHub Actions
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

## Getting started

Run the following command on your local environment:

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
├── .github                         # GitHub folder
│   ├── workflow                    # GitHub actions folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── src                             
│   ├── app                         # App base
│   │   ├── components              # Default components
│   ├── pages                           # Next JS Pages
│   │   ├── api                         # Next JS api 
├── public                          # Public assets folder
│   ├── images                      # Image/Icon/Favicon folder
│   ├── styles                      # Styles folder
├── tailwind.config.js              # Tailwind CSS configuration
├── next.config.js                  # Next configuration
├── README.md                       # README file
└── tsconfig.json                   # TypeScript configuration
```
## Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

## Deploy

### Deploy to Vercel

Deploy Lightning on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frikvermeulen%2Flightning)
### Docker

Build lightning with Docker

## Roadmap

- [x] Add PWA
- [ ] Add tests
- [ ] Add [optional] custom server
- [ ] Add logger module
- [ ] Add redirect module

### VSCode information (optional)

For VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

## License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

## Author

- Rik Vermeulen ([@rikvermeulen_](https://twitter.com/rikvermeulen_))

