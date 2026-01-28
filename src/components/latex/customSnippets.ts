import { writable } from "svelte/store";

export type CustomSnippet = {
  id: string;
  latex: string;      // we’ll display/render this (no name needed)
  createdAt: number;
};

const STORAGE_KEY = "latex:customSnippets";

function load(): CustomSnippet[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CustomSnippet[]) : [];
  } catch {
    return [];
  }
}

export const customSnippets = writable<CustomSnippet[]>(load());

customSnippets.subscribe((list) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
});

export function addSnippet(latex: string) {
  const cleaned = latex.trim();
  if (!cleaned) return;

  customSnippets.update((list) => {
    // de-dupe by latex
    if (list.some((s) => s.latex === cleaned)) return list;

    const snippet: CustomSnippet = {
      id: crypto.randomUUID(),
      latex: cleaned,
      createdAt: Date.now(),
    };
    return [snippet, ...list];
  });
}

export function removeSnippet(id: string) {
  customSnippets.update((list) => list.filter((s) => s.id !== id));
}

export function importSnippets(items: Array<{ latex: string }>) {
  const incoming = items
    .map((x) => (x?.latex ?? "").trim())
    .filter(Boolean);

  if (incoming.length === 0) return;

  customSnippets.update((list) => {
    const existing = new Set(list.map((s) => s.latex));
    const merged: CustomSnippet[] = [...list];

    for (const lx of incoming) {
      if (existing.has(lx)) continue;
      merged.unshift({ id: crypto.randomUUID(), latex: lx, createdAt: Date.now() });
      existing.add(lx);
    }

    return merged;
  });
}