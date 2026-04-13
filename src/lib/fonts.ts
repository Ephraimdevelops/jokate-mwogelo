import { Marcellus, DM_Sans } from 'next/font/google'

export const marcellus = Marcellus({
  weight:  ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
})

export const dmSans = DM_Sans({
  weight:  ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: false,
})
