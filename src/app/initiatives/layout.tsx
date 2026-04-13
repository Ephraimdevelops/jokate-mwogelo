import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmes & Initiatives',
  description: "From Kisarawe to the UN — the measurable record of Jokate Mwegelo's governance, advocacy, and programmes for women and girls in Africa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
