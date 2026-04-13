'use client'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Leadership', href: '/leadership' },
  { name: 'Impact', href: '/impact' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'Media', href: '/media' },
  { name: 'Book', href: '/book' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'rgba(248,247,244,0)', backdropFilter: 'blur(0px)' }}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(248,247,244,0.92)' : 'rgba(248,247,244,0)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid var(--color-brand-border)' : '1px solid transparent'
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 transition-colors"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12 h-24 flex items-center justify-between">
          <Link href="/" className="font-display text-[15px] tracking-[0.06em] text-brand-black flex-shrink-0 relative z-50">
            JOKATE MWEGELO.
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-brand-black text-[12px] uppercase tracking-[0.1em] hover:text-brand-gold transition-colors font-sans relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="font-sans text-label tracking-widest uppercase border-l border-brand-gold pl-6 ml-6 hover:text-brand-gold transition-colors duration-300 flex items-center text-brand-black"
            >
              Menu
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={[{name: 'Home', href: '/'}, ...navLinks]} />
    </>
  )
}
