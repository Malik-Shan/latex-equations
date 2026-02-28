<script lang="ts">
  import { createDefaultWave } from "../../lib/wave/types"
  import type { Wave } from "../../lib/wave/types"
  import ControlsPanel from "./ControlsPanel.svelte"
  import SvgPreview from "./SvgPreview.svelte"
  import ExportButtons from "./ExportButtons.svelte"

  let waves = $state<Wave[]>([createDefaultWave()])

  let showCenter = $state(true)
  let showVertical = $state(false)

  let svgRef = $state<SVGSVGElement | undefined>()

  function updateWave(id: string, key: keyof Wave, value: any) {
    const index = waves.findIndex(w => w.id === id)
    if (index === -1) return

    waves[index] = {
      ...waves[index],
      [key]: value
    }
  }

  function removeWave(id: string) {
    waves = waves.filter(w => w.id !== id)
  }
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

  <div class="lg:col-span-1 bg-base-100 rounded-box shadow p-4">
    <ControlsPanel
        {waves}
        onUpdate={updateWave}
        onRemove={removeWave}
        />
    <div class="mt-6 space-y-3">
      <label class="label cursor-pointer">
        <span>Center Line</span>
        <input type="checkbox" bind:checked={showCenter} class="toggle" />
      </label>

      <label class="label cursor-pointer">
        <span>Vertical Line</span>
        <input type="checkbox" bind:checked={showVertical} class="toggle" />
      </label>
    </div>
  </div>

  <div class="lg:col-span-2 space-y-4">
    <SvgPreview bind:svgEl={svgRef} {waves} {showCenter} {showVertical} />
    <ExportButtons svgEl={svgRef} />
  </div>

</div>