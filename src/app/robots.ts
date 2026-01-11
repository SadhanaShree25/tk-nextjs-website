import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://www.techkoodaram.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/_next/static/media/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
