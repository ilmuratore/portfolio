const fallbackUrl = 'https://ilmuratore.github.io/portfolio';

export const siteConfig = {
  name: 'Simone Iengo',
  title: 'Simone Iengo | Software Engineer · AI & Backend',
  description: 'Software Engineer: sviluppo Java enterprise, backend Python, sistemi AI sperimentali, architetture applicative e formazione tecnica.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, ''),
  locale: 'it_IT',
  published: process.env.NEXT_PUBLIC_PORTFOLIO_PUBLISHED === 'true',
  links: {
    github: 'https://github.com/ilmuratore',
    linkedin: 'https://www.linkedin.com/in/simone-iengo-557914109/',
  },
};
