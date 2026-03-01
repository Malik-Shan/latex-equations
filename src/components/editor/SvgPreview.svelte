<script lang="ts">
  import type { Shape } from "../../lib/shapes/types"
  import { generateWavePath } from "../../lib/shapes/wave"
  import { generateArcPath } from "../../lib/shapes/arc"
  import { generateWaveLines } from "../../lib/shapes/waveLine"

  let { shapes, svgEl = $bindable() } = $props()
</script>

<div class="card bg-base-200 p-6">
  <svg
    bind:this={svgEl}
    width="800"
    height="500"
    viewBox="-400 -250 800 500"
    class="bg-base-100 rounded-box"
  >
    {#each shapes as shape (shape.id)}
      <g transform={`translate(${shape.x}, ${shape.y})`}>

        {#if shape.type === "wave"}
          {@const width = shape.loops * shape.wavelength}
          <g transform={`translate(${-width/2},0)`}>
            <path
              d={generateWavePath(shape)}
              stroke={shape.color}
              stroke-width={shape.strokeWidth}
              fill="none"
            />
          </g>
        {/if}

        {#if shape.type === "arc"}
          <path
            d={generateArcPath(shape)}
            stroke={shape.filled ? "none" : shape.color}
            fill={shape.filled ? shape.color : "none"}
            stroke-width={shape.strokeWidth}
          />
        {/if}

        {#if shape.type === "waveLines"}
          {@const width = shape.loops * shape.wavelength}
          <g transform={`translate(${-width/2},0)`}>
            {#each generateWaveLines(shape) as line}
              <line
                x1={line.x}
                x2={line.x}
                y1={line.y1}
                y2={line.y2}
                stroke={shape.color}
                stroke-width={shape.thickness}
              />
            {/each}
          </g>
        {/if}

      </g>
    {/each}
  </svg>
</div>