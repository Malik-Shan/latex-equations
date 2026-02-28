<script lang="ts">
  import { exportSVG } from "../../lib/wave/exportSvg"

  export let svgEl: SVGSVGElement | undefined

  function handleExport() {
    if (!svgEl) return
    exportSVG(svgEl)
  }
</script>

<div class="flex gap-3">
  <button class="btn btn-secondary" on:click={handleExport}>
    Export SVG
  </button>
</div>