import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

const pillars = [
  { label: 'LEADER', desc: 'Governance. Policy. Change.' },
  { label: 'BUILDER', desc: 'Kidoti. Kidotified. Community.' },
  { label: 'VOICE', desc: '9M+ followers. Continental platforms.' },
]

export function PillarBar() {
  return (
    <SectionWrapper bg="black" className="py-12 max-sm:py-8 lg:px-0 lg:max-w-none">
      <div className="w-full max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-accent/30">
        {pillars.map((pillar, i) => (
          <motion.div 
             key={pillar.label}
             variants={fadeUp}
             className="flex flex-col items-center justify-center text-center py-4 md:py-0 md:px-8"
          >
             <span className="text-brand-accent text-label mb-2 block">{pillar.label}</span>
             <span className="text-brand-white text-body-sm block">{pillar.desc}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
