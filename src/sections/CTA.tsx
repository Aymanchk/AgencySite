import BlurIn from '../components/BlurIn'
import BlurText from '../components/BlurText'
import HlsVideo from '../components/HlsVideo'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative h-screen w-full overflow-hidden bg-[#070612]"
    >
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />

      {/* Overlay + fades */}
      <div className="absolute inset-0 z-[5] bg-[#070612]/20" />
      <div
        className="absolute top-0 left-0 right-0 z-10 h-40"
        style={{ background: 'linear-gradient(to bottom, #070612, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-40"
        style={{ background: 'linear-gradient(to top, #070612, transparent)' }}
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-medium text-white"
          style={{ letterSpacing: '-2px', lineHeight: 0.9 }}
        >
          <BlurText
            trigger="scroll"
            segments={[
              { text: 'Your next product starts' },
              { text: ' here.', serif: true },
            ]}
          />
        </h2>

        <BlurIn delay={0.4} onScroll>
          <p className="text-lg text-white/55 mt-6 mb-12 font-light">
            Tell us what you're building. First call is free.
          </p>
        </BlurIn>

        <BlurIn delay={0.6} onScroll>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              type="button"
              onClick={() => window.open('https://t.me/corstack', '_blank')}
              className="glass glass-strong rounded-full px-10 py-4 text-sm font-medium text-white"
            >
              Write on Telegram
            </button>
            <a
              href="#work"
              className="bg-white text-[#070612] rounded-full px-10 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              See Our Work
            </a>
          </div>
        </BlurIn>
      </div>
    </section>
  )
}
