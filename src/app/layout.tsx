import '@/styles/global.css';
import type { Metadata } from 'next';

import type { RootLayoutProps } from '@/types/index';

import { fontSans } from '@/lib/fonts';
import meta from '@/lib/meta';
import Header from '@/components/Header';

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
