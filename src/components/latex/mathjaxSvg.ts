type MathJaxLike = {
  startup: { promise: Promise<void> };
  tex2svgPromise: (tex: string, opts?: { display?: boolean }) => Promise<HTMLElement>;
};

let mjReady: Promise<MathJaxLike> | null = null;

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (existing) {
      // already in DOM; wait a tick
      resolve();
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

async function ensureMathJax(): Promise<MathJaxLike> {
  if (typeof window === "undefined") throw new Error("MathJax requires browser.");

  if (mjReady) return mjReady;

  mjReady = (async () => {
    // ✅ CDN loader (stable + Canva friendly svg output)
    await loadScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js");

    const MJ = (window as any).MathJax as MathJaxLike | undefined;
    if (!MJ) throw new Error("MathJax not found on window.");

    await MJ.startup.promise;
    return MJ;
  })();

  return mjReady;
}

export async function texToSvgString(
  tex: string,
  opts?: { display?: boolean; color?: string }
): Promise<string> {
  const MJ = await ensureMathJax();
  const display = opts?.display ?? true;
  const color = opts?.color ?? "#111827";

  const wrapper = await MJ.tex2svgPromise(tex || "\\text{ }", { display });

  const svgNode = wrapper.querySelector("svg");
  if (!(svgNode instanceof SVGSVGElement)) {
    throw new Error("Failed to generate SVG.");
  }

  svgNode.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgNode.setAttribute("style", `color:${color};`);

  return svgNode.outerHTML;
}