import { useState } from 'react'
import { NAV } from '../data'
import { asset } from '../config'
import { useScrolled } from '../hooks'

export default function Header() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const close = () => setOpen(false)
  return (
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="brand" aria-label="BRISA Producciones — Inicio" onClick={close}>
          <img src={asset('logo.png')} alt="BRISA Producciones" width="170" height="63" />
        </a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contacto" className="btn btn--gold nav__cta" onClick={close}>Cotiza tu evento</a>
        </nav>
        <button
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
