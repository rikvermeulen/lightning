import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for robots.txt
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata
 * @returns {MetadataRoute.Manifest}
 */

export default function manifest(): MetadataRoute.Manifest {
  const host = env.NEXT_PUBLIC_APP_URL;

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
        src: `${host}/favicons/icon-32x32.png`,
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
