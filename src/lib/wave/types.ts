export type DashType = "solid" | "dashed" | "dotted"

export type Wave = {
  id: string
  amplitude: number
  wavelength: number
  loops: number
  strokeWidth: number
  color: string
  dash: DashType
  phase: number
  reverse: boolean
  extraLeft: number
  extraRight: number
}

export function createDefaultWave(): Wave {
  return {
    id: crypto.randomUUID(),
    amplitude: 40,
    wavelength: 120,
    loops: 4,
    strokeWidth: 3,
    color: "#3b82f6",
    dash: "solid",
    phase: 0,
    reverse: false,
    extraLeft: 0,
    extraRight: 0
  }
}