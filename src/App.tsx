import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import About from './sections/About'
import Services from './sections/Services'
import Work from './sections/Work'
import VideoShowcase from './sections/VideoShowcase'
import HowItWorks from './sections/HowItWorks'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#070612] text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <VideoShowcase />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
