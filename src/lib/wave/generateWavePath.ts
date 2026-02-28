import type { Wave } from "./types"

export function generateWavePath(wave: Wave) {
  const width = wave.loops * wave.wavelength
  const k = (2 * Math.PI) / wave.wavelength
  const step = 2

  const points: string[] = []

  for (let x = 0; x <= width; x += step) {
    const yBase = wave.amplitude * Math.sin(k * x + wave.phase)
    const y = wave.reverse ? -yBase : yBase
    points.push(`${x},${-y}`)
  }

  return "M " + points.join(" L ")
}

export function dashStyle(type: string) {
  if (type === "dashed") return "10 6"
  if (type === "dotted") return "2 6"
  return ""
}