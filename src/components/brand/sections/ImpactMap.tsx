'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const hotspots = [
  { 
    id: 'kisarawe', 
    name: 'Kisarawe', 
    x: '65%', y: '65%', 
    title: 'The Kisarawe Legacy', 
    desc: 'Jokate Mwegelo Girls Secondary School.',
    image: '/images/jokate-rally.jpg'
  },
  { 
    id: 'temeke', 
    name: 'Temeke', 
    x: '70%', y: '60%', 
    title: 'The Temeke Model', 
    desc: 'Formalizing youth economic power.',
    image: '/images/features-team.png'
  },
  { 
    id: 'korogwe', 
    name: 'Korogwe', 
    x: '55%', y: '40%', 
    title: 'Regional Governance', 
    desc: 'Structural efficiency in district leadership.',
    image: '/images/jokate-white-suit.png'
  },
]

export function ImpactMap() {
  const [active, setActive] = useState<typeof hotspots[0] | null>(null)

  return (
    <div className="relative w-full max-w-[800px] aspect-square lg:aspect-video flex items-center justify-center bg-brand-surface border border-brand-border overflow-hidden group">
      {/* Tanzania Simplified SVG */}
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full p-12 opacity-20 transition-opacity duration-700 group-hover:opacity-40"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
      >
        <path d="M150,50 L350,50 L450,200 L400,450 L100,450 L50,250 Z" /> {/* Very simplified TZ shape */}
      </svg>

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <button
          key={spot.id}
          className="absolute w-4 h-4 rounded-full bg-brand-accent cursor-pointer z-20 group/spot"
          style={{ left: spot.x, top: spot.y }}
          onMouseEnter={() => setActive(spot)}
          onMouseLeave={() => setActive(null)}
        >
          <span className="absolute inset-0 rounded-full bg-brand-accent animate-ping opacity-40" />
          
          {/* Label */}
          <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-label text-brand-black opacity-0 group-hover/spot:opacity-100 transition-opacity">
            {spot.name}
          </span>
        </button>
      ))}

      {/* Pop-up Window */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-30 bottom-12 right-12 w-[300px] bg-brand-white border border-brand-border p-6 shadow-2xl pointer-events-none"
          >
            <div className="relative aspect-video mb-4 overflow-hidden bg-brand-surface">
               <Image src={active.image} alt={active.name} fill className="object-cover" />
            </div>
            <h4 className="font-display text-display-sm text-brand-black mb-2">{active.title}</h4>
            <p className="font-sans text-body-sm text-brand-muted">{active.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-12 left-12">
        <h3 className="font-display text-display-sm text-brand-black mb-2">Regional Mandate</h3>
        <p className="font-sans text-label text-brand-muted uppercase tracking-widest">Interactive Footprint</p>
      </div>
    </div>
  )
}
