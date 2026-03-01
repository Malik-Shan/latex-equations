import type { WaveShape } from "./types"

export function generateWavePath(shape: WaveShape) {
  const width = shape.loops * shape.wavelength
  const k = (2 * Math.PI) / shape.wavelength

  let d = `M 0 0`

  for (let x = 0; x <= width; x += 1) {
    const y = shape.amplitude * Math.sin(k * x)
    d += ` L ${x} ${-y}`
  }

  return d
}