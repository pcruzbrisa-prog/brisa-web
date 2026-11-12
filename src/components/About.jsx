import { VALUES, aboutImg } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section section--dark about" id="nosotros">
      <div className="container about__grid">
        <Reveal className="about__img">
          <img src={aboutImg} alt="Músico en escenario — BRISA Producciones" loading="lazy" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Sobre BRISA</p>
          <h2 className="h2">Una presencia <em>ligera</em>, natural y memorable.</h2>
          <p className="lead">
            Somos una productora técnica y artística con todo para llevar tu evento al siguiente nivel.
          </p>
          <p className="muted">
            Representamos a artistas de carácter nacional y bandas corporativas para distintos tipos de eventos, y aportamos toda la parte técnica y artística. Todo es personalizado para cada cliente: nos caracterizan el profesionalismo y la capacidad de adaptarnos a cualquier tipo de evento.
          </p>
          <div className="values">
            {VALUES.map((v) => (
              <div key={v.n} className="value">
                <span>{v.n}</span>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
