'use client'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type LinkItem = { name: string; href: string }

export function MobileMenu({ isOpen, onClose, links }: { isOpen: boolean; onClose: () => void; links: LinkItem[] }) {
  const pathname = usePathname()

  // Framer Motion Variants
  const drawerVariants: Variants = {
    hidden: { x: '100%', transition: { duration: 0.4, ease: 'easeIn' } },
    visible: { x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  }

  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Actionable Backdrop Overlay */}
          <motion.div 
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-brand-black/60 cursor-pointer"
            onClick={onClose}
          />
          
          {/* Side Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute right-0 top-0 bottom-0 w-full sm:w-[480px] bg-brand-black flex flex-col p-8 lg:p-12 overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 font-sans text-label tracking-widest uppercase text-brand-white hover:text-brand-accent transition-colors duration-300"
            >
              ✕ CLOSE
            </button>

            {/* Header Content */}
            <div className="mt-12 lg:mt-16 mb-8">
               <h2 className="font-display text-display-lg text-brand-white leading-none mb-2">Jokate Mwegelo</h2>
               <p className="font-sans text-label text-brand-accent uppercase tracking-widest">
                 Secretary General · Leader · Advocate
               </p>
            </div>

            <div className="w-full h-[1px] bg-brand-accent/20 mb-8" />

            {/* Navigation Links */}
            <motion.nav 
               variants={listVariants}
               initial="hidden"
               animate="visible"
               exit="hidden"
               className="flex flex-col gap-6"
            >
               {links.map((link) => {
                 const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                 return (
                   <motion.div key={link.name} variants={itemVariants}>
                     <Link 
                        href={link.href} 
                        onClick={onClose} 
                        className={`group font-display text-display-sm transition-colors duration-300 flex items-center ${isActive ? 'text-brand-accent' : 'text-brand-white'}`}
                     >
                        <span className="group-hover:text-brand-accent transition-colors">{link.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 text-brand-accent text-[20px] leading-[0] ml-2 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          →
                        </span>
                     </Link>
                   </motion.div>
                 )
               })}
            </motion.nav>

            <div className="w-full h-[1px] bg-brand-accent/20 my-8" />

            {/* Footer / CTA Actions */}
            <div className="mt-auto flex flex-col gap-8">
               <Link href="/book" onClick={onClose} className="font-sans text-label text-brand-accent uppercase tracking-widest hover:text-brand-white transition-colors duration-300 flex items-center">
                 Join the movement <span className="text-[14px] leading-[0] ml-1">→</span>
               </Link>

               <div className="flex gap-6">
                 <a href="#" className="font-sans text-label text-brand-white uppercase tracking-widest hover:text-brand-accent transition-colors duration-300">ig</a>
                 <a href="#" className="font-sans text-label text-brand-white uppercase tracking-widest hover:text-brand-accent transition-colors duration-300">tw</a>
                 <a href="#" className="font-sans text-label text-brand-white uppercase tracking-widest hover:text-brand-accent transition-colors duration-300">f</a>
               </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
