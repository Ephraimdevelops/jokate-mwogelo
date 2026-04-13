'use client'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fadeIn } from '@/lib/motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="w-full h-full flex flex-col"
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
