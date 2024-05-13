import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: '',  //
    default: 'Next.js', // Default title for all pages
    template: '%s | Next.js', // Template title for all pages
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
