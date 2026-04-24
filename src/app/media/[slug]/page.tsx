'use client'
import { useParams } from 'next/navigation'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'

import { useQuery } from 'convex/react'
import { api } from '../../../../convex/_generated/api'

export default function MediaDetail() {
  const params = useParams()
  const slug = params.slug as string
  const post = useQuery(api.media.getBySlug, { slug })

  if (post === undefined) {
      return (
        <div className="h-screen flex items-center justify-center bg-brand-white">
            <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 border-2 border-brand-accent border-t-transparent rounded-full animate-spin mb-4" />
                <span className="text-[10px] uppercase tracking-widest text-brand-muted">Loading Reflection...</span>
            </div>
        </div>
      )
  }

  if (!post) {
    return (
      <Container className="py-40 text-center">
        <h1 className="text-display-md font-display mb-8">Post Not Found</h1>
        <Link href="/media" className="text-brand-accent uppercase tracking-widest text-label">Return to Media</Link>
      </Container>
    )
  }

  const displayDate = post.date || new Date(post._creationTime).toLocaleDateString();
  const displayCategory = post.type || 'Press';
  const displayHeadline = post.title;
  const displayImage = post.coverImageUrl || '/images/jokate-black-suit.png';
  const displayContent = post.content || post.description;
  const displayOutlet = post.outlet || 'Official News';

  return (
    <PageTransition>
      {/* Article Header */}
      <section className="relative w-full pt-40 pb-16 lg:pb-24 bg-brand-white">
        <Container>
          <div className="max-w-[900px] mx-auto">
             <Link href="/media" className="inline-flex items-center gap-2 text-brand-accent uppercase tracking-widest text-[11px] mb-12 hover:translate-x-[-4px] transition-transform">
               <ArrowLeft size={14} /> Back to Media
             </Link>
             
             <div className="flex items-center gap-4 mb-8">
               <span className="px-3 py-1 bg-brand-surface text-brand-accent text-[10px] uppercase tracking-widest font-sans border border-brand-border">
                 {displayCategory}
               </span>
               <div className="flex items-center gap-2 text-brand-muted text-[11px] font-sans uppercase tracking-widest">
                 <Calendar size={12} /> {displayDate}
                 <span className="mx-2">·</span>
                 <Clock size={12} /> {post.readTime || '4 min read'}
               </div>
             </div>

             <h1 className="text-display-lg lg:text-display-xl font-display text-brand-black leading-tight mb-12">
               {displayHeadline}
             </h1>

             <div className="flex items-center gap-4 border-y border-brand-border py-6 mb-12">
                <div className="w-12 h-12 rounded-full bg-brand-surface overflow-hidden relative">
                   <Image src="/images/jokate-black-suit.png" alt="Author" fill className="object-cover" />
                </div>
                <div>
                   <span className="text-label text-brand-black uppercase tracking-widest block">Executive Office</span>
                   <span className="text-body-sm text-brand-muted font-sans">{displayOutlet} Correspondence</span>
                </div>
                <button className="ml-auto p-3 border border-brand-border hover:bg-brand-surface transition-colors">
                   <Share2 size={16} className="text-brand-muted" />
                </button>
             </div>
          </div>

          <div className="relative aspect-[16/7] w-full bg-brand-surface overflow-hidden mb-16 lg:mb-24 shadow-2xl">
             <Image src={displayImage} alt={displayHeadline} fill className="object-cover" priority />
          </div>

          <div className="max-w-[800px] mx-auto">
             <div className="prose prose-lg prose-brand max-w-none">
                <p className="text-display-xs font-display text-brand-black mb-12 leading-relaxed italic border-l-4 border-brand-accent pl-8">
                   &quot;{displayContent.split('.')[0]}.&quot;
                </p>
                <div className="text-body-lg text-brand-muted leading-relaxed space-y-8 font-sans">
                   {displayContent.split('\n').map((para: string, i: number) => (
                     <p key={i}>{para.trim()}</p>
                   ))}
                </div>
             </div>

             <div className="mt-24 pt-16 border-t border-brand-border flex flex-col items-center text-center">
                <h3 className="text-display-sm font-display text-brand-black mb-8">Share this insight</h3>
                <div className="flex gap-8">
                   {['Instagram', 'X', 'LinkedIn', 'Facebook'].map(s => (
                     <a key={s} href="#" className="text-label text-brand-accent uppercase tracking-widest hover:text-brand-black transition-colors">{s}</a>
                   ))}
                </div>
             </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}
