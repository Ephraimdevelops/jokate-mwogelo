'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { SectionWrapper } from '../layout/SectionWrapper'
import { fadeUp, stagger } from '@/lib/motion'

export function InitiativesTeaser({ onOpenModal }: { onOpenModal: (type: 'newsletter') => void }) {
  const movements = [
    {
      name: 'Governance Initiatives',
      category: 'The Work',
      image: '/images/jokate-rally.jpg',
      desc: 'Advancing educational infrastructure and regional economic empowerment programs.',
      href: '/initiatives'
    },
    {
      name: 'Jokate Pink Circle',
      category: 'The Community',
      image: '/images/jokate-brown-suit-full.jpg',
      desc: 'An exclusive update hub and support network for young women building the next Africa.',
      onClick: () => onOpenModal('newsletter')
    },
    {
      name: 'The Organisation',
      category: 'The Non-Profit',
      image: '/images/SaveVid.Net_673101699_18594527206035706_2246371246811234223_n.jpg',
      desc: 'Mobilizing resources and strategic partnerships for sustainable community impact.',
      href: '/impact'
    },
    {
      name: 'The Art of Grace',
      category: 'The Publication',
      image: '/images/bokkd.png',
      desc: 'Strategic insights into leadership, power, and the application of grace in governance.',
      href: '/book'
    },
  ]

  return (
    <SectionWrapper bg="surface" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[700px]"
        >
          <motion.span variants={fadeUp} className="text-brand-accent font-sans text-label uppercase tracking-widest mb-6 block">
            Impact & Empowerment
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-md lg:text-display-lg text-brand-black mb-8 leading-[1.1]"
          >
            Movements Driving Systemic Change.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-body-lg text-brand-muted leading-relaxed"
          >
            Proven frameworks delivering measurable results across our communities. From grassroots mobilization to strategic policy leadership, every initiative is a building block for Tanzanian excellence today.
          </motion.p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-brand-border">
        {movements.map((move, i) => {
          const Content = (
            <div className={`relative h-[450px] md:h-[550px] group overflow-hidden block 
              ${i % 2 === 0 ? 'md:border-r border-brand-border' : ''} 
              ${i < 2 ? 'border-b border-brand-border' : ''}`}>
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <Image src={move.image} alt={move.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/40 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              </div>

              <div className="absolute inset-0 p-8 lg:p-12 z-20 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="font-sans text-label text-brand-accent uppercase tracking-widest mb-4 block opacity-80">
                    {move.category}
                  </span>
                  <h3 className="font-display text-[24px] md:text-[32px] text-brand-white leading-tight mb-4">
                    {move.name}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="font-sans text-body-sm text-brand-white/80 transition-all duration-500 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 max-w-[280px]">
                      {move.desc}
                    </p>
                  </div>
                  <span className="inline-flex mt-6 text-brand-accent text-[16px] leading-[0] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    →
                  </span>
                </motion.div>
              </div>
            </div>
          )

          if ('onClick' in move) {
            return (
              <button key={i} onClick={move.onClick} className="text-left w-full h-full">
                {Content}
              </button>
            )
          }

          return (
            <Link href={move.href as string} key={i}>
              {Content}
            </Link>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
