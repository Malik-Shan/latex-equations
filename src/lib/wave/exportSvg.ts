export function exportSVG(svgEl: SVGSVGElement, filename = "wave.svg") {
  const serializer = new XMLSerializer()
  const source = serializer.serializeToString(svgEl)

  const blob = new Blob([source], { type: "image/svg+xml" })
  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()

  URL.revokeObjectURL(url)
}