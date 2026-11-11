import { asset } from './config'

export const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#artistas', label: 'Artistas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export const SERVICES = [
  { n: '01', title: 'Producción de eventos', text: 'Concepto, producción técnica, logística y coordinación en terreno. De la idea al último aplauso.' },
  { n: '02', title: 'Gestión artística', text: 'Contratación, representación y coordinación de artistas y agrupaciones para tu evento.' },
  { n: '03', title: 'Sonido, luces y escenario', text: 'Equipamiento profesional y equipo técnico para que todo se vea y se escuche como debe.' },
  { n: '04', title: 'Activaciones y experiencias', text: 'Inauguraciones, lanzamientos de marca y acciones en vivo que la gente recuerda.' },
]

export const CATEGORIES = ['Todos', 'Shows en vivo', 'Festivales', 'Sonido & DJ', 'Activaciones']

// ratio = ancho / alto, para reservar espacio y evitar saltos al cargar
export const PROJECTS = [
  { img: 'potencia', cat: 'Festivales', title: 'Escenario Potencia', meta: 'Festival · Producción integral', ratio: 1.5, wide: true },
  { img: 'serenata-grupo', cat: 'Shows en vivo', title: 'Serenata Cumbiera', meta: 'Gestión artística', ratio: 1.4 },
  { img: 'activacion-banda', cat: 'Activaciones', title: 'Activación con banda de bronces', meta: 'Activación de marca', ratio: 0.75 },
  { img: 'trompeta', cat: 'Shows en vivo', title: 'Trompeta en vivo', meta: 'Show en vivo', ratio: 1.5 },
  { img: 'escenario-sonido', cat: 'Sonido & DJ', title: 'Montaje de escenario y sonido', meta: 'Producción técnica', ratio: 0.75 },
  { img: 'potencia2', cat: 'Festivales', title: 'Noche de festival', meta: 'Luces · Pantallas · Escenario', ratio: 1.5, wide: true },
  { img: 'serenata-escenario', cat: 'Shows en vivo', title: 'Serenata en el escenario', meta: 'Show en vivo', ratio: 1.5 },
  { img: 'show-sala', cat: 'Shows en vivo', title: 'Show de sala', meta: 'Música en vivo', ratio: 1.78 },
  { img: 'dj-cyberstons', cat: 'Sonido & DJ', title: 'DJ Cyberstons', meta: 'Servicio de DJ', ratio: 1.55 },
]

export const ARTISTS = [
  { img: 'poster-junior-palacios', name: 'Sonora Junior Palacios', tag: 'Un estándar de excelencia llega al litoral', ratio: 1 },
  { img: 'poster-gary-yankee', name: 'Gary Yankee', tag: 'Tributo a Daddy Yankee en Chile', ratio: 0.82 },
  { img: 'poster-brisa', name: 'BRISA presenta', tag: 'Shows y eventos con identidad propia', ratio: 1 },
]

export const VALUES = [
  { n: '01', title: 'Sensibilidad', text: 'Cuidamos el detalle, el ambiente y la atmósfera de cada propuesta.' },
  { n: '02', title: 'Criterio', text: 'Trabajamos con identidad propia, huyendo de fórmulas genéricas.' },
  { n: '03', title: 'Profesionalismo', text: 'Producción rigurosa, coordinación impecable y comunicación clara.' },
]

export const MARQUEE = ['Shows en vivo', 'Festivales', 'Gestión artística', 'Sonido profesional', 'Activaciones', 'Eventos corporativos', 'Fiestas']

export const heroImg = asset('potencia.webp')
export const aboutImg = asset('trompeta.webp')
