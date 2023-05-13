import type { Metadata } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for app links
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
 * @returns {Metadata}
 */

export default async function meta(): Promise<Metadata> {
  const host = env.NEXT_PUBLIC_APP_URL;

  // Template metadata for open graph
  const openGraph = {
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
    url: 'https://lightning-teal.vercel.app/',
    siteName: 'Lightning',
    images: [
      {
        url: `${host}/images/og.png`,
        width: 1200,
        height: 600,
        alt: 'Lightning',
      },
    ],
    locale: 'en-US',
    type: 'website',
  };

  // Template metadata for robot.txt
  const robots = {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  };

  // Template metadata for Twitter
  const twitter = {
    card: 'summary_large_image',
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
    siteId: '123456789',
    creator: '@username',
    creatorId: '123456789',
    images: [`${host}/images/og.png`],
  };

  // Template metadata for language alternates
  const alternates = {
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'nl-NL': '/-NL',
      },
    },
    media: {
      'only screen and (max-width: 600px)': 'https://lightning-teal.vercel.app/',
    },
  };

  return {
    metadataBase: new URL(host),
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
    generator: 'Next.js',
    applicationName: 'Lightning',
    referrer: 'origin-when-cross-origin',
    keywords: ['Lightning', 'Next.js', 'React', 'JavaScript'],
    authors: [
      {
        name: 'Rik',
        url: 'https://rikvermeulen.com',
      },
    ],
    themeColor: 'black',
    colorScheme: 'dark',
    creator: 'Rik Vermeulen',
    publisher: 'Rik Vermeulen',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    other: {
      custom: 'meta',
    },
    openGraph,
    robots,
    twitter,
    alternates,
  };
}
