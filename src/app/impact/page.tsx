'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger, kenBurns, fadeIn } from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, TrendingUp, Landmark, Globe, Award, Target, Users } from 'lucide-react'

function MetricItem({ target, label, sublabel }: { target: string, label: string, sublabel: string }) {
  return (
    <motion.div variants={fadeUp} className="group border-l border-brand-border pl-8 py-4 hover:border-brand-accent transition-colors duration-500">
      <span className="font-display text-[64px] lg:text-[80px] text-brand-accent leading-none block mb-4 group-hover:scale-105 transition-transform duration-500 origin-left">
        {target}
      </span>
      <h3 className="font-display text-[22px] text-brand-black mb-2 uppercase tracking-tight">
        {label}
      </h3>
      <p className="font-sans text-body-sm text-brand-muted leading-relaxed">
        {sublabel}
      </p>
    </motion.div>
  )
}

function PillarSection({ 
  icon: Icon, 
  title, 
  subtitle, 
  description, 
  image, 
  points, 
  reversed = false 
}: { 
  icon: any, 
  title: string, 
  subtitle: string, 
  description: string, 
  image: string, 
  points: string[], 
  reversed?: boolean 
}) {
  return (
    <SectionWrapper bg="white" className="py-24 lg:py-48 border-b border-brand-border">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center`}>
        <div className={`lg:col-span-7 ${reversed ? 'order-1 lg:order-2' : ''}`}>
          <div className="relative aspect-[16/10] bg-brand-surface overflow-hidden shadow-2xl group">
             <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
        <div className={`lg:col-span-5 ${reversed ? 'order-2 lg:order-1' : ''}`}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center rounded-sm mb-8">
              <Icon className="text-brand-accent" size={24} />
            </div>
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">{subtitle}</span>
            <h2 className="text-display-lg text-brand-black font-display mb-8 leading-[1.1]">{title}</h2>
            <div className="space-y-8">
              <p className="text-body-lg text-brand-muted leading-relaxed italic border-l-2 border-brand-accent/20 pl-6">
                {description}
              </p>
              <div className="pt-8 border-t border-brand-border/50">
                <ul className="space-y-5">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-muted">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                      <span className="text-body font-sans leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default function Impact() {
  return (
    <PageTransition>
      {/* 1. HERO: IMPACT SUMMARY */}
      <section className="relative w-full pt-40 pb-24 lg:pt-56 lg:pb-32 bg-brand-white">
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-brand-accent" />
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest">Impact Summary</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-display-2xl font-display text-brand-black leading-[1.0] mb-12 max-w-[900px]">
              A national mandate defined by <span className="text-brand-accent">measurable transformation.</span>
            </motion.h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
              <MetricItem target="03" label="Districts Served" sublabel="Strategic governance in Kisarawe, Temeke, and Korogwe." />
              <MetricItem target="9M+" label="Youth Reached" sublabel="A movement fueled by media and direct community mobilization." />
              <MetricItem target="20+" label="Institutions Built" sublabel="Revitalizing the pillars of education and public service." />
              <MetricItem target="06" label="Global Stages" sublabel="Advocating for Tanzanian interests in international forums." />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. LEADERSHIP APPROACH */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48 border-y border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                 <h2 className="text-display-lg font-display text-brand-black mb-12 leading-[1.1] max-w-[600px]">
                   Architecting progress through <span className="italic text-brand-accent">structural empathy.</span>
                 </h2>
                 <p className="text-display-sm font-display text-brand-muted leading-relaxed mb-12 italic opacity-80">
                   &quot;Leadership is not a reactive occupation; it is the proactive design of environments where every citizen—regardless of geography—can thrive.&quot;
                 </p>
                 <p className="text-body-lg text-brand-muted max-w-[500px] leading-relaxed">
                   Jokate Urban Mwegelo&apos;s approach bridges the gap between administrative precision and grassroots reality, ensuring that national policy translates into the dignity of a girl in Kisarawe and the stability of a youth entrepreneur in Temeke.
                 </p>
               </motion.div>
            </div>
            <div className="lg:col-span-5 relative">
               <div className="absolute inset-0 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
               <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-8">
                 {[
                   { icon: BookOpen, label: 'Access to Education', desc: 'Removing structural barriers for the girl child.' },
                   { icon: TrendingUp, label: 'Economic Dignity', desc: 'Building reliable income pathways for youth.' },
                   { icon: Landmark, label: 'Service Excellence', desc: 'Strengthening local government delivery systems.' },
                 ].map((item, i) => (
                   <motion.div key={i} variants={fadeUp} className="p-8 bg-brand-white border border-brand-border flex gap-6 items-start hover:border-brand-accent transition-colors duration-500">
                     <item.icon className="text-brand-accent shrink-0 mt-1" size={24} />
                     <div>
                       <h4 className="font-display text-[18px] text-brand-black mb-2 uppercase tracking-tight">{item.label}</h4>
                       <p className="text-body-sm text-brand-muted leading-relaxed">{item.desc}</p>
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. PILLARS OF IMPACT (Education, Economy, Global) */}
      <PillarSection 
        icon={BookOpen}
        title="Empowering the Tanzanian Girl Child"
        subtitle="Education & Leadership"
        description="In Kisarawe, the Kisarawe Kunisoma initiative support the development of a girls’ secondary school with a focus on science and leadership."
        image="/images/jokate-white-suit.png"
        points={[
          "Substantially increasing school access for marginalized communities.",
          "Building modern, science-focused learning facilities.",
          "Fostering a sanctuary for leadership and future-ready education."
        ]}
      />

      <PillarSection 
        icon={TrendingUp}
        title="Supporting Youth to Build Stable Businesses"
        subtitle="Economic Formalization"
        description="Transitioning the informal hustle into collective economic power through structural support and loan access."
        image="/images/jokate-summit-auditorium.jpg"
        points={[
          "Formalizing thousands of individual youth traders into structured groups.",
          "Unlocking direct access to financing and commercial credit.",
          "Creating reliable and sustainable income opportunities for the next generation."
        ]}
        reversed
      />

      <PillarSection 
        icon={Globe}
        title="Representing the Voice of Tanzania"
        subtitle="International Engagement"
        description="Jokate has represented our nation at international forums, including the United Nations, sharing our local successes with the world."
        image="/images/jokate-summit-wide.jpg"
        points={[
          "High-level youth representation in global development policy.",
          "Advocating for gender-responsive policies on the world stage.",
          "Building strategic partnerships that benefit local Tanzanian initiatives."
        ]}
      />

      {/* 4. WHERE THE WORK HAPPENS (Illustrative Icons) */}
      <SectionWrapper bg="white" className="py-24 lg:py-48">
        <Container>
          <div className="text-center mb-24">
             <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Geographic Mandate</span>
             <h2 className="text-display-lg text-brand-black font-display leading-[1.1]">The Strategic Footprint</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-border divide-y md:divide-y-0 md:divide-x divide-brand-border">
            {[
              { 
                icon: BookOpen, 
                name: 'Kisarawe', 
                label: 'Education Center', 
                focus: 'Championing the Jokate Mwegelo Girls Secondary School and community-led infrastructure projects.' 
              },
              { 
                icon: Users, 
                name: 'Temeke', 
                label: 'Economic Hub', 
                focus: 'Driving youth formalization programs and scaling economic empowerment initiatives.' 
              },
              { 
                icon: Landmark, 
                name: 'Korogwe', 
                label: 'Governance Hub', 
                focus: 'Implementing administrative reforms and strengthening public service delivery at the district level.' 
              },
            ].map((d, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="p-12 lg:p-16 flex flex-col items-center text-center group hover:bg-brand-surface transition-all duration-700"
              >
                <div className="w-20 h-20 bg-brand-surface group-hover:bg-brand-white transition-colors duration-700 flex items-center justify-center rounded-full mb-10 shadow-sm border border-brand-border/50">
                  <d.icon className="text-brand-accent" size={32} />
                </div>
                <h3 className="font-display text-[42px] text-brand-black mb-2 leading-none">{d.name}</h3>
                <span className="text-brand-accent text-label uppercase tracking-widest mb-8 block">{d.label}</span>
                <p className="text-body text-brand-muted leading-relaxed opacity-80">{d.focus}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. RECOGNITION (Dark Background Elegant Design) */}
      <SectionWrapper bg="black" className="py-32 lg:py-56 text-brand-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-7">
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Legacy of Excellence</span>
              <h2 className="text-display-lg font-display mb-0 leading-[1.0]">Recognized by the world. <br/><span className="text-brand-white/40 italic">Serving the people.</span></h2>
            </div>
            <div className="lg:col-span-5 pb-2">
              <p className="text-body-lg text-brand-white/60 font-sans leading-relaxed">
                Her work has been recognized by international institutions and national platforms, cementing her role as a visionary for the African continent.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Forbes 30 Under 30', year: '2017', sub: 'Africa' },
              { label: '100 Most Influential', year: '2020', sub: 'Africa Youth Awards' },
              { label: 'Malkia wa Nguvu', year: '2017', sub: 'Business Innovation' },
              { label: 'ZIFF Best Actress', year: '2011, 2015', sub: 'Culture & Arts' },
              { label: 'Founder, Kidoti', year: '2012', sub: 'Lifestyle & Social Impact' },
              { label: 'Most Influential Youth', year: '2019', sub: 'Law & Governance' },
              { label: 'Miss Tanzania 2nd RU', year: '2006', sub: 'Heritage' },
              { label: 'Global Youth Icon', year: '2023', sub: 'International Leadership' },
            ].map((hon, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="p-10 border border-brand-white/10 hover:border-brand-accent/50 hover:bg-brand-white/5 transition-all duration-500 group"
              >
                <div className="flex justify-between items-start mb-12">
                   <span className="text-brand-accent text-label uppercase tracking-widest">{hon.year}</span>
                   <Award className="text-brand-white/20 group-hover:text-brand-accent transition-colors" size={20} />
                </div>
                <p className="font-display text-[24px] text-brand-white mb-2 leading-tight">{hon.label}</p>
                <p className="text-label text-brand-white/40 uppercase tracking-widest">{hon.sub}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. GET INVOLVED */}
      <SectionWrapper bg="surface" className="py-32 lg:py-48 text-center border-t border-brand-border">
        <Container>
           <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[700px] mx-auto">
             <h2 className="text-display-lg font-display text-brand-black mb-8">Join the Vision.</h2>
             <p className="text-body-lg text-brand-muted mb-16 leading-relaxed font-sans">
               This work continues through partnerships, community participation, and shared ideas. Join the vision for a stronger nation.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link href="/partner" className="bg-brand-black text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-accent transition-all duration-500">
                  Join the network
               </Link>
               <button className="border border-brand-black px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-black hover:text-brand-white transition-all duration-500">
                  Subscribe for updates
               </button>
             </div>
           </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
