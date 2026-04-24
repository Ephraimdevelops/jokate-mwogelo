import { SectionWrapper } from '../layout/SectionWrapper'
import { FeedCard } from './FeedCard'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'

export function LatestFeed() {
  const feed = useQuery(api.media.getUnifiedFeed) || []
  const latestItems = feed.slice(0, 3)

  return (
    <SectionWrapper bg="white">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-display text-display-md text-brand-black">
          Media & Latest Updates
        </h2>
        <a href="/media" className="hidden sm:flex text-brand-black text-[11px] uppercase tracking-[0.1em] font-sans items-center gap-2 hover:gap-3 transition-all duration-300 hover:text-brand-rose">
          View all updates <span className="text-brand-accent text-[16px] leading-[0]">→</span>
        </a>
      </div>

      <motion.div 
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
      >
        {latestItems.map((item) => (
          <motion.div key={item._id} variants={fadeUp}>
            <FeedCard 
              category={item.category}
              headline={item.title}
              date={item.date}
              href={item.href}
              thumbnailUrl={item.thumbnailUrl || '/images/jokate-white-suit-2.png'}
              excerpt={item.excerpt}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {feed.length === 0 && (
        <div className="py-20 text-center text-brand-muted uppercase tracking-widest text-[11px]">
          Waiting for latest updates...
        </div>
      )}
      
      {/* Mobile view all link */}
      <div className="sm:hidden mt-12 pt-8 border-t border-brand-border flex justify-center">
        <a href="/media" className="text-brand-black text-[12px] uppercase tracking-[0.1em] font-sans flex items-center gap-2">
          View all updates <span className="text-brand-accent text-[16px] leading-[0]">→</span>
        </a>
      </div>
    </SectionWrapper>
  )
}
