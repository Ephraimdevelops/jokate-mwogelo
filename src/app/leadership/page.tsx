'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { MandateCard } from '@/components/brand/sections/MandateCard'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'

export default function Leadership() {
  return (
    <PageTransition>
      {/* 1. HIGH-AUTHORITY HERO */}
      <section className="relative w-full h-[70vh] lg:h-[90vh] flex items-center overflow-hidden">
        <Image 
          src="/images/jokate-white-suit.png" 
          alt="Jokate Mwegelo" 
          fill 
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent z-10" />
        
        <Container className="relative z-20">
           <motion.div variants={m.stagger} initial="hidden" animate="visible" className="max-w-[700px]">
             <motion.span variants={m.fadeUp} className="text-brand-gold font-sans text-label uppercase tracking-widest mb-6 block">
               National & Political Service
             </motion.span>
             <motion.h1 variants={m.fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
               Three mandates.<br />One purpose.
             </motion.h1>
             <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-white/70 leading-relaxed mb-10 max-w-[500px]">
               Jokate Mwegelo&apos;s trajectory across district administration and political leadership is defined by a relentless focus on structural results and community dignity.
             </motion.p>
           </motion.div>
        </Container>
      </section>

      {/* 2. CHRONOLOGICAL MANDATES */}
      <div className="w-full flex flex-col bg-brand-white border-t border-brand-border">
        <MandateCard 
          imageSide="left"
          imageSrc="/images/jokate-black-suit.png"
          era="2023 — CURRENT"
          role="Secretary General"
          org="UVCCM & UWT"
          desc="Leading the national youth and women's wings of Africa's most successful political movement. Focus on structural mobilization and ideological development for the next generation."
          stat="18.5M"
          statLabel="Registered Youth Members Managed"
        />
        <MandateCard 
          imageSide="right"
          imageSrc="/images/jokate-white-suit-2.png"
          era="2018 — 2023"
          role="District Commissioner"
          org="Kisarawe · Temeke · Korogwe"
          desc="Executive governance across three diverse Tanzanian regions. Focused on primary education infrastructure (Kisarawe Kunisoma), industrial efficiency, and reproductive health facilities."
          stat="100%"
          statLabel="District Infrastructure Milestone Achievement"
        />
        <MandateCard 
          imageSide="left"
          imageSrc="/images/jokate-rally.jpg"
          org="Regional Governance Advisory"
          role="Strategic Development"
          era="EARLY CAREER"
          desc="Laying the foundations for regional community bridge-building through the Kidoti brand and massive youth engagement circuits at the district level."
          stat="4000+"
          statLabel="Students Directly Mentored in Pilot Programs"
        />
      </div>

      {/* 3. CONTINENTAL VISION */}
      <SectionWrapper bg="black" className="py-24 lg:py-48 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-gold)_0%,_transparent_70%)] opacity-30" />
         </div>
         
         <Container className="relative z-10 text-center flex flex-col items-center">
            <motion.span 
              variants={m.fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="text-brand-gold font-sans text-label uppercase tracking-widest mb-8 block"
            >
              Pan-African Horizon
            </motion.span>
            <motion.h2 
              variants={m.fadeUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="font-display text-display-md md:text-display-lg text-brand-white mb-12 max-w-[900px] leading-tight"
            >
              Building a leadership pipeline that transcends borders.
            </motion.h2>
            <motion.div 
               variants={m.fadeUp} 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true }}
               className="w-full max-w-[400px] h-[1px] bg-brand-gold/50 mb-12" 
            />
            <p className="font-sans text-body-lg text-brand-white/60 max-w-[600px] mb-12">
               Jokate&apos;s work continues to bridge the gap between Tanzanian administrative excellence and the broader African Union goals for youth and female inclusion in governance.
            </p>
         </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
