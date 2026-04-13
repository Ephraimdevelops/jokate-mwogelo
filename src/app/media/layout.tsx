import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & Media',
  description: "As seen and heard. View the latest press features, interviews, and award recognitions for Jokate Mwegelo.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
