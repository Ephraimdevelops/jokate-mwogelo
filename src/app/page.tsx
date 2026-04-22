'use client'
import React, { useState } from 'react'
import { PageTransition } from '@/components/brand/layout/PageTransition'
import { HeroSlider } from '@/components/brand/hero/HeroSlider'
import { BriefBio } from '@/components/brand/sections/BriefBio'
import { InitiativesTeaser } from '@/components/brand/sections/InitiativesTeaser'
import { LatestFeed } from '@/components/brand/sections/LatestFeed'
import { NewsletterCta } from '@/components/brand/sections/NewsletterCta'
import { HomeModals } from '@/components/brand/sections/HomeModals'
import { ProofBar } from '@/components/brand/sections/ProofBar'

const galleryImages = [
  { src: '/images/jokate-white-suit-2.png', alt: 'Jokate Mwegelo addressing the UN Commission on the Status of Women, New York, March 2025', label: 'UN CSW69, New York', category: 'Diplomacy · 2025' },
  { src: '/images/jokate-rally.jpg', alt: 'Political rally in Kisarawe with young constituents', label: 'Kisarawe Community Building', category: 'Governance · 2019' },
  { src: '/images/jokate-brown-suit-full.jpg', alt: 'Forbes Africa 30 Under 30 coverage portrait', label: 'Forbes Africa', category: 'Accolades · 2017' },
  { src: '/images/jokate-black-suit.png', alt: 'Speaking at the Liberation Youth Summit, South Africa', label: 'Liberation Youth Summit, SA', category: 'Leadership · 2024' },
  { src: '/images/features-team.png', alt: 'Mentorship event with secondary school girls in Dar es Salaam', label: 'Kidoti Mentorship', category: 'Empowerment · 2022' },
  { src: '/images/jokate-brown-suit-half.jpg', alt: 'Official UWT Secretary General Swearing-in Portrait', label: 'UWT Secretary General', category: 'Political · 2023' }
]

type ModalType = 'donation' | 'partnership' | 'newsletter' | null

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <HeroSlider />
      
      {/* Highlights (from media page) */}
      <div className="py-4 border-b border-brand-border bg-brand-surface">
         <ProofBar />
      </div>

      {/* 2. Brief Bio (Dark Section) */}
      <BriefBio onOpenModal={(type) => setActiveModal(type)} />
      
      {/* 3. Initiatives / Movements (Pink Circle, Organisation, Book) */}
      <InitiativesTeaser onOpenModal={(type) => setActiveModal(type)} />

      {/* 6. Media / Latest Posts */}
      <LatestFeed />

      {/* 7. Newsletter Cta (Pink Circle Community) */}
      <NewsletterCta />

      {/* Unified Popup System */}
      <HomeModals 
        type={activeModal} 
        onClose={() => setActiveModal(null)} 
      />
    </PageTransition>
  )
}
