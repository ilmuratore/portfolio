const fallbackUrl = 'https://ilmuratore.github.io/portfolio';

export const siteConfig = {
  name: 'Simone Iengo',
  title: 'Simone Iengo | Full Stack Developer',
  description: 'Portfolio di Simone Iengo: sviluppo software full stack, architetture applicative, progetti web e sperimentazione tecnologica.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, ''),
  locale: 'it_IT',
  published: process.env.NEXT_PUBLIC_PORTFOLIO_PUBLISHED === 'true',
  links: {
    github: 'https://github.com/ilmuratore',
    linkedin: 'https://www.linkedin.com/in/simone-iengo-557914109/',
  },
};
