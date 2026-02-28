<script lang="ts">
  import type { Wave } from "../../lib/wave/types"
  import { generateWavePath, dashStyle } from "../../lib/wave/generateWavePath"

  let {waves, showCenter, showVertical, svgEl = $bindable()}:{waves: Wave[], showCenter: boolean,
    showVertical: boolean, svgEl: SVGSVGElement | undefined
  } = $props();

</script>

<div class="flex justify-center items-center bg-base-200 p-6 rounded-box">
    <svg
    bind:this={svgEl}
    width="800"
    height="400"
    viewBox="-200 -200 1200 400"
    class="bg-base-100 rounded-box"
    >

    {#if showCenter}
      <line
        x1="-200"
        x2="1000"
        y1="0"
        y2="0"
        stroke="gray"
        stroke-dasharray="6 6"
      />
    {/if}

    {#if showVertical}
      <line
        x1="0"
        x2="0"
        y1="-200"
        y2="200"
        stroke="gray"
        stroke-dasharray="6 6"
      />
    {/if}

    {#each waves as wave}
      <path
        d={generateWavePath(wave)}
        stroke={wave.color}
        stroke-width={wave.strokeWidth}
        fill="none"
        stroke-dasharray={dashStyle(wave.dash)}
        stroke-linecap={wave.dash === "dotted" ? "round" : "butt"}
      />
    {/each}

  </svg>
</div>