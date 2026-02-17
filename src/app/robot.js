export default function robots() {
  const baseUrl = 'https://portfolio-psi-tan-23.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}