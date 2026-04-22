import { SectionWrapper } from '../layout/SectionWrapper'
import { FeedCard } from './FeedCard'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

const mockFeeds = [
  {
    id: 1,
    category: 'Interview',
    headline: 'Governance, Grace, and the Global Mandate.',
    date: 'Oct 24, 2025',
    href: '/media/governance-interview',
    thumbnailUrl: '/images/jokate-black-suit.png',
    excerpt: 'An exclusive sit-down on the structural requirements for leadership in the next decade, and the role of administrative precision in achieving community impact.'
  },
  {
    id: 2,
    category: 'Appearance',
    headline: 'Jokate Mwegelo addresses the UN CSW69 in New York.',
    date: 'Sep 28, 2025',
    href: '/media/un-csw69-address',
    thumbnailUrl: '/images/jokate-white-suit.png',
    excerpt: 'Delivering the keynote on youth inclusion and structural economic empowerment at the United Nations Commission on the Status of Women.'
  },
  {
    id: 3,
    category: 'Feature',
    headline: 'Building the Doors: The 2025 Empowerment Strategy.',
    date: 'Aug 14, 2025',
    href: '/initiatives/empowerment-strategy',
    thumbnailUrl: '/images/jokate-rally.jpg',
    excerpt: 'A comprehensive deep-dive into the upcoming non-profit structure and the national pipeline for female leadership across the region.'
  }
]

export function LatestFeed() {
  return (
    <SectionWrapper bg="white">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-display text-display-lg text-brand-black">
          Media & Latest Updates
        </h2>
        <a href="/media" className="hidden sm:flex text-brand-black text-[11px] uppercase tracking-[0.1em] font-sans items-center gap-2 hover:gap-3 transition-all duration-300 hover:text-brand-rose">
          View all updates <span className="text-brand-gold text-[16px] leading-[0]">→</span>
        </a>
      </div>

      <motion.div 
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16"
      >
        {mockFeeds.map((feed) => (
          <motion.div key={feed.id} variants={fadeUp}>
            <FeedCard {...feed} />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile view all link */}
      <div className="sm:hidden mt-12 pt-8 border-t border-brand-border flex justify-center">
        <a href="/media" className="text-brand-black text-[12px] uppercase tracking-[0.1em] font-sans flex items-center gap-2">
          View all updates <span className="text-brand-gold text-[16px] leading-[0]">→</span>
        </a>
      </div>
    </SectionWrapper>
  )
}
