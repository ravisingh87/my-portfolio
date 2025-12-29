import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Blocks search engines from private or API routes
    },
    sitemap: 'https://your-portfolio-link.com/sitemap.xml',
  };
}