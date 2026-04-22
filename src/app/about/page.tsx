'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'

export default function About() {
  return (
    <PageTransition>
      {/* 1. Professional Biography (The Lead) */}
      <section className="relative w-full h-[70vh] lg:h-[80vh] flex items-center overflow-hidden bg-brand-black">
        <Image 
          src="/images/jokate-brown-suit-full.jpg" 
          alt="Jokate Mwegelo" 
          fill 
          className="object-cover object-top opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
        
        <Container className="relative z-20 flex flex-col justify-end h-full pb-20">
           <motion.div variants={m.stagger} initial="hidden" animate="visible" className="max-w-[900px]">
             <motion.span variants={m.fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
               Leader. Entrepreneur. Visionary.
             </motion.span>
             <motion.h1 variants={m.fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
               Jokate Urban Mwegelo
             </motion.h1>
             <motion.p variants={m.fadeUp} className="text-body-lg font-sans text-brand-white/80 leading-relaxed max-w-[700px]">
               Jokate Urban Mwegelo is a prominent Tanzanian politician and the current Secretary General of the Chama Cha Mapinduzi (CCM) Youth Wing (UVCCM). Recognized as one of Africa’s most influential young leaders, she has seamlessly transitioned from a successful career in media and entrepreneurship to high-level public service.
             </motion.p>
           </motion.div>
        </Container>
      </section>

      {/* 2. Political Leadership & Public Service */}
      <SectionWrapper bg="white" className="py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-display-lg text-brand-black font-display leading-tight">Serving the People</h2>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-12">
              <motion.div variants={m.fadeUp} className="border-l-2 border-brand-accent pl-8">
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-2 block">2024 — Present</span>
                <h3 className="text-display-sm text-brand-black mb-4">UVCCM Leadership</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Assumed office as the Secretary General of the National Youth&apos;s League (UVCCM) in April 2024, leading national youth mobilization and policy advocacy.
                </p>
              </motion.div>

              <motion.div variants={m.fadeUp} className="border-l-2 border-brand-accent pl-8">
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-2 block">2023 — 2024</span>
                <h3 className="text-display-sm text-brand-black mb-4">National Women&apos;s Wing</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Served as the Secretary General of the National Women&apos;s Wing (UWT) of CCM, focusing on gender inclusion and economic empowerment for women across Tanzania.
                </p>
              </motion.div>

              <motion.div variants={m.fadeUp} className="border-l-2 border-brand-accent pl-8">
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-2 block">2018 — 2023</span>
                <h3 className="text-display-sm text-brand-black mb-4">District Administration</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Served as the District Commissioner for three key districts: Korogwe (2023), Temeke (2021–2023), and Kisarawe (2018–2021). Her tenure in Kisarawe was marked by the &apos;Kisarawe Kunisoma&apos; initiative, which significantly improved school infrastructure and attendance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Entrepreneurship & "Kidoti" */}
      <SectionWrapper bg="surface" className="py-24 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div variants={m.fadeUp} className="relative aspect-square md:aspect-[4/5] bg-brand-white shadow-2xl overflow-hidden">
            <Image 
              src="/images/features-team.png" 
              alt="Kidoti Impact" 
              fill 
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={m.stagger} className="flex flex-col">
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Innovation with Purpose</span>
            <h2 className="text-display-lg text-brand-black font-display mb-8">The Kidoti Legacy</h2>
            <div className="space-y-6 text-body-lg text-brand-muted leading-relaxed">
              <p>
                In 2012, Jokate founded Kidoti Loving Company Limited, a lifestyle brand that bridged the gap between commerce and social impact. The brand became a vehicle for community development through initiatives like &quot;Be Kidotified&quot;—a campaign aimed at improving learning environments in public schools.
              </p>
              <p>
                Through the Manjano Dream Makers program, she provided mentorship to aspiring young Tanzanians, earning the Malkia wa Nguvu Award in 2017 for her business innovation and social dedication.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 4. Academic Foundation & Early Years */}
      <SectionWrapper bg="black" className="py-24 lg:py-32 text-brand-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Excellence from the Start</span>
            <h2 className="text-display-lg font-display mb-8">Academic Foundation</h2>
            <p className="text-body-lg text-brand-muted opacity-80 leading-relaxed mb-12">
              Born in Washington, D.C. and raised in Dar es Salaam, Jokate has consistently balanced academic excellence with public leadership.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4">Undergraduate</h4>
              <p className="text-brand-white font-display text-display-sm mb-2">Bachelor of Arts (Honors)</p>
              <p className="text-brand-muted font-sans text-body-sm">Political Science and Philosophy, University of Dar es Salaam (GPA 4.0)</p>
            </div>
            <div>
              <h4 className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4">Postgraduate</h4>
              <p className="text-brand-white font-display text-display-sm mb-2">MA & PGDip</p>
              <p className="text-brand-muted font-sans text-body-sm">The Open University of Tanzania & Aalto University/Uongozi Institute</p>
            </div>
            <div className="md:col-span-2 pt-8 border-t border-brand-white/10">
              <h4 className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4">Early Career</h4>
              <p className="text-brand-muted font-sans text-body leading-relaxed">
                Before entering politics, she was a celebrated media personality and award-winning actress, winning Best Actress at the Zanzibar International Film Festival in 2011 and 2015.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Honors & Accolades */}
      <SectionWrapper bg="white" className="py-24 lg:py-32">
        <Container>
          <div className="text-center mb-20">
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">A Legacy of Influence</span>
            <h2 className="text-display-lg text-brand-black font-display">Honors & Accolades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Forbes 30 Under 30', org: 'Africa', year: '2017', desc: 'Recognized for impact in media and entrepreneurship.' },
              { title: '100 Most Influential', org: 'Africa Youth Awards', year: '2020', desc: 'Listed among the most influential young Africans.' },
              { title: 'Malkia wa Nguvu', org: 'Clouds Media Group', year: '2017', desc: 'Awarded for business innovation and social impact.' },
            ].map((hon, i) => (
              <motion.div key={i} variants={m.fadeUp} className="p-8 border border-brand-border bg-brand-surface group hover:bg-brand-black hover:text-brand-white transition-all duration-500">
                <span className="text-brand-accent font-sans text-label block mb-4">{hon.year}</span>
                <h3 className="text-display-sm font-display mb-2">{hon.title}</h3>
                <p className="text-label text-brand-muted group-hover:text-brand-white/60 uppercase tracking-widest mb-6">{hon.org}</p>
                <p className="text-body-sm opacity-80">{hon.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
