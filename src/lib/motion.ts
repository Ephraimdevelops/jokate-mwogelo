import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
}

export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export const slideDown: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

export const kenBurns: Variants = {
  initial: { scale: 1.0 },
  animate: {
    scale: 1.06,
    transition: { duration: 8, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
}

export const navBg = {
  transparent: { backgroundColor: 'rgba(248,247,244,0)',   backdropFilter: 'blur(0px)'  },
  solid:       { backgroundColor: 'rgba(248,247,244,0.92)', backdropFilter: 'blur(12px)' },
}
