import type { MetadataRoute } from 'next';

/**
 * Template metadata for app links
 * @see https://beta.nextjs.org/docs/api-reference/metadata#sitemap
 * @returns {MetadataRoute.Sitemap}
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.NEXT_PUBLIC_APP_URL as string;

  return [
    {
      url: host,
      lastModified: new Date(),
    },
  ];
}
