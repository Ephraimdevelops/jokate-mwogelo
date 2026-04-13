'use client'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { stagger } from '@/lib/motion'
import { cn } from '@/lib/utils'

type Bg = 'white' | 'black' | 'surface' | 'plum'

const bgMap: Record<Bg, string> = {
  white:   'bg-brand-white text-brand-black',
  black:   'bg-brand-black text-brand-white',
  surface: 'bg-brand-surface text-brand-black',
  plum:    'bg-brand-plum text-brand-white',
}

export function SectionWrapper({
  children, bg = 'white', className,
}: {
  children: React.ReactNode
  bg?: Bg
  className?: string
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={cn(
          bgMap[bg],
          'py-section px-container max-sm:py-section-sm max-sm:px-container-sm overflow-hidden',
          className
        )}
      >
        {children}
      </m.section>
    </LazyMotion>
  )
}
