import { MetadataRoute } from 'next';

/**
 * Template metadata for robots.txt
 * @see https://beta.nextjs.org/docs/api-reference/metadata
 */

export default function robots(): MetadataRoute.Manifest {
  const host = process.env.SITE_URL as string;

  return {
    name: 'lightning',
    short_name: 'lightning',
    description: 'Boilerplate and building blocks for your Next project',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    categories: ['education', 'personalization', 'productivity', 'utilities'],
    icons: [
      {
        src: `${host}/favicons/favicon.ico`,
        sizes: '32x32',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
      {
        src: `${host}/favicons/icon-192x192.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
