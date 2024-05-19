import { Rubik, Roboto } from 'next/font/google'

export const rubik = Rubik ({
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700', '900'],
  variable: '--font-roboto',
})