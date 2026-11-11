import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Artists from './components/Artists'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SITE } from './config'

export default function App() {
  return (
    <>
      <a href="#main" className="skip">Saltar al contenido</a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <Artists />
        <About />
        <Contact />
      </main>
      <Footer />
      {SITE.whatsapp && (
        <a className="wa" href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.500l1.700-5A8.500 8.500 0 1 1 21 11.500Z" />
            <path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8c-1-.4-1.900-1.300-2.300-2.300l.8-1-1-2L9 8.500Z" fill="currentColor" stroke="none" />
          </svg>
        </a>
      )}
    </>
  )
}
