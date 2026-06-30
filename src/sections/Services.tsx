import { motion } from 'framer-motion'
import { Smartphone, Globe, Server, Palette } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import BlurIn from '../components/BlurIn'
import BlurText from '../components/BlurText'

type Service = {
  number: string
  Icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

const services: Service[] = [
  {
    number: '01',
    Icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Flutter apps that feel native on iOS and Android.',
    tags: ['Flutter', 'iOS', 'Android'],
  },
  {
    number: '02',
    Icon: Globe,
    title: 'Web Platforms',
    desc: 'React and Next.js, fast and accessible.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    number: '03',
    Icon: Server,
    title: 'Backend & APIs',
    desc: 'Django, FastAPI, PostgreSQL. Scales from day one.',
    tags: ['Django', 'FastAPI', 'PostgreSQL'],
  },
  {
    number: '04',
    Icon: Palette,
    title: 'UI/UX Design',
    desc: 'Figma prototypes before a single line of code.',
    tags: ['Figma', 'Design Systems'],
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#070612] py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <BlurIn onScroll>
          <div className="glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-4 inline-block">
            What We Build
          </div>
        </BlurIn>
        <h2 className="text-4xl md:text-5xl font-medium text-white">
          <BlurText
            trigger="scroll"
            segments={[
              { text: 'Full-stack from' },
              { text: ' day one.', serif: true },
            ]}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {services.map(({ number, Icon, title, desc, tags }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="glass rounded-2xl p-7"
            >
              <div className="text-xs text-white/20 mb-6">{number}</div>
              <Icon className="w-7 h-7 text-white/60" strokeWidth={1.25} />
              <h3 className="text-lg font-medium text-white mt-3 mb-2">
                {title}
              </h3>
              <p className="text-sm text-white/45 font-light leading-relaxed">
                {desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass rounded-full px-3 py-1 text-[10px] text-white/35"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
