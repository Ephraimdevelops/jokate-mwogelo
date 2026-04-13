import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Record',
  description: "Three mandates, one mission. Explore Jokate Mwegelo's full record as Secretary General and District Commissioner across Tanzania.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
