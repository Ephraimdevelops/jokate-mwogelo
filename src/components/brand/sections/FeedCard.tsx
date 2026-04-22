'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
    <article className="border border-brand-border group flex flex-col h-full bg-brand-white hover:border-brand-accent transition-all duration-500 hover:shadow-2xl">
      {/* Thumbnail */}
      <Link href={href} className="block relative aspect-[3/2] overflow-hidden bg-brand-surface">
        {thumbnailUrl ? (
          <Image 
            src={thumbnailUrl} 
            alt={headline} 
            fill 
            className="object-cover object-top group-hover:scale-105 transition-transform duration-1000" 
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <span className="font-sans text-label text-brand-muted uppercase tracking-widest">
              {category}
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4">
           <span className="bg-brand-black/80 backdrop-blur-md text-brand-white text-[9px] uppercase tracking-widest px-2 py-1 font-sans">
             {category}
           </span>
        </div>
      </Link>
      
      {/* Text */}
      <div className="p-6 lg:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
           <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-brand-accent font-bold">
             {category}
           </span>
           <span className="text-[9px] font-sans uppercase tracking-widest text-brand-muted">
             {date}
           </span>
        </div>

        <Link href={href} className="focus:outline-none block mb-4">
          <h3 className="font-display text-[20px] text-brand-black line-clamp-2 leading-[1.3] group-hover:text-brand-accent transition-colors duration-500">
            {headline}
          </h3>
        </Link>
        
        <p className="font-sans text-body-sm text-brand-muted line-clamp-2 mb-8 leading-relaxed">
          {excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-brand-border flex justify-between items-center">
          <span className="font-sans text-[10px] text-brand-muted uppercase tracking-widest">{readTime}</span>
          <Link href={href} className="inline-flex items-center gap-1 text-brand-black text-[10px] uppercase tracking-[0.2em] font-sans group/link">
            Open Post
            <ArrowUpRight size={12} className="text-brand-accent group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </article>
  )
}
