import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap() {
  if (!siteConfig.published) return [];
  return [{ url: siteConfig.url, changeFrequency: 'monthly', priority: 1 }];
}
