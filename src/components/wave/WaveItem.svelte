<script lang="ts">
  import type { Wave } from "../../lib/wave/types"
  import { createEventDispatcher } from "svelte"

  export let wave: Wave

  const dispatch = createEventDispatcher()

  function update(key: keyof Wave, value: any) {
    dispatch("update", { id: wave.id, key, value })
  }

  function remove() {
    dispatch("remove", wave.id)
  }
</script>

<div class="collapse collapse-arrow bg-base-200 mb-3">
  <input type="checkbox" />
  <div class="collapse-title font-semibold flex justify-between items-center">
    <span>Wave</span>
    <button class="btn btn-xs btn-error" on:click|stopPropagation={remove}>
      Delete
    </button>
  </div>

  <div class="collapse-content space-y-3">

    <input type="color" value={wave.color}
      on:input={(e) => update("color", e.currentTarget.value)} />

    Stroke Width
    <input type="range" min="1" max="10"
      value={wave.strokeWidth}
      on:input={(e) => update("strokeWidth", +e.currentTarget.value)}
      class="range" />

    Amplitude
    <input type="range" min="10" max="150"
      value={wave.amplitude}
      on:input={(e) => update("amplitude", +e.currentTarget.value)}
      class="range" />

    Wavelength
    <input type="range" min="40" max="300"
      value={wave.wavelength}
      on:input={(e) => update("wavelength", +e.currentTarget.value)}
      class="range" />

    Loops
    <input type="range" min="1" max="10"
      value={wave.loops}
      on:input={(e) => update("loops", +e.currentTarget.value)}
      class="range" />

    <select value={wave.dash}
      on:change={(e) => update("dash", e.currentTarget.value)}
      class="select select-bordered w-full">
      <option value="solid">Solid</option>
      <option value="dashed">Dashed</option>
      <option value="dotted">Dotted</option>
    </select>


    <label class="label cursor-pointer">
      <span>Opposite Phase</span>
      <input type="checkbox"
        checked={wave.phase === Math.PI}
        on:change={(e) =>
          update("phase", e.currentTarget.checked ? Math.PI : 0)}
        class="toggle" />
    </label>

    Extra Left
    <input type="range" min="0" max="200"
      value={wave.extraLeft}
      on:input={(e) => update("extraLeft", +e.currentTarget.value)}
      class="range" />

    Extra Right
    <input type="range" min="0" max="200"
      value={wave.extraRight}
      on:input={(e) => update("extraRight", +e.currentTarget.value)}
      class="range" />

  </div>
</div>