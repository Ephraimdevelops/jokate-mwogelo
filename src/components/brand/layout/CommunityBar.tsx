import { Container } from './Container'
import Link from 'next/link'

export function CommunityBar() {
  return (
    <section className="bg-brand-black w-full border-t border-brand-gold py-section-sm">
      <Container className="flex flex-col items-center justify-center text-center space-y-8">
        <h2 className="text-brand-white font-display text-display-sm max-w-[600px]">
          Join the community of women and girls building the future.
        </h2>
        <Link 
          href="/book" 
          className="group relative inline-flex items-center text-brand-white font-sans uppercase tracking-[0.12em] text-[12px] border border-brand-white px-8 py-4 overflow-hidden transition-colors hover:text-brand-black"
        >
          <span className="absolute inset-0 w-full h-full bg-brand-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 flex items-center gap-2">
            Subscribe to the Newsletter <span className="text-brand-gold font-sans text-[16px] leading-[0] ml-1">→</span>
          </span>
        </Link>
      </Container>
    </section>
  )
}
