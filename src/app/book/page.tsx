'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { NewsletterCta } from '@/components/brand/sections/NewsletterCta'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Book() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC BOOK HERO */}
      <section className="relative w-full min-h-screen bg-brand-white flex items-center pt-32 pb-24 overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Left: Product Reveal */}
            <motion.div 
              variants={m.stagger} 
              initial="hidden" 
              animate="visible"
              className="relative aspect-[3/4] w-full max-w-[500px] mx-auto lg:mx-0 shadow-2xl overflow-hidden bg-brand-black"
            >
               {/* 
                 Since we don't have a specific book cover JPEG, 
                 we create a cinematic placeholder branding.
               */}
               <div className="absolute inset-0 bg-brand-black flex flex-col items-center justify-center p-12 text-center">
                  <span className="font-sans text-label text-brand-gold uppercase tracking-[0.3em] mb-12">Coming Soon</span>
                  <h2 className="font-display text-[64px] leading-tight text-brand-white mb-4">The Art of Grace.</h2>
                  <p className="font-sans text-body text-brand-muted/60 max-w-[280px]">Navigating Power and Purpose in the African Region.</p>
                  <div className="mt-auto">
                    <span className="font-display text-display-sm text-brand-white italic underline underline-offset-8 decoration-brand-gold/30">Jokate Mwegelo.</span>
                  </div>
               </div>
               
               {/* Pre-empting real image: <Image src="/images/book-cover.png" alt="The Art of Grace" fill className="object-cover" /> */}
            </motion.div>

            {/* Right: Pitch & Actions */}
            <motion.div variants={m.stagger} initial="hidden" animate="visible" className="flex flex-col">
              <motion.span variants={m.fadeUp} className="text-brand-gold font-sans text-label uppercase tracking-widest mb-6 block">
                 Executive Publication
              </motion.span>
              <motion.h1 variants={m.fadeUp} className="text-display-xl font-display text-brand-black leading-[1.0] mb-8">
                 Leadership as an Act of Grace.
              </motion.h1>
              <motion.div variants={m.fadeUp} className="space-y-6 mb-12">
                 <p className="text-body-lg font-sans text-brand-black opacity-90 leading-relaxed">
                   In her debut publication, Jokate Mwegelo dissects the architecture of power in Tanzania and across East Africa. This is not a memoir — it is a manual for the next generation of women in governance.
                 </p>
                 <p className="text-body font-sans text-brand-muted leading-relaxed">
                   From the boardrooms of Dar es Salaam to the district administration of Kisarawe, Jokate reveals why structural efficiency must be paired with emotional resonance to build movements that last.
                 </p>
              </motion.div>

              <motion.div variants={m.fadeUp} className="flex flex-wrap gap-4 mb-8">
                 <button className="bg-brand-black text-brand-white px-10 py-5 text-[12px] uppercase tracking-[0.15em] font-sans hover:bg-brand-plum transition-all duration-500 shadow-xl">
                   Pre-order Now
                 </button>
                 <button className="border border-brand-black text-brand-black px-10 py-5 text-[12px] uppercase tracking-[0.15em] font-sans hover:bg-brand-surface transition-all duration-500">
                   Read Preview
                 </button>
              </motion.div>
              
              <motion.p variants={m.fadeUp} className="text-[11px] font-sans text-brand-muted uppercase tracking-widest italic opacity-60">
                Available in Paperback, Hardcover, and Digital formats. Summer 2026.
              </motion.p>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. THE "WHY" SECTION */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            {[
              { title: 'The Mandate', desc: 'Understanding the weight of public responsibility and how to carry it without losing your identity.' },
              { title: 'The Strategy', desc: 'Practical frameworks for resource mobilization and community activation in rural districts.' },
              { title: 'The Legacy', desc: 'How to build systems that outlive your term, ensuring sustainable growth for women and girls.' },
            ].map((col, i) => (
              <motion.div key={i} variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col border-l border-brand-gold pl-8">
                 <h3 className="font-display text-display-sm text-brand-black mb-4">{col.title}</h3>
                 <p className="font-sans text-body text-brand-muted leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
         </div>
      </SectionWrapper>

      {/* 3. COMMUNITY CTA (PINK CIRCLE) */}
      <NewsletterCta />

    </PageTransition>
  )
}
