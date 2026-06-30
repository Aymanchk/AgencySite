import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type BlurInProps = {
  children: ReactNode
  delay?: number
  className?: string
  /** Animate on scroll into view (once) instead of on mount. */
  onScroll?: boolean
}

export default function BlurIn({
  children,
  delay = 0,
  className,
  onScroll = false,
}: BlurInProps) {
  const reveal = onScroll
    ? {
        whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
        viewport: { once: true, margin: '-80px' },
      }
    : { animate: { opacity: 1, filter: 'blur(0px)', y: 0 } }

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      {...reveal}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
