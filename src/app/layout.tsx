import '@/styles/global.css';
import type { Metadata } from 'next';

import type { RootLayoutProps } from '@/types/index';

import { fontSans } from '@/lib/fonts';
import Header from '@/components/Header';
import meta from '@/app/meta';

/**
 * generateMetadata is a function that returns a promise of Metadata.
 * @see https://beta.nextjs.org/docs/guides/seo#dynamic-metadata
 * @returns {Promise<Metadata>}
 */

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await meta();
  return metadata;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${fontSans.variable}`}>
      <body>
        <div className="fixed -z-0 h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Header />
        {children}
      </body>
    </html>
  );
}
