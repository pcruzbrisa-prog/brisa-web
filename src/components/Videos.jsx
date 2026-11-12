import { useEffect, useRef } from 'react'
import { VIDEOS } from '../data'
import { asset } from '../config'
import Reveal from './Reveal'

const path = (name, ext) => asset(`video/${name}.${ext}`)

// Los clips cortos y sin audio se reproducen solos (en bucle) cuando están a la vista;
// el video con sonido se reproduce solo al pulsar play.
function VideoCard({ v }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || v.sound || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.play().catch(() => {})
      else el.pause()
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [v.sound])

  return (
    <figure className={`vcard ${v.ratio < 1 ? "vcard--tall" : ""}`} style={{ aspectRatio: v.ratio }}>
      <video
        ref={ref}
        poster={path(v.src, 'jpg')}
        preload={v.sound ? 'none' : 'metadata'}
        playsInline
        controls={v.sound}
        muted={!v.sound}
        loop={!v.sound}
        aria-label={`${v.title} — ${v.tag}`}
      >
        <source src={path(v.src, 'mp4')} type="video/mp4" />
      </video>
      <figcaption>
        <small>{v.tag}</small>
        <strong>{v.title}</strong>
      </figcaption>
    </figure>
  )
}

export default function Videos() {
  return (
    <section className="section" id="videos">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">En acción</p>
          <h2 className="h2">Nuestros servicios, <em>en movimiento</em>.</h2>
        </Reveal>
        <Reveal className="videos">
          {VIDEOS.map((v) => <VideoCard key={v.src} v={v} />)}
        </Reveal>
      </div>
    </section>
  )
}
