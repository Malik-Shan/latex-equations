<script lang="ts">
  import { CATEGORIES, type Category, type Key } from "./catalog";
  import { renderLatex } from "./renderLatex";

  const CURSOR = "⟂";

  // raw input
  let qRaw = "";
  // debounced query used for filtering
  let q = "";

  let active = CATEGORIES[0]?.id ?? "templates";

  let isSearching = false;

  // Debounce timer
  let t: ReturnType<typeof setTimeout> | null = null;

  function insert(latex: string) {
    const fn = (window as any).__latexInsert as ((t: string) => void) | undefined;
    fn?.(latex);
  }

  function matches(key: Key, query: string) {
    const s = (key.title + " " + key.latex + " " + key.tags.join(" ")).toLowerCase();
    return s.includes(query);
  }

  function setQueryDebounced(value: string) {
    qRaw = value;

    // show spinner immediately if user is typing
    isSearching = value.trim().length > 0;

    if (t) clearTimeout(t);
    t = setTimeout(() => {
      q = qRaw.trim().toLowerCase();
      // keep spinner for a tick so UI updates smoothly
      requestAnimationFrame(() => {
        isSearching = false;
      });
    }, 120);
  }

  function changeTab(id: string) {
    // If user is searching, tabs are hidden anyway, but just in case:
    if (id === active) return;

    // give UI a chance to paint before heavy work
    isSearching = true;
    requestAnimationFrame(() => {
      active = id;
      requestAnimationFrame(() => {
        isSearching = false;
      });
    });
  }

  $: activeCat = (CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0]) as Category;

  // Compute visible keys (filtered or active category), but only based on debounced q
  $: visibleKeys =
    q.length > 0
      ? CATEGORIES.flatMap((c) =>
          c.keys
            .filter((k) => matches(k, q))
            .map((k) => ({
              k,
              c,
              renderSrc: (k.preview ?? k.latex).replaceAll(CURSOR, ""),
            }))
        )
      : activeCat.keys.map((k) => ({
          k,
          c: activeCat,
          renderSrc: (k.preview ?? k.latex).replaceAll(CURSOR, ""),
        }));
  $: if (q.length > 0 && visibleKeys.length > 200) {
    visibleKeys = visibleKeys.slice(0, 200);
  }
</script>

<div class="flex flex-col gap-3">
  <!-- <div class="flex gap-2 items-center">
    <input
      class="input input-bordered w-full"
      placeholder="Search: fraction, alpha, subset, integral…"
      value={qRaw}
      on:input={(e) => setQueryDebounced((e.target as HTMLInputElement).value)}
    />

    {#if isSearching}
      <span class="loading loading-spinner loading-sm"></span>
    {/if}
  </div> -->

  {#if q.length === 0}
    <div class="tabs tabs-boxed flex flex-wrap">
      {#each CATEGORIES as c}
        <button
          type="button"
          class={`tab ${active === c.id ? "tab-active bg-sky-300 rounded-md text-slate-900" : ""}`}
          on:click={() => changeTab(c.id)}
        >
          {c.title}
        </button>
      {/each}
    </div>

    {#if activeCat?.description}
      <div class="text-sm opacity-70">{activeCat.description}</div>
    {/if}
  {:else}
    <div class="text-sm opacity-70 flex items-center gap-2">
      <span>
        Showing results for: <span class="font-semibold">{qRaw.trim()}</span>
      </span>
      {#if isSearching}
        <span class="loading loading-dots loading-sm"></span>
      {/if}
    </div>
  {/if}

  <!-- Optional: show a small overlay while filtering -->
  {#if isSearching}
    <div class="text-sm opacity-70">Filtering…</div>
  {/if}

  <div class="flex flex-wrap gap-2">
    {#each visibleKeys as row (row.k.id)}
      <button
        type="button"
        class="btn btn-ghost border border-base-300 h-auto py-3 flex flex-col items-start gap-2"
        on:click={() => insert(row.k.latex)}
        title={row.k.latex}
      >
        <div class="text-xs opacity-60">
          {#if q.length > 0}{row.c.title}{/if}
        </div>

        <div class="w-full">
          {@html renderLatex(row.renderSrc)}
        </div>

        <div class="text-sm font-medium">{row.k.title}</div>
      </button>
    {/each}
  </div>
</div>