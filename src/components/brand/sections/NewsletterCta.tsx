'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Image from 'next/image'
import { CheckCircle2, Sparkles } from 'lucide-react'

export function NewsletterCta() {
  return (
    <SectionWrapper bg="black" className="py-0 px-0 max-sm:px-0 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">

        {/* Left: Cinematic Visual Side */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-auto overflow-hidden bg-brand-black flex items-center justify-center border-r border-brand-white/5">
          {/* Placeholder/Fallback Pattern if image is missing */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-accent)_1px,_transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative w-full h-full max-w-[550px] max-h-[550px] z-10 p-12">
            <Image
              src="/images/newletter jokate.png"
              alt="The Pink Circle"
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(212,74,126,0.2)]"
              priority
            />
          </div>

          {/* Floating membership highlights */}
          <div className="absolute bottom-12 left-12 right-12 z-20 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-brand-black/60 backdrop-blur-xl border border-brand-white/10 p-10 rounded-none shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-brand-accent" size={18} />
                <p className="text-brand-white/60 text-[10px] uppercase tracking-[0.3em]">Circle Benefits</p>
              </div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {[
                  'Direct Mentorship',
                  'Project Alerts',
                  'Event Invitations',
                  'Policy Insights'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-white text-[12px] uppercase tracking-widest font-sans font-medium">
                    <CheckCircle2 size={14} className="text-brand-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right: Narrative & Access Form */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-24 py-24 lg:py-40 bg-brand-black"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-brand-accent" />
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest">Digital Sanctuary</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-brand-white font-display text-display-lg lg:text-display-2xl mb-10 leading-[1.0]"
          >
            A seat at the table. <br /><span className="text-brand-accent italic">The Pink Circle.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-brand-muted font-sans text-body-lg mb-14 max-w-[520px] leading-relaxed"
          >
            The Pink Circle is more than a newsletter—it’s a digital sanctuary for the next generation of African women leaders. A deliberate space where policy meets progress, and where your voice is integrated into the national mandate.
          </motion.p>

          <motion.div variants={fadeUp} className="w-full max-w-[500px]">
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest text-brand-accent mb-2 block font-sans">Corporate or Official Email</label>
                <input
                  type="email"
                  placeholder="name@organization.com"
                  className="w-full bg-transparent border-b border-brand-white/10 text-brand-white placeholder:text-brand-muted/30 focus:outline-none focus:border-brand-accent transition-all duration-700 py-6 text-body-lg font-sans"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-500 group-focus-within:w-full"></span>
              </div>

              <div className="flex flex-col gap-6">
                <button
                  type="submit"
                  className="group relative w-full bg-brand-accent text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 py-7 font-sans uppercase text-[13px] tracking-[0.2em] flex items-center justify-center gap-4 shadow-xl"
                >
                  Join the Visionary Circle
                  <span className="text-[20px] leading-[0] transition-transform duration-500 group-hover:translate-x-3">→</span>
                </button>
                <p className="text-[10px] text-brand-muted/40 uppercase tracking-[0.3em] text-center">
                  Membership is subject to verification.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
