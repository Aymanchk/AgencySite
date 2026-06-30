const ROW1 = [
  'Flutter',
  'React',
  'Next.js',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'Docker',
]
const ROW2 = [
  'Python',
  'TypeScript',
  'iOS',
  'Android',
  'DRF',
  'Node.js',
  'Figma',
  'REST API',
]

function Row({ items, dir }: { items: string[]; dir: 'left' | 'right' }) {
  const loop = [...items, ...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${dir === 'left' ? 'marquee-left' : 'marquee-right'}`}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.25em] uppercase text-white/20 px-8 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="bg-[#070612] overflow-hidden py-8 border-y border-white/5 flex flex-col gap-6">
      <Row items={ROW1} dir="left" />
      <Row items={ROW2} dir="right" />
    </section>
  )
}
