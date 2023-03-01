import type { Metadata } from 'next';

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
  canonical: 'https://nextjs.org',
  languages: {
    'en-US': 'https://nextjs.org/en-US',
    'de-DE': 'https://nextjs.org/de-DE',
  },
  media: {
    'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
  },
  types: {
    'application/rss+xml': 'https://nextjs.org/rss',
  },
};

// Template metadata for apple web apps
const appleWebApp = {
  title: 'Lightning',
  //   statusBarStyle: 'default',
  startupImage: [
    '/assets/startup/apple-touch-startup-image-768x1004.png',
    {
      url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
      media: '(device-width: 768px) and (device-height: 1024px)',
    },
  ],
};

// Template metadata for itunes
const itunes = { appId: 'myAppStoreID', appArgument: 'myAppArgument' };

// Template metadata for open graph
const openGraph = {
  title: 'Lightning',
  description: 'Lightning boilerplate for nextjs',
  url: 'https://nextjs.org',
  siteName: 'Lightning',
  images: [
    {
      url: 'https://nextjs.org/og.png',
      width: 800,
      height: 600,
      alt: 'Lightning',
    },
    {
      url: 'https://nextjs.org/og.png',
      width: 1800,
      height: 1600,
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
  icon: [{ url: 'favicons/icon-32x32.png' }],
  shortcut: ['favicons/icon-32x32.png'],
  apple: [
    { url: 'favicons/icon-60x60.png' },
    { url: 'favicons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
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
  siteId: '1467726470533754880',
  creator: '@rikvermeulen',
  creatorId: '1467726470533754880',
  images: ['https://nextjs.org/og.png'],
};

// metadata default
export const meta: Metadata = {
  generator: 'Next.js',
  applicationName: 'Lightning',
  title: 'Lightning',
  description: 'Lightning boilerplate for nextjs',
  manifest: 'manifest.json',
  referrer: 'origin-when-cross-origin',
  keywords: ['Lightning', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Rik', url: 'https://rikvermeulen.com' }],
  themeColor: 'black',
  colorScheme: 'dark',
  creator: 'Rik Vermeulen',
  publisher: 'Rik Vermeulen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph,
  robots,
  icons,
  twitter,
  itunes,
  appleWebApp,
  alternates,
  appLinks,
};
