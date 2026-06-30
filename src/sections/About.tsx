import ScrollRevealText from '../components/ScrollRevealText'

const TEXT =
  'We are Corstack Solutions — three developers who build mobile apps, web platforms, and backend systems. Clean code. Sharp design. Real attention to detail.'

export default function About() {
  return (
    <section id="about" className="bg-[#070612] py-32 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <ScrollRevealText
          text={TEXT}
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]"
        />
      </div>
    </section>
  )
}
