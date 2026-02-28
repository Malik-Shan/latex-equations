<script lang="ts">
  import type { Wave } from "../../lib/wave/types"
  import { createDefaultWave } from "../../lib/wave/types"
  import WaveItem from "./WaveItem.svelte"

  export let waves: Wave[]
  export let onUpdate: (id: string, key: keyof Wave, value: any) => void
  export let onRemove: (id: string) => void

  function addWave() {
    waves.push(createDefaultWave())
  }
</script>

<div class="p-4 space-y-4">

  <button class="btn btn-primary w-full" on:click={addWave}>
    + Add Wave
  </button>

  {#each waves as wave (wave.id)}
    <WaveItem
      {wave}
      on:update={(e) => onUpdate(e.detail.id, e.detail.key, e.detail.value)}
      on:remove={(e) => onRemove(e.detail)}
    />
  {/each}

</div>