import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Book Jokate Mwegelo for speaking engagements, media interviews, or partnership opportunities. Tanzania's leading voice for women in governance.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
