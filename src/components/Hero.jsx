import { heroImg, MARQUEE } from '../data'

export default function Hero() {
  return (
    <>
      <section className="hero" id="inicio">
        <img className="hero__bg" src={heroImg} alt="" fetchPriority="high" />
        <div className="hero__shade" />
        <div className="container hero__content">
          <p className="eyebrow">Productora de eventos · Litoral central, Chile</p>
          <h1 className="hero__title">
            Hacemos que tu evento <span>suene, brille</span> y se recuerde.
          </h1>
          <p className="hero__lead">
            Productora técnica y artística con todo para llevar tu evento al siguiente nivel: artistas, sonido, iluminación, pantallas LED y más.
          </p>
          <div className="hero__ctas">
            <a href="#contacto" className="btn btn--gold">Cotiza tu evento</a>
            <a href="#proyectos" className="btn btn--ghost">Ver proyectos</a>
          </div>
        </div>
        <a href="#servicios" className="hero__scroll" aria-label="Ir a servicios"><span /></a>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i}>{t}<i>✦</i></span>
          ))}
        </div>
      </div>
    </>
  )
}
