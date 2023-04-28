import type { MetadataRoute } from 'next';

/**
 * Template metadata for robots.txt
 * @see https://beta.nextjs.org/docs/api-reference/metadata#robots-file
 * @returns {MetadataRoute.Robots}
 */

export default function robots(): MetadataRoute.Robots {
  const host = process.env.NEXT_PUBLIC_APP_URL as string;

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
