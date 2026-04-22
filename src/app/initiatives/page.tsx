'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { InitiativeSection } from '@/components/brand/sections/InitiativeSection'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Initiatives() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-[60vh] bg-brand-white flex items-center pt-32 pb-16 overflow-hidden border-b border-brand-border">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               <motion.div variants={m.stagger} initial="hidden" animate="visible">
                  <motion.span variants={m.fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
                    Execution & Advocacy
                  </motion.span>
                  <motion.h1 variants={m.fadeUp} className="text-display-2xl font-display text-brand-black leading-[1.0] mb-8">
                    Where ideas become movements.
                  </motion.h1>
                  <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-black opacity-80 leading-relaxed mb-10 max-w-[540px]">
                    Jokate Mwegelo&apos;s governance is built on ground-up initiatives that build structural capacity for the next generation.
                  </motion.p>
               </motion.div>

               <motion.div 
                 variants={m.fadeUp} 
                 initial="hidden" 
                 animate="visible"
                 className="relative aspect-square md:aspect-[16/9] lg:aspect-square w-full bg-brand-surface overflow-hidden shadow-2xl"
               >
                  <Image 
                    src="/images/jokate-rally.jpg" 
                    alt="Gathering in the community" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/20 to-transparent" />
               </motion.div>
            </div>
         </Container>
      </section>

      {/* 2. PROGRAMMATIC SECTIONS (Alternating) */}
      <div className="w-full flex flex-col">
        <InitiativeSection 
          imageSide="right"
          imageSrc="/images/features-team.png"
          name="Be Kidotified"
          desc="An empowerment campaign bridging confidence-building with practical skills, helping young women understand their value before stepping into leadership."
          target="Secondary school students."
          action="Schools can request a campaign visit through the contact form."
          href="/initiatives/be-kidotified"
        />
        <InitiativeSection 
          imageSide="left"
          imageSrc="/images/jokate-rally.jpg"
          name="Inter-school Bonanza"
          desc="A large-scale talent, networking, and educational event circuit bringing together over 4,000 students for excellence and health education."
          target="Educators and school leadership."
          action="Register your school for the next annual intake."
          href="/initiatives/bonanza"
        />
        <InitiativeSection 
          imageSide="right"
          imageSrc="/images/jokate-white-suit.png"
          name="Mentorship Networks"
          desc="Direct, cohort-based mentorship connecting emerging young women with established leaders to teach the art of leading the room."
          target="University women and young professionals."
          action="Applications open twice a year. Subscribe for notifications."
          href="/initiatives/mentorship"
        />
        <InitiativeSection 
          imageSide="left"
          imageSrc="/images/jokate-black-suit.png"
          name="Liberation Youth"
          desc="A rigorous regional program focused on political and ideological development, ensuring the next generation of leaders are grounded in values."
          target="Young political activists across Southern Africa."
          action="Delegates are nominated horizontally by regional party chapters."
          href="/initiatives/liberation-youth"
        />
      </div>

      {/* 3. GLOBAL CTA */}
      <SectionWrapper bg="black" className="py-24 lg:py-32 text-center flex flex-col items-center justify-center border-t border-brand-accent/30">
         <motion.div 
            variants={m.fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="flex flex-col items-center"
         >
            <h2 className="font-display text-display-md md:text-display-lg text-brand-white mb-12 max-w-[800px] leading-tight">
               Build the platform in your region.
            </h2>
            <Link 
               href="/contact" 
               className="group inline-flex items-center gap-4 border border-brand-white text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500"
            >
               Deploy Initiative <span className="text-brand-accent font-sans text-[16px] leading-[0] ml-2 transition-transform duration-500 group-hover:translate-x-2 inline-block">→</span>
            </Link>
         </motion.div>
      </SectionWrapper>

    </PageTransition>
  )
}
