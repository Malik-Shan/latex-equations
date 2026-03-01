<script lang="ts">
  import {
    createWave,
    createArc,
    createWaveLines,
    createRadialWave,
    type Shape
  } from "../../lib/shapes/types"

  import ControlsPanel from "./ControlsPanel.svelte"
  import SvgPreview from "./SvgPreview.svelte"
  import ExportPanel from "./ExportPanel.svelte"

  let shapes = $state<Shape[]>([createWave()])
  let svgRef = $state<SVGSVGElement | undefined>(undefined)

  function updateShape(id: string, updated: Shape) {
    shapes = shapes.map(s => s.id === id ? updated : s)
  }

  function removeShape(id: string) {
    shapes = shapes.filter(s => s.id !== id)
  }

  function addWave() { shapes = [...shapes, createWave()] }
  function addArc() { shapes = [...shapes, createArc()] }
  function addWaveLines() { shapes = [...shapes, createWaveLines()] }
  function addRadialWave() {shapes = [...shapes, createRadialWave()]}
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
  <div class="bg-base-100 rounded-box shadow p-4 space-y-4">
    <div class="btn-group w-full">
      <button class="btn btn-sm" onclick={addWave}>Wave</button>
      <button class="btn btn-sm" onclick={addArc}>Arc</button>
      <button class="btn btn-sm" onclick={addWaveLines}>Wave Lines</button>
      <button class="btn btn-sm" onclick={addRadialWave}>
        Radial
      </button>
    </div>

    <ControlsPanel
      {shapes}
      onUpdate={updateShape}
      onRemove={removeShape}
    />
  </div>

  <div class="lg:col-span-2 space-y-4">
    <SvgPreview bind:svgEl={svgRef} {shapes} />
    <ExportPanel svgEl={svgRef} />
  </div>
</div>