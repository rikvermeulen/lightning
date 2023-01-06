# Lightning
## boilerplate and starter based on NextJS 13+

An open source boilerplate built using the new router, server components and everything new in NextJS 13+.

> **Warning**
> This app is a work in progress. I'm building this in public.
> See the roadmap below.

### Features

- ⚡ [Next.js](https://nextjs.org) 13+
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 👷 Run tests on pull request with GitHub Actions
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

## Roadmap

- [ ] Add tests
- [ ] Add PWA

### Requirements

- Node.js 18+ and npm

### Getting started

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
├── README.md                       # README file
├── __tests__                       # Mocks for testing
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
│   ├── styles                      # Styles folder
├── app
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── templates                   # Default template
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

...

### VSCode information (optional)

For VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

## Deploy

...
