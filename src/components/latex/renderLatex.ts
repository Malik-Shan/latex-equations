import katex from "katex";

type Opts = {
  displayMode?: boolean;
  throwOnError?: boolean;
  strict?: "ignore" | "warn" | "error";
};

const cache = new Map<string, string>();

export function renderLatex(latex: string, opts: Opts = {}) {
  const {
    displayMode = false,
    throwOnError = false,
    strict = "ignore",
  } = opts;

  const key = `${displayMode ? "D" : "I"}|${latex}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const html = katex.renderToString(latex, {
    displayMode,
    throwOnError,
    strict,
  });

  cache.set(key, html);
  return html;
}