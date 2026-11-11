import { useState } from 'react'
import { SITE } from '../config'
import Reveal from './Reveal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    const errs = {}
    if (!f.nombre?.trim()) errs.nombre = 'Indica tu nombre.'
    if (!EMAIL_RE.test(f.email?.trim() || '')) errs.email = 'Ingresa un email válido.'
    if (!f.mensaje?.trim()) errs.mensaje = 'Cuéntanos qué tienes en mente.'
    setErrors(errs)
    if (Object.keys(errs).length) return setStatus('')

    const text = `Hola BRISA, soy ${f.nombre}${f.evento ? ` (${f.evento})` : ''}.\n${f.mensaje}\nMi email: ${f.email}`
    if (SITE.whatsapp) {
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
      setStatus('Abrimos WhatsApp con tu mensaje listo para enviar.')
    } else if (SITE.email) {
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Cotización de evento')}&body=${encodeURIComponent(text)}`
      setStatus('Abrimos tu correo con el mensaje listo para enviar.')
    } else {
      setStatus('Gracias. Aún no hay canal de contacto configurado (edita src/config.js).')
    }
  }

  const contact = [
    SITE.whatsapp && ['WhatsApp', `+${SITE.whatsapp}`, `https://wa.me/${SITE.whatsapp}`],
    SITE.email && ['Email', SITE.email, `mailto:${SITE.email}`],
    SITE.instagram && ['Instagram', SITE.instagram.replace(/^https?:\/\/(www\.)?/, ''), SITE.instagram],
    ['Base', SITE.base],
  ].filter(Boolean)

  return (
    <section className="section contact" id="contacto">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Contacto</p>
          <h2 className="h2">Hablemos de <em>tu evento</em>.</h2>
          <p className="lead">Cuéntanos qué tienes en mente: fecha, lugar y tipo de evento. Te respondemos en menos de 48 horas con una propuesta.</p>
          <ul className="contact__list">
            {contact.map(([k, v, href]) => (
              <li key={k}>
                <span>{k}</span>
                {href ? <a href={href} target="_blank" rel="noopener noreferrer">{v}</a> : <strong>{v}</strong>}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="form__row">
              <label>Nombre
                <input name="nombre" autoComplete="name" placeholder="Tu nombre" aria-invalid={!!errors.nombre} />
                {errors.nombre && <em className="err">{errors.nombre}</em>}
              </label>
              <label>Email
                <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" aria-invalid={!!errors.email} />
                {errors.email && <em className="err">{errors.email}</em>}
              </label>
            </div>
            <label>Tipo de evento <small>(opcional)</small>
              <input name="evento" placeholder="Festival, aniversario, lanzamiento, matrimonio…" />
            </label>
            <label>Mensaje
              <textarea name="mensaje" rows="5" placeholder="Fecha aproximada, lugar, cantidad de asistentes y qué necesitas." aria-invalid={!!errors.mensaje} />
              {errors.mensaje && <em className="err">{errors.mensaje}</em>}
            </label>
            <button type="submit" className="btn btn--gold">Enviar mensaje</button>
            <p className="form__status" role="status" aria-live="polite">{status}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
