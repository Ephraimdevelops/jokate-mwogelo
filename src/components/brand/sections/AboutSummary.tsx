'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Image from 'next/image'

export function AboutSummary() {
  return (
    <SectionWrapper bg="white" className="py-24 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="lg:col-span-5 relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
              <Image 
                src="/images/jokate-brown-suit-full.jpg" 
                alt="Hon. Jokate Mwegelo" 
                fill 
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
            
            {/* Design Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border-[0.5px] border-brand-accent/30 -z-10" />
            <div className="absolute -top-8 -right-8 w-48 h-48 border-[0.5px] border-brand-accent/30 -z-10" />
          </motion.div>

          <motion.div 
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span 
              variants={fadeUp} 
              className="text-brand-muted font-sans text-label uppercase tracking-widest mb-6 block"
            >
              The Human Core
            </motion.span>
            
            <motion.h2 
              variants={fadeUp} 
              className="text-display-md lg:text-display-lg text-brand-black font-display mb-10 leading-[1.1] max-w-[500px]"
            >
              A leader is forged, not born.
            </motion.h2>
            
            <motion.div 
              variants={fadeUp}
              className="font-sans text-body-lg text-brand-black opacity-80 space-y-8 max-w-[600px] mb-12"
            >
              <p>
                Jokate Mwegelo is a Tanzanian politician, social entrepreneur, and executive leader whose life is dedicated to the structural empowerment of the African region.
              </p>
              <p className="border-l-2 border-brand-accent pl-8 italic font-display text-display-sm py-4">
                &quot;The next generation will not wait for permission. We must build the doors we intend to walk through.&quot;
              </p>
              <p>
                From the district administration of Kisarawe to the leadership of national youth and women wings, her journey is a masterclass in translating personal brand into public impact.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
