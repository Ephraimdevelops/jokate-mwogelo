'use client'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function CounterStat({ target, label, suffix = '' }: { target: number, label: string, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, target, count])

  return (
    <div className="flex flex-col items-center justify-center text-center" ref={ref}>
      <div className="flex items-baseline mb-2">
        <motion.span className="font-display text-[64px] md:text-[96px] text-brand-white leading-none">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="font-display text-[64px] md:text-[96px] text-brand-white leading-none">
            {suffix}
          </span>
        )}
      </div>
      <span className="font-sans text-[13px] text-brand-accent uppercase tracking-[0.12em]">
        {label}
      </span>
    </div>
  )
}
