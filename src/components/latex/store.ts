import { writable, derived } from "svelte/store";

function persisted<T>(key: string, initial: T) {
  const start =
    typeof window !== "undefined"
      ? (() => {
          try {
            const raw = localStorage.getItem(key);
            return raw ? (JSON.parse(raw) as T) : initial;
          } catch {
            return initial;
          }
        })()
      : initial;

  const store = writable<T>(start);

  store.subscribe((v) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, JSON.stringify(v));
  });

  return store;
}

// existing
export const latex = writable("");
export const latexTrimmed = derived(latex, ($l) => $l.trim());

// Preview (visual only)
export const previewTextColor = persisted<string>(
  "latex:previewTextColor",
  "#000000"
);

export const previewBg = persisted<"auto" | "light" | "dark">(
  "latex:previewBg",
  "auto"
);

// Export (authoritative)
export const exportTextColor = persisted<string>(
  "latex:exportTextColor",
  "#000000"
);

export const exportBg = persisted<"transparent" | "light" | "dark">(
  "latex:exportBg",
  "transparent"
);


// NEW export settings
export type ExportFormat = "png" | "svg" | "jpeg";

export const exportFormat = persisted<ExportFormat>("latex:exportFormat", "png");

// For PNG/JPEG: scale/pixel ratio
export const exportScale = persisted<number>("latex:exportScale", 3); // 1..6 good range

// For JPEG only
export const exportJpegQuality = persisted<number>("latex:exportJpegQuality", 0.92); // 0.1..1

// Background mode
export type BgMode = "auto" | "transparent" | "light" | "dark";
export const exportBgMode = persisted<BgMode>("latex:exportBgMode", "auto");