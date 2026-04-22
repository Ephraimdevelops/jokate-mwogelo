'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/motion'
import { useState } from 'react'
import Image from 'next/image'
import { toast } from 'sonner'
import { Send, MapPin, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Your message has been dispatched successfully.')
    }, 1500)
  }

  return (
    <PageTransition>
      <section className="relative w-full min-h-screen bg-brand-white pt-32 pb-16 lg:pt-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Col: Office Info & Portrait */}
            <div className="lg:col-span-5 flex flex-col">
              <motion.div 
                variants={fadeUp} 
                initial="hidden" 
                animate="visible"
                className="mb-12"
              >
                <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Contact the Office</span>
                <h1 className="font-display text-display-xl leading-[1.0] mb-8 text-brand-black">Let&apos;s build the vision.</h1>
                <p className="font-sans text-body-lg text-brand-muted leading-relaxed max-w-[450px]">
                  Direct access to the executive office for speaking engagements, media requests, and strategic partnerships.
                </p>
              </motion.div>

              <div className="space-y-10 mb-16">
                {[
                  { icon: Mail, label: 'Official Correspondence', val: 'office@jokatemwegelo.me' },
                  { icon: MapPin, label: 'Secretariat Location', val: 'Dar es Salaam, Tanzania' },
                  { icon: Clock, label: 'Response Protocol', val: 'Standard: 48 — 72 Hours' },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-brand-surface flex items-center justify-center rounded-full group-hover:bg-brand-accent/10 transition-colors">
                       <item.icon className="text-brand-accent" size={20} />
                    </div>
                    <div>
                      <span className="text-label text-brand-accent uppercase tracking-widest block mb-1">{item.label}</span>
                      <p className="text-display-xs font-display text-brand-black">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto relative aspect-square w-full bg-brand-surface overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <Image src="/images/jokate-black-suit.png" alt="Jokate Mwegelo" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay" />
              </div>
            </div>

            {/* Right Col: Executive Form */}
            <div className="lg:col-span-7 bg-brand-surface p-8 lg:p-16 border border-brand-border">
              <motion.div variants={stagger} initial="hidden" animate="visible" className="h-full flex flex-col">
                <div className="mb-16">
                   <h2 className="text-display-md font-display text-brand-black mb-4">Initial Consultation</h2>
                   <p className="text-body font-sans text-brand-muted">Please provide details regarding the nature of your inquiry.</p>
                </div>

                <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col border-b border-brand-border pb-4 group focus-within:border-brand-accent transition-colors">
                      <label className="text-label text-brand-accent uppercase tracking-widest mb-4">Full Name</label>
                      <input type="text" className="bg-transparent border-none text-brand-black focus:outline-none text-display-xs font-display" placeholder="E.g. Dr. Elias Msuya" required />
                    </div>
                    <div className="flex flex-col border-b border-brand-border pb-4 group focus-within:border-brand-accent transition-colors">
                      <label className="text-label text-brand-accent uppercase tracking-widest mb-4">Email Address</label>
                      <input type="email" className="bg-transparent border-none text-brand-black focus:outline-none text-display-xs font-display" placeholder="name@organization.com" required />
                    </div>
                  </div>

                  <div className="flex flex-col border-b border-brand-border pb-4 group focus-within:border-brand-accent transition-colors">
                    <label className="text-label text-brand-accent uppercase tracking-widest mb-4">Nature of Engagement</label>
                    <Select onValueChange={(val) => setInquiryType(val)}>
                      <SelectTrigger className="w-full bg-transparent border-none text-brand-black focus:ring-0 p-0 h-auto text-display-xs font-display shadow-none rounded-none">
                        <SelectValue placeholder="Select Inquiry Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-brand-white border border-brand-border">
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="partnership">Strategic Partnership</SelectItem>
                        <SelectItem value="community">Pink Circle Community</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <AnimatePresence mode="wait">
                    {inquiryType && (
                      <motion.div
                        key={inquiryType}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex flex-col gap-12"
                      >
                        {inquiryType === 'speaking' && (
                          <div className="flex flex-col border-b border-brand-border pb-4 group focus-within:border-brand-accent transition-colors">
                            <label className="text-label text-brand-accent uppercase tracking-widest mb-4">Proposed Event Date</label>
                            <input type="date" className="bg-transparent border-none text-brand-black focus:outline-none text-display-xs font-display" />
                          </div>
                        )}
                        <div className="flex flex-col border-b border-brand-border pb-4 group focus-within:border-brand-accent transition-colors">
                          <label className="text-label text-brand-accent uppercase tracking-widest mb-4">Detailed Brief</label>
                          <textarea rows={4} className="bg-transparent border-none text-brand-black focus:outline-none text-display-xs font-display resize-none" placeholder="Provide context for your request..." required />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-auto">
                     <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-black text-brand-white py-6 px-10 font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-500 shadow-xl group disabled:opacity-50 flex items-center justify-center gap-4"
                     >
                       {isSubmitting ? 'Dispatching...' : 'Dispatch Inquiry'}
                       {!isSubmitting && <Send size={16} className="text-brand-accent group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />}
                     </button>
                  </div>

                </form>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>

      {/* Social Strip */}
      <SectionWrapper bg="black" className="py-16 border-t border-brand-accent/20">
         <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
            {['Instagram', 'X', 'LinkedIn', 'Facebook'].map((social) => (
              <a key={social} href="#" className="font-sans text-label text-brand-white uppercase tracking-[0.2em] hover:text-brand-accent transition-colors">{social}</a>
            ))}
         </div>
      </SectionWrapper>
    </PageTransition>
  )
}
