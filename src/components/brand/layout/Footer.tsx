import Link from 'next/link'
import { Container } from './Container'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Impact', href: '/impact' },
  { name: 'Initiatives', href: '/initiatives' },
]

const navLinks2 = [
  { name: 'Media', href: '/media' },
  { name: 'Book', href: '/book' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-brand-white pt-section pb-8 border-t border-brand-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-section-sm">
          {/* Logo & Tagline */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="font-display text-[15px] tracking-[0.06em] text-brand-black">
               JOKATE MWEGELO.
            </Link>
            <p className="text-brand-muted text-body-sm max-w-[240px]">
              Shaping the next generation of women leaders.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-8">
             <div className="flex flex-col gap-4">
               {navLinks.map(l => (
                 <Link key={l.name} href={l.href} className="text-[12px] uppercase tracking-[0.1em] text-brand-black hover:text-brand-accent transition-colors">{l.name}</Link>
               ))}
             </div>
             <div className="flex flex-col gap-4">
               {navLinks2.map(l => (
                 <Link key={l.name} href={l.href} className="text-[12px] uppercase tracking-[0.1em] text-brand-black hover:text-brand-accent transition-colors">{l.name}</Link>
               ))}
             </div>
          </div>

          {/* The Pink Circle CTA */}
          <div className="col-span-1 flex flex-col gap-6">
            <p className="text-[12px] uppercase tracking-[0.1em] text-brand-black">The Pink Circle</p>
            <div className="flex flex-col gap-4">
              <p className="text-brand-muted text-body-sm">
                Join our exclusive community for ambitious young women.
              </p>
              <Link 
                href="/book" 
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-brand-black hover:text-brand-accent transition-colors"
              >
                Join the Circle 
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-brand-border text-[11px] uppercase tracking-[0.12em] text-brand-muted gap-4">
          <p>© {new Date().getFullYear()} Jokate Mwegelo. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="#" className="hover:text-brand-black transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-brand-black transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
