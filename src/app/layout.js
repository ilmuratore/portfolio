import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({subsets: ['latin'], display: 'swap',})

export const metadata = {
  title: 'Simone Iengo | Full Stack Developer',
  description: 'Portfolio di Simone Iengo, Full Stack Developer specializzato in Java, JavaScript/TypeScript, Angular, React, Node.js e Spring Boot.',
  keywords: ['Full Stack Developer', 'Java Developer', 'React Developer', 'Angular Developer', 'JavaScript', 'TypeScript', 'Node.js', 'Spring Boot', 'Portfolio', 'Napoli'],
  authors: [{ name: 'Simone Iengo' }],
  creator: 'Simone Iengo',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://portfolio-psi-tan-23.vercel.app/', 
    title: 'Simone Iengo | Full Stack Developer',
    description: 'Portfolio di Simone Iengo, Full Stack Developer specializzato in Java, JavaScript, Angular, React e Node.js.',
    siteName: 'Simone Iengo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simone Iengo | Full Stack Developer',
    description: 'Portfolio di Simone Iengo, Full Stack Developer',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
