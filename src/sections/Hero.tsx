import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import BlurIn from '../components/BlurIn'
import BlurText from '../components/BlurText'
import HlsVideo from '../components/HlsVideo'

const blobBreathe = {
  scale: [1, 1.08, 1],
}
const blobTransition = {
  duration: 8,
  ease: 'easeInOut' as const,
  repeat: Infinity,
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden bg-[#070612]"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={blobBreathe}
          transition={blobTransition}
          className="absolute"
          style={{
            bottom: '-80px',
            right: '-80px',
            width: 400,
            height: 400,
            background: '#4a1dff',
            filter: 'blur(120px)',
            opacity: 0.15,
            mixBlendMode: 'screen',
          }}
        />
        <motion.div
          animate={blobBreathe}
          transition={{ ...blobTransition, delay: 1 }}
          className="absolute"
          style={{
            bottom: '-60px',
            left: '-100px',
            width: 600,
            height: 300,
            background: '#1a0a8a',
            filter: 'blur(100px)',
            opacity: 0.12,
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Background HLS video */}
      <HlsVideo
        src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
        className="absolute inset-0 z-[1]"
        style={{
          marginLeft: '200px',
          transform: 'scale(1.2)',
          transformOrigin: 'left center',
          objectFit: 'cover',
          height: '100%',
          opacity: 0.35,
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] h-40"
        style={{ background: 'linear-gradient(to top, #070612, transparent)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10 w-full">
          <BlurIn delay={0}>
            <div className="rounded-full border border-white/20 backdrop-blur-sm px-4 py-2 inline-flex gap-2 items-center w-fit">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-sm text-white/80">
                Mobile · Web · Backend
              </span>
            </div>
          </BlurIn>

          <h1
            className="font-medium text-white"
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.85,
              letterSpacing: '-3px',
            }}
          >
            <BlurText
              delay={0.1}
              segments={[
                { text: 'We build digital' },
                { text: 'products that', br: true },
                { text: ' work.', serif: true, br: true },
              ]}
            />
          </h1>

          <BlurIn delay={0.6}>
            <p className="text-base text-white/55 max-w-md font-light">
              Three developers. One team. From idea to production.
            </p>
          </BlurIn>

          <BlurIn delay={0.8}>
            <div className="flex gap-4 flex-wrap items-center">
              <a
                href="#contact"
                className="glass glass-strong rounded-full px-7 py-3.5 text-sm font-medium text-white inline-block"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                See Our Work →
              </a>
            </div>
          </BlurIn>
        </div>
      </div>

      {/* Floating text (hidden on mobile) */}
      <BlurIn
        delay={1}
        onScroll={false}
        className="hidden md:block absolute bottom-8 left-8 z-10"
      >
        <p className="text-xs text-white/30 tracking-wider">
          // Three developers
        </p>
        <p className="text-xs text-white/20">Building from Bishkek.</p>
      </BlurIn>
      <BlurIn
        delay={1.1}
        onScroll={false}
        className="hidden md:block absolute bottom-8 right-8 z-10 text-right"
      >
        <p className="text-xs text-white/30">// Flutter · React</p>
        <p className="text-xs text-white/20">Django · FastAPI</p>
      </BlurIn>
    </section>
  )
}
