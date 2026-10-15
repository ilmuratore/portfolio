import './globals.css';
import localFont from 'next/font/local';
import { siteConfig } from '@/config/site';

const geist = localFont({ src: './fonts/GeistVF.woff', display: 'swap', variable: '--font-geist', weight: '100 900' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  robots: siteConfig.published ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
