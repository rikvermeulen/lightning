import { JetBrains_Mono as mono, Inter as sans } from 'next/font/google';

/**
 * @next/font will optimize your fonts and remove external network requests
 * @see https://beta.nextjs.org/docs/optimizing/fonts
 */

export const fontMono = mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const fontSans = sans({
  subsets: ['latin'],
  variable: '--font-sans',
});
