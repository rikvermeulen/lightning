import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = process.env.SITE_URL as string;

  return [
    {
      url: host,
      lastModified: new Date(),
    },
  ];
}
