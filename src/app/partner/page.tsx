'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger, fadeIn } from '@/lib/motion'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Partner() {
  return (
    <PageTransition>
      {/* 1. HERO SECTION: STRATEGIC PARTNERSHIPS */}
      <section className="relative w-full min-h-[70vh] flex items-center pt-32 pb-24 bg-brand-white">
        <Container>
          <div className="max-w-[900px]">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest">Strategic Partnerships</span>
            </motion.div>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-display-2xl font-display text-brand-black leading-[1.0] mb-8">
              Working with organizations that want measurable impact.
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-body-lg font-sans text-brand-muted leading-relaxed mb-12 max-w-[700px]">
              Partnerships are built around clear outcomes—improving education, expanding economic opportunity, and strengthening systems that support young people and women in Tanzania.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <Link href="/contact" className="bg-brand-black text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-accent transition-all duration-500">
                Start a Conversation
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. PARTNERSHIP APPROACH */}
      <SectionWrapper bg="surface" className="py-24 border-y border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-display-md font-display text-brand-black mb-6">Partnership Approach</h2>
              <p className="text-body-lg text-brand-muted leading-relaxed">
                The focus is not on one-off projects, but on <strong>programs that can scale and sustain impact over time.</strong> Each partnership is structured around defined goals, clear implementation models, and measurable results.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Defined Goals', desc: 'Alignment on core objectives from the outset.' },
                { title: 'Implementation', desc: 'Proven models for district-level execution.' },
                { title: 'Measurable Results', desc: 'Data-driven reporting on program outcomes.' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-brand-white border border-brand-border">
                   <CheckCircle2 className="text-brand-accent mb-6" size={24} />
                   <h4 className="font-display text-[18px] text-brand-black mb-3 uppercase tracking-tight">{item.title}</h4>
                   <p className="text-body-sm text-brand-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. INITIATIVES GRID */}
      <SectionWrapper bg="white" className="py-24 lg:py-48">
        <div className="space-y-32">
          {/* Initiative 1: Kidoti Foundation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="relative aspect-square lg:aspect-video bg-brand-surface overflow-hidden order-2 lg:order-1">
               <Image src="/images/jokate-black-suit.png" alt="Kidoti Foundation" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Initiative 1</span>
              <h2 className="text-display-lg text-brand-black font-display mb-4">Kidoti Foundation</h2>
              <h3 className="text-display-xs font-display text-brand-muted mb-8 italic">Developing talent into viable careers</h3>
              <p className="text-body text-brand-muted mb-12 leading-relaxed">
                The Kidoti Foundation focuses on identifying and supporting young talent through structured platforms such as talent programs, mentorship, and exposure opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Focus Areas</h4>
                  <ul className="space-y-4">
                    {['Talent identification', 'Mentorship', 'Career guidance'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                        <ArrowRight size={14} className="text-brand-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Opportunities</h4>
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
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Initiative 2</span>
              <h2 className="text-display-lg text-brand-black font-display mb-4">Girls&apos; Education</h2>
              <h3 className="text-display-xs font-display text-brand-muted mb-8 italic">Improving access and learning conditions</h3>
              <p className="text-body text-brand-muted mb-12 leading-relaxed">
                Building on the Kisarawe education programs, this initiative focuses on improving school infrastructure and supporting girls to complete secondary education successfully.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Focus Areas</h4>
                  <ul className="space-y-4">
                    {['School infrastructure', 'Safe environments', 'Academic development'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                        <ArrowRight size={14} className="text-brand-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Opportunities</h4>
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
            <div className="relative aspect-square lg:aspect-video bg-brand-surface overflow-hidden">
               <Image src="/images/jokate-white-suit.png" alt="Girls Education" fill className="object-cover" />
            </div>
          </div>

          {/* Initiative 3: Youth Economic Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="relative aspect-square lg:aspect-video bg-brand-surface overflow-hidden order-2 lg:order-1">
               <Image src="/images/features-team.png" alt="Youth Development" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Initiative 3</span>
              <h2 className="text-display-lg text-brand-black font-display mb-4">Youth Economic Development</h2>
              <h3 className="text-display-xs font-display text-brand-muted mb-8 italic">Supporting transition to sustainable income</h3>
              <p className="text-body text-brand-muted mb-12 leading-relaxed">
                Based on the Temeke model, this work helps youth move from informal work into structured, income-generating activities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Focus Areas</h4>
                  <ul className="space-y-4">
                    {['Business group formation', 'Financial access', 'Income stability'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                        <ArrowRight size={14} className="text-brand-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans text-label text-brand-black uppercase tracking-widest mb-6 border-b border-brand-border pb-2">Opportunities</h4>
                  <ul className="space-y-4">
                    {['Technical support', 'Financial partnerships', 'Market access'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                        <ArrowRight size={14} className="text-brand-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. WHY PARTNER */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48 border-y border-brand-border">
        <Container>
          <div className="text-center mb-24">
             <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Value Proposition</span>
             <h2 className="text-display-lg text-brand-black font-display">Why Partner with Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Direct Access', desc: 'Work directly within high-impact demographic groups across Tanzania.' },
              { title: 'Proven Experience', desc: 'Programs built from district-level execution and measurable outcomes.' },
              { title: 'National Alignment', desc: 'Work that connects with government systems and national priorities.' },
            ].map((item, i) => (
              <div key={i} className="p-12 bg-brand-white border border-brand-border group hover:border-brand-accent transition-all duration-500">
                <h4 className="font-display text-[28px] text-brand-black mb-6 leading-none">{item.title}</h4>
                <p className="text-body text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. CREDIBILITY CONTEXT */}
      <SectionWrapper bg="black" className="py-24 lg:py-48 text-brand-white">
        <Container>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-7">
               <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Credibility</span>
               <h2 className="text-display-lg font-display mb-12">Proven Leadership. <br/><span className="text-brand-white/40 italic text-display-md">Institutional Coordination.</span></h2>
               <div className="space-y-8 text-body-lg text-brand-white/70 leading-relaxed">
                 <p>
                   Jokate Mwegelo has served in senior public leadership, including as District Commissioner, overseeing development programs and multi-stakeholder coordination.
                 </p>
                 <ul className="space-y-4">
                   {['Education infrastructure development', 'Youth mobilization and engagement', 'Government & Private sector collaboration'].map((item, i) => (
                     <li key={i} className="flex items-center gap-4">
                       <div className="h-1 w-1 bg-brand-accent rounded-full" />
                       <span className="text-body font-sans">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
             <div className="lg:col-span-5">
               <div className="p-12 border border-brand-white/10 bg-brand-white/5 relative group">
                  <div className="absolute inset-0 border border-brand-accent/20 -m-4 group-hover:scale-105 transition-transform duration-700" />
                  <p className="font-display text-[24px] text-brand-white mb-8 italic">
                    &quot;Partnerships are designed based on shared priorities and practical implementation.&quot;
                  </p>
                  <p className="text-label text-brand-accent uppercase tracking-widest">Jokate Urban Mwegelo</p>
               </div>
             </div>
           </div>
        </Container>
      </SectionWrapper>

      {/* 6. CLOSING CALL TO ACTION */}
      <SectionWrapper bg="white" className="py-32 lg:py-56 text-center">
        <Container>
           <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[750px] mx-auto">
             <h2 className="text-display-lg font-display text-brand-black mb-8">Start a partnership discussion.</h2>
             <p className="text-body-lg text-brand-muted mb-16 leading-relaxed">
               If your organization is interested in working on education, youth development, or economic programs in Tanzania, we welcome a conversation.
             </p>
             <Link href="/contact" className="bg-brand-black text-brand-white px-16 py-6 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-accent transition-all duration-500">
                Start a Conversation
             </Link>
           </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
