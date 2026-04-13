'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { TimelineScroll } from '@/components/brand/sections/TimelineScroll'
import { HorizontalGallery } from '@/components/brand/sections/HorizontalGallery'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'

export default function About() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC BIOGRAPHY HERO */}
      <section className="relative w-full h-[80vh] lg:h-screen flex items-center overflow-hidden bg-brand-black">
        <Image 
          src="/images/jokate-brown-suit-full.jpg" 
          alt="Jokate Mwegelo" 
          fill 
          className="object-cover object-top opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
        
        <Container className="relative z-20 flex flex-col justify-end h-full pb-20">
           <motion.div variants={m.stagger} initial="hidden" animate="visible" className="max-w-[800px]">
             <motion.span variants={m.fadeUp} className="text-brand-gold font-sans text-label uppercase tracking-widest mb-6 block">
               The Person Behind the Purpose
             </motion.span>
             <motion.h1 variants={m.fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
               A leader is forged, not born.
             </motion.h1>
             <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-white/80 leading-relaxed mb-10 max-w-[600px]">
               Jokate Mwegelo is a Tanzanian politician, social entrepreneur, and executive leader. Named to Forbes Africa 30 Under 30, she has built a life dedicated to the structural empowerment of women and girls across East Africa.
             </motion.p>
           </motion.div>
        </Container>
      </section>

      {/* 2. THE ORIGIN STORY (BALANCED LAYOUT) */}
      <SectionWrapper bg="white" className="py-24 lg:py-48">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <h2 className="font-display text-display-lg text-brand-black mb-8 leading-tight">From Media to Mandate.</h2>
               <div className="font-sans text-body-lg text-brand-muted space-y-6">
                 <p>Her journey began in the public eye—as a prominent media personality and entrepreneur who understood the power of narrative. But Jokate soon realized that narrative alone would not build schools, ensure reproductive health, or create sustainable wealth for the youth.</p>
                 <p>In 2018, she pivoted from the private sector to public service, accepting her first executive appointment as District Commissioner for Kisarawe. There, she launched &apos;Kisarawe Kunisoma,&apos; a landmark education initiative that eliminated child labor and returned thousands of girls to school.</p>
               </div>
            </motion.div>
            
            <motion.div 
               variants={m.fadeUp} 
               initial="hidden" 
               whileInView="visible" 
               viewport={{ once: true }}
               className="relative aspect-square md:aspect-[4/5] bg-brand-surface shadow-2xl overflow-hidden"
            >
               <Image 
                 src="/images/jokate-black-suit.png" 
                 alt="Portrait of Jokate" 
                 fill 
                 className="object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/20 to-transparent" />
            </motion.div>
         </div>
      </SectionWrapper>

      {/* 3. CORE VALUES / PHILOSOPHY (Pop section) */}
      <SectionWrapper bg="black" className="py-24 lg:py-48 text-brand-white">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {[
              { title: 'Excellence', text: 'Structural results are the only real legacy. Every program must be executed with iron-clad precision.' },
              { title: 'Empathy', text: 'Leadership without proximity to the people is just administration. We lead through presence.' },
              { title: 'Endurance', text: 'Meaningful change takes decades. We build systems that outlive terms and trends.' },
            ].map((v, i) => (
              <motion.div key={i} variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col border-l border-brand-gold pl-8">
                 <h3 className="font-display text-display-sm mb-4">{v.title}</h3>
                 <p className="font-sans text-body text-brand-muted/80 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
         </div>
      </SectionWrapper>

      {/* 4. A LIFE IN MOTION (HORIZONTAL GALLERY) */}
      <HorizontalGallery images={[
        { src: '/images/jokate-white-suit-2.png', alt: 'UN CSW69 Address', label: 'Global Advocacy', category: 'Diplomacy' },
        { src: '/images/jokate-rally.jpg', alt: 'Community Rally', label: 'Grassroots Leadership', category: 'Governance' },
        { src: '/images/jokate-black-suit.png', alt: 'Liberation Youth Summit', label: 'Pan-African Vision', category: 'Leadership' },
        { src: '/images/features-team.png', alt: 'Mentorship', label: 'Be Kidotified', category: 'Empowerment' },
      ]} />

      {/* 5. CHRONOLOGY (Timeline) */}
      <div className="relative border-y border-brand-border h-[600px]">
         <TimelineScroll />
      </div>

    </PageTransition>
  )
}
