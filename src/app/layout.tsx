import '@/styles/global.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';

import meta from './meta';

/**
 * @next/font will optimize your fonts and remove external network requests
 * @see https://beta.nextjs.org/docs/optimizing/fonts
 */

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

/**
 * generateMetadata is a function that returns a promise of Metadata.
 * @see https://beta.nextjs.org/docs/guides/seo#dynamic-metadata
 * @returns {Promise<Metadata>}
 */

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await meta();
  return metadata;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <div className="fixed -z-0 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Header />
        {children}
      </body>
    </html>
  );
}
