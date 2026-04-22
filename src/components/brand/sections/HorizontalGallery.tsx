'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export interface GalleryImage {
  src: string
  alt: string
  label?: string
  category?: string
}

export function HorizontalGallery({ images }: { images: GalleryImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  
  // Maps vertical page scroll to horizontal image movement
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-brand-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="pl-6 lg:pl-24 mb-12">
           <h2 className="font-display text-display-lg text-brand-white">A life in motion</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 lg:pl-24 will-change-transform">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-[80vw] md:w-[420px] h-[60vh] md:h-[560px] overflow-hidden group"
            >
              {img.src ? (
                 <motion.div
                   className="w-full h-full"
                   whileHover={{ scale: 1.04 }}
                   transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 >
                   <Image
                     src={img.src}
                     alt={img.alt}
                     fill
                     className="object-cover object-top"
                   />
                 </motion.div>
              ) : (
                 // Placeholder
                 <div className="w-full h-full bg-brand-surface/10 flex items-end p-8 border border-brand-white/10 group-hover:bg-brand-surface/20 transition-colors">
                    <span className="font-display text-[24px] text-brand-white/20">Image Placeholder</span>
                 </div>
              )}
              
              {img.label && (
                <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent pointer-events-none">
                  <p className="font-display text-display-sm text-brand-white leading-tight mb-2">{img.label}</p>
                  <p className="font-sans text-label text-brand-accent uppercase tracking-widest">{img.category}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
