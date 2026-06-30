import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  const filter = useTransform(progress, range, ['blur(8px)', 'blur(0px)'])
  return (
    <motion.span
      style={{ opacity, filter }}
      className="inline-block mr-[0.25em] will-change-[opacity,filter]"
    >
      {children}
    </motion.span>
  )
}

/**
 * Reveals text word-by-word as it scrolls through the viewport: each word
 * brightens (0.15 → 1) and sharpens (blur → none) linked to scroll progress.
 */
export default function ScrollRevealText({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.55'],
  })

  const words = text.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length
        const end = (i + 1) / words.length
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {w}
          </Word>
        )
      })}
    </p>
  )
}
