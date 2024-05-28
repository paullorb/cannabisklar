import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

import { rubik, roboto } from './fonts'

import NavPrimary from '../components/NavPrimary'
import Footer from '../components/Footer'
import TopBar from '@/components/TopBar';

import './global.css'

export const metadata: Metadata = {
  title: {
    default: 'Cannabis in Deutschland', 
    template: '%s | Cannabisklar',
  },
  description: 'Cannabis in Deutschland einfach erklärt',
  openGraph: {
    title: 'Cannabis in Deutschland',
    description: 'Cannabis in Deutschland einfach erklärt',
    type: 'website',
    locale: 'de_DE',
    url: process.env.URL,
    siteName: 'Cannabisklar'
  }
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
        <TopBar />
        <NavPrimary />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
