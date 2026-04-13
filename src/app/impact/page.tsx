'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { CounterStat } from '@/components/brand/sections/CounterStat'
import { StoryVignette } from '@/components/brand/sections/StoryVignette'
import { ProofBar } from '@/components/brand/sections/ProofBar'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Link from 'next/link'

export default function Impact() {
  return (
    <PageTransition>
      {/* METRICS HERO */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 bg-brand-black border-none">
        <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          <CounterStat target={3} label="Districts Governed" />
          <CounterStat target={9} suffix="M+" label="Community Reach" />
          <CounterStat target={20} suffix="+" label="Schools Reached" />
          <CounterStat target={6} label="Intl Forums Addressed" />
        </div>
      </section>

      {/* STORY VIGNETTES */}
      <SectionWrapper bg="white" className="py-24">
        <motion.div variants={m.fadeUp} className="mb-16">
           <h2 className="text-display-md font-display text-brand-black mb-4">Behind the Numbers</h2>
           <p className="text-body-lg font-sans text-brand-muted max-w-[600px]">
             Statistics are a measure of scale. The true measure of impact is found in individual lives changed, potentials unlocked, and communities transformed.
           </p>
        </motion.div>

        <motion.div variants={m.stagger} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
           <motion.div variants={m.fadeUp}>
             <StoryVignette 
                location="Kisarawe"
                name="A School for Girls"
                story="During her tenure as DC, Jokate championed the construction of the Jokate Mwegelo Girls Secondary School, ensuring hundreds of young women had direct access to science and leadership education."
             />
           </motion.div>
           <motion.div variants={m.fadeUp}>
             <StoryVignette 
                location="Temeke"
                name="Youth Economic Empowerment"
                story="Organized thousands of youth into formal business groups, providing them with loans and the structural support needed to transition from informal trade to sustainable enterprise."
             />
           </motion.div>
           <motion.div variants={m.fadeUp}>
             <StoryVignette 
                location="Dar es Salaam"
                name="Kidoti Bonanza"
                story="Created a platform engaging over 4,000 students across 20 secondary schools, blending talent discovery with mentorship and reproductive health education."
             />
           </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* GEOGRAPHIC MAP PLACEHOLDER */}
      <SectionWrapper bg="surface" className="py-32 flex flex-col items-center justify-center">
         <motion.h2 variants={m.fadeUp} className="text-display-sm font-display text-brand-black mb-12">Geographic Reach</motion.h2>
         <motion.div variants={m.fadeUp} className="w-full max-w-[800px] aspect-square lg:aspect-video border border-brand-border bg-brand-white flex items-center justify-center">
            <span className="font-display text-display-sm text-brand-muted/30">SVG Map Visualization</span>
         </motion.div>
      </SectionWrapper>

      {/* AWARDS WALL */}
      <ProofBar />

      {/* JOIN CTA */}
      <SectionWrapper className="bg-brand-white py-32 text-center flex flex-col items-center justify-center">
         <motion.h2 variants={m.fadeUp} className="font-display text-display-md text-brand-black mb-8 max-w-[500px]">
            Be part of the movement.
         </motion.h2>
         <motion.div variants={m.fadeUp}>
           <Link 
              href="/book" 
              className="group inline-flex items-center gap-2 border border-brand-black px-8 py-4 text-[12px] uppercase tracking-[0.1em] font-sans hover:bg-brand-black hover:text-brand-white transition-all duration-300"
           >
              Become a Member <span className="text-brand-gold font-sans text-[16px] leading-[0] ml-1">→</span>
           </Link>
         </motion.div>
      </SectionWrapper>

    </PageTransition>
  )
}
