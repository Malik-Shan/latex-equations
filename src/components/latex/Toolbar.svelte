<script lang="ts">
  import { texToSvgString } from "./mathjaxSvg";
  import { get } from "svelte/store";
  import {
    latex,
    latexTrimmed,

    // preview (visual only)
    previewTextColor,
    previewBg,

    // export
    exportTextColor,
    exportBg,
    exportFormat,
    exportScale,
    exportJpegQuality,
  } from "./store";

  function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function wrapSvgWithBg(svgString: string, bg: string) {
    if (bg === "transparent") return svgString;

    const doc = new DOMParser().parseFromString(svgString, "image/svg+xml");
    const root = doc.documentElement;
    if (!(root instanceof SVGSVGElement)) throw new Error("Invalid SVG document");
    const svg = root;

    const viewBox = svg.getAttribute("viewBox") || "0 0 0 0";
    const [vbX, vbY, vbW, vbH] = viewBox.split(/\s+/).map(Number);

    const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", String(vbX || 0));
    rect.setAttribute("y", String(vbY || 0));
    rect.setAttribute("width", String(vbW || "100%"));
    rect.setAttribute("height", String(vbH || "100%"));
    rect.setAttribute("fill", bg);

    svg.insertBefore(rect, svg.firstChild);
    return new XMLSerializer().serializeToString(svg);
  }

  function parseSvgPxSize(svgString: string) {
    const doc = new DOMParser().parseFromString(svgString, "image/svg+xml");
    const root = doc.documentElement;
    if (!(root instanceof SVGSVGElement)) throw new Error("Invalid SVG document");
    const svg = root;

    const vb = svg.getAttribute("viewBox");
    if (vb) {
      const [, , vbW, vbH] = vb.split(/\s+/).map(Number);

      // multiply a baseline so exported PNG looks crisp even before scaling
      const base = 40;
      return {
        width: Math.max(1, Math.ceil((vbW || 0) * base)),
        height: Math.max(1, Math.ceil((vbH || 0) * base)),
      };
    }

    return { width: 800, height: 300 };
  }

  async function svgToRasterDataUrl(
    svgString: string,
    kind: "png" | "jpeg",
    scale: number,
    jpegQuality = 0.92
  ) {
    const { width, height } = parseSvgPxSize(svgString);

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const img = new Image();

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Failed to load SVG image."));
      img.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No canvas context.");

    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0);

    URL.revokeObjectURL(url);

    if (kind === "png") return canvas.toDataURL("image/png");
    return canvas.toDataURL("image/jpeg", Math.max(0.1, Math.min(1, jpegQuality)));
  }

  function copyLatex() {
    navigator.clipboard.writeText(get(latexTrimmed));
  }

  function downloadTex() {
    const text = get(latexTrimmed);
    const blob = new Blob([text + "\n"], { type: "text/plain;charset=utf-8" });
    downloadBlob(blob, "equation.tex");
  }

  async function exportImage() {
    try {
      const tex = get(latexTrimmed) || "\\text{ }";
      const fmt = get(exportFormat); // png | svg | jpeg
      const textColor = get(exportTextColor) || "#111827";
      const scale = Math.max(1, Math.min(10, get(exportScale)));

      // export background is explicit
      const bgMode = get(exportBg); // transparent | light | dark
      const bg =
        bgMode === "light" ? "#ffffff" : bgMode === "dark" ? "#0b1220" : "transparent";

      // 1) pure MathJax SVG
      let svg = await texToSvgString(tex, { display: true, color: textColor });

      // 2) apply bg rules:
      // - png/svg: only if not transparent
      // - jpeg: must be solid
      if (fmt === "jpeg") {
        svg = wrapSvgWithBg(svg, bg === "transparent" ? "#ffffff" : bg);
      } else if (bg !== "transparent") {
        svg = wrapSvgWithBg(svg, bg);
      }

      if (fmt === "svg") {
        downloadBlob(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }), "equation.svg");
        return;
      }

      const dataUrl =
        fmt === "png"
          ? await svgToRasterDataUrl(svg, "png", scale)
          : await svgToRasterDataUrl(svg, "jpeg", scale, get(exportJpegQuality));

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `equation.${fmt}`;
      a.click();
    } catch (err) {
      console.error("Export failed:", err);
      alert("Export failed. Check console for details.");
    }
  }

  function clearAll() {
    latex.set("");
  }

  function syncPreviewToExport() {
    exportTextColor.set(get(previewTextColor));
    // Map preview bg -> export bg (auto becomes transparent)
    const pb = get(previewBg);
    exportBg.set(pb === "light" ? "light" : pb === "dark" ? "dark" : "transparent");
  }
</script>

<div class="flex flex-wrap items-center gap-2">
  <button class="btn btn-sm btn-primary" on:click={copyLatex}>Copy LaTeX</button>
  <button class="btn btn-sm" on:click={downloadTex}>Download .tex</button>
  <button class="btn btn-sm btn-accent" on:click={exportImage}>Download</button>
  <button class="btn btn-sm btn-ghost" on:click={clearAll}>Clear</button>

  <div class="ml-auto w-full md:w-auto"></div>

  <!-- Settings (collapsed) -->
  <div class="w-full flex flex-col gap-2">
    <!-- Preview settings -->
    <div class="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
      <input type="checkbox" />
      <div class="collapse-title text-sm font-semibold flex items-center gap-2">
        Preview settings
        <span class="badge badge-outline badge-sm">visual only</span>
      </div>

      <div class="collapse-content">
        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Text</span>
            <input
              type="color"
              class="input input-bordered input-sm w-12 p-1"
              bind:value={$previewTextColor}
            />
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Background</span>
            <select class="select select-bordered select-sm" bind:value={$previewBg}>
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div class="opacity-70 text-sm">
            Auto helps visibility while editing.
          </div>
        </div>
      </div>
    </div>

    <!-- Export settings -->
    <div class="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
      <input type="checkbox" />
      <div class="collapse-title text-sm font-semibold flex items-center gap-2">
        Export settings
        <span class="badge badge-outline badge-sm">file output</span>
      </div>

      <div class="collapse-content">
        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Text</span>
            <input
              type="color"
              class="input input-bordered input-sm w-12 p-1"
              bind:value={$exportTextColor}
            />
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Background</span>
            <select class="select select-bordered select-sm" bind:value={$exportBg}>
              <option value="transparent">Transparent</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Format</span>
            <select class="select select-bordered select-sm" bind:value={$exportFormat}>
              <option value="png">PNG</option>
              <option value="svg">SVG</option>
              <option value="jpeg">JPEG</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <span class="text-sm opacity-70">Scale</span>
            <select class="select select-bordered select-sm" bind:value={$exportScale}>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={3}>3x</option>
              <option value={4}>4x</option>
              <option value={6}>6x</option>
              <option value={8}>8x</option>
              <option value={10}>10x</option>
            </select>
          </div>

          {#if $exportFormat === "jpeg"}
            <div class="flex items-center gap-2">
              <span class="text-sm opacity-70">Quality</span>
              <select class="select select-bordered select-sm" bind:value={$exportJpegQuality}>
                <option value={0.6}>0.6</option>
                <option value={0.75}>0.75</option>
                <option value={0.85}>0.85</option>
                <option value={0.92}>0.92</option>
                <option value={1}>1.0</option>
              </select>
            </div>
          {/if}

          <button class="btn btn-sm btn-outline ml-auto" on:click={syncPreviewToExport}>
            Sync preview → export
          </button>
        </div>

        <div class="text-xs opacity-70 mt-2">
          Tip: Use Transparent + SVG for Canva. Use PNG for slides. JPEG is best for solid backgrounds.
        </div>
      </div>
    </div>
  </div>
</div>