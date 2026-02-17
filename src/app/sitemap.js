export default function sitemap() {
  const baseUrl = 'https://portfolio-psi-tan-23.vercel.app'; 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}