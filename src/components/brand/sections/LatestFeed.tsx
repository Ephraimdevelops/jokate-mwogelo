import { SectionWrapper } from '../layout/SectionWrapper'
import { FeedCard } from './FeedCard'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'

const mockFeeds = [
  {
    id: 1,
    category: 'Newsletter',
    headline: 'The courage to lead when the room is silent.',
    date: 'Oct 12, 2025',
    href: '/book/the-courage-to-lead',
    thumbnailUrl: '/images/jokate-white-suit.png',
    excerpt: 'An inside look at the isolation often felt at the top of political and structural leadership, and how developing a deep internal compass is the only way to navigate uncharted territory without losing your core values.'
  },
  {
    id: 2,
    category: 'Press',
    headline: 'Jokate Mwegelo addresses the UN CSW69 in New York.',
    date: 'Sep 28, 2025',
    href: '/media/un-csw69-address',
    thumbnailUrl: '/images/jokate-black-suit.png',
    excerpt: 'Delivering physical mandates to global governance. Jokate breaks down the actionable steps taken in Tanzania to close the gendered economic gap, presenting a model African nations can replicate seamlessly.'
  },
  {
    id: 3,
    category: 'Initiatives',
    headline: 'Inter-school Bonanza reaches 20 schools in Dar es Salaam.',
    date: 'Aug 14, 2025',
    href: '/initiatives/inter-school-bonanza',
    thumbnailUrl: '/images/jokate-rally.jpg',
    excerpt: 'The expansion of the inter-school networks marks a monumental shift in how young students socialize, compete, and educate one another across municipal borders, building a unified cohort of future leaders.'
  }
]

export function LatestFeed() {
  return (
    <SectionWrapper bg="white">
      <div className="flex justify-between items-end mb-16">
        <h2 className="font-display text-display-md text-brand-black">
          Latest
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
