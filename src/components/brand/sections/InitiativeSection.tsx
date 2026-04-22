'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface InitiativeProps {
  name: string
  desc: string
  target: string
  action: string
  imageSide: 'left' | 'right'
  imageSrc: string
  href?: string
}

export function InitiativeSection({ name, desc, target, action, imageSide, imageSrc, href = '/contact' }: InitiativeProps) {
  return (
    <SectionWrapper bg="white" className="py-0 px-0 max-sm:px-0 border-y border-brand-border">
      <div className={cn(
        "flex flex-col lg:flex-row min-h-[80vh]",
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
            <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
              Program Initiative
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[36px] md:text-[56px] font-display text-brand-black leading-[1.0] mb-8">
              {name}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-body-lg font-sans text-brand-muted mb-12 max-w-[540px] leading-relaxed">
              {desc}
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 pt-8 border-t border-brand-border">
               <div>
                 <span className="text-[10px] font-sans uppercase tracking-widest text-brand-accent block mb-2">Impact Demographic</span>
                 <span className="text-body font-sans text-brand-black opacity-90">{target}</span>
               </div>
               <div>
                 <span className="text-[10px] font-sans uppercase tracking-widest text-brand-accent block mb-2">Engagement Protocol</span>
                 <span className="text-body font-sans text-brand-black opacity-90">{action}</span>
               </div>
            </motion.div>

            <motion.div variants={fadeUp}>
               <Link href={href} className="group inline-flex items-center gap-4 bg-brand-black text-brand-white px-10 py-5 text-[12px] uppercase tracking-[0.15em] font-sans hover:bg-brand-accent transition-all duration-500 shadow-sm hover:shadow-xl">
                  {href === '/contact' ? 'Deploy to Region' : 'View Initiative'} <span className="text-brand-accent text-[16px] leading-[0] transition-transform duration-500 group-hover:translate-x-2">→</span>
               </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 min-h-[50vh] relative bg-brand-surface overflow-hidden">
           {imageSrc ? (
             <Image 
               src={imageSrc} 
               alt={name}
               fill
               className="object-cover object-center transition-transform duration-1000 hover:scale-105"
             />
           ) : (
             <div className="absolute inset-0 bg-brand-black/5 flex items-center justify-center">
               <span className="font-display text-display-md text-brand-black/5 italic">Jokate Mwegelo.</span>
             </div>
           )}
           <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
        </div>

      </div>
    </SectionWrapper>
  )
}
