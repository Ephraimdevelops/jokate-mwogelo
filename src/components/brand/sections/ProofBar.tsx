import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'

const proofs = [
  { label: 'Forbes Africa', year: '2017' },
  { label: 'ZIFF Best Actress', year: '2011' },
  { label: 'Avance Media Top 100', year: '2020' },
  { label: 'Africa Youth Awards', year: '2019' },
  { label: 'Clouds Malkia wa Nguvu', year: '2018' },
  { label: 'UN CSW69 Speaker', year: '2025' },
]

export function ProofBar() {
  const scrollItems = [...proofs, ...proofs, ...proofs] // Triple for seamless looping

  return (
    <SectionWrapper bg="surface" className="py-16 border-y border-brand-border overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent z-10 hidden sm:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent z-10 hidden sm:block" />

      <motion.div 
        className="flex gap-16 md:gap-32 min-w-max items-center"
        animate={{ x: ['-0%', '-50%'] }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      >
        {scrollItems.map((proof, i) => (
          <div 
            key={`${proof.label}-${i}`}
            className="flex flex-col items-center justify-center text-center flex-shrink-0"
          >
            <span className="font-display text-[22px] md:text-[28px] text-brand-black mb-2 opacity-90 block">
              {proof.label}
            </span>
            <span className="font-sans text-label text-brand-accent uppercase tracking-[0.1em]">
              {proof.year}
            </span>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
