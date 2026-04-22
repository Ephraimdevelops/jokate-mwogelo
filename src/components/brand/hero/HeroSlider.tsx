'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger, kenBurns } from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'

// For the MVP, we use one slide with static data. In production, this would map over an array of slides.
export function HeroSlider() {
  return (
    <section className="relative w-full h-[calc(100vh-96px)] min-h-[600px] bg-brand-white overflow-hidden flex items-center">
      {/* Scroll indicator - absolute left */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] tracking-[0.2em] uppercase text-brand-muted scroll-indicator items-center gap-4 z-20">
        <span className="w-12 h-[1px] bg-brand-accent"></span> SCROLL
      </div>

      {/* Slide counter - absolute right */}
      <div className="hidden lg:block absolute right-12 bottom-12 text-[11px] tracking-[0.1em] text-brand-black z-20 font-sans">
        01 <span className="text-brand-muted mx-1">/</span> 04
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row max-w-[1440px] mx-auto relative px-container-sm lg:px-container">

        {/* Left: Text Content */}
        <motion.div
          className="w-full lg:w-[60%] h-full flex flex-col justify-center relative z-10 pt-16 lg:pt-0"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4 overflow-hidden">
            <span className="text-brand-muted text-[13px] uppercase tracking-[0.1em] font-sans">Secretary General, UWT</span>
            <span className="text-brand-accent">·</span>
            <span className="text-brand-muted text-[13px] uppercase tracking-[0.1em] font-sans">CCM</span>
            <span className="text-brand-accent">·</span>
            <span className="text-brand-muted text-[13px] uppercase tracking-[0.1em] font-sans">Former DC, 3 Regions</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-display-2xl text-brand-black font-display max-w-[800px] mb-8"
          >
            Shaping the next generation of women leaders.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black font-sans max-w-[500px] mb-12"
          >
            A politician, builder, and voice for every girl who dares to lead. Rooted in Tanzania. Reaching across a continent.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link
              href="/about"
              className="bg-brand-black text-brand-white hover:bg-brand-plum transition-colors px-8 py-4 text-[12px] uppercase tracking-[0.1em] font-sans"
            >
              Meet Jokate
            </Link>
            <Link
              href="/book"
              className="group flex items-center gap-2 text-brand-black px-8 py-4 text-[12px] uppercase tracking-[0.1em] font-sans relative"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-white transition-colors duration-300">
                Join the Community <span className="text-brand-accent font-sans text-[16px] leading-[0] ml-1">→</span>
              </span>
              <span className="absolute inset-0 w-0 group-hover:w-full h-full bg-brand-black transition-all duration-300 ease-out z-0"></span>
              <span className="absolute inset-0 w-full h-full border border-brand-black z-[-1]"></span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="absolute bottom-12 left-0 hidden lg:flex gap-6">
            <a href="#" className="text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:text-brand-black transition-colors">IG</a>
            <a href="#" className="text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:text-brand-black transition-colors">TW</a>
            <a href="#" className="text-[11px] uppercase tracking-[0.1em] text-brand-muted hover:text-brand-black transition-colors">LI</a>
          </motion.div>
        </motion.div>

        {/* Right: Image (Bleeds to edge) */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-full relative mt-12 lg:mt-0 overflow-hidden">
          <motion.div
            className="w-full h-full relative"
            variants={kenBurns}
            initial="initial"
            animate="animate"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-white/5 to-brand-white/30 z-10" />
            <Image
              src="/images/jokate-white-suit-2.png"
              alt="Hon. Jokate Mwegelo"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
