'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, stagger, kenBurns, fadeIn } from '@/lib/motion'
import * as m from '@/lib/motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImpactMap } from '@/components/brand/sections/ImpactMap'

function ParallaxImage({ src, alt, className = "" }: { src: string, alt: string, className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, height: "120%", top: "-10%" }} className="relative w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  )
}

function ImpactMetric({ target, label, description }: { target: string, label: string, description: string }) {
  return (
    <motion.div 
      variants={fadeUp} 
      className="flex flex-col border-t border-brand-border pt-8 group hover:border-brand-accent transition-colors duration-700"
    >
      <span className="font-display text-[80px] lg:text-[120px] text-brand-black leading-none mb-4 group-hover:text-brand-accent transition-colors duration-700">
        {target}
      </span>
      <h3 className="font-display text-[24px] text-brand-black mb-4 uppercase tracking-tight">
        {label}
      </h3>
      <p className="font-sans text-body-sm text-brand-muted leading-relaxed max-w-[300px]">
        {description}
      </p>
    </motion.div>
  )
}

export default function Impact() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC FULL-SCREEN HERO */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-brand-black">
        <motion.div 
          variants={kenBurns}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/jokate-rally.jpg" 
            alt="Jokate Mwegelo Patriotic Leadership" 
            fill 
            className="object-cover object-top opacity-40"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black z-10" />
        
        <Container className="relative z-20 h-full flex flex-col justify-center">
           <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[1100px]">
             <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-brand-accent" />
                <span className="text-brand-accent font-sans text-label uppercase tracking-[0.3em]">Patriotism • Service • Legacy</span>
             </motion.div>
             <motion.h1 variants={m.fadeUp} className="text-[10vw] lg:text-[140px] font-display text-brand-white leading-[0.9] mb-12 tracking-tighter">
                Impact for <br/>Our Nation.
             </motion.h1>
             <motion.p variants={m.fadeUp} className="text-display-sm font-display text-brand-white/80 leading-relaxed max-w-[800px] italic">
               &quot;Governing with precision, leading with patriotism. We are not just building infrastructure; we are building the dignity of the Tanzanian people.&quot;
             </motion.p>
           </motion.div>
        </Container>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
           <span className="text-brand-white/40 font-sans text-[10px] uppercase tracking-[0.4em] rotate-90 origin-left ml-4">Scroll</span>
           <div className="w-[1px] h-12 bg-brand-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-brand-accent"
              />
           </div>
        </motion.div>
      </section>

      {/* 2. BIG IMPACT NUMBERS (Pulse of Progress) */}
      <SectionWrapper bg="white" className="py-32 lg:py-56">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
            <div className="max-w-[600px]">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">The National Footprint</span>
              <h2 className="text-display-lg text-brand-black font-display leading-[1.1]">Transforming administrative blueprints into reality.</h2>
            </div>
            <p className="text-body-lg text-brand-muted max-w-[400px] leading-relaxed">
              From the districts of Kisarawe to the economic hubs of Temeke and Korogwe, our reach is measured by progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            <ImpactMetric 
              target="03" 
              label="Districts Governed" 
              description="Establishing structural integrity and service delivery across Kisarawe, Temeke, and Korogwe." 
            />
            <ImpactMetric 
              target="09M" 
              label="Lives Mobilized" 
              description="Direct engagement with millions of Tanzanian youth through media and grassroots movements." 
            />
            <ImpactMetric 
              target="20+" 
              label="Schools Built" 
              description="Direct revitalization of education infrastructure, from science labs to sports facilities." 
            />
            <ImpactMetric 
              target="06" 
              label="Global Stages" 
              description="Representing Tanzania's interests at the UN and leading international policy forums." 
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. RICH IMAGERY & NARRATIVE (Pillars) */}
      <SectionWrapper bg="surface" className="py-0">
        {/* PILLAR 1: EDUCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <ParallaxImage 
            src="/images/jokate-white-suit.png" 
            alt="Education Impact" 
            className="h-[60vh] lg:h-auto"
          />
          <div className="flex items-center justify-center p-8 lg:p-24 bg-brand-white">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[500px]">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Pillar I</span>
              <h2 className="text-display-lg text-brand-black font-display mb-8">Empowering the Tanzanian Girl Child</h2>
              <div className="space-y-8 text-body-lg text-brand-muted leading-relaxed">
                <p>
                  <strong>The Kisarawe Mandate:</strong> In Kisarawe, Jokate launched &quot;Kisarawe Kunisoma,&quot; resulting in the construction of a premier Girls Secondary School that serves as a sanctuary for science and leadership education.
                </p>
                <p>
                  This wasn&apos;t just about building walls; it was about building a sanctuary for science and leadership education, ensuring that geography never limits a girl&apos;s potential.
                </p>
                <Link href="/initiatives" className="inline-flex items-center gap-4 text-brand-accent font-sans text-label uppercase tracking-widest hover:gap-6 transition-all duration-300">
                  Explore the Initiative <span>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PILLAR 2: ECONOMY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="flex items-center justify-center p-8 lg:p-24 bg-brand-black text-brand-white order-2 lg:order-1">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[500px]">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Pillar II</span>
              <h2 className="text-display-lg font-display mb-8">Structural Youth Empowerment</h2>
              <div className="space-y-8 text-body-lg text-brand-white/70 leading-relaxed">
                <p>
                  <strong>Formalizing Enterprise:</strong> In Temeke, Jokate pioneered a model that transitioned thousands of youth from informal labor to credit-ready business groups, unlocking collective economic power.
                </p>
                <p>
                  Through formalization and loan access, she turned individual hustle into collective economic power, proving that structural support is the key to dignity.
                </p>
                <Link href="/initiatives" className="inline-flex items-center gap-4 text-brand-accent font-sans text-label uppercase tracking-widest hover:gap-6 transition-all duration-300">
                  Learn about the Model <span>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
          <ParallaxImage 
            src="/images/features-team.png" 
            alt="Economic Impact" 
            className="h-[60vh] lg:h-auto order-1 lg:order-2"
          />
        </div>
      </SectionWrapper>

      {/* 4. INTERACTIVE HEATMAP OF IMPACT */}
      <SectionWrapper bg="white" className="py-32 lg:py-56">
        <Container>
           <div className="flex flex-col items-center text-center mb-24">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Geographic Mandate</span>
              <h2 className="text-display-lg text-brand-black font-display max-w-[800px]">Interactive Footprint Across Tanzania</h2>
              <p className="text-body-lg text-brand-muted max-w-[600px] mt-6">
                Hover over the regions to see how we are transforming local administration into high-impact service delivery.
              </p>
           </div>
           <div className="flex justify-center">
              <ImpactMap />
           </div>
        </Container>
      </SectionWrapper>

      {/* 5. GLOBAL STATESWOMAN (Patriotic Pride) */}
      <SectionWrapper bg="surface" className="py-32 lg:py-56">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden shadow-2xl">
                 <Image src="/images/jokate-rally.jpg" alt="National Pride" fill className="object-cover" />
                 <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Our Voice in the World</span>
                <h2 className="text-display-lg text-brand-black font-display mb-8">Representing Tanzania</h2>
                <p className="text-body-lg text-brand-muted leading-relaxed mb-12">
                  &quot;Whether at the United Nations or regional summits, Jokate represents the aspirations of millions, ensuring our nation&apos;s youth have a seat at the world&apos;s most influential tables.&quot;
                </p>
                <div className="flex gap-4">
                  <div className="h-[2px] w-12 bg-brand-accent mt-3" />
                  <p className="text-display-sm font-display text-brand-black italic">
                    Patriotism is the foundation of our progress.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. HONORS GRID (Clean & Sharp) */}
      <SectionWrapper bg="white" className="py-24 lg:py-48 border-t border-brand-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
             <div>
               <h3 className="font-display text-[42px] text-brand-accent mb-12 leading-none">Leadership</h3>
               <div className="space-y-12">
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">2017</span>
                   <p className="text-display-sm font-display">Forbes 30 Under 30</p>
                 </div>
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">2020</span>
                   <p className="text-display-sm font-display">100 Most Influential</p>
                 </div>
               </div>
             </div>
             <div>
               <h3 className="font-display text-[42px] text-brand-accent mb-12 leading-none">Innovation</h3>
               <div className="space-y-12">
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">2017</span>
                   <p className="text-display-sm font-display">Malkia wa Nguvu</p>
                 </div>
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">2012</span>
                   <p className="text-display-sm font-display">Founder, Kidoti</p>
                 </div>
               </div>
             </div>
             <div>
               <h3 className="font-display text-[42px] text-brand-accent mb-12 leading-none">Heritage</h3>
               <div className="space-y-12">
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">2011, 2015</span>
                   <p className="text-display-sm font-display">ZIFF Best Actress</p>
                 </div>
                 <div>
                   <span className="text-label text-brand-muted block mb-2 uppercase">Tanzania</span>
                   <p className="text-display-sm font-display">Cultural Icon</p>
                 </div>
               </div>
             </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. PATRIOTIC CTA */}
      <SectionWrapper bg="black" className="py-32 lg:py-64 text-center text-brand-white">
        <Container>
           <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[800px] mx-auto">
             <h2 className="text-[8vw] lg:text-[100px] font-display mb-12 leading-[0.9] tracking-tighter">Join the Vision.</h2>
             <p className="text-display-sm font-display text-brand-white/60 mb-16 max-w-[600px] mx-auto">
               Building a better tomorrow for Tanzania is a collective responsibility. Let us work together to strengthen our nation.
             </p>
             <div className="flex flex-col sm:flex-row gap-8 justify-center">
               <Link href="/partner" className="bg-brand-accent text-brand-white px-16 py-6 text-[14px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500">
                  Join the Movement
               </Link>
               <button className="border border-brand-white/20 px-16 py-6 text-[14px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500">
                  Stay Informed
               </button>
             </div>
           </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
