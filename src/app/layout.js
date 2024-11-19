import './globals.css'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simone Iengo Portfolio',
  description: 'Simone Iengo Portfolio',
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
