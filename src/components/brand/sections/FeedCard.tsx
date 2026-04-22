import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export interface FeedCardProps {
  category: string
  headline: string
  date: string
  href: string
  excerpt?: string
  readTime?: string
  thumbnailUrl?: string
}

export function FeedCard({ category, headline, date, href, excerpt = 'Read more about this specific update and its implications for leadership.', readTime = '3 min read', thumbnailUrl }: FeedCardProps) {
  return (
    <article className="border border-brand-border group cursor-pointer flex flex-col h-full bg-brand-white">
      {/* Thumbnail */}
      <Link href={href} className="block relative aspect-[3/2] overflow-hidden bg-brand-surface">
        {thumbnailUrl ? (
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src={thumbnailUrl} alt={headline} fill className="object-cover object-top" />
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span className="font-sans text-label text-brand-muted uppercase tracking-widest">
              {category}
            </span>
          </div>
        )}
      </Link>
      
      {/* Text */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="font-sans text-label text-brand-accent uppercase tracking-widest mb-3">
          {category}
        </p>
        <Link href={href} className="focus:outline-none block mb-2">
          <h3 className="font-display text-[18px] md:text-[22px] text-brand-black line-clamp-2 leading-[1.3] group-hover:text-brand-rose transition-colors">
            {headline}
          </h3>
        </Link>
        <p className="font-sans text-body-sm text-brand-muted line-clamp-2 mb-6">
          {excerpt}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-border">
          <div className="flex items-center gap-2">
             <span className="font-sans text-label text-brand-muted">{date}</span>
             <span className="text-brand-accent/50">·</span>
             <span className="font-sans text-label text-brand-muted">{readTime}</span>
          </div>
          <Link href={href} className="font-sans text-label text-brand-black group-hover:text-brand-accent transition-colors flex items-center gap-1">
            Read <span className="text-[14px] leading-[0]">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
