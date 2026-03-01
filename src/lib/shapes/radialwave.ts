import type { RadialWaveShape } from "./types"

export function generateRadialWavePath(shape: RadialWaveShape) {
  const steps = 1000
  let d = ""

  const rot = (shape.rotation * Math.PI) / 180

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI

    const base = Math.sin(shape.frequency * theta)

    // Preserve sign but apply curviness
    const curved =
      Math.sign(base) *
      Math.pow(Math.abs(base), shape.curviness)

    const r = shape.radius + shape.amplitude * curved

    const x = r * Math.cos(theta + rot)
    const y = r * Math.sin(theta + rot)

    if (i === 0) {
      d += `M ${x} ${y}`
    } else {
      d += ` L ${x} ${y}`
    }
  }

  d += " Z"
  return d
}

export function getStrokeDash(type: string) {
  if (type === "dashed") return "12 8"
  if (type === "dotted") return "2 6"
  return undefined
}