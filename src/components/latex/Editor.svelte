<script lang="ts">
  import { latex } from "./store";
  import { get } from "svelte/store";

  let textarea: HTMLTextAreaElement | null = null;

  const CURSOR = "⟂";

  function microtask(fn: () => void) {
    Promise.resolve().then(fn);
  }

  /**
   * Insert latex at cursor.
   * If user selected text and latex contains placeholder (⟂),
   * selection is placed into the first placeholder.
   */
  export function insertAtCursor(raw: string) {
    const current = String(get(latex));

    // If textarea isn't mounted yet, just append (rare)
    if (!textarea) {
      latex.set(current + raw.replaceAll(CURSOR, ""));
      return;
    }

    const start = textarea.selectionStart ?? current.length;
    const end = textarea.selectionEnd ?? current.length;
    const selected = current.slice(start, end);
    const hasSelection = start !== end;

    let insertText = raw;
    let nextCursorPos: number | null = null;

    // CASE A: selection exists + placeholder exists -> fill it
    if (hasSelection && raw.includes(CURSOR)) {
      // Prefer filling "{⟂}" if present (common for templates)
      if (raw.includes(`{${CURSOR}}`)) {
        insertText = raw.replace(`{${CURSOR}}`, `{${selected}}`);
        // Place cursor at the next placeholder if any, else end of inserted
        const nextIdx = insertText.indexOf(CURSOR);
        nextCursorPos = nextIdx !== -1 ? start + nextIdx : start + insertText.length;
      } else {
        // Fill plain ⟂
        insertText = raw.replace(CURSOR, selected);
        const nextIdx = insertText.indexOf(CURSOR);
        nextCursorPos = nextIdx !== -1 ? start + nextIdx : start + insertText.length;
      }
    }

    // CASE B: selection exists + no placeholder -> wrap or place around selection
    // Default behavior: put command BEFORE selection (easy + predictable)
    if (hasSelection && !raw.includes(CURSOR)) {
      // before selection
      insertText = raw + selected;
      nextCursorPos = start + raw.length + selected.length;
    }

    // CASE C: no selection -> normal insert, cursor jumps to placeholder if present
    if (!hasSelection) {
      const idx = raw.indexOf(CURSOR);
      nextCursorPos = idx !== -1 ? start + idx : start + raw.length;
    }

    // Build the new string
    const nextRaw = current.slice(0, start) + insertText + current.slice(end);
    latex.set(nextRaw);

    microtask(() => {
      if (!textarea) return;

      // If we inserted placeholders, remove the first one and set cursor there
      if (nextCursorPos !== null) {
        // remove only ONE placeholder near the cursor path (not all)
        const cleaned =
          nextRaw.includes(CURSOR)
            ? nextRaw.replace(CURSOR, "")
            : nextRaw;

        if (cleaned !== nextRaw) latex.set(cleaned);

        microtask(() => {
          if (!textarea) return;
          textarea.focus();
          textarea.setSelectionRange(nextCursorPos!, nextCursorPos!);
        });
        return;
      }

      // fallback
      textarea.focus();
    });
  }

  if (typeof window !== "undefined") {
    (window as any).__latexInsert = insertAtCursor;
  }

  let lastSelection = "";

function updateLastSelection() {
  if (!textarea) return;
  const start = textarea.selectionStart ?? 0;
  const end = textarea.selectionEnd ?? 0;
  const val = textarea.value ?? "";
  const sel = val.slice(start, end);
  if (sel.trim()) lastSelection = sel; // store only meaningful selections
}

function getSelectionText() {
  // Prefer lastSelection because clicking buttons often collapses selection
  if (lastSelection.trim()) return lastSelection;

  // fallback: read current selection
  if (!textarea) return "";
  const start = textarea.selectionStart ?? 0;
  const end = textarea.selectionEnd ?? 0;
  const val = textarea.value ?? "";
  return val.slice(start, end);
}


  if (typeof window !== "undefined") {
    (window as any).__latexGetSelection = getSelectionText;
  }

</script>

<textarea
  bind:this={textarea}
  class="textarea textarea-bordered min-h-40 w-full font-mono"
  placeholder={"e.g. \\frac{a}{b} + \\sqrt{x}"}
  bind:value={$latex}
  on:select={updateLastSelection}
  on:keyup={updateLastSelection}
  on:mouseup={updateLastSelection}
></textarea>