'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface PressCardProps {
  publication: string
  headline: string
  date: string
  category: string
  href: string
  thumbnailUrl: string
  excerpt?: string
}

export function PressCard({ publication, headline, date, category, href, thumbnailUrl, excerpt }: PressCardProps) {
  return (
    <motion.div 
      variants={fadeUp}
      className="group flex flex-col bg-brand-white border border-brand-border overflow-hidden hover:border-brand-accent transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface">
        <Image 
          src={thumbnailUrl} 
          alt={headline} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute top-6 left-6 flex gap-2">
           <span className="bg-brand-black/80 backdrop-blur-md text-brand-white text-[10px] uppercase tracking-widest px-3 py-1.5 font-sans">
             {category}
           </span>
        </div>
      </div>

      <div className="p-8 lg:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-4">
           <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-brand-accent font-bold">
             {publication}
           </span>
           <span className="text-[10px] font-sans uppercase tracking-widest text-brand-muted">
             {date}
           </span>
        </div>
        
        <h3 className="font-display text-[22px] lg:text-[24px] text-brand-black mb-6 leading-[1.2] group-hover:text-brand-accent transition-colors duration-500">
          {headline}
        </h3>
        
        {excerpt && (
          <p className="text-body-sm text-brand-muted font-sans leading-relaxed mb-8 line-clamp-2">
            {excerpt}
          </p>
        )}

        <div className="mt-auto pt-6 border-t border-brand-border">
          <Link href={href} className="inline-flex items-center gap-2 text-brand-black text-[11px] uppercase tracking-[0.2em] font-sans group/link">
            Read Coverage
            <ArrowUpRight size={14} className="text-brand-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
