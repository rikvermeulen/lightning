import type { MetadataRoute } from 'next';

import { env } from '@/env.mjs';

/**
 * Template metadata for app links
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
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
