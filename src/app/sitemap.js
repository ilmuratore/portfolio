import { siteConfig } from '@/config/site';
import { projects } from '@/content/projects.mjs';

export const dynamic = 'force-static';

export default function sitemap() {
  if (!siteConfig.published) return [];

  return [
    { url: `${siteConfig.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteConfig.url}/projects/`, changeFrequency: 'monthly', priority: 0.9 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}/`,
      changeFrequency: 'monthly',
      priority: 0.75
    })),
    { url: `${siteConfig.url}/about/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/contact/`, changeFrequency: 'monthly', priority: 0.6 }
  ];
}
