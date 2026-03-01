import type { WaveShape } from "./types"

export function generateWavePath(shape: WaveShape) {
  const width = shape.loops * shape.wavelength
  const k = (2 * Math.PI) / shape.wavelength

  let d = `M 0 0`

  for (let x = 0; x <= width; x += 1) {
    let y = shape.amplitude * Math.sin(k * x)

    if (shape.inverse) {
      y *= -1
    }

    d += ` L ${x} ${-y}`
  }

  return d
}

export function getStrokeDash(type: string) {
  if (type === "dashed") return "12 8"
  if (type === "dotted") return "2 6"
  return undefined
}