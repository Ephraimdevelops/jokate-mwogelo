import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner & Support',
  description: "Support a student. Fund a future. Partner with Jokate Mwegelo's programmes for girls and women across Tanzania and East Africa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
