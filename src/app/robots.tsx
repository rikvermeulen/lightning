import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const host = process.env.SITE_URL as string;

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
