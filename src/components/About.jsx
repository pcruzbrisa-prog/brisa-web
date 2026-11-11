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
            En BRISA entendemos cada evento como una experiencia que merece ser pensada y cuidada en cada detalle.
          </p>
          <p className="muted">
            Conectamos espacios, personas, música y momentos con propuestas de identidad propia. Desde la idea inicial hasta la ejecución, acompañamos cada proyecto con sensibilidad, criterio y profesionalismo.
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
