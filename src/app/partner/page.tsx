'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger, fadeIn, kenBurns } from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react'

export default function Partner() {
  return (
    <PageTransition>
      {/* 1. HERO SECTION: CINEMATIC STRATEGIC PARTNERSHIPS */}
      <section className="relative w-full h-[80vh] lg:h-[90vh] flex items-center overflow-hidden bg-brand-black">
        <motion.div 
          variants={kenBurns}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/jokate-white-suit.png" 
            alt="Jokate Urban Mwegelo" 
            fill 
            className="object-cover object-top opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent z-10" />
        
        <Container className="relative z-20">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[850px]">
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest">Strategic Partnerships</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
              Collaborating for <br/><span className="text-brand-accent">Measurable Transformation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg font-sans text-brand-white/80 leading-relaxed mb-12 max-w-[600px]">
              We build partnerships around institutional clarity and clear outcomes—improving education, expanding economic opportunity, and strengthening systems for the next generation of Tanzanians.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="bg-brand-accent text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500 shadow-2xl">
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* 2. PARTNERSHIP APPROACH: AUTHORITATIVE & VISUAL */}
      <SectionWrapper bg="white" className="py-24 lg:py-48 border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
            <div className="lg:col-span-5">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Our Approach</span>
              <h2 className="text-display-lg font-display text-brand-black mb-8 leading-[1.1]">Programs designed for <span className="italic">scale and sustainability.</span></h2>
              <p className="text-body-lg text-brand-muted leading-relaxed mb-12">
                We transition away from one-off projects toward structural models that integrate with national development priorities and deliver long-term results.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Target, title: 'Defined Goals', desc: 'Alignment on measurable objectives from day one.' },
                  { icon: ShieldCheck, title: 'Implementation', desc: 'Proven frameworks for district-level execution.' },
                  { icon: TrendingUp, title: 'Scalable Impact', desc: 'Models built to expand and sustain over time.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-brand-surface flex items-center justify-center rounded-full group-hover:bg-brand-accent transition-colors duration-500">
                      <item.icon className="text-brand-black group-hover:text-brand-white transition-colors" size={20} />
                    </div>
                    <div>
                      <h4 className="font-display text-[18px] text-brand-black mb-1 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-body-sm text-brand-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
               <div className="absolute inset-0 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
               <motion.div 
                 variants={fadeUp} 
                 initial="hidden" 
                 whileInView="visible" 
                 viewport={{ once: true }}
                 className="relative aspect-[16/10] bg-brand-surface overflow-hidden shadow-2xl"
               >
                  <Image src="/images/jokate-black-suit.png" alt="Strategic Partnership" fill className="object-cover" />
                  <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
                  <div className="absolute bottom-10 left-10 right-10 bg-brand-white/90 backdrop-blur-md p-8 border-l-4 border-brand-accent">
                     <p className="text-display-xs font-display text-brand-black mb-2 italic">
                       &quot;We seek alliances with organizations that dare to fund the future.&quot;
                     </p>
                     <span className="text-label text-brand-accent uppercase tracking-widest">Global Leadership Approach</span>
                  </div>
               </motion.div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. INITIATIVES GRID */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48">
        <Container>
          <div className="text-center mb-24">
             <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Our Work</span>
             <h2 className="text-display-lg text-brand-black font-display">Strategic Initiatives</h2>
          </div>
          
          <div className="space-y-32">
            {/* Initiative 1: Kidoti Foundation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="relative aspect-square lg:aspect-[4/5] bg-brand-white overflow-hidden shadow-xl order-2 lg:order-1">
                 <Image src="/images/jokate-black-suit.png" alt="Kidoti Foundation" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Foundation Work</span>
                <h2 className="text-display-lg text-brand-black font-display mb-4">Kidoti Foundation</h2>
                <h3 className="text-display-xs font-display text-brand-muted mb-8 italic">Developing talent into viable careers.</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-brand-border">
                  <div>
                    <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Focus Areas</h4>
                    <ul className="space-y-4">
                      {['Talent identification', 'Mentorship', 'Career guidance'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                          <ArrowRight size={14} className="text-brand-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Opportunities</h4>
                    <ul className="space-y-4">
                      {['Program support', 'Industry experts', 'Regional expansion'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                          <ArrowRight size={14} className="text-brand-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative 2: Girls' Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div>
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">National Priority</span>
                <h2 className="text-display-lg text-brand-black font-display mb-4">Girls&apos; Education</h2>
                <h3 className="text-display-xs font-display text-brand-muted mb-8 italic">Improving access and learning conditions.</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-brand-border">
                  <div>
                    <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Focus Areas</h4>
                    <ul className="space-y-4">
                      {['School infrastructure', 'Safe environments', 'Academic development'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                          <ArrowRight size={14} className="text-brand-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 underline decoration-brand-accent decoration-2 underline-offset-8">Opportunities</h4>
                    <ul className="space-y-4">
                      {['Infrastructure funding', 'Scholarships', 'Leadership programs'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                          <ArrowRight size={14} className="text-brand-accent" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-[4/5] bg-brand-white overflow-hidden shadow-xl">
                 <Image src="/images/jokate-white-suit.png" alt="Girls Education" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. VALUE PROPOSITION */}
      <SectionWrapper bg="white" className="py-24 lg:py-48 border-y border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-4">
               <h2 className="text-display-lg font-display text-brand-black leading-tight">Why Partner with Us</h2>
             </div>
             <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Direct Access', desc: 'Work directly within high-impact demographic groups across Tanzania.' },
                  { title: 'Proven Results', desc: 'Programs built from district-level execution and measurable outcomes.' },
                  { title: 'Strategic Alignment', desc: 'Work that connects with government systems and national priorities.' },
                ].map((item, i) => (
                  <div key={i} className="p-8 border border-brand-border hover:border-brand-accent transition-colors duration-500">
                    <h4 className="font-display text-[22px] text-brand-black mb-4 leading-none uppercase tracking-tight">{item.title}</h4>
                    <p className="text-body-sm text-brand-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. FINAL CALL TO ACTION */}
      <SectionWrapper bg="black" className="py-32 lg:py-64 text-center text-brand-white">
        <Container>
           <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[750px] mx-auto">
             <h2 className="text-display-lg font-display mb-8">Start a partnership discussion.</h2>
             <p className="text-body-lg text-brand-white/60 mb-16 leading-relaxed">
               Partnerships are designed based on shared priorities and practical implementation. If your organization is interested in working on education or youth development, we welcome a conversation.
             </p>
             <Link href="/contact" className="bg-brand-accent text-brand-white px-16 py-6 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500">
                Start a Conversation
             </Link>
           </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
