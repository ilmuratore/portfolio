const fallbackUrl = 'https://ilmuratore.github.io/portfolio';

export const siteConfig = {
  name: 'Simone Iengo',
  title: 'Simone Iengo | Software Developer · Java, Python & Backend',
  description: 'Sviluppatore software junior con circa tre anni di percorso IT: Java, Spring Boot, Python, docenza e obiettivo AI Engineer.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/+$/, ''),
  locale: 'it_IT',
  published: process.env.NEXT_PUBLIC_PORTFOLIO_PUBLISHED === 'true',
  links: {
    github: 'https://github.com/ilmuratore',
    linkedin: 'https://www.linkedin.com/in/simone-iengo-557914109/',
  },
};
