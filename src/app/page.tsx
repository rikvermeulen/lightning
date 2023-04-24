import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Lightning',
};

export default function Home() {
  return (
    <main>
      <section className="relative py-24">
        <div className="mx-auto max-w-xl flex-col px-5 xl:px-0">
          <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]">
            Boilerplate for your Next project
          </h1>
          <h2 className="mt-6 text-center text-gray-500 md:text-xl">
            Lightning is an opinionated collection of packages, utilities and a set of rules for
            your Next.js 13+ project.
          </h2>
          <p className="mt-6 text-center text-sm text-gray-500">
            Get started by editing
            <a
              href="vscode://lightning"
              className="ml-2 rounded-md bg-gray-200 p-2 text-black opacity-60"
            >
              src/app/page.tsx
            </a>
          </p>
        </div>
        <div className="mx-auto mt-6 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black"
            href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Frikvermeulen%2Flightning"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors duration-300 hover:border-gray-800"
            href="https://github.com/rikvermeulen/lightning"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className=""
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <p>Star on GitHub</p>
          </a>
        </div>
      </section>
      <section>
        <div className="mx-auto my-10 grid w-full max-w-screen-md animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0 ">
          <a
            className="relative col-span-1 h-44 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-colors duration-300 hover:border-gray-800"
            href="https://beta.nextjs.org/docs"
            target="_blank"
          >
            <h3 className="mb-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:font-normal">
              Documentation
            </h3>
            <p className="leading-normal text-gray-500">
              Find in-depth information about the Next.js features and api
            </p>
          </a>
          <a
            className="relative col-span-1 h-44 overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-colors duration-300 hover:border-gray-800"
            href="https://www.nextjs.org/learn/basics/create-nextjs-app/"
            target="_blank"
          >
            <h3 className="mb-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:font-normal">
              Learn
            </h3>
            <p className="leading-normal text-gray-500">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
