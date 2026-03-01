import type { WaveLinesShape } from "./types"

export function generateWaveLines(shape: WaveLinesShape) {
  const width = shape.loops * shape.wavelength
  const k = (2 * Math.PI) / shape.wavelength

  const lines = []
  let x = 0

  while (x < width) {
    const waveY = shape.amplitude * Math.sin(k * x)
    const intensity = Math.abs(waveY) / shape.amplitude

    const gap =
      shape.minGap +
      (1 - intensity) * (shape.maxGap - shape.minGap)

    lines.push({
      x,
      y1: 0,
      y2: -shape.lineHeight
    })

    x += gap
  }

  return lines
}