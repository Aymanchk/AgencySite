const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'Backend & APIs', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Our Work', href: '#work' },
      { label: 'Process', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Telegram', href: 'https://t.me/corstack' },
      { label: 'GitHub', href: 'https://github.com/Aymanchk' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#070612] border-t border-white/[0.08] px-8 lg:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="text-base font-semibold tracking-widest text-white mb-3">
              CORSTACK
            </div>
            <p className="text-sm text-white/30 font-light">
              We build digital products that work.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <div className="text-sm font-medium text-white mb-4">
                {col.heading}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08] flex justify-between text-xs text-white/25">
          <span>© 2025 Corstack Solutions.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
