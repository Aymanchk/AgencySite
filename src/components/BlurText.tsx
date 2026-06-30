import { motion } from 'framer-motion'
import { Fragment } from 'react'
import type { Variants } from 'framer-motion'

export type Segment = {
  text: string
  serif?: boolean
  /** Force a line break before this segment. */
  br?: boolean
}

type BlurTextProps = {
  segments: Segment[]
  className?: string
  /** 'mount' animates immediately; 'scroll' animates when in view (once). */
  trigger?: 'mount' | 'scroll'
  delay?: number
  stagger?: number
}

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

const word: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 50 },
  visible: {
    opacity: [0, 0.5, 1],
    filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
    y: [50, -5, 0],
    transition: { duration: 0.7, times: [0, 0.5, 1], ease: 'easeOut' },
  },
}

export default function BlurText({
  segments,
  className,
  trigger = 'mount',
  delay = 0.1,
  stagger = 0.08,
}: BlurTextProps) {
  const triggerProps =
    trigger === 'mount'
      ? { animate: 'visible' as const }
      : {
          whileInView: 'visible' as const,
          viewport: { once: true, margin: '-60px' },
        }

  return (
    <motion.span
      className={className}
      variants={container(delay, stagger)}
      initial="hidden"
      {...triggerProps}
    >
      {segments.map((seg, si) => {
        const words = seg.text.split(' ').filter(Boolean)
        return (
          <Fragment key={si}>
            {seg.br && <br />}
            {words.map((w, wi) => {
              const needsSpace =
                wi < words.length - 1 || si < segments.length - 1
              return (
                <Fragment key={`${si}-${wi}`}>
                  <motion.span
                    variants={word}
                    className={
                      seg.serif ? 'font-serif italic font-normal' : undefined
                    }
                    style={{ display: 'inline-block', willChange: 'transform' }}
                  >
                    {w}
                  </motion.span>
                  {needsSpace ? ' ' : null}
                </Fragment>
              )
            })}
          </Fragment>
        )
      })}
    </motion.span>
  )
}
