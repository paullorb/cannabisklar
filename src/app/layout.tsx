import { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import './global.css'
import { rubik, roboto } from './fonts'

import NavPrimary from '../components/NavPrimary'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: '',  //
    default: 'Cannabis in Deutschland', // Default title for all pages
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
    <html className={`${roboto.variable} ${rubik.variable}`}>
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="any" />
        <link rel="apple-icon" href="/apple-icon?<generated>" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon?<generated>" type="image/<generated>" sizes="any" />
      </head>
      <body>
        <NavPrimary />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
