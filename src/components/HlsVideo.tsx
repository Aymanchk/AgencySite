import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

type HlsVideoProps = {
  src: string
  className?: string
  style?: CSSProperties
}

/**
 * Background HLS video player.
 * Uses Safari's native HLS support when available, otherwise lazy-loads hls.js.
 */
export default function HlsVideo({ src, className, style }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Safari (and iOS) can play HLS natively.
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src
      return
    }

    let destroyed = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let hls: any

    import('hls.js').then(({ default: Hls }) => {
      if (destroyed) return
      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true })
        hls.loadSource(src)
        hls.attachMedia(video)
      } else {
        video.src = src
      }
    })

    return () => {
      destroyed = true
      if (hls) hls.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      muted
      autoPlay
      loop
      playsInline
    />
  )
}
