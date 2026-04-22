'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface MandateCardProps {
  era: string
  role: string
  org: string
  desc: string
  stat: string
  statLabel: string
  imageSide: 'left' | 'right'
  imageSrc: string
}

export function MandateCard({ era, role, org, desc, stat, statLabel, imageSide, imageSrc }: MandateCardProps) {
  return (
    <SectionWrapper bg="white" className="py-0 px-0 max-sm:px-0 border-y border-brand-border/50">
      <div className={cn(
        "flex flex-col lg:flex-row min-h-[85vh]",
        imageSide === 'right' ? '' : 'lg:flex-row-reverse'
      )}>
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-32 bg-brand-white">
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">
              {era}
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[32px] md:text-[48px] font-display text-brand-black leading-[1.1] mb-2 uppercase">
              {role}
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-display-sm font-display text-brand-muted italic mb-10">
              {org}
            </motion.h3>
            
            <motion.p variants={fadeUp} className="text-body-lg font-sans text-brand-muted mb-16 max-w-[500px] leading-relaxed">
              {desc}
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col relative mt-auto pt-10 border-t border-brand-border">
               <span className="text-[64px] md:text-[80px] font-display text-brand-black leading-none mb-4 block">{stat}</span>
               <span className="text-label text-brand-accent uppercase tracking-[0.2em] font-sans">{statLabel}</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 min-h-[50vh] relative bg-brand-surface overflow-hidden">
           {imageSrc ? (
             <Image 
                src={imageSrc} 
                alt={`${role} at ${org}`}
                fill
                className="object-cover object-top filter contrast-[1.05] grayscale-[0.2]"
             />
           ) : (
             <div className="absolute inset-0 bg-brand-black/5 flex items-center justify-center">
               <span className="font-display text-display-md text-brand-black/5 italic">Jokate Mwegelo.</span>
             </div>
           )}
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/30 via-transparent to-transparent" />
        </div>

      </div>
    </SectionWrapper>
  )
}
