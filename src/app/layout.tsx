import '../styles/global.css';

import { Inter } from '@next/font/google';

import Header from './components/Header';

/*
    @next/font will automatically optimize your fonts (including custom fonts) and remove 
    external network requests for improved privacy and performance.
    Find out more at https://beta.nextjs.org/docs/optimizing/fonts
 */

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
