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

const mediaPosts: Record<string, any> = {
  'governance-interview': {
    publication: 'The Citizen',
    headline: 'Governance, Grace, and the Global Mandate.',
    date: 'Oct 24, 2025',
    category: 'Interview',
    image: '/images/jokate-black-suit.png',
    readTime: '6 min read',
    content: `
      In an exclusive dialogue, Hon. Jokate Mwegelo discusses the intersection of administrative precision and community impact. 
      The conversation delved into the structural requirements for leadership in the next decade, 
      emphasizing that popularity is a tool for mobilization, but governance is the engine of change.
      
      "We are not just building classrooms; we are building the environments where future presidents are forged," she remarked during the interview.
      The article covers her transition from district leadership to national strategy and her vision for a unified Tanzanian youth front.
    `
  },
  'un-csw69-address': {
    publication: 'UN News',
    headline: 'Jokate Mwegelo addresses the UN CSW69 in New York.',
    date: 'Mar 28, 2025',
    category: 'Appearance',
    image: '/images/jokate-white-suit.png',
    readTime: '4 min read',
    content: `
      Delivering the keynote address at the 69th Commission on the Status of Women, the Secretary General 
      focused on the structural necessity of investing in the African girl child. 
      The address highlighted successful district-level models from Tanzania that can be scaled internationally.
      
      "Empowerment without structure is temporary. We seek to build permanent corridors of opportunity," Mwegelo stated.
      The session was attended by global development partners and heads of state.
    `
  }
}

export default function MediaDetail() {
  const params = useParams()
  const slug = params.slug as string
  const post = mediaPosts[slug]

  if (!post) {
    return (
      <Container className="py-40 text-center">
        <h1 className="text-display-md font-display mb-8">Post Not Found</h1>
        <Link href="/media" className="text-brand-accent uppercase tracking-widest text-label">Return to Media</Link>
      </Container>
    )
  }

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
                 {post.category}
               </span>
               <div className="flex items-center gap-2 text-brand-muted text-[11px] font-sans uppercase tracking-widest">
                 <Calendar size={12} /> {post.date}
                 <span className="mx-2">·</span>
                 <Clock size={12} /> {post.readTime}
               </div>
             </div>

             <h1 className="text-display-lg lg:text-display-xl font-display text-brand-black leading-tight mb-12">
               {post.headline}
             </h1>

             <div className="flex items-center gap-4 border-y border-brand-border py-6 mb-12">
                <div className="w-12 h-12 rounded-full bg-brand-surface overflow-hidden relative">
                   <Image src="/images/jokate-black-suit.png" alt="Author" fill className="object-cover" />
                </div>
                <div>
                   <span className="text-label text-brand-black uppercase tracking-widest block">Executive Office</span>
                   <span className="text-body-sm text-brand-muted font-sans">{post.publication} Correspondence</span>
                </div>
                <button className="ml-auto p-3 border border-brand-border hover:bg-brand-surface transition-colors">
                   <Share2 size={16} className="text-brand-muted" />
                </button>
             </div>
          </div>

          <div className="relative aspect-[16/7] w-full bg-brand-surface overflow-hidden mb-16 lg:mb-24 shadow-2xl">
             <Image src={post.image} alt={post.headline} fill className="object-cover" priority />
          </div>

          <div className="max-w-[800px] mx-auto">
             <div className="prose prose-lg prose-brand max-w-none">
                <p className="text-display-xs font-display text-brand-black mb-12 leading-relaxed italic border-l-4 border-brand-accent pl-8">
                   &quot;{post.content.split('.')[0]}.&quot;
                </p>
                <div className="text-body-lg text-brand-muted leading-relaxed space-y-8 font-sans">
                   {post.content.split('\n').map((para: string, i: number) => (
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
