import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: siteConfig.published ? { userAgent: '*', allow: '/' } : { userAgent: '*', disallow: '/' },
    ...(siteConfig.published ? { sitemap: `${siteConfig.url}/sitemap.xml` } : {})
  };
}
