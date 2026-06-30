import { motion } from 'framer-motion'
import BlurIn from '../components/BlurIn'
import BlurText from '../components/BlurText'

type Project = {
  title: string
  category: string
  gradient: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Crane Inspector',
    category: 'Mobile App',
    gradient: 'from-zinc-900 to-indigo-950',
    tags: ['Flutter', 'Isar', 'Yandex Disk'],
  },
  {
    title: 'Home Services',
    category: 'Web + Mobile Platform',
    gradient: 'from-slate-900 to-purple-950',
    tags: ['Django', 'Flutter', 'PostgreSQL'],
  },
  {
    title: 'CarChat',
    category: 'Automotive Messenger',
    gradient: 'from-neutral-900 to-blue-950',
    tags: ['Flutter', 'Node.js', 'PostGIS'],
  },
  {
    title: 'SmartBishkek',
    category: 'Urban Infrastructure',
    gradient: 'from-zinc-900 to-violet-950',
    tags: ['Next.js', 'Django', 'Maps API'],
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-[#070612] py-32 pb-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <BlurIn onScroll>
          <div className="glass rounded-full px-4 py-1.5 text-xs text-white/60 mb-4 inline-block">
            Selected Work
          </div>
        </BlurIn>
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-12">
          <BlurText
            trigger="scroll"
            segments={[
              { text: "Things we've" },
              { text: ' shipped.', serif: true },
            ]}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03 }}
              className={`group aspect-[4/3] rounded-2xl overflow-hidden relative cursor-pointer bg-gradient-to-br ${project.gradient}`}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(7,6,18,0.9), transparent)',
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 mb-3">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-full px-3 py-1 text-[10px] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
