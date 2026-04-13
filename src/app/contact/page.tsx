'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion, AnimatePresence } from 'framer-motion'
import * as m from '@/lib/motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<string>('')

  return (
    <PageTransition>
      <section className="relative w-full min-h-screen bg-brand-white flex items-center pt-32 pb-24 lg:pt-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
            
            {/* Left Col: Cinematic Portait & Info */}
            <motion.div 
              variants={m.fadeUp} 
              initial="hidden" 
              animate="visible"
              className="flex flex-col h-full bg-brand-black text-brand-white relative overflow-hidden"
            >
               <div className="relative h-[400px] lg:h-1/2 w-full">
                  <Image 
                    src="/images/jokate-black-suit.png" 
                    alt="Jokate Mwegelo" 
                    fill 
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
               </div>

               <div className="p-8 lg:p-12 flex flex-col justify-end h-auto lg:h-1/2">
                  <h1 className="font-display text-display-lg leading-[1.0] mb-6">Let&apos;s build<br />the vision.</h1>
                  <p className="font-sans text-body text-brand-muted mb-12 max-w-[400px]">
                    Direct access to the executive office for speaking engagements, media requests, and strategic philanthropic partnerships.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex justify-between items-center border-b border-brand-white/10 pb-4">
                      <span className="text-label text-brand-gold uppercase tracking-widest">Digital Hub</span>
                      <span className="text-body-sm font-sans">hq@jokatemwegelo.me</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-brand-white/10 pb-4">
                      <span className="text-label text-brand-gold uppercase tracking-widest">Office Hours</span>
                      <span className="text-body-sm font-sans">Mon — Fri, 09:00 — 17:00</span>
                    </div>
                  </div>
               </div>
            </motion.div>

            {/* Right Col: Unified Intelligent Form */}
            <motion.div 
              variants={m.stagger} 
              initial="hidden" 
              animate="visible"
              className="flex flex-col justify-center py-8 lg:py-0"
            >
              <motion.div variants={m.fadeUp} className="mb-12">
                 <h2 className="text-display-sm font-display text-brand-black mb-4">Initial Consultation</h2>
                 <p className="text-body font-sans text-brand-muted">Fields are dynamically adjusted based on your enquiry type.</p>
              </motion.div>

              <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Global Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={m.fadeUp} className="flex flex-col border-b border-brand-border pb-2">
                    <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Your Name</label>
                    <input type="text" className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans" required />
                  </motion.div>
                  <motion.div variants={m.fadeUp} className="flex flex-col border-b border-brand-border pb-2">
                    <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans" required />
                  </motion.div>
                </div>

                {/* Inquiry Selector */}
                <motion.div variants={m.fadeUp} className="flex flex-col border-b border-brand-border pb-2">
                  <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Nature of Engagement</label>
                  <Select onValueChange={(val) => setInquiryType(val)}>
                    <SelectTrigger className="w-full bg-transparent border-none text-brand-black focus:ring-0 p-0 h-auto text-body font-sans shadow-none rounded-none">
                      <SelectValue placeholder="How may we collaborate?" />
                    </SelectTrigger>
                    <SelectContent className="bg-brand-white border border-brand-border">
                      <SelectItem value="speaking">Speaking Engagement</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="community">Pink Circle Community</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                {/* Dynamic Fields Section */}
                <AnimatePresence mode="wait">
                  {inquiryType && (
                    <motion.div
                      key={inquiryType}
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-8">
                        {inquiryType === 'speaking' && (
                          <div className="flex flex-col border-b border-brand-border pb-2">
                            <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Proposed Event Date</label>
                            <input type="date" className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans" />
                          </div>
                        )}
                        {inquiryType === 'media' && (
                          <div className="flex flex-col border-b border-brand-border pb-2">
                            <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Publication / Network Name</label>
                            <input type="text" className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans" />
                          </div>
                        )}
                        {inquiryType === 'partnership' && (
                          <div className="flex flex-col border-b border-brand-border pb-2">
                             <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Organization Name</label>
                             <input type="text" className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans" />
                          </div>
                        )}
                        <div className="flex flex-col border-b border-brand-border pb-2">
                          <label className="text-label text-brand-gold uppercase tracking-widest mb-2">Project Brief / Message</label>
                          <textarea rows={4} className="bg-transparent border-none text-brand-black focus:outline-none py-2 font-sans resize-none" placeholder="Details of your request..." required />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div variants={m.fadeUp}>
                   <button type="submit" className="w-full bg-brand-black text-brand-white py-5 px-10 font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-xl group">
                     Dispatch Request
                     <span className="text-brand-gold ml-2 transition-transform duration-500 group-hover:translate-x-2 inline-block">→</span>
                   </button>
                   <p className="text-[10px] text-brand-muted font-sans uppercase tracking-widest mt-6 text-center">Standard Response Metric: 48 — 72 Hours</p>
                </motion.div>

              </form>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* Social Strip */}
      <SectionWrapper bg="black" className="py-24 border-t border-brand-gold/20">
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            {['Instagram', 'Twitter / X', 'LinkedIn', 'Facebook'].map((social) => (
              <a key={social} href="#" className="font-sans text-label text-brand-white uppercase tracking-[0.2em] hover:text-brand-gold transition-colors">{social}</a>
            ))}
         </div>
      </SectionWrapper>

    </PageTransition>
  )
}
