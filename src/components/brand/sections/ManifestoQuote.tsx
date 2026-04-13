import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

export function ManifestoQuote() {
  return (
    <SectionWrapper bg="white">
      <div className="flex flex-col items-center justify-center text-center relative max-w-[800px] mx-auto py-8">
        <motion.span 
          variants={fadeUp}
          className="absolute -top-16 left-1/2 -translate-x-1/2 font-display text-[160px] text-brand-gold/15 leading-none select-none"
        >
          &ldquo;
        </motion.span>
        
        <motion.p 
          variants={fadeUp}
          className="font-display text-display-md text-brand-black relative z-10 mb-12 leading-[1.15]"
        >
          We must secure the revolutionary values that brought us this far. Youth must be placed at the centre — not the sidelines.
        </motion.p>
        
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center gap-2">
          <span className="text-label text-brand-muted block">
            — JOKATE MWEGELO,
          </span>
          <span className="text-label text-brand-black block">
            LIBERATION YOUTH SUMMIT, 2025
          </span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
