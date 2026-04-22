'use client'
import { useParams } from 'next/navigation'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

const initiativesData: Record<string, any> = {
  'be-kidotified': {
    name: 'Be Kidotified',
    tagline: 'Empowering the next generation of women leaders.',
    image: '/images/features-team.png',
    description: 'Be Kidotified is an empowerment campaign that bridges confidence-building with practical leadership skills. It is designed to help young women understand their intrinsic value before stepping into formal leadership roles.',
    pillars: ['Confidence Building', 'Public Speaking', 'Leadership Ethics', 'Practical Skills'],
    outcomes: 'Over 10,000 students reached across regional secondary schools.'
  },
  'bonanza': {
    name: 'Inter-school Bonanza',
    tagline: 'Extracurricular excellence for national impact.',
    image: '/images/jokate-rally.jpg',
    description: 'A large-scale talent, networking, and educational event circuit. Bringing together thousands of students for competitions that promote science, sports, and reproductive health education.',
    pillars: ['Science & Tech', 'Sports Excellence', 'Health Education', 'Networking'],
    outcomes: '4,000+ students annually engaged in extracurricular development.'
  },
  'mentorship': {
    name: 'Mentorship Networks',
    tagline: 'Connecting emerging talent with established leaders.',
    image: '/images/jokate-white-suit.png',
    description: 'Direct, cohort-based mentorship connecting university women and young professionals with established leaders in government, business, and advocacy.',
    pillars: ['Direct Mentorship', 'Network Access', 'Strategic Advocacy', 'Career Scaling'],
    outcomes: 'Hundreds of young professionals successfully transitioned into senior roles.'
  },
  'liberation-youth': {
    name: 'Liberation Youth',
    tagline: 'Rooting future leaders in southern African values.',
    image: '/images/jokate-black-suit.png',
    description: 'A rigorous regional program focused on political and ideological development, ensuring leaders are grounded in the history of the liberation struggle.',
    pillars: ['Political History', 'Ideological Grounding', 'Regional Solidarity', 'Strategic Policy'],
    outcomes: 'Developing a unified leadership pipeline across the SADC region.'
  }
}

export default function InitiativeDetail() {
  const params = useParams()
  const slug = params.slug as string
  const data = initiativesData[slug]

  if (!data) {
    return (
      <Container className="py-40 text-center">
        <h1 className="text-display-md font-display mb-8">Initiative Not Found</h1>
        <Link href="/initiatives" className="text-brand-accent uppercase tracking-widest text-label">Return to Initiatives</Link>
      </Container>
    )
  }

  return (
    <PageTransition>
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <Image src={data.image} alt={data.name} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        <Container className="relative z-10 text-center">
           <motion.div variants={stagger} initial="hidden" animate="visible">
             <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Initiative Detail</motion.span>
             <motion.h1 variants={fadeUp} className="text-display-xl font-display text-brand-white mb-4">{data.name}</motion.h1>
             <motion.p variants={fadeUp} className="text-display-xs font-display text-brand-white/70 italic">{data.tagline}</motion.p>
           </motion.div>
        </Container>
      </section>

      <SectionWrapper bg="white" className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
               <Link href="/initiatives" className="inline-flex items-center gap-2 text-brand-accent uppercase tracking-widest text-[11px] mb-12 hover:translate-x-[-4px] transition-transform">
                 <ArrowLeft size={14} /> Back to Initiatives
               </Link>
               <h2 className="text-display-md font-display text-brand-black mb-8">Structural Overview</h2>
               <p className="text-body-lg text-brand-muted leading-relaxed mb-12">{data.description}</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {data.pillars.map((pillar: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-brand-surface border border-brand-border">
                       <CheckCircle2 className="text-brand-accent" size={20} />
                       <span className="font-display text-[18px] text-brand-black">{pillar}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:col-span-5">
               <div className="p-10 bg-brand-black text-brand-white border border-brand-accent/20 sticky top-32">
                  <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Measurable Outcome</span>
                  <p className="text-display-sm font-display mb-12 leading-tight italic">&quot;{data.outcomes}&quot;</p>
                  <Link href="/contact" className="w-full bg-brand-accent text-brand-white py-5 px-10 font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 block text-center">
                    Deploy in your Region
                  </Link>
               </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
