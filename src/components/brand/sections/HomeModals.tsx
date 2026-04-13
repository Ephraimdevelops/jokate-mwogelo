'use client'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

type ModalType = 'donation' | 'partnership' | 'newsletter' | null

interface HomeModalsProps {
  type: ModalType
  onClose: () => void
}

export function HomeModals({ type, onClose }: HomeModalsProps) {
  const isOpen = type !== null

  const content = {
    donation: {
      title: 'Support the Mission',
      desc: 'Your contribution directly funds regional empowerment programs, education infrastructure, and mentorship for the next generation.',
      image: '/images/jokate-rally.jpg',
      cta: 'Complete Donation',
      fields: [
        { label: 'Amount (USD)', type: 'number', placeholder: '50.00' },
        { label: 'Email Address', type: 'email', placeholder: 'hq@jokatemwegelo.me' },
      ]
    },
    partnership: {
      title: 'Partner with the Vision',
      desc: 'For institutions and brands looking to align with genuine governance and empowerment projects across East Africa.',
      image: '/images/jokate-white-suit.png',
      cta: 'Request Partnership Deck',
      fields: [
        { label: 'Organisation Name', type: 'text', placeholder: 'Global Foundation' },
        { label: 'Project Area', type: 'text', placeholder: 'Education / Healthcare / Policy' },
      ]
    },
    newsletter: {
      title: 'Join the Pink Circle',
      desc: 'The exclusive community for ambitious young women. Get direct updates, leadership essays, and first access to programs.',
      image: '/images/jokate-brown-suit-full.jpg',
      cta: 'Join the Circle',
      fields: [
        { label: 'Full Name', type: 'text', placeholder: 'Jokate Mwegelo' },
        { label: 'Official Email', type: 'email', placeholder: 'circle@jokate.me' },
      ]
    }
  }

  const active = type ? content[type] : null

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-brand-white">
        {active && (
          <div className="flex flex-col md:flex-row h-full min-h-[500px]">
            {/* Left: Image */}
            <div className="md:w-5/12 relative h-64 md:h-auto">
              <Image 
                src={active.image} 
                alt={active.title} 
                fill 
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
            </div>

            {/* Right: Form */}
            <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <DialogHeader className="mb-8">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] mb-2 block">
                  Engagement Protocol
                </span>
                <DialogTitle className="font-display text-[32px] md:text-[42px] text-brand-black leading-tight mb-4">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="font-sans text-brand-muted text-body leading-relaxed">
                  {active.desc}
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {active.fields.map((f, i) => (
                  <div key={i} className="flex flex-col border-b border-brand-border pb-2">
                    <label className="text-[10px] font-sans uppercase tracking-widest text-brand-muted mb-2">
                      {f.label}
                    </label>
                    <input 
                      type={f.type} 
                      placeholder={f.placeholder}
                      className="bg-transparent border-none text-brand-black focus:outline-none py-1 font-sans placeholder:text-brand-muted/30"
                    />
                  </div>
                ))}

                <button 
                  type="submit" 
                  className="w-full bg-brand-black text-brand-white py-5 px-10 font-sans text-[12px] uppercase tracking-[0.2em] hover:bg-brand-gold transition-all duration-500 shadow-xl mt-8"
                >
                  {active.cta}
                </button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
