'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'

export function BriefBio({ onOpenModal }: { onOpenModal: (type: 'donation' | 'partnership') => void }) {
  return (
    <SectionWrapper bg="black" className="py-24 lg:py-32 relative overflow-hidden">
      {/* ... (background code) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image 
          src="/images/jokate-rally.jpg" 
          alt="" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-brand-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            className="lg:col-span-8 flex flex-col"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={fadeUp} 
              className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block"
            >
              Public Servant & Executive Leader
            </motion.span>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-display-md text-brand-white font-display mb-8 leading-[1.1]"
            >
              Jokate Mwegelo
            </motion.h2>
            
            <motion.p 
              variants={fadeUp} 
              className="text-body-lg text-brand-white/70 font-sans mb-12 max-w-[700px] leading-relaxed"
            >
              Jokate Mwegelo is a Tanzanian politician and executive who has served as District Commissioner for Kisarawe, Temeke, and Korogwe. Her work focuses on implementing structural governance, advancing education infrastructure, and driving sustainable economic empowerment across the region.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 items-center">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-4 text-brand-accent hover:text-brand-white transition-colors duration-500 font-sans text-[12px] uppercase tracking-[0.2em]"
              >
                Read Her Story
                <span className="text-[16px] leading-[0] transition-transform duration-500 group-hover:translate-x-2">→</span>
              </Link>

              <button 
                onClick={() => onOpenModal('partnership')}
                className="text-brand-white/40 hover:text-brand-accent transition-colors font-sans text-[11px] uppercase tracking-[0.2em] border-l border-brand-white/20 pl-8 h-6 flex items-center"
              >
                Partner with us
              </button>
            </motion.div>
          </motion.div>


          <motion.div 
            className="lg:col-span-4 flex justify-center lg:justify-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-[340px] border border-brand-accent/20 p-4">
               <div className="absolute inset-0 border border-brand-accent/10 -m-4"></div>
               <div className="relative w-full h-full bg-brand-white/5 overflow-hidden">
                 <Image 
                   src="/images/jokate-black-suit.png" 
                   alt="Jokate Mwegelo" 
                   fill 
                   className="object-cover object-top opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
