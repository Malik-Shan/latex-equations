<script lang="ts">
  export let svgEl: SVGSVGElement | undefined

  function exportSvg() {
    if (!svgEl) return

    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svgEl)

    const blob = new Blob([source], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = "figure.svg"
    link.click()

    URL.revokeObjectURL(url)
  }
</script>

<button class="btn btn-primary" on:click={exportSvg}>
  Export SVG
</button>