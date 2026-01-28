<script lang="ts">
  import { renderLatex } from "./renderLatex";

  import { customSnippets, addSnippet, removeSnippet, importSnippets } from "./customSnippets";

  let inputLatex = "";
  let importError = "";

  function insert(lx: string) {
    const fn = (window as any).__latexInsert as ((t: string) => void) | undefined;
    fn?.(lx);
  }

  function saveManual() {
    addSnippet(inputLatex);
    inputLatex = "";
  }

  function saveSelection() {
    const getSel = (window as any).__latexGetSelection as (() => string) | undefined;
    const sel = (getSel?.() ?? "").trim();

    if (!sel) return;

    // save selection as-is
    addSnippet(sel);
  }

  function exportJson() {
    const data = { version: 1, snippets: $customSnippets.map((s) => ({ latex: s.latex })) };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "latex-snippets.json";
    a.click();

    URL.revokeObjectURL(url);
  }

  async function onImportFile(e: Event) {
    importError = "";
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);

      // allow either {snippets:[{latex}]} or directly [{latex}]
      const snippets = Array.isArray(parsed)
        ? parsed
        : Array.isArray(parsed?.snippets)
          ? parsed.snippets
          : [];

      importSnippets(snippets);
      (e.target as HTMLInputElement).value = "";
    } catch {
      importError = "Invalid JSON file.";
    }
  }
</script>

<div class="card bg-base-100 border border-base-300">
  <div class="card-body gap-3">
    <div class="flex items-center justify-between">
      <div class="font-semibold">Custom (My Snippets)</div>

      <div class="flex items-center gap-2">
        <button class="btn btn-sm btn-outline" on:click={exportJson}>Export</button>

        <label class="btn btn-sm btn-outline cursor-pointer">
          Import
          <input class="hidden" type="file" accept="application/json" on:change={onImportFile} />
        </label>
      </div>
    </div>

    {#if importError}
      <div class="text-sm text-error">{importError}</div>
    {/if}

    <!-- Save selection -->
    <div class="flex flex-wrap gap-2">
        <button
            class="btn btn-sm btn-primary"
            on:pointerdown|preventDefault={() => saveSelection()}
            >
            Save highlighted selection
        </button>
      

      <div class="flex gap-2 flex-1 min-w-55">
        <input
          class="input input-bordered input-sm w-full font-mono"
          placeholder="Type a custom LaTeX snippet (e.g. x_2, \\frac{1}{2})"
          bind:value={inputLatex}
          on:keydown={(e) => e.key === "Enter" && saveManual()}
        />
        <button class="btn btn-sm" on:click={saveManual} disabled={!inputLatex.trim()}>
          Save
        </button>
      </div>
    </div>

    <!-- Grid: show rendered symbols, not names -->
    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {#each $customSnippets as s (s.id)}
        <div class="rounded-box border border-base-300 bg-base-200 p-2">
          <button
            class="btn btn-sm btn-ghost w-full justify-start h-auto py-2"
            on:click={() => insert(s.latex)}
            title={s.latex}
          >
            <span class="block w-full overflow-auto">
              {@html renderLatex(s.latex, {
                throwOnError: false,
                displayMode: false,
                strict: "ignore"
              })}
            </span>
          </button>

          <div class="mt-2 flex gap-2">
            <button class="btn btn-xs btn-outline" on:click={() => insert(s.latex)}>Use</button>
            <button class="btn btn-xs btn-ghost text-error" on:click={() => removeSnippet(s.id)}>Delete</button>
          </div>
        </div>
      {/each}
    </div>

    {#if $customSnippets.length === 0}
      <div class="text-sm opacity-70">No custom snippets yet. Save one above.</div>
    {/if}
  </div>
</div>