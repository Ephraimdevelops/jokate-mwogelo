import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsletter & Community',
  description: "Join Jokate Mwegelo's newsletter on leadership, womanhood and power. Become part of her growing community of women and girls building Africa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
