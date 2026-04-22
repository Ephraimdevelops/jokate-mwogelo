'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  { year: '2006', desc: 'Miss Tanzania 1st Runner-Up' },
  { year: '2010', desc: 'UDSM Political Science 4.0 GPA' },
  { year: '2011', desc: 'ZIFF Best Actress' },
  { year: '2014', desc: 'Kidoti founded' },
  { year: '2017', desc: 'Forbes 30 Under 30' },
  { year: '2018', desc: 'DC Kisarawe (1st former beauty queen appointed DC)' },
  { year: '2021', desc: 'DC Temeke' },
  { year: '2023', desc: 'DC Korogwe / SG UWT' },
  { year: '2025', desc: 'CSW69 UN Speaker' },
]

export function TimelineScroll() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll transform for desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  return (
    <div className="bg-brand-white border-y border-brand-border">
      {/* Desktop view (horizontal scroll pinned logic) */}
      <div ref={targetRef} className="hidden md:block h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200%] h-[1px] bg-brand-accent/20 -z-10" />
          <motion.div style={{ x }} className="flex gap-24 px-[200px]">
            {milestones.map((ms) => (
              <div key={ms.year} className="flex flex-col flex-shrink-0 w-[240px] relative">
                <div className="w-3 h-3 bg-brand-accent rounded-full absolute -left-1.5 top-[-43px] md:top-[-4.5rem]" />
                <span className="font-sans text-label text-brand-black mb-4 block pt-12 md:pt-0">{ms.year}</span>
                <p className="font-display text-[20px] leading-[1.3] text-brand-black">{ms.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile view (vertical stack) */}
      <div className="md:hidden py-section px-container flex flex-col gap-12 relative">
        <div className="absolute left-[39px] top-section bottom-section w-[1px] bg-brand-accent/20" />
        {milestones.map((ms) => (
          <div key={ms.year} className="flex flex-col relative pl-6">
            <div className="w-3 h-3 bg-brand-accent rounded-full absolute -left-[5px] top-1" />
             <span className="font-sans text-label text-brand-black mb-2 pt-0.5">{ms.year}</span>
             <p className="font-display text-[18px] leading-[1.3] text-brand-black">{ms.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
