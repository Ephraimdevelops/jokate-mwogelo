import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface VignetteProps {
  location: string
  name: string
  story: string
}

export function StoryVignette({ location, name, story }: VignetteProps) {
  return (
    <div className="flex flex-col">
       <div className="aspect-[4/5] bg-brand-surface mb-6 relative border border-brand-border overflow-hidden">
         <div className="absolute inset-0 bg-brand-black/5" />
         {/* Image would go here */}
       </div>
       <span className="text-brand-gold font-sans text-label mb-2 block">
         From {location}
       </span>
       <h3 className="font-display text-[22px] text-brand-black mb-3 leading-[1.2]">
         {name}
       </h3>
       <p className="font-sans text-body-sm text-brand-muted leading-[1.6]">
         {story}
       </p>
    </div>
  )
}
