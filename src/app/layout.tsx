import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import './global.css'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: '',  //
    default: 'Cannabis einfach erklärt', // Default title for all pages
    // template: '%s | Next.js', // Template title for all pages
  },
  description: 'Cannabis in Deutschland einfach erklärt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      <body>
        <NavBar />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
