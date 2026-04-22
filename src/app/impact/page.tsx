'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import { fadeUp, stagger, kenBurns } from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'
import { ImpactMap } from '@/components/brand/sections/ImpactMap'

function MetricItem({ target, label, sublabel, suffix = '' }: { target: string, label: string, sublabel: string, suffix?: string }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col group relative">
      <div className="flex items-baseline mb-2">
        <span className="font-display text-[80px] lg:text-[140px] text-brand-accent/10 absolute -top-12 lg:-top-20 -left-4 pointer-events-none group-hover:text-brand-accent/20 transition-colors duration-700">
          {target}{suffix}
        </span>
        <span className="font-display text-[60px] lg:text-[100px] text-brand-black leading-none z-10">
          {target}{suffix}
        </span>
      </div>
      <h3 className="font-sans text-label uppercase tracking-widest text-brand-accent mb-4 z-10">
        {label}
      </h3>
      <p className="font-sans text-body-sm text-brand-muted leading-relaxed max-w-[240px] z-10">
        {sublabel}
      </p>
    </motion.div>
  )
}

export default function Impact() {
  return (
    <PageTransition>
      {/* 1. CINEMATIC HERO: PATRIOTIC LEADERSHIP */}
      <section className="relative w-full h-[85vh] lg:h-screen flex items-center overflow-hidden bg-brand-black">
        <motion.div 
          variants={kenBurns}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/jokate-rally.jpg" 
            alt="Jokate Mwegelo with the People" 
            fill 
            className="object-cover object-top opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
        
        <Container className="relative z-20 h-full flex flex-col justify-end pb-24 lg:pb-32">
           <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[1000px]">
             <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
               National Identity & Service
             </motion.span>
             <motion.h1 variants={fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
               A Legacy of Patriotism.
             </motion.h1>
             <motion.p variants={fadeUp} className="text-body-lg font-sans text-brand-white/90 leading-relaxed max-w-[750px] mb-12">
               Jokate Urban Mwegelo represents a new era of Tanzanian leadership—one rooted in administrative precision, community resonance, and a relentless commitment to the progress of our nation.
             </motion.p>
             <motion.div variants={fadeUp} className="relative pl-12 border-l-2 border-brand-accent py-2 max-w-[800px]">
                <p className="text-display-sm font-display text-brand-white leading-relaxed italic opacity-95">
                  &quot;Leadership is not about the space you occupy, but the doors you open for others to walk through.&quot;
                </p>
             </motion.div>
           </motion.div>
        </Container>
      </section>

      {/* 2. THE PULSE OF PROGRESS (Big Visible Numbers) */}
      <SectionWrapper bg="white" className="py-32 lg:py-48 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-16">
            <MetricItem 
              target="03" 
              label="Districts Governed" 
              sublabel="Governing Kisarawe, Temeke, and Korogwe with structural integrity and regional pride." 
            />
            <MetricItem 
              target="09" 
              suffix="M+" 
              label="Youth Reached" 
              sublabel="Mobilizing millions of Tanzanian youth through digital innovation and local engagement." 
            />
            <MetricItem 
              target="20" 
              suffix="+" 
              label="Institutions Built" 
              sublabel="Directly revitalizing schools and science labs for the next generation of our country." 
            />
            <MetricItem 
              target="06" 
              label="National Stages" 
              sublabel="Representing our nation's interests at the UN and leading international policy summits." 
            />
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. PILLARS OF TRANSFORMATION (Creative Imagery) */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48">
        <div className="flex flex-col gap-48 lg:gap-72">
          {/* Pillar I */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <motion.div 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="relative aspect-[4/5] lg:aspect-square w-full bg-brand-white overflow-hidden shadow-2xl"
              >
                <Image src="/images/jokate-white-suit.png" alt="Education" fill className="object-cover" />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 w-2/3 aspect-video bg-brand-black hidden lg:block overflow-hidden shadow-2xl">
                 <Image src="/images/features-team.png" alt="Sub-image" fill className="object-cover opacity-80" />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Pillar I</span>
                <h2 className="text-display-lg text-brand-black font-display mb-8">Empowering the Tanzanian Girl Child</h2>
                <div className="space-y-8 text-body-lg text-brand-muted leading-relaxed">
                  <p>
                    <strong>The Kisarawe Mandate:</strong> In Kisarawe, Jokate launched &quot;Kisarawe Kunisoma,&quot; resulting in the construction of a premier Girls Secondary School that serves as a sanctuary for science and leadership education.
                  </p>
                  <p>
                    <strong>Be Kidotified:</strong> A movement that goes beyond infrastructure—it&apos;s about restoring dignity and the spirit of competition in our public schools through world-class facilities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Pillar II */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Pillar II</span>
                <h2 className="text-display-lg text-brand-black font-display mb-8">Structural Youth Empowerment</h2>
                <div className="space-y-8 text-body-lg text-brand-muted leading-relaxed">
                  <p>
                    <strong>Formalizing Enterprise:</strong> In Temeke, Jokate pioneered a model that transitioned thousands of youth from informal labor to credit-ready business groups, unlocking collective economic power for our youth.
                  </p>
                  <p>
                    <strong>Manjano Dream Makers:</strong> A national mentorship platform bridging the gap between talent and the professional industries of Tanzania.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-7 relative">
              <motion.div 
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                className="relative aspect-[16/9] bg-brand-white overflow-hidden shadow-2xl"
              >
                <Image src="/images/jokate-black-suit.png" alt="Economic Empowerment" fill className="object-cover" />
              </motion.div>
              <div className="absolute -top-12 -left-12 w-1/2 aspect-square bg-brand-accent/10 hidden lg:block p-8">
                 <div className="w-full h-full border border-brand-accent/20"></div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. GEOGRAPHIC IMPACT (The Map) */}
      <SectionWrapper bg="white" className="py-32 lg:py-48 flex flex-col items-center justify-center border-y border-brand-border">
         <div className="text-center mb-16">
           <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Interactive Footprint</span>
           <h2 className="text-display-md font-display text-brand-black">Our Reach Across the Nation</h2>
         </div>
         <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full flex justify-center">
            <ImpactMap />
         </motion.div>
      </SectionWrapper>

      {/* 5. NATIONAL VOICE (Global Advocacy) */}
      <SectionWrapper bg="black" className="py-24 lg:py-48 text-brand-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Tanzania to the World</span>
            <h2 className="text-display-lg font-display mb-8">Representing Our Interests</h2>
            <p className="text-display-sm font-display text-brand-muted opacity-90 italic leading-relaxed mb-12">
              &quot;Whether at the UN CSW69 or regional summits, Jokate represents the aspirations of millions, ensuring our nation&apos;s youth have a seat at the world&apos;s most influential tables.&quot;
            </p>
          </motion.div>
          <div className="relative aspect-[4/5] overflow-hidden bg-brand-surface shadow-2xl">
            <Image src="/images/jokate-white-suit-2.png" alt="Advocacy" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
          </div>
        </div>
      </SectionWrapper>

      {/* 6. HONORS GRID */}
      <SectionWrapper bg="white" className="py-24 lg:py-32">
        <Container>
          <div className="text-center mb-24">
             <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">A Legacy of Excellence</span>
             <h2 className="text-display-md text-brand-black font-display">National & International Honors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-brand-border">
            <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-brand-border hover:bg-brand-surface transition-colors duration-500">
              <h3 className="font-display text-[28px] mb-12 text-brand-accent">Leadership</h3>
              <ul className="space-y-12">
                <li><span className="text-label text-brand-muted block mb-2">2017</span><p className="text-body font-bold">Forbes 30 Under 30 Africa</p></li>
                <li><span className="text-label text-brand-muted block mb-2">2020</span><p className="text-body font-bold">100 Most Influential Young Africans</p></li>
              </ul>
            </div>
            <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-brand-border hover:bg-brand-surface transition-colors duration-500">
              <h3 className="font-display text-[28px] mb-12 text-brand-accent">Innovation</h3>
              <ul className="space-y-12">
                <li><span className="text-label text-brand-muted block mb-2">2017</span><p className="text-body font-bold">Malkia wa Nguvu (Innovation)</p></li>
                <li><span className="text-label text-brand-muted block mb-2">2012</span><p className="text-body font-bold">Founder, Kidoti Loving Co. Ltd.</p></li>
              </ul>
            </div>
            <div className="p-8 lg:p-12 hover:bg-brand-surface transition-colors duration-500">
              <h3 className="font-display text-[28px] mb-12 text-brand-accent">Culture</h3>
              <ul className="space-y-12">
                <li><span className="text-label text-brand-muted block mb-2">2011, 2015</span><p className="text-body font-bold">ZIFF Best Actress</p></li>
                <li><span className="text-label text-brand-muted block mb-2">Media</span><p className="text-body font-bold">National Cultural Icon</p></li>
              </ul>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. PATRIOTIC CTA */}
      <SectionWrapper bg="surface" className="py-32 lg:py-48 text-center">
        <Container>
           <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[750px] mx-auto">
             <h2 className="text-display-lg font-display text-brand-black mb-8">Join the Vision.</h2>
             <p className="text-body-lg text-brand-muted mb-16 leading-relaxed">
               Building a better tomorrow for Tanzania is a collective responsibility. Let us work together to strengthen the future of our nation.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link href="/partner" className="bg-brand-black text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-accent transition-colors">
                  Join the Movement
               </Link>
               <button className="border border-brand-black px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-black hover:text-brand-white transition-colors">
                  Stay Informed
               </button>
             </div>
           </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
