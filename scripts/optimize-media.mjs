// Genera las imágenes optimizadas (WebP) en public/media a partir de media-original/.
// Uso: npm run media
import sharp from 'sharp'
import { mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const SRC = 'media-original'
const OUT = 'public/media'
await mkdir(OUT, { recursive: true })

// [archivo original, nombre de salida, ancho máximo]
const photos = [
  ['potencia.jpg', 'potencia', 2200],
  ['potencia2.jpg', 'potencia2', 1800],
  ['1.jpg', 'serenata-grupo', 1800],
  ['8H1A1806.jpg', 'trompeta', 1800],
  ['serenata.png', 'serenata-escenario', 1600],
  ['IMG_1229.jpg', 'show-sala', 1800],
  ['SONIDO.jpg', 'escenario-sonido', 1200],
  ['dj1.jpg', 'dj-cyberstons', 1280],
  ['ddj2.jpg', 'dj-set', 800],
  ['rumbascreenshot.jpg', 'dj-noche', 1080],
  ['lanzamiento marca.jpg', 'activacion-banda', 1200],
  ['IMG-20261106-WA0061.jpg', 'poster-brisa', 1024],
  ['IMG-20261106-WA0062.jpg', 'poster-junior-palacios', 1024],
  ['tributo daddy yankee.jpg', 'poster-gary-yankee', 1080],
  // Fotos del portafolio 2026 (carpas y montajes)
  ...['03','04','05','07','09','11','18','23','25','29','34','35','38','40','44'].map((k) => [`portafolio/carpa-${k}.jpg`, `carpa-${k}`, 1600]),
]

for (const [file, name, width] of photos) {
  const out = join(OUT, `${name}.webp`)
  const info = await sharp(join(SRC, file))
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out)
  console.log(name.padEnd(26), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`)
}

// Logo: recorte del espacio transparente
const logo = await sharp(join(SRC, 'logo transparente.png')).trim().png({ compressionLevel: 9 }).toBuffer({ resolveWithObject: true })
await sharp(logo.data).resize({ width: 640 }).png({ compressionLevel: 9 }).toFile(join(OUT, 'logo.png'))
console.log('logo'.padEnd(26), `${logo.info.width}x${logo.info.height}`)
