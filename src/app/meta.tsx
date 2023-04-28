import type { Metadata } from 'next';

/**
 * Template metadata for app links
 * @see https://beta.nextjs.org/docs/api-reference/metadata
 * @returns {Metadata}
 */

export default function meta(): Metadata {
  const host = process.env.NEXT_PUBLIC_APP_URL as string;

  // Template metadata for app links
  const appLinks = {
    ios: {
      url: '/link/to/ios/app',
      app_store_id: 'app_store_id',
    },
    android: {
      package: '/link/to/android/app',
      app_name: 'app_name_android',
    },
    web: {
      url: '/link/to/web/app',
      should_fallback: true,
    },
  };

  // Template metadata for language alternates
  const alternates = {
    metadataBase: new URL(host),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE',
      },
    },
    media: {
      'only screen and (max-width: 600px)': 'https://lightning-teal.vercel.app/',
    },
  };

  // Template metadata for apple web apps
  const appleWebApp = {
    title: 'Lightning',
    startupImage: [
      '/',
      {
        url: '/',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  };

  // Template metadata for open graph
  const openGraph = {
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
    url: 'https://lightning-teal.vercel.app/',
    siteName: 'Lightning',
    images: [
      {
        url: `${host}/og.png`,
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

  // Template metadata for all icons
  const icons = {
    icon: [
      {
        url: 'favicons/icon-32x32.png',
      },
    ],
    shortcut: ['favicons/icon-32x32.png'],
    apple: [
      {
        url: 'favicons/icon-60x60.png',
      },
      {
        url: 'favicons/icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: 'favicons/icon-512x512.png',
      },
    ],
  };

  // Template metadata for Twitter
  const twitter = {
    card: 'summary_large_image',
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
    siteId: '123456789',
    creator: '@rikvermeulen_',
    creatorId: '123456789',
    images: [`${host}/og.png`],
  };

  return {
    generator: 'Next.js',
    applicationName: 'Lightning',
    title: 'Lightning',
    description: 'Lightning boilerplate for nextjs',
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
    icons,
    twitter,
    appleWebApp,
    alternates,
    appLinks,
  };
}
