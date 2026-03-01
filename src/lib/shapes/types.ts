export type BaseShape = {
  id: string
  x: number
  y: number
  color: string
}

export type WaveShape = BaseShape & {
  type: "wave"
  amplitude: number
  wavelength: number
  loops: number
  strokeWidth: number
  inverse: boolean
  strokeType: "solid" | "dashed" | "dotted"
}

export type RadialWaveShape = BaseShape & {
  type: "radialWave"
  radius: number
  amplitude: number
  frequency: number   // number of edges
  curviness: number   // rounding control
  rotation: number
  strokeWidth: number
  strokeType: "solid" | "dashed" | "dotted"
  filled: boolean
}

export type ArcShape = BaseShape & {
  type: "arc"
  radius: number
  startAngle: number
  endAngle: number
  filled: boolean
  strokeWidth: number
}

export type WaveLinesShape = BaseShape & {
  type: "waveLines"
  amplitude: number
  wavelength: number
  loops: number
  minGap: number
  maxGap: number
  lineHeight: number
  thickness: number
}

export type Shape =
  | WaveShape
  | ArcShape
  | WaveLinesShape
  | RadialWaveShape

export const createWave = (): WaveShape => ({
  id: crypto.randomUUID(),
  type: "wave",
  x: 0,
  y: 0,
  amplitude: 60,
  wavelength: 160,
  loops: 4,
  strokeWidth: 4,
  inverse: false,
  strokeType: "solid",
  color: "#3b82f6"
})

export const createArc = (): ArcShape => ({
  id: crypto.randomUUID(),
  type: "arc",
  x: 0,
  y: 0,
  radius: 120,
  startAngle: 0,
  endAngle: 270,
  filled: false,
  strokeWidth: 4,
  color: "#ef4444"
})

export const createWaveLines = (): WaveLinesShape => ({
  id: crypto.randomUUID(),
  type: "waveLines",
  x: 0,
  y: 0,
  amplitude: 80,
  wavelength: 150,
  loops: 4,
  minGap: 4,
  maxGap: 25,
  lineHeight: 120,
  thickness: 3,
  color: "#0ea5e9"
})

export const createRadialWave = (): RadialWaveShape => ({
  id: crypto.randomUUID(),
  type: "radialWave",
  x: 0,
  y: 0,
  radius: 120,
  amplitude: 40,
  frequency: 3,
  curviness: 1,
  rotation: 0,
  strokeWidth: 3,
  strokeType: "solid",
  filled: false,
  color: "#000000"
})