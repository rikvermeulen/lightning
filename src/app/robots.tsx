import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for robots.txt
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 * @returns {MetadataRoute.Robots}
 */

export default function robots(): MetadataRoute.Robots {
  const host = env.NEXT_PUBLIC_APP_URL as string;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      crawlDelay: 2,
    },
    sitemap: `${host}/sitemap.xml`,
    host: host,
  };
}
