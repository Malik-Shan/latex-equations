import type { ArcShape } from "./types"

export function generateArcPath(shape: ArcShape) {
  const toRad = (deg: number) => deg * Math.PI / 180

  const start = {
    x: shape.radius * Math.cos(toRad(shape.startAngle)),
    y: shape.radius * Math.sin(toRad(shape.startAngle))
  }

  const end = {
    x: shape.radius * Math.cos(toRad(shape.endAngle)),
    y: shape.radius * Math.sin(toRad(shape.endAngle))
  }

  const largeArc =
    shape.endAngle - shape.startAngle > 180 ? 1 : 0

  let d = `M ${start.x} ${start.y}
           A ${shape.radius} ${shape.radius} 0 ${largeArc} 1 ${end.x} ${end.y}`

  if (shape.filled) {
    d += ` L 0 0 Z`
  }

  return d
}