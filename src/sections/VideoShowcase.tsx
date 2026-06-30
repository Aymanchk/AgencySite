export default function VideoShowcase() {
  return (
    <section className="relative z-0 h-[600px] overflow-hidden -mt-[300px]">
      <video
        className="w-full h-full object-cover"
        src="https://media.cleanshot.cloud/media/21620/nKosRonaEKSufJVJ4VtouFhOPkqgJ3dPoQ8ZP52S.mp4"
        muted
        loop
        autoPlay
        playsInline
      />
      {/* Top + bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070612] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070612] to-transparent z-10" />
    </section>
  )
}
