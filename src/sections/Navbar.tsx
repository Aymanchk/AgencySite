import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-8 flex flex-row justify-between items-center">
      <a
        href="#top"
        className="text-sm font-semibold tracking-widest text-white"
      >
        CORSTACK
      </a>

      {/* Center pill (md+) */}
      <nav className="hidden md:inline-flex glass rounded-full px-6 py-2.5 items-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-white/80 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
        <span className="w-px h-4 bg-white/20" />
        <a
          href="#contact"
          className="bg-white text-[#070612] rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          Get In Touch
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden text-white"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-16 right-8 glass glass-strong rounded-2xl px-6 py-5 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-white text-[#070612] rounded-full px-4 py-2 text-sm font-medium text-center"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}
