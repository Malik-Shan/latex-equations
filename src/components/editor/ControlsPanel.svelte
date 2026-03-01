<script lang="ts">
  import type { Shape } from "../../lib/shapes/types"

  let { shapes, onUpdate, onRemove } = $props()

  function updateShape(shape: Shape, key: string, value: any) {
    onUpdate(shape.id, { ...shape, [key]: value })
  }
</script>

<div class="space-y-4">
  {#each shapes as shape (shape.id)}
  <div class="collapse collapse-arrow bg-base-200 border border-base-300">
    <input type="checkbox" />

    <div role='button' tabindex="0" class="collapse-title flex justify-between items-center">
        <span class="capitalize font-semibold pointer-events-none">
        {shape.type}
        </span>

        <button
            type="button"
            class="btn btn-xs btn-error pointer-events-auto z-100"
            onclick={(e) => {
                e.stopPropagation()
                onRemove(shape.id)
            }}
            >
            Delete
        </button>
    </div>

      <div class="collapse-content space-y-5 pt-2">

        <!-- ================= POSITION ================= -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="label">X Position</label>
            <input
              type="number"
              class="input input-bordered w-full"
              value={shape.x}
              oninput={(e) =>
                updateShape(shape, "x", +e.currentTarget.value)}
            />
          </div>

          <div>
            <label class="label">Y Position</label>
            <input
              type="number"
              class="input input-bordered w-full"
              value={shape.y}
              oninput={(e) =>
                updateShape(shape, "y", +e.currentTarget.value)}
            />
          </div>
        </div>

        <!-- ================= WAVE ================= -->
        {#if shape.type === "wave"}

          <!-- Color -->
          <div>
            <label class="label">Color</label>
            <input
              type="color"
              class="w-full h-10"
              value={shape.color}
              oninput={(e) =>
                updateShape(shape, "color", e.currentTarget.value)}
            />
          </div>

          <!-- Stroke Width -->
          <div>
            <label class="label">Stroke Width</label>
            <div class="flex gap-2 items-center">
              <input
                type="range"
                min="1"
                max="20"
                class="range flex-1"
                value={shape.strokeWidth}
                oninput={(e) =>
                  updateShape(shape, "strokeWidth", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.strokeWidth}
                oninput={(e) =>
                  updateShape(shape, "strokeWidth", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Amplitude -->
          <div>
            <label class="label">Amplitude</label>
            <div class="flex gap-2 items-center">
              <input
                type="range"
                min="10"
                max="300"
                class="range flex-1"
                value={shape.amplitude}
                oninput={(e) =>
                  updateShape(shape, "amplitude", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.amplitude}
                oninput={(e) =>
                  updateShape(shape, "amplitude", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Wavelength -->
          <div>
            <label class="label">Wavelength</label>
            <div class="flex gap-2 items-center">
              <input
                type="range"
                min="40"
                max="600"
                class="range flex-1"
                value={shape.wavelength}
                oninput={(e) =>
                  updateShape(shape, "wavelength", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-24"
                value={shape.wavelength}
                oninput={(e) =>
                  updateShape(shape, "wavelength", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Loops -->
          <div>
            <label class="label">Loops</label>
            <div class="flex gap-2 items-center">
              <input
                type="range"
                min="1"
                max="20"
                class="range flex-1"
                value={shape.loops}
                oninput={(e) =>
                  updateShape(shape, "loops", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.loops}
                oninput={(e) =>
                  updateShape(shape, "loops", +e.currentTarget.value)}
              />
            </div>
          </div>

        {/if}

        <!-- ================= ARC ================= -->
        {#if shape.type === "arc"}

          <div>
            <label class="label">Color</label>
            <input
              type="color"
              class="w-full h-10"
              value={shape.color}
              oninput={(e) =>
                updateShape(shape, "color", e.currentTarget.value)}
            />
          </div>

          <!-- Stroke Width -->
          <div>
            <label class="label">Stroke Width</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="1"
                max="20"
                class="range flex-1"
                value={shape.strokeWidth}
                oninput={(e) =>
                  updateShape(shape, "strokeWidth", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.strokeWidth}
                oninput={(e) =>
                  updateShape(shape, "strokeWidth", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Radius -->
          <div>
            <label class="label">Radius</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="20"
                max="400"
                class="range flex-1"
                value={shape.radius}
                oninput={(e) =>
                  updateShape(shape, "radius", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-24"
                value={shape.radius}
                oninput={(e) =>
                  updateShape(shape, "radius", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Start Angle -->
          <div>
            <label class="label">Start Angle</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="0"
                max="360"
                class="range flex-1"
                value={shape.startAngle}
                oninput={(e) =>
                  updateShape(shape, "startAngle", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.startAngle}
                oninput={(e) =>
                  updateShape(shape, "startAngle", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- End Angle -->
          <div>
            <label class="label">End Angle</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="0"
                max="360"
                class="range flex-1"
                value={shape.endAngle}
                oninput={(e) =>
                  updateShape(shape, "endAngle", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.endAngle}
                oninput={(e) =>
                  updateShape(shape, "endAngle", +e.currentTarget.value)}
              />
            </div>
          </div>

          <label class="label cursor-pointer">
            <span>Filled (Pie)</span>
            <input
              type="checkbox"
              class="toggle"
              checked={shape.filled}
              oninput={(e) =>
                updateShape(shape, "filled", e.currentTarget.checked)}
            />
          </label>

        {/if}

        <!-- ================= WAVE LINES ================= -->
        {#if shape.type === "waveLines"}

          <div>
            <label class="label">Color</label>
            <input
              type="color"
              class="w-full h-10"
              value={shape.color}
              oninput={(e) =>
                updateShape(shape, "color", e.currentTarget.value)}
            />
          </div>

          <!-- Thickness -->
          <div>
            <label class="label">Thickness</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="1"
                max="20"
                class="range flex-1"
                value={shape.thickness}
                oninput={(e) =>
                  updateShape(shape, "thickness", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.thickness}
                oninput={(e) =>
                  updateShape(shape, "thickness", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Line Height -->
          <div>
            <label class="label">Line Height</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="20"
                max="400"
                class="range flex-1"
                value={shape.lineHeight}
                oninput={(e) =>
                  updateShape(shape, "lineHeight", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-24"
                value={shape.lineHeight}
                oninput={(e) =>
                  updateShape(shape, "lineHeight", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Amplitude -->
          <div>
            <label class="label">Amplitude (Density)</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="10"
                max="300"
                class="range flex-1"
                value={shape.amplitude}
                oninput={(e) =>
                  updateShape(shape, "amplitude", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-24"
                value={shape.amplitude}
                oninput={(e) =>
                  updateShape(shape, "amplitude", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Wavelength -->
          <div>
            <label class="label">Wavelength</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="40"
                max="600"
                class="range flex-1"
                value={shape.wavelength}
                oninput={(e) =>
                  updateShape(shape, "wavelength", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-24"
                value={shape.wavelength}
                oninput={(e) =>
                  updateShape(shape, "wavelength", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Loops -->
          <div>
            <label class="label">Loops</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="1"
                max="20"
                class="range flex-1"
                value={shape.loops}
                oninput={(e) =>
                  updateShape(shape, "loops", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.loops}
                oninput={(e) =>
                  updateShape(shape, "loops", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Min Gap -->
          <div>
            <label class="label">Min Gap</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="1"
                max="50"
                class="range flex-1"
                value={shape.minGap}
                oninput={(e) =>
                  updateShape(shape, "minGap", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.minGap}
                oninput={(e) =>
                  updateShape(shape, "minGap", +e.currentTarget.value)}
              />
            </div>
          </div>

          <!-- Max Gap -->
          <div>
            <label class="label">Max Gap</label>
            <div class="flex gap-2">
              <input
                type="range"
                min="5"
                max="120"
                class="range flex-1"
                value={shape.maxGap}
                oninput={(e) =>
                  updateShape(shape, "maxGap", +e.currentTarget.value)}
              />
              <input
                type="number"
                class="input input-bordered w-20"
                value={shape.maxGap}
                oninput={(e) =>
                  updateShape(shape, "maxGap", +e.currentTarget.value)}
              />
            </div>
          </div>

        {/if}

      </div>
    </div>
  {/each}
</div>