import { useEffect, useState } from 'react'
import { CATEGORIES, PROJECTS } from '../data'
import { asset } from '../config'
import Reveal from './Reveal'

export default function Projects() {
  const [cat, setCat] = useState('Todos')
  const [active, setActive] = useState(null) // índice dentro de la lista filtrada
  const list = cat === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.cat === cat)

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % list.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + list.length) % list.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active, list.length])

  const current = active !== null ? list[active] : null
  const step = (d) => (e) => {
    e.stopPropagation()
    setActive((active + d + list.length) % list.length)
  }

  return (
    <section className="section section--dark" id="proyectos">
      <div className="container">
        <Reveal className="section__head section__head--row">
          <div>
            <p className="eyebrow">Trabajos realizados</p>
            <h2 className="h2">Momentos que <em>hicimos posibles</em>.</h2>
          </div>
          <div className="filters" role="tablist" aria-label="Filtrar proyectos">
            {CATEGORIES.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={`chip ${cat === c ? 'is-active' : ''}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="gallery">
          {list.map((p, i) => (
            <button
              key={p.img}
              className={`tile ${p.wide ? 'tile--wide' : ''}`}
              style={{ aspectRatio: p.wide ? undefined : p.ratio }}
              onClick={() => setActive(i)}
              aria-label={`Ampliar: ${p.title}`}
            >
              <img src={asset(`${p.img}.webp`)} alt={`${p.title} — ${p.meta}`} loading="lazy" />
              <span className="tile__cap">
                <small>{p.cat}</small>
                <strong>{p.title}</strong>
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Cerrar" onClick={() => setActive(null)}>×</button>
          <button className="lightbox__nav lightbox__nav--prev" aria-label="Anterior" onClick={step(-1)}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={asset(`${current.img}.webp`)} alt={current.title} />
            <figcaption><strong>{current.title}</strong><span>{current.meta}</span></figcaption>
          </figure>
          <button className="lightbox__nav lightbox__nav--next" aria-label="Siguiente" onClick={step(1)}>›</button>
        </div>
      )}
    </section>
  )
}
