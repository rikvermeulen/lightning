import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for app links
 * @see https://beta.nextjs.org/docs/api-reference/metadata#sitemap
 * @returns {MetadataRoute.Sitemap}
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const host = env.NEXT_PUBLIC_APP_URL as string;

  return [
    {
      url: host,
      lastModified: new Date(),
    },
  ];
}
