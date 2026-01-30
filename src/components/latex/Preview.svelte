<script lang="ts">
  import katex from "katex";
  import "katex/dist/katex.min.css";
  import { latexTrimmed, previewTextColor, previewBg } from "./store";

  let container: HTMLDivElement | null = null;

  function autoBg(color: string) {
    // simple luminance check
    const c = parseInt(color.replace("#", ""), 16);
    const r = (c >> 16) & 255;
    const g = (c >> 8) & 255;
    const b = c & 255;
    const lum = (0.2126*r + 0.7152*g + 0.0722*b) / 255;
    return lum > 0.6 ? "#0b1220" : "#ffffff";
  }

  $: bg =
    $previewBg === "light"
      ? "#ffffff"
      : $previewBg === "dark"
        ? "#0b1220"
        : autoBg($previewTextColor);

  $: if (container) {
    katex.render($latexTrimmed || "\\text{Type or click symbols…}", container, {
      displayMode: true,
      throwOnError: false,
      strict: "ignore",
    });
  }
</script>

<div
  class="rounded-box border border-base-300 p-3 overflow-auto"
  style={`background:${bg};`}
>
  <div
    data-export-root
    bind:this={container}
    style={`display:inline-block;color:${$previewTextColor};`}
  ></div>
</div>