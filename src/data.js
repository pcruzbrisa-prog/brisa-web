import { asset } from './config'

export const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#artistas', label: 'Artistas' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

export const SERVICES = [
  { n: '01', title: 'Artistas y tributos', text: 'Venta de artistas nacionales, orquestas de cumbia, bandas corporativas y el gran tributo a Daddy Yankee.' },
  { n: '02', title: 'Amplificación e iluminación', text: 'Sonido profesional y diseño de luces para que tu evento se escuche y se vea como corresponde.' },
  { n: '03', title: 'Pantallas LED', text: 'Pantallas para escenarios, transmisión de imagen y ambientación visual de alto impacto.' },
  { n: '04', title: 'Encarpado y decoración', text: 'Carpas a medida, cortinajes, mobiliario y decoración (arcos de globos incluidos) para transformar cualquier espacio.' },
  { n: '05', title: 'DJ y animación', text: 'Música, ritmo y animación para mantener la pista llena de principio a fin.' },
  { n: '06', title: 'Fotografía y video', text: 'Cobertura fotográfica y audiovisual para que cada momento quede registrado.' },
]

export const JOURNEY = [
  { t: 'Cena y recepción', d: 'Saxofonista en vivo para recibir a tus invitados.' },
  { t: 'Show intermedio', d: 'Batucada o comparsa que levanta el ánimo.' },
  { t: 'Show central', d: 'El gran tributo a Daddy Yankee.' },
  { t: 'Fiesta bailable', d: 'Las mejores orquestas de cumbia del país.' },
]

export const CATEGORIES = ['Todos', 'Shows en vivo', 'Festivales', 'Encarpado y decoración', 'Sonido & DJ', 'Activaciones']

// ratio = ancho / alto, para reservar espacio y evitar saltos al cargar
const ENC = 'Encarpado y decoración'
export const PROJECTS = [
  { img: 'potencia', cat: 'Festivales', title: 'Escenario Potencia', meta: 'Festival · Producción integral', ratio: 1.5, wide: true },
  { img: 'carpa-04', cat: 'Festivales', title: 'Fiestas Patrias: noche de show', meta: 'Carpa · Sonido · Iluminación', ratio: 1.5 },
  { img: 'serenata-grupo', cat: 'Shows en vivo', title: 'Serenata Cumbiera', meta: 'Gestión artística', ratio: 1.4 },
  { img: 'carpa-29', cat: ENC, title: 'Carpa con sillas y calefacción', meta: 'Encarpado · Montaje', ratio: 1.78 },
  { img: 'activacion-banda', cat: 'Activaciones', title: 'Activación con banda de bronces', meta: 'Activación de marca', ratio: 0.75 },
  { img: 'carpa-03', cat: 'Festivales', title: 'Fiestas Patrias: muestra de cueca', meta: 'Carpa · Escenario', ratio: 1.5 },
  { img: 'trompeta', cat: 'Shows en vivo', title: 'Trompeta en vivo', meta: 'Show en vivo', ratio: 1.5 },
  { img: 'carpa-35', cat: ENC, title: 'Decoración con telas de colores', meta: 'Encarpado · Decoración', ratio: 1.78 },
  { img: 'escenario-sonido', cat: 'Sonido & DJ', title: 'Montaje de escenario y sonido', meta: 'Producción técnica', ratio: 0.75 },
  { img: 'carpa-09', cat: 'Festivales', title: 'Escenario, sonido y carpa de noche', meta: 'Festival · Producción técnica', ratio: 1.5 },
  { img: 'potencia2', cat: 'Festivales', title: 'Noche de festival', meta: 'Luces · Pantallas · Escenario', ratio: 1.5, wide: true },
  { img: 'carpa-11', cat: ENC, title: 'Feria de empleo bajo carpa', meta: 'Encarpado · Montaje', ratio: 1.78 },
  { img: 'serenata-escenario', cat: 'Shows en vivo', title: 'Serenata en el escenario', meta: 'Show en vivo', ratio: 1.5 },
  { img: 'carpa-38', cat: ENC, title: 'Interior con cortinaje blanco', meta: 'Encarpado · Decoración', ratio: 1.33 },
  { img: 'show-sala', cat: 'Shows en vivo', title: 'Show de sala', meta: 'Música en vivo', ratio: 1.78 },
  { img: 'carpa-34', cat: 'Festivales', title: 'Fiesta popular de noche', meta: 'Carpa · Show en vivo', ratio: 1.5 },
  { img: 'dj-cyberstons', cat: 'Sonido & DJ', title: 'DJ Cyberstons', meta: 'Servicio de DJ', ratio: 1.55 },
  { img: 'carpa-18', cat: ENC, title: 'Cuenta pública con carpa y pantalla', meta: 'Encarpado · Pantalla', ratio: 1.78 },
  { img: 'carpa-05', cat: ENC, title: 'Carpa para festival al aire libre', meta: 'Encarpado · Montaje', ratio: 2.17 },
  { img: 'carpa-40', cat: ENC, title: 'Ceremonia oficial con carpa', meta: 'Encarpado · Sonido', ratio: 1.78 },
  { img: 'carpa-23', cat: ENC, title: 'Feria de emprendimiento', meta: 'Encarpado · Stands', ratio: 1.33 },
  { img: 'carpa-25', cat: ENC, title: 'Carpa para exposición de autos', meta: 'Encarpado · Montaje', ratio: 1.78 },
  { img: 'carpa-07', cat: ENC, title: 'Carpa y mobiliario para ceremonia', meta: 'Encarpado · Mobiliario', ratio: 1.33 },
  { img: 'carpa-44', cat: ENC, title: 'Evento infantil bajo carpa', meta: 'Encarpado · Animación', ratio: 1.5 },
]

export const VIDEOS = [
  { src: 'fiesta', title: 'Fiesta de promoción', tag: 'DJ · Luces · Sonido', ratio: 16 / 9, sound: true },
  { src: 'globos-a', title: 'Arco de globos', tag: 'Decoración', ratio: 9 / 16 },
  { src: 'globos-b', title: 'Montaje de decoración', tag: 'Decoración', ratio: 9 / 16 },
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

export const MARQUEE = ['Artistas y tributos', 'Amplificación', 'Iluminación', 'Pantallas LED', 'Encarpado', 'Decoración', 'DJ', 'Animación', 'Foto y video']

export const heroImg = asset('potencia.webp')
export const aboutImg = asset('trompeta.webp')
