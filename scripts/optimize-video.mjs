// Comprime los videos para web (MP4 H.264) y genera sus portadas.
// Requiere ffmpeg en el PATH. Uso: npm run video
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'

const SRC = 'media-original'
const OUT = 'public/media/video'
mkdirSync(OUT, { recursive: true })

// [archivo, nombre, filtro de escala, ¿con audio?, segundo de la portada]
const videos = [
  ['VID-20261109-WA0077.mp4', 'fiesta', 'scale=-2:720', true, 6],
  ['20261103_120104.mp4', 'globos-a', 'scale=-2:960', false, 5],
  ['VID-20261103-WA0045.mp4', 'globos-b', 'scale=-2:960', false, 3],
]

for (const [file, name, scale, audio, poster] of videos) {
  const args = ['-y', '-loglevel', 'error', '-i', `${SRC}/${file}`, '-vf', scale, '-c:v', 'libx264', '-crf', '27', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart']
  args.push(...(audio ? ['-c:a', 'aac', '-b:a', '96k'] : ['-an']), `${OUT}/${name}.mp4`)
  execFileSync('ffmpeg', args, { stdio: 'inherit' })
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(poster), '-i', `${SRC}/${file}`, '-frames:v', '1', '-vf', scale, `${OUT}/${name}.jpg`], { stdio: 'inherit' })
  console.log('ok', name)
}
