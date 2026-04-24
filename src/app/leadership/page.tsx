'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { MandateCard } from '@/components/brand/sections/MandateCard'
import { motion } from 'framer-motion'
import { fadeUp, stagger, kenBurns, fadeIn } from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Briefcase, Landmark, ShieldCheck } from 'lucide-react'

export default function Leadership() {
  return (
    <PageTransition>
      {/* 1. HIGH-AUTHORITY HERO */}
      <section className="relative w-full h-[80vh] lg:h-[90vh] flex items-center overflow-hidden bg-brand-black">
        <motion.div
          variants={kenBurns}
          initial="initial"
          animate="animate"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/JOKATE-SPEAKING-AT-AN-EVENT.jpg"
            alt="Jokate Urban Mwegelo"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/40 to-transparent z-10" />

        <Container className="relative z-20">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-[850px]">
            <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
              National & Political Leadership
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-display-2xl font-display text-brand-white leading-[1.0] mb-8">
              Leadership Rooted in <br /><span className="text-brand-accent">Strategic Diplomacy.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg font-sans text-brand-white/80 leading-relaxed mb-10 max-w-[650px]">
              A Political Scientist by profession with a foundation in International Diplomacy, Jokate Urban Mwegelo transitioned from a globally recognized entrepreneur to a senior public executive, overseeing sustainable development across Tanzania’s key districts.
            </motion.p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-brand-white/60">
                <Globe size={18} className="text-brand-accent" />
                <span className="text-label uppercase tracking-widest">Diplomatic Foundation</span>
              </div>
              <div className="flex items-center gap-3 text-brand-white/60">
                <ShieldCheck size={18} className="text-brand-accent" />
                <span className="text-label uppercase tracking-widest">Public Executive</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. EXPERTISE & FOUNDATION */}
      <SectionWrapper bg="white" className="py-16 lg:py-24 border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Expertise</span>
              <h2 className="text-display-lg text-brand-black font-display mb-12">Sustainable Development & <br /><span className="text-brand-accent">Strategic Oversight.</span></h2>
              <div className="space-y-8 text-body-lg text-brand-muted leading-relaxed">
                <p>
                  As District Commissioner, Jokate chairs the Defense and Security Committee and oversees the District&apos;s Sustainable Development in collaboration with government, private sector, and international development partners.
                </p>
                <div className="p-8 bg-brand-surface border-l-4 border-brand-accent">
                  <p className="font-display text-[22px] text-brand-black mb-2">Core Competencies:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      'Energy & Extractives',
                      'Maternal Health Promotion',
                      'Infrastructure Coordination',
                      'Youth Mobilization',
                      'District Budgets (Gender Sensitive)',
                      'Strategic Administration'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-body-sm text-brand-muted">
                        <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            <div className="relative aspect-square lg:aspect-[4/5] bg-brand-surface shadow-2xl overflow-hidden group">
              <Image src="/images/JOKATE-LEADERSHIP-STYLE-TANZANIA-CC,.png" alt="Executive Portrait" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. CHRONOLOGICAL MANDATES */}
      <SectionWrapper bg="surface" className="py-0">
        <div className="w-full flex flex-col border-t border-brand-border">
          <MandateCard
            imageSide="left"
            imageSrc="/images/jokate-white-suit-2.png"
            era="2024 — CURRENT"
            role="Secretary General"
            org="UVCCM"
            desc="Leading the national youth mobilization and ideological development for CCM, overseeing strategy for Africa's most prominent youth political wing."
            stat="UVCCM"
            statLabel="National Executive Leadership"
          />
          <MandateCard
            imageSide="right"
            imageSrc="/images/jokate-rally.jpg"
            era="2018 — 2023"
            role="District Commissioner"
            org="Kisarawe · Temeke · Korogwe"
            desc="Managing multi-stakeholder coordination, budget oversight, and defense committees. Championed the Tsh. 1 Billion 'Tokomeza Zero' campaign to revitalize education infrastructure."
            stat="USD 4M+"
            statLabel="Stakeholder Funding Mobilized (3 Years)"
          />
        </div>
      </SectionWrapper>

      {/* 4. RECOGNITION & AWARDS (Clean Executive Style) */}
      <SectionWrapper bg="white" className="py-16 lg:py-24 border-y border-brand-border">
        <Container>
          <div className="text-center mb-24">
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-4 block">Recognition</span>
            <h2 className="text-display-lg text-brand-black font-display">International Honors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'KOFIH First Place', year: '2018/19', desc: 'Korea Foundation for International Health Care Award for SRH and Maternal Health.' },
              { title: 'Top 50 Women in Management', year: '2019', desc: 'Recognized by Women In Management Africa (WIMA).' },
              { title: 'TGNP Honorary Award', year: '2019', desc: 'Awarded for District Budgets on Gender Sensitive Issues.' },
              { title: 'Avance Media Most Influential', year: '2018-20', desc: 'Most Influential female in Tanzania and top leader in Law and Governance.' },
              { title: 'Forbes 30 Under 30', year: '2017', desc: 'Internationally recognized for entrepreneurial and social impact.' },
              { title: 'Malkia wa Nguvu', year: '2017', desc: 'National honor for business innovation and development advocacy.' },
            ].map((hon, i) => (
              <div key={i} className="p-10 border border-brand-border bg-brand-surface hover:bg-brand-white hover:border-brand-accent transition-all duration-500 group">
                <span className="text-brand-accent text-label uppercase tracking-widest block mb-4">{hon.year}</span>
                <h4 className="font-display text-[24px] text-brand-black mb-4 leading-tight">{hon.title}</h4>
                <p className="text-body-sm text-brand-muted leading-relaxed opacity-80">{hon.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. FINAL CALL TO ACTION */}
      <SectionWrapper bg="black" className="py-20 lg:py-32 text-center text-brand-white">
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-[700px] mx-auto">
            <h2 className="text-display-lg font-display mb-8">Executive Leadership for Sustainable Development.</h2>
            <p className="text-body-lg text-brand-white/60 mb-16 leading-relaxed">
              For inquiries regarding policy engagement, development partnerships, or strategic advisory.
            </p>
            <Link href="/contact" className="bg-brand-accent text-brand-white px-12 py-5 text-[12px] uppercase tracking-[0.2em] font-sans hover:bg-brand-white hover:text-brand-black transition-all duration-500">
              Contact the Office
            </Link>
          </motion.div>
        </Container>
      </SectionWrapper>
    </PageTransition>
  )
}
