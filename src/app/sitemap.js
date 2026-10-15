import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [{ url: siteConfig.url, changeFrequency: 'monthly', priority: 1 }];
}
