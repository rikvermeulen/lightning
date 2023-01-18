import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="mb-24 flex flex-col items-center justify-center">
        <h1 className="mt-24 bg-transparent text-2xl font-semibold md:text-6xl">
          Welcome to <span className="font-bold text-cyan-400">Lightning!</span>
        </h1>
        <h2 className="mt-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Based on Next.js 13+
        </h2>
        <p className="mt-6">
          Get started by editing
          <a href="vscode://lightning" className="ml-2 rounded-md bg-gray-800 p-2">
            src/app/page.tsx
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 px-5 md:flex-row">
        <Link
          className="max-w-xs rounded-md border border-gray-800 bg-gray-800 p-6 px-5 py-3 transition-colors hover:bg-gray-700"
          href="https://beta.nextjs.org/docs"
          target="_blank"
        >
          <h3 className="mb-4 text-xl font-semibold">Documentation</h3>
          <p>Find in-depth information about the Next.js features and api</p>
        </Link>
        <Link
          className="max-w-xs rounded-md border border-gray-800 bg-gray-800 p-6 px-5 py-3 transition-colors hover:bg-gray-700"
          href="https://nextjs.org/learn/basics/create-nextjs-app"
          target="_blank"
        >
          <h3 className="mb-4 text-xl font-semibold">Learn</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Link>
      </div>
    </main>
  );
}
