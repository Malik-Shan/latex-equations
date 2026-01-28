<script lang="ts">
  import katex from "katex";
  import "katex/dist/katex.min.css";
  import { latexTrimmed, exportTextColor, exportBgMode } from "./store";

  let container: HTMLDivElement | null = null;

  function hexToRgb(hex: string) {
    const h = hex.replace("#", "").trim();
    const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const n = parseInt(full, 16);
    return {
      r: (n >> 16) & 255,
      g: (n >> 8) & 255,
      b: n & 255,
    };
  }

  // perceived luminance 0..1
  function luminance(hex: string) {
    try {
      const { r, g, b } = hexToRgb(hex);
      const srgb = [r, g, b].map((v) => {
        const x = v / 255;
        return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
    } catch {
      return 0.2;
    }
  }

  $: textHex = $exportTextColor || "#111827";
  $: textLum = luminance(textHex);

  // Pick background so contrast is good
  $: autoBg = textLum > 0.6 ? "#0b1220" : "#ffffff"; // light text -> dark bg, dark text -> white bg

  $: previewBg =
    $exportBgMode === "transparent"
      ? "transparent"
      : $exportBgMode === "light"
        ? "#ffffff"
        : $exportBgMode === "dark"
          ? "#0b1220"
          : autoBg;

  $: if (container) {
    katex.render($latexTrimmed || "\\text{Type or click symbols…}", container, {
      throwOnError: false,
      displayMode: true,
      strict: "ignore",
    });
  }
</script>

<div
  class="rounded-box border border-base-300 p-3 overflow-auto"
  style={`background:${previewBg};`}
>
  <div
    data-export-root
    style={`display:inline-block; color:${textHex};`}
    bind:this={container}
  ></div>
</div>