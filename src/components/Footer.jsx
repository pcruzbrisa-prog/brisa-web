import { NAV } from '../data'
import { asset, SITE } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <img src={asset('logo.png')} alt="BRISA Producciones" width="150" height="55" />
          <p>Creamos experiencias que perduran.<br />{SITE.base}</p>
        </div>
        <nav aria-label="Pie de página">
          {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
      </div>
      <div className="container footer__legal">© {new Date().getFullYear()} BRISA Producciones · Todos los derechos reservados</div>
    </footer>
  )
}
