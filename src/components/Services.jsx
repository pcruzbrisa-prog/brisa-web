import { SERVICES } from '../data'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Qué hacemos</p>
          <h2 className="h2">Todo lo que tu evento necesita, <em>en un solo equipo</em>.</h2>
        </Reveal>
        <div className="services">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="service" as="article">
              <span className="service__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
