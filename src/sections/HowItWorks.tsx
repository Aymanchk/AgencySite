import { motion } from 'framer-motion'
import BlurIn from '../components/BlurIn'
import BlurText from '../components/BlurText'
import HlsVideo from '../components/HlsVideo'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'You explain the idea. We ask the right questions. Scope and timeline in 48h.',
  },
  {
    number: '02',
    title: 'Design & Build',
    desc: 'Figma first. Code second. You see progress every sprint.',
  },
  {
    number: '03',
    title: 'Ship & Support',
    desc: 'Deploy to production. We stay on for 30 days. Bugs fixed same day.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-[#070612] py-24 px-6 lg:px-16 overflow-hidden">
      {/* Background HLS video, desaturated + low opacity */}
      <HlsVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{ opacity: 0.2, filter: 'saturate(0)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#070612] to-transparent z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070612] to-transparent z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <BlurIn onScroll>
          <div className="glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-4 inline-block">
            Process
          </div>
        </BlurIn>
        <h2 className="text-4xl md:text-5xl font-medium text-white">
          <BlurText
            trigger="scroll"
            segments={[{ text: 'You dream it. We ship it.' }]}
          />
        </h2>
        <p className="text-white/50 mt-4">
          From first call to production deploy — here's how we work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-5xl font-bold text-white/[0.08] mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
