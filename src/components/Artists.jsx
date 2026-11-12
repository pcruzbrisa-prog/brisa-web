import { ARTISTS, JOURNEY } from '../data'
import { asset } from '../config'
import Reveal from './Reveal'

export default function Artists() {
  return (
    <section className="section" id="artistas">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Shows y artistas</p>
          <h2 className="h2">Propuestas que <em>llenan la pista</em>.</h2>
        </Reveal>
        <div className="artists">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.img} delay={i * 100} as="article" className="artist">
              <div className="artist__img" style={{ aspectRatio: a.ratio }}>
                <img src={asset(`${a.img}.webp`)} alt={`Afiche: ${a.name}`} loading="lazy" />
              </div>
              <h3>{a.name}</h3>
              <p>{a.tag}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="journey">
          <h3 className="journey__title">Tu evento, de principio a fin</h3>
          <ol className="journey__list">
            {JOURNEY.map((j, i) => (
              <li key={j.t}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <strong>{j.t}</strong>
                <p>{j.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
