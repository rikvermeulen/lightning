import '@/styles/global.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';

import meta from './meta';

/**
 * @next/font will automatically optimize your fonts (including custom fonts) and remove 
   external network requests for improved privacy and performance.
 * @see https://beta.nextjs.org/docs/optimizing/fonts
 */

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await meta();
  return metadata;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
