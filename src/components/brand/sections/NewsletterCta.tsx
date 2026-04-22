'use client'
import { SectionWrapper } from '../layout/SectionWrapper'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

export function NewsletterCta() {
  return (
    <SectionWrapper bg="black" className="py-0 px-0 max-sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
        
        {/* Left: Visual Side */}
        <div className="lg:col-span-6 relative h-[60vh] lg:h-auto overflow-hidden bg-brand-black flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-accent/5 opacity-50" />
          <div className="relative w-full h-full max-w-[600px] max-h-[600px]">
             <Image 
               src="/images/jokate-pink-circle.png" 
               alt="Jokate Pink Circle" 
               fill 
               className="object-contain"
             />
          </div>
          <div className="absolute bottom-12 left-12 right-12 z-20 hidden lg:block">
             <div className="bg-brand-white/5 backdrop-blur-md border border-brand-white/10 p-8 rounded-sm">
                <p className="text-brand-white/60 text-[10px] uppercase tracking-[0.2em] mb-4">Membership includes:</p>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     'Direct Mentorship',
                     'Project Alerts',
                     'Event Invitations',
                     'Policy Insights'
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-brand-white text-[11px] uppercase tracking-widest">
                       <CheckCircle2 size={14} className="text-brand-accent" />
                       {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Right: Content & Form */}
        <motion.div 
          variants={stagger} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-col justify-center px-6 lg:px-24 py-20 lg:py-32 bg-brand-black border-l border-brand-white/5"
        >
          <motion.span 
            variants={fadeUp} 
            className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block"
          >
            Institutional Community
          </motion.span>
          <motion.h2 
            variants={fadeUp} 
            className="text-brand-white font-display text-display-lg lg:text-display-xl mb-8 leading-[1.0]"
          >
            Enter the <br/><span className="text-brand-accent italic">Pink Circle.</span>
          </motion.h2>
          <motion.p 
            variants={fadeUp} 
            className="text-brand-muted font-sans text-body-lg mb-12 max-w-[500px] leading-relaxed"
          >
            A strategic community for the next generation of African leaders. Receive curated insights on governance, direct updates on mentorship cycles, and exclusive access to the Jokate Mwegelo regional initiatives.
          </motion.p>
          
          <motion.div variants={fadeUp} className="w-full max-w-[480px]">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Official Email Address" 
                  className="w-full bg-transparent border-b border-brand-white/20 text-brand-white placeholder:text-brand-muted/40 focus:outline-none focus:border-brand-accent transition-all duration-500 py-5 text-body-lg font-sans"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-500 group-focus-within:w-full"></span>
              </div>
              
              <button 
                type="submit" 
                className="group relative w-full bg-brand-accent text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 py-6 font-sans uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3"
              >
                Request Membership Access
                <span className="text-[18px] leading-[0] transition-transform duration-500 group-hover:translate-x-2">→</span>
              </button>
              
              <p className="text-[10px] text-brand-muted/50 uppercase tracking-[0.2em] text-center">
                Strictly professional communication. No spam.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
