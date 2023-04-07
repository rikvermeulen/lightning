import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const host = process.env.SITE_URL as string;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${host}/sitemap.xml`,
  };
}
