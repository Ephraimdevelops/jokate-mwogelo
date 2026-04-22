'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Image from 'next/image'

export function NewsletterCta() {
  return (
    <SectionWrapper bg="black" className="py-0 px-0 max-sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]">
        {/* Left: Image (Human Center) */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <Image 
            src="/images/jokate-brown-suit-full.jpg" 
            alt="Jokate Mwegelo" 
            fill 
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/20 to-transparent" />
        </div>

        {/* Right: Content & Form */}
        <motion.div 
          variants={stagger} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-32 bg-brand-black"
        >
          <motion.span 
            variants={fadeUp} 
            className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block"
          >
            Exclusive Community
          </motion.span>
          <motion.h2 
            variants={fadeUp} 
            className="text-brand-white font-display text-display-lg mb-6 leading-[1.1]"
          >
            Join the Jokate Pink Circle.
          </motion.h2>
          <motion.p 
            variants={fadeUp} 
            className="text-brand-muted font-sans text-body-lg mb-12 max-w-[480px] opacity-80"
          >
            A deliberate space for women and girls building the next version of Africa. More than a newsletter, it is an update hub for leadership, power, and structural change.
          </motion.p>
          
          <motion.div variants={fadeUp} className="w-full max-w-[440px]">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your official email address" 
                  className="w-full bg-transparent border-b border-brand-white/20 text-brand-white placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-accent transition-colors py-4 text-body font-sans"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="group relative w-full bg-brand-white text-brand-black hover:bg-brand-accent hover:text-brand-white transition-all duration-500 py-5 font-sans uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-2"
              >
                Become a Member
                <span className="text-[16px] leading-[0] transition-transform duration-500 group-hover:translate-x-2">→</span>
              </button>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-brand-muted/40 font-sans">
                <span>Direct Access</span>
                <span className="w-1 h-1 bg-brand-accent rounded-full" />
                <span>Mentorship Updates</span>
                <span className="w-1 h-1 bg-brand-accent rounded-full" />
                <span>Zero Spam</span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
