'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { ProofBar } from '@/components/brand/sections/ProofBar'
import { PressCard } from '@/components/brand/sections/PressCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'

const mockPressItems = [
  { _id: '1', publication: 'Forbes Africa', headline: 'Jokate Mwegelo named among 30 Under 30 defining the continent.', date: 'NOV 2017', category: 'award', href: '#', thumbnailUrl: '/images/jokate-brown-suit-full.jpg' },
  { _id: '2', publication: 'UN Women', headline: 'Tanzanian Secretary General addresses CSW69 on Youth Inclusion.', date: 'MAR 2025', category: 'speaking', href: '#', thumbnailUrl: '/images/jokate-white-suit.png' },
  { _id: '3', publication: 'The Citizen', headline: 'From Media to Governance: The Rise of Jokate Mwegelo.', date: 'FEB 2023', category: 'interview', href: '#', thumbnailUrl: '/images/jokate-black-suit.png' },
  { _id: '4', publication: 'Avance Media', headline: 'Listed among 100 Most Influential Young Africans.', date: 'SEP 2020', category: 'award', href: '#', thumbnailUrl: '/images/jokate-rally.jpg' },
  { _id: '5', publication: 'Daily News Tanzania', headline: '"The next generation will not wait," SG Jokate asserts.', date: 'AUG 2024', category: 'interview', href: '#', thumbnailUrl: '/images/jokate-brown-suit-half.jpg' }
]

export default function Media() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC EVENT HERO */}
      <section className="relative w-full h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <Image 
          src="/images/jokate-rally.jpg" 
          alt="Jokate Mwegelo at public gathering" 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-brand-black/60 z-10" />
        
        <Container className="relative z-20 flex flex-col items-center">
           <motion.div variants={m.stagger} initial="hidden" animate="visible" className="flex flex-col items-center">
             <motion.span variants={m.fadeUp} className="text-brand-gold font-sans text-label uppercase tracking-widest mb-6 block">
                Press & Repository
             </motion.span>
             <motion.h1 variants={m.fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
               As Seen & Heard.
             </motion.h1>
             <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-white/70 max-w-[600px] leading-relaxed">
               Documenting the public service record, awards, and global addresses through the lens of international and domestic media.
             </motion.p>
           </motion.div>
        </Container>
      </section>

      {/* 2. PRESS GRID AREA */}
      <SectionWrapper bg="white" className="py-24 lg:py-32">
         <Tabs defaultValue="all" className="w-full flex flex-col">
            <div className="flex justify-center mb-20 overflow-x-auto no-scrollbar">
              <TabsList className="bg-transparent border-b border-brand-border rounded-none h-auto p-0 flex gap-8 md:gap-16">
                {['all', 'award', 'interview', 'speaking'].map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat}
                    className="rounded-none bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-brand-black data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-brand-gold text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-brand-muted pb-4 transition-all"
                  >
                    {cat === 'all' ? 'All Coverage' : cat + 's'}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {['all', 'award', 'interview', 'speaking'].map(cat => (
              <TabsContent key={cat} value={cat} className="mt-0 outline-none">
                <motion.div 
                  variants={m.stagger} 
                  initial="hidden" 
                  animate="visible" 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
                >
                  {mockPressItems
                     .filter(item => cat === 'all' || item.category === cat)
                     .map(item => (
                    <motion.div key={item._id} variants={m.fadeUp}>
                      <PressCard {...item} excerpt="Detailed press coverage highlighting the impact of governance and public advocacy in the region." />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
         </Tabs>
      </SectionWrapper>

      {/* 3. LOGO WALL (Moved below content as requested) */}
      <div className="py-12 border-t border-brand-border">
         <ProofBar />
      </div>

      {/* 4. PULL QUOTE (Make it pop better) */}
      <SectionWrapper bg="black" className="py-32 lg:py-48 flex flex-col items-center text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Image src="/images/jokate-white-suit.png" alt="" fill className="object-cover" />
         </div>
         
         <motion.div variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[1000px] flex flex-col items-center relative z-10">
            <span className="font-display text-[160px] text-brand-gold/30 leading-none h-[100px] block transition-transform hover:scale-110 duration-700">&ldquo;</span>
            <h3 className="font-display text-display-md md:text-display-lg text-brand-white leading-[1.2] mb-12 px-6">
              &quot;She commands respect not by leveraging her popularity, but through the rigorous application of governance.&quot;
            </h3>
            <div className="w-12 h-[1px] bg-brand-gold mb-4" />
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold">The Citizen Editorial</span>
         </motion.div>
      </SectionWrapper>

      {/* 5. MEDIA KIT CTA (Consolidated) */}
      <SectionWrapper bg="surface" className="py-24 lg:py-32 flex flex-col items-center justify-center text-center">
         <Container>
            <div className="max-w-[800px] mx-auto flex flex-col items-center">
               <motion.h2 variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-display-sm md:text-display-md font-display text-brand-black mb-12">
                 Media Kit & Inquiries
               </motion.h2>
               <motion.div variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row gap-8 w-full justify-center">
                  <button className="bg-brand-white text-brand-black border border-brand-border px-12 py-5 font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-brand-black hover:text-brand-white transition-all duration-500 shadow-sm">
                     Download Assets
                  </button>
                  <Link href="/contact" className="bg-brand-black text-brand-white px-12 py-5 font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-xl flex items-center justify-center gap-2 group">
                     Press Inquiries <span className="text-brand-gold ml-2 transition-transform duration-500 group-hover:translate-x-2 inline-block">→</span>
                  </Link>
               </motion.div>
            </div>
         </Container>
      </SectionWrapper>

    </PageTransition>
  )
}
