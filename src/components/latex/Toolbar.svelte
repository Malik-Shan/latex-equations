<script lang="ts">
  import { get } from "svelte/store";
  import {
    latexTrimmed,
    latex,
    exportTextColor,
    exportFormat,
    exportScale,
    exportJpegQuality,
    exportBgMode
  } from "./store";

  import * as htmlToImage from "html-to-image";

  function copyLatex() {
    navigator.clipboard.writeText(get(latexTrimmed));
  }

  function downloadTex() {
    const text = get(latexTrimmed);
    const blob = new Blob([text + "\n"], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "equation.tex";
    a.click();
    URL.revokeObjectURL(url);
  }

  function pickBgColor(): string | undefined {
    const mode = get(exportBgMode);
    if (mode === "transparent") return "transparent";
    if (mode === "light") return "#ffffff";
    if (mode === "dark") return "#0b1220";
    // auto: leave undefined for png/svg transparency OR choose white for jpeg
    return undefined;
  }

  async function exportImage() {
    const node = document.querySelector("[data-export-root]") as HTMLElement | null;
    if (!node) return;

    const fmt = get(exportFormat);
    const scale = Math.max(1, Math.min(6, get(exportScale)));
    const bgMode = get(exportBgMode);

    // background handling:
    // - PNG can be transparent
    // - SVG can be transparent
    // - JPEG MUST have a solid background
    const backgroundColor =
      fmt === "jpeg"
        ? (bgMode === "transparent" ? "#ffffff" : pickBgColor() ?? "#ffffff")
        : bgMode === "transparent"
          ? "transparent"
          : pickBgColor();

    let dataUrl = "";

    if (fmt === "png") {
      dataUrl = await htmlToImage.toPng(node, {
        pixelRatio: scale,
        cacheBust: true,
        backgroundColor: backgroundColor ?? "transparent",
        style: { padding: "0", margin: "0", border: "0" },
      });
    } else if (fmt === "jpeg") {
      const q = Math.max(0.1, Math.min(1, get(exportJpegQuality)));
      dataUrl = await htmlToImage.toJpeg(node, {
        pixelRatio: scale,
        quality: q,
        cacheBust: true,
        backgroundColor: backgroundColor ?? "#ffffff",
        style: { padding: "0", margin: "0", border: "0" },
      });
    } else {
      // svg
      dataUrl = await htmlToImage.toSvg(node, {
        cacheBust: true,
        backgroundColor: backgroundColor ?? "transparent",
        style: { padding: "0", margin: "0", border: "0" },
      });
    }

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `equation.${fmt}`;
    a.click();
  }

  function clearAll() {
    latex.set("");
  }
</script>

<div class="flex flex-wrap items-center gap-2">
  <button class="btn btn-sm btn-primary" on:click={copyLatex}>Copy LaTeX</button>
  <button class="btn btn-sm" on:click={downloadTex}>Download .tex</button>
  <button class="btn btn-sm btn-accent" on:click={exportImage}>Export</button>

  <div class="flex items-center gap-2 ml-auto flex-wrap">
    <span class="text-sm opacity-70">Text</span>
    <input class="input input-bordered input-sm w-12 p-1" type="color" bind:value={$exportTextColor} />

    <span class="text-sm opacity-70 ml-2">BG</span>
    <select class="select select-bordered select-sm" bind:value={$exportBgMode}>
      <option value="auto">Auto</option>
      <option value="transparent">Transparent</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

    <span class="text-sm opacity-70 ml-2">Format</span>
    <select class="select select-bordered select-sm" bind:value={$exportFormat}>
      <option value="png">PNG</option>
      <option value="svg">SVG</option>
      <option value="jpeg">JPEG</option>
    </select>

    <span class="text-sm opacity-70 ml-2">Scale</span>
    <select class="select select-bordered select-sm" bind:value={$exportScale}>
      <option value={1}>1x</option>
      <option value={2}>2x</option>
      <option value={3}>3x</option>
      <option value={4}>4x</option>
      <option value={5}>5x</option>
      <option value={6}>6x</option>
    </select>

    {#if $exportFormat === "jpeg"}
      <span class="text-sm opacity-70 ml-2">Quality</span>
      <select class="select select-bordered select-sm" bind:value={$exportJpegQuality}>
        <option value={0.6}>0.6</option>
        <option value={0.75}>0.75</option>
        <option value={0.85}>0.85</option>
        <option value={0.92}>0.92</option>
        <option value={1}>1.0</option>
      </select>
    {/if}

    <button class="btn btn-sm btn-ghost" on:click={clearAll}>Clear</button>
  </div>
</div>