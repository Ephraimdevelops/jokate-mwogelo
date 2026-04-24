'use client'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { SectionWrapper } from '@/components/brand/layout/SectionWrapper'
import { Container } from '@/components/brand/layout/Container'
import { motion } from 'framer-motion'
import * as m from '@/lib/motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, BookOpen, MessageSquare, CheckCircle2, ArrowRight, Sparkles, Globe, Award } from 'lucide-react'
import { useState } from 'react'
import { useQuery, useMutation } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { toast } from 'sonner'

export default function Community() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Tanzania',
    role: 'Student'
  })

  const joinMutation = useMutation(api.community.join)
  const mentors = useQuery(api.community.getFeaturedMentors) || []
  const memberCount = useQuery(api.community.getMemberCount) || 0

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await joinMutation({
        ...formData,
        source: 'community_page'
      })
      toast.success("Welcome to the Nguvu Circle!")
      setFormData({ name: '', email: '', country: 'Tanzania', role: 'Student' })
    } catch (err) {
      toast.error("Failed to join. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/jokate-rally.jpg" 
            alt="Nguvu Circle Movement" 
            fill 
            className="object-cover opacity-40 grayscale-[0.5]" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black z-10" />
        </div>
        
        <Container className="relative z-20">
           <motion.div 
             variants={m.stagger} 
             initial="hidden" 
             animate="visible" 
             className="flex flex-col items-center text-center max-w-[900px] mx-auto px-6"
           >
             <motion.div variants={m.fadeUp} className="flex items-center gap-3 mb-8 bg-brand-accent/20 border border-brand-accent/30 px-4 py-2 rounded-full">
               <Sparkles className="text-brand-accent" size={14} />
               <span className="text-brand-accent font-sans text-[10px] uppercase tracking-[0.3em] font-bold">A Global Sisterhood</span>
             </motion.div>
             
             <motion.h1 variants={m.fadeUp} className="text-display-xl md:text-display-2xl font-display text-brand-white leading-[0.9] mb-8">
               Nguvu Circle.
             </motion.h1>
             
             <motion.p variants={m.fadeUp} className="text-display-sm font-display text-brand-white italic mb-12 opacity-90">
               &quot;Where Tanzania&apos;s girls become leaders.&quot;
             </motion.p>

             <motion.div variants={m.fadeUp} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <a href="#join" className="bg-brand-accent text-brand-white px-12 py-5 font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 shadow-2xl">
                  Join The Movement →
                </a>
                <Link href="/partner" className="bg-transparent text-brand-white border border-brand-white/20 px-12 py-5 font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-brand-white/10 transition-all duration-500">
                  I am a Sponsor
                </Link>
             </motion.div>
           </motion.div>
        </Container>

        <div className="absolute bottom-12 left-0 w-full z-20 flex justify-center">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="flex gap-12 text-brand-white/40 text-[10px] uppercase tracking-[0.4em]"
           >
              <span>Mentorship</span>
              <span className="text-brand-accent">·</span>
              <span>Education</span>
              <span className="text-brand-accent">·</span>
              <span>Network</span>
           </motion.div>
        </div>
      </section>

      {/* 2. THE WHY (The Pitch) */}
      <SectionWrapper bg="white" className="py-24 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5">
            <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">The Vision</span>
            <h2 className="text-display-md font-display text-brand-black mb-8 leading-[1.1]">
              From Audience to Organisation.
            </h2>
            <div className="w-16 h-[1px] bg-brand-accent mb-8" />
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-body-lg text-brand-black font-medium leading-relaxed">
              Jokate Mwegelo has a nation waiting to be organised. Nguvu Circle takes inspiration and converts it into action, turning a passive audience into East Africa&apos;s largest network of emerging women leaders.
            </p>
            <p className="text-body text-brand-muted leading-relaxed">
              We believe that leadership shouldn&apos;t have a price tag. Nguvu Circle is East Africa&apos;s first sponsor-funded leadership community for girls and women — built on mentorship, education, and sisterhood. The sponsor pays. The girl benefits. Jokate leads.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. THE THREE PILLARS */}
      <SectionWrapper bg="surface" className="py-24 lg:py-40">
        <div className="text-center mb-20">
          <h2 className="text-display-md font-display text-brand-black mb-4">The Architecture of Growth</h2>
          <p className="text-brand-muted uppercase tracking-widest text-[10px] font-bold">Three Pillars. One Mission.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Mentorship", 
              icon: Users, 
              desc: "Connecting girls to role models across all sectors of society.",
              benefit: "Direct access to industry veterans."
            },
            { 
              title: "Education", 
              icon: BookOpen, 
              desc: "Practical leadership skills, knowledge, and tools for the 21st century.",
              benefit: "Curated curriculum & resources."
            },
            { 
              title: "Network", 
              icon: Globe, 
              desc: "A safe space for girls and women to connect and grow together.",
              benefit: "East Africa's largest female collective."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={pillar.title}
              variants={m.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-brand-white p-12 border border-brand-border hover:border-brand-accent transition-all duration-500 group"
            >
              <pillar.icon className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-display-xs font-display text-brand-black mb-4">{pillar.title}</h3>
              <p className="text-brand-muted text-body-sm mb-8 leading-relaxed">{pillar.desc}</p>
              <div className="pt-6 border-t border-brand-border">
                <span className="text-[10px] uppercase tracking-widest text-brand-black font-bold">{pillar.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. THE TIERS */}
      <SectionWrapper bg="black" className="py-24 lg:py-40">
        <div className="max-w-[800px] mb-20">
          <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">Membership Tiers</span>
          <h2 className="text-display-md text-brand-white font-display mb-8">Zero barrier. Infinite potential.</h2>
          <p className="text-brand-white/60 text-body">
            Sponsor-funded means every girl in Tanzania can join. We offer three tiers of growth based on your commitment and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-brand-white/10">
          {[
            {
              tier: "Nguvu Member",
              status: "Open to all",
              desc: "The entry point for every girl who dares to lead.",
              features: ["Weekly Nguvu Letter", "Community Feed Access", "Monthly Open Circle", "Digital Badge"],
              cta: "Join Free",
              accent: false
            },
            {
              tier: "Nguvu Leader",
              status: "Application Required",
              desc: "For those showing consistent leadership potential.",
              features: ["Small-group Mentorship", "Quarterly Challenges", "Certificate of Completion", "Priority Event Access"],
              cta: "Apply for Cohort",
              accent: true
            },
            {
              tier: "Nguvu Inner",
              status: "Invitation Only",
              desc: "The innermost ring of emerging African leaders.",
              features: ["Direct Direct Sessions with Jokate", "Private Inner Channel", "Mentor Matching", "Profile Features"],
              cta: "Learn More",
              accent: false
            }
          ].map((t, i) => (
            <div key={t.tier} className={`p-12 flex flex-col h-full ${i < 2 ? 'lg:border-r border-brand-white/10' : ''} ${t.accent ? 'bg-brand-white/5' : ''}`}>
              <div className="mb-12">
                 <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 border ${t.accent ? 'border-brand-accent text-brand-accent' : 'border-brand-white/20 text-brand-white/60'}`}>
                   {t.status}
                 </span>
                 <h3 className="text-display-sm text-brand-white font-display mt-6">{t.tier}</h3>
                 <p className="text-brand-white/50 text-body-sm mt-4">{t.desc}</p>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-brand-white/80 text-[12px] uppercase tracking-wider">
                    <CheckCircle2 size={14} className="text-brand-accent" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ${t.accent ? 'bg-brand-accent text-brand-white hover:bg-brand-white hover:text-brand-black' : 'border border-brand-white/20 text-brand-white hover:bg-brand-white hover:text-brand-black'}`}>
                {t.cta}
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. THE MENTOR WALL */}
      <SectionWrapper bg="white" className="py-24 lg:py-40">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-[600px]">
             <span className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">The Mentors</span>
             <h2 className="text-display-md text-brand-black font-display leading-tight">The Engines of Progress.</h2>
          </div>
          <p className="text-brand-muted text-[11px] uppercase tracking-widest font-bold max-w-[300px]">
            Guided by Tanzanian excellence across governance, business, and education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mentors.map((mentor) => (
            <motion.div key={mentor._id} variants={m.fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
              <div className="relative aspect-[4/5] bg-brand-surface mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <Image src={mentor.photoUrl || '/images/jokate-black-suit.png'} alt={mentor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <h4 className="text-display-xs font-display text-brand-black mb-1">{mentor.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-3">{mentor.title}</p>
              <p className="text-brand-muted text-[12px] font-sans line-clamp-2">{mentor.bio}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. JOIN FORM */}
      <SectionWrapper id="join" bg="plum" className="py-24 lg:py-40 text-brand-white relative">
         <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-10 grayscale pointer-events-none">
            <Image src="/images/jokate-rally.jpg" alt="" fill className="object-cover" />
         </div>

         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
               <h2 className="text-display-md md:text-display-lg font-display text-brand-white mb-8">Ready to step forward?</h2>
               <p className="text-brand-white/70 text-body-lg mb-12">
                 Join 10,000+ girls and women already in the Circle. Membership is free, permanent, and the first step toward your leadership mandate.
               </p>

               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                        <Globe size={20} />
                     </div>
                     <div>
                        <span className="block text-brand-white font-bold uppercase tracking-widest text-[11px]">{memberCount} Members</span>
                        <span className="text-brand-white/40 text-[10px] uppercase tracking-widest">Active across East Africa</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-full border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                        <Award size={20} />
                     </div>
                     <div>
                        <span className="block text-brand-white font-bold uppercase tracking-widest text-[11px]">Sponsor Funded</span>
                        <span className="text-brand-white/40 text-[10px] uppercase tracking-widest">Always free for members</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-brand-black/40 backdrop-blur-xl border border-brand-white/10 p-10 lg:p-16">
               <form className="space-y-8" onSubmit={handleJoin}>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Full Name</label>
                     <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:outline-none focus:border-brand-accent transition-colors font-sans text-brand-white"
                        placeholder="e.g. Maria Joseph"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Official Email</label>
                     <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:outline-none focus:border-brand-accent transition-colors font-sans text-brand-white"
                        placeholder="name@example.com"
                     />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">Country</label>
                        <select 
                           value={formData.country}
                           onChange={e => setFormData({...formData, country: e.target.value})}
                           className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:outline-none focus:border-brand-accent transition-colors font-sans text-brand-white"
                        >
                           <option value="Tanzania">Tanzania</option>
                           <option value="Kenya">Kenya</option>
                           <option value="Uganda">Uganda</option>
                           <option value="Rwanda">Rwanda</option>
                           <option value="Other">Other</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">I am a...</label>
                        <select 
                           value={formData.role}
                           onChange={e => setFormData({...formData, role: e.target.value})}
                           className="w-full bg-transparent border-b border-brand-white/20 py-4 focus:outline-none focus:border-brand-accent transition-colors font-sans text-brand-white"
                        >
                           <option value="Student">Student</option>
                           <option value="Professional">Professional</option>
                           <option value="Entrepreneur">Entrepreneur</option>
                           <option value="Educator">Educator</option>
                        </select>
                     </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-brand-accent text-brand-white py-6 font-sans text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-brand-white hover:text-brand-black transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Joining Circle...' : 'Join Nguvu Circle — It\'s Free'}
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-[9px] text-brand-white/30 text-center uppercase tracking-widest">By joining, you agree to receive the weekly Nguvu Letter.</p>
               </form>
            </div>
         </div>
      </SectionWrapper>

      {/* 7. SPONSOR CTA */}
      <SectionWrapper bg="black" className="py-24 text-center">
         <div className="max-w-[700px] mx-auto">
            <h2 className="text-display-sm md:text-display-md font-display text-brand-white mb-8">Fund the next generation.</h2>
            <p className="text-brand-white/50 mb-12">
               Nguvu Circle is free for every member because sponsors believe in Tanzania&apos;s girls. Join us in building the most powerful leadership network in Africa.
            </p>
            <Link href="/partner" className="text-brand-accent uppercase tracking-widest text-label hover:text-brand-white transition-colors">
               Become a Partner →
            </Link>
         </div>
      </SectionWrapper>
    </PageTransition>
  )
}
