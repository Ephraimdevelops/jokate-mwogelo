import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jokate Mwegelo — Politician, Entrepreneur & Public Figure',
  description: "Tanzania's foremost young political leader. Secretary General of UWT & UVCCM. Champion of girls and women across Africa. Jokate Mwegelo.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
