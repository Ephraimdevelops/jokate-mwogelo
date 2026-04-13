'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Partner() {
  return (
    <PageTransition>
      {/* 1. THE HUMAN CENTER (HERO) */}
      <section className="relative w-full min-h-screen bg-brand-white flex items-center pt-32 pb-24 overflow-hidden border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* Right-aligned text in a Left-aligned context */}
            <motion.div variants={m.stagger} initial="hidden" animate="visible" className="flex flex-col z-10">
              <motion.span variants={m.fadeUp} className="text-brand-gold font-sans text-label uppercase tracking-widest mb-6 block">
                 Strategic Alliances
              </motion.span>
              <motion.h1 variants={m.fadeUp} className="text-display-xl font-display text-brand-black leading-[1.0] mb-8">
                 Power is meant to be Shared.
              </motion.h1>
              <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-black opacity-80 leading-relaxed mb-10 max-w-[540px]">
                Jokate Mwegelo partners with institutions that understand the structural necessity of investing in the African girl child. We don&apos;t just fund programs; we build leaders who will eventually lead those very institutions.
              </motion.p>
              
              <motion.div variants={m.fadeUp} className="flex flex-wrap gap-4">
                 <Link href="/contact" className="bg-brand-black text-brand-white px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-gold transition-all duration-500 shadow-xl group">
                   Partner With Us
                   <span className="text-brand-gold ml-2 transition-transform duration-500 group-hover:translate-x-2 inline-block">→</span>
                 </Link>
              </motion.div>
            </motion.div>

            {/* Cinematic Human Presence */}
            <motion.div 
               variants={m.fadeUp} 
               initial="hidden" 
               animate="visible"
               className="relative aspect-[4/5] w-full max-w-[600px] bg-brand-black overflow-hidden shadow-2xl"
            >
               <Image 
                 src="/images/jokate-black-suit.png" 
                 alt="Jokate Mwegelo" 
                 fill 
                 className="object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 2. THE VISUAL STORYTELLING (INITIATIVES) */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48">
         <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-32">
            <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden bg-brand-black">
               <Image 
                 src="/images/jokate-rally.jpg" 
                 alt="Jokate in the community" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-brand-black/20" />
            </div>
            
            <motion.div 
               variants={m.fadeUp} 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true }}
               className="w-full lg:w-1/2"
            >
               <h2 className="font-display text-display-lg text-brand-black mb-8 leading-tight">Beyond Corporate Social Responsibility.</h2>
               <p className="font-sans text-body-lg text-brand-muted leading-relaxed mb-8">
                 Partnership with Jokate&apos;s initiatives—from the Inter-school Bonanza to the Liberation Youth summits—isn&apos;t a logo placement. It&apos;s a commitment to structural excellence.
               </p>
               <ul className="space-y-6">
                 {[
                   { label: 'Audience Insight', text: 'Access to high-engagement demographics across Tanzania and East Africa.' },
                   { label: 'Structural Impact', text: 'Measurable indices on education, reproductive health, and leadership pipeline growth.' },
                   { label: 'Brand Resonance', text: 'Alignment with Africa&apos;s most influential young female voice in governance.' },
                 ].map((item, i) => (
                    <li key={i} className="flex gap-4 border-l border-brand-gold pl-6">
                       <div>
                         <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gold block mb-1">{item.label}</span>
                         <span className="text-body font-sans text-brand-black opacity-80">{item.text}</span>
                       </div>
                    </li>
                 ))}
               </ul>
            </motion.div>
         </div>

         {/* 3. FINAL CONVERSION & HUMAN NOTE */}
         <div className="bg-brand-black p-12 lg:p-24 flex flex-col items-center text-center">
            <h3 className="font-display text-display-md text-brand-white mb-8 max-w-[700px]">
               &quot;We seek alliances with organizations that dare to fund the future, not just fix the past.&quot;
            </h3>
            <Link href="/contact" className="border border-brand-white text-brand-white px-10 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500">
               Contribute to the Vision
            </Link>
         </div>
      </SectionWrapper>

    </PageTransition>
  )
}
