export type Key = {
  id: string;
  title: string;      // noob label
  latex: string;       // what gets inserted (can include ⟂ placeholder)
  preview?: string;    // what to render on button (optional)
  tags: string[];
};

export type Category = {
  id: string;
  title: string;
  description?: string;
  keys: Key[];
};

const C = "⟂"; // cursor placeholder

export const CATEGORIES: Category[] = [
  {
    id: "templates",
    title: "Templates",
    description: "Fast building blocks (best for beginners)",
    keys: [
      { id: "frac", title: "Fraction", latex: `\\frac{${C}}{}`, preview: "\\frac{a}{b}", tags: ["fraction","divide","frac"] },
      { id: "sqrt", title: "Square root", latex: `\\sqrt{${C}}`, preview: "\\sqrt{x}", tags: ["root","sqrt"] },
      { id: "nthroot", title: "n-th root", latex: `\\sqrt[${C}]{} `, preview: "\\sqrt[n]{x}", tags: ["nthroot","root"] },

      { id: "pow", title: "Power", latex: `^{${C}}`, preview: "x^2", tags: ["power","exponent"] },
      { id: "sub", title: "Subscript", latex: `_{${C}}`, preview: "a_1", tags: ["subscript","index"] },

      { id: "sum_limits", title: "Sum (with limits)", latex: `\\sum_{${C}}^{}`, preview: "\\sum_{i=1}^{n}", tags: ["sum","sigma"] },
      { id: "prod_limits", title: "Product (with limits)", latex: `\\prod_{${C}}^{}`, preview: "\\prod_{i=1}^{n}", tags: ["product","pi"] },

      { id: "int_limits", title: "Integral (with limits)", latex: `\\int_{${C}}^{}`, preview: "\\int_0^1", tags: ["integral"] },
      { id: "iint_region", title: "Double integral", latex: `\\iint_{${C}}`, preview: "\\iint_D", tags: ["double integral","iint"] },
      { id: "iiint_region", title: "Triple integral", latex: `\\iiint_{${C}}`, preview: "\\iiint_V", tags: ["triple integral","iiint"] },

      { id: "lim", title: "Limit", latex: `\\lim_{${C}}`, preview: "\\lim_{x\\to 0}", tags: ["limit"] },
      { id: "log_base", title: "Log base", latex: `\\log_{${C}} `, preview: "\\log_b", tags: ["log","base"] },

      { id: "vec", title: "Vector arrow", latex: `\\vec{${C}}`, preview: "\\vec{v}", tags: ["vector","arrow"] },
      { id: "hat", title: "Hat", latex: `\\hat{${C}}`, preview: "\\hat{x}", tags: ["hat"] },
      { id: "overline", title: "Overline", latex: `\\overline{${C}}`, preview: "\\overline{x}", tags: ["overline","bar"] },
      { id: "underline", title: "Underline", latex: `\\underline{${C}}`, preview: "\\underline{x}", tags: ["underline"] },

      { id: "cases", title: "Cases", latex: `\\begin{cases}${C}\\\\\\end{cases}`, preview: "\\begin{cases}x&x>0\\\\0&x\\le 0\\end{cases}", tags: ["cases","piecewise"] },
      { id: "binom", title: "Binomial (n choose r)", latex: `\\binom{${C}}{}`, preview: "\\binom{n}{r}", tags: ["binom","choose","combinations"] },

      { id: "matrix2", title: "2×2 Matrix (bmatrix)", latex: `\\begin{bmatrix}${C}&\\\\&\\end{bmatrix}`, preview: "\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}", tags: ["matrix","bmatrix"] },
    ],
  },

  {
    id: "brackets",
    title: "Brackets",
    keys: [
      { id: "paren", title: "Parentheses ( )", latex: `\\left(${C}\\right)`, preview: "\\left(x\\right)", tags: ["parentheses","paren"] },
      { id: "brack", title: "Brackets [ ]", latex: `\\left[${C}\\right]`, preview: "\\left[x\\right]", tags: ["brackets"] },
      { id: "brace", title: "Braces { }", latex: `\\left\\{${C}\\right\\}`, preview: "\\left\\{x\\right\\}", tags: ["braces","curly"] },
      { id: "angle", title: "Angle brackets ⟨ ⟩", latex: `\\left\\langle ${C} \\right\\rangle`, preview: "\\langle x\\rangle", tags: ["angle","inner product"] },
      { id: "abs", title: "Absolute value | |", latex: `\\left|${C}\\right|`, preview: "\\left|x\\right|", tags: ["abs","absolute"] },
      { id: "norm", title: "Norm ‖ ‖", latex: `\\left\\|${C}\\right\\|`, preview: "\\left\\|x\\right\\|", tags: ["norm"] },
      { id: "floor", title: "Floor ⌊ ⌋", latex: `\\left\\lfloor ${C} \\right\\rfloor`, preview: "\\lfloor x\\rfloor", tags: ["floor"] },
      { id: "ceil", title: "Ceiling ⌈ ⌉", latex: `\\left\\lceil ${C} \\right\\rceil`, preview: "\\lceil x\\rceil", tags: ["ceil","ceiling"] },
    ],
  },

  {
    id: "bigdelims",
    title: "Big Delimiters",
    description: "Bigger scalable brackets (useful for tall fractions/matrices)",
    keys: [
      { id: "bigl", title: "bigl( )", latex: `\\bigl(${C}\\bigr)`, preview: "\\bigl( x \\bigr)", tags: ["bigl","bigr"] },
      { id: "Bigl", title: "Bigl( )", latex: `\\Bigl(${C}\\Bigr)`, preview: "\\Bigl( x \\Bigr)", tags: ["Bigl","Bigr"] },
      { id: "biggl", title: "biggl( )", latex: `\\biggl(${C}\\biggr)`, preview: "\\biggl( x \\biggr)", tags: ["biggl","biggr"] },
      { id: "Biggl", title: "Biggl( )", latex: `\\Biggl(${C}\\Biggr)`, preview: "\\Biggl( x \\Biggr)", tags: ["Biggl","Biggr"] },
    ],
  },

  {
    id: "matrix",
    title: "Matrix & Vectors",
    keys: [
      { id: "bmatrix", title: "bmatrix [ ]", latex: `\\begin{bmatrix}${C}&\\\\&\\end{bmatrix}`, preview: "\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}", tags: ["matrix","bmatrix"] },
      { id: "pmatrix", title: "pmatrix ( )", latex: `\\begin{pmatrix}${C}&\\\\&\\end{pmatrix}`, preview: "\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}", tags: ["matrix","pmatrix"] },
      { id: "vmatrix", title: "vmatrix | | (det)", latex: `\\begin{vmatrix}${C}&\\\\&\\end{vmatrix}`, preview: "\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}", tags: ["determinant","vmatrix"] },
      { id: "Vmatrix", title: "Vmatrix ‖ ‖", latex: `\\begin{Vmatrix}${C}&\\\\&\\end{Vmatrix}`, preview: "\\begin{Vmatrix}a&b\\\\c&d\\end{Vmatrix}", tags: ["norm matrix","Vmatrix"] },

      { id: "overrightarrow", title: "Overrightarrow", latex: `\\overrightarrow{${C}}`, preview: "\\overrightarrow{AB}", tags: ["vector","overrightarrow"] },
      { id: "overleftrightarrow", title: "Overleftrightarrow", latex: `\\overleftrightarrow{${C}}`, preview: "\\overleftrightarrow{AB}", tags: ["overleftrightarrow"] },
    ],
  },

  {
    id: "operators",
    title: "Operators",
    keys: [
      // arithmetic/common
      { id: "pm", title: "Plus/minus ±", latex: "\\pm ", preview: "\\pm", tags: ["pm","plus minus"] },
      { id: "mp", title: "Minus/plus ∓", latex: "\\mp ", preview: "\\mp", tags: ["mp","minus plus"] },
      { id: "cdot", title: "Multiply dot ·", latex: "\\cdot ", preview: "\\cdot", tags: ["multiply","dot"] },
      { id: "times", title: "Times ×", latex: "\\times ", preview: "\\times", tags: ["multiply","times"] },
      { id: "div", title: "Divide ÷", latex: "\\div ", preview: "\\div", tags: ["divide"] },

      // dots
      { id: "cdots", title: "Centered dots ⋯", latex: "\\cdots ", preview: "\\cdots", tags: ["cdots","dots"] },

      // function ops
      { id: "circ", title: "Composition ∘", latex: "\\circ ", preview: "\\circ", tags: ["compose"] },
      { id: "ast", title: "Asterisk ∗", latex: "\\ast ", preview: "\\ast", tags: ["ast"] },
      { id: "star", title: "Star ⋆", latex: "\\star ", preview: "\\star", tags: ["star"] },
      { id: "bullet", title: "Bullet •", latex: "\\bullet ", preview: "\\bullet", tags: ["bullet"] },

      // big ops / set ops
      { id: "wedge", title: "Wedge ∧", latex: "\\wedge ", preview: "\\wedge", tags: ["wedge"] },
      { id: "vee", title: "Vee ∨", latex: "\\vee ", preview: "\\vee", tags: ["vee"] },
      { id: "cap", title: "Intersection ∩", latex: "\\cap ", preview: "\\cap", tags: ["cap","intersection"] },
      { id: "cup", title: "Union ∪", latex: "\\cup ", preview: "\\cup", tags: ["cup","union"] },
      { id: "uplus", title: "Uplus ⊎", latex: "\\uplus ", preview: "\\uplus", tags: ["uplus"] },
      { id: "sqcap", title: "Sqcap ⊓", latex: "\\sqcap ", preview: "\\sqcap", tags: ["sqcap"] },
      { id: "sqcup", title: "Sqcup ⊔", latex: "\\sqcup ", preview: "\\sqcup", tags: ["sqcup"] },

      // circle ops
      { id: "oplus", title: "Oplus ⊕", latex: "\\oplus ", preview: "\\oplus", tags: ["oplus"] },
      { id: "ominus", title: "Ominus ⊖", latex: "\\ominus ", preview: "\\ominus", tags: ["ominus"] },
      { id: "otimes", title: "Otimes ⊗", latex: "\\otimes ", preview: "\\otimes", tags: ["otimes","tensor"] },
      { id: "oslash", title: "Oslash ⊘", latex: "\\oslash ", preview: "\\oslash", tags: ["oslash"] },
      { id: "odot", title: "Odot ⊙", latex: "\\odot ", preview: "\\odot", tags: ["odot"] },

      // daggers
      { id: "dagger", title: "Dagger †", latex: "\\dagger ", preview: "\\dagger", tags: ["dagger"] },
      { id: "ddagger", title: "Double dagger ‡", latex: "\\ddagger ", preview: "\\ddagger", tags: ["ddagger"] },

      // triangles
      { id: "triangleleft", title: "Triangle left ◁", latex: "\\triangleleft ", preview: "\\triangleleft", tags: ["triangleleft"] },
      { id: "triangleright", title: "Triangle right ▷", latex: "\\triangleright ", preview: "\\triangleright", tags: ["triangleright"] },
      { id: "bigtriangleup", title: "Big triangle up △", latex: "\\bigtriangleup ", preview: "\\bigtriangleup", tags: ["bigtriangleup"] },
      { id: "bigtriangledown", title: "Big triangle down ▽", latex: "\\bigtriangledown ", preview: "\\bigtriangledown", tags: ["bigtriangledown"] },

      // trig/log (common)
      { id: "log", title: "log", latex: "\\log ", preview: "\\log", tags: ["log"] },
      { id: "ln", title: "ln", latex: "\\ln ", preview: "\\ln", tags: ["ln"] },
      { id: "sin", title: "sin", latex: "\\sin ", preview: "\\sin", tags: ["sin"] },
      { id: "cos", title: "cos", latex: "\\cos ", preview: "\\cos", tags: ["cos"] },
      { id: "tan", title: "tan", latex: "\\tan ", preview: "\\tan", tags: ["tan"] },
    ],
  },

  {
    id: "relations",
    title: "Relations",
    keys: [
      { id: "eq", title: "Equals =", latex: "= ", preview: "=", tags: ["equals"] },
      { id: "neq", title: "Not equal ≠", latex: "\\ne ", preview: "\\ne", tags: ["not equal","neq"] },
      { id: "equiv", title: "Equivalent ≡", latex: "\\equiv ", preview: "\\equiv", tags: ["equiv"] },
      { id: "approx", title: "Approx ≈", latex: "\\approx ", preview: "\\approx", tags: ["approx"] },
      { id: "sim", title: "Similar ∼", latex: "\\sim ", preview: "\\sim", tags: ["sim"] },
      { id: "simeq", title: "Simeq ≃", latex: "\\simeq ", preview: "\\simeq", tags: ["simeq"] },
      { id: "propto", title: "Proportional ∝", latex: "\\propto ", preview: "\\propto", tags: ["proportional","propto"] },

      { id: "leq", title: "Less or equal ≤", latex: "\\leq ", preview: "\\leq", tags: ["leq","less equal"] },
      { id: "geq", title: "Greater or equal ≥", latex: "\\geq ", preview: "\\geq", tags: ["geq","greater equal"] },
      { id: "ll", title: "Much less ≪", latex: "\\ll ", preview: "\\ll", tags: ["ll"] },
      { id: "gg", title: "Much greater ≫", latex: "\\gg ", preview: "\\gg", tags: ["gg"] },

      { id: "subset", title: "Subset ⊂", latex: "\\subset ", preview: "\\subset", tags: ["subset"] },
      { id: "subseteq", title: "Subseteq ⊆", latex: "\\subseteq ", preview: "\\subseteq", tags: ["subseteq"] },
      { id: "supset", title: "Superset ⊃", latex: "\\supset ", preview: "\\supset", tags: ["supset"] },
      { id: "supseteq", title: "Supseteq ⊇", latex: "\\supseteq ", preview: "\\supseteq", tags: ["supseteq"] },

      { id: "in", title: "Element of ∈", latex: "\\in ", preview: "\\in", tags: ["in","element"] },
      { id: "notin", title: "Not in ∉", latex: "\\notin ", preview: "\\notin", tags: ["notin"] },
      { id: "ni", title: "Contains ∋", latex: "\\ni ", preview: "\\ni", tags: ["ni","contains"] },

      { id: "parallel", title: "Parallel ∥", latex: "\\parallel ", preview: "\\parallel", tags: ["parallel"] },
      { id: "nparallel", title: "Not parallel ∦", latex: "\\nparallel ", preview: "\\nparallel", tags: ["not parallel"] },
      { id: "perp", title: "Perpendicular ⟂", latex: "\\perp ", preview: "\\perp", tags: ["perp","orthogonal"] },
    ],
  },

  {
    id: "arrows",
    title: "Arrows",
    keys: [
      { id: "leftarrow", title: "Left arrow ←", latex: "\\leftarrow ", preview: "\\leftarrow", tags: ["leftarrow"] },
      { id: "rightarrow", title: "Right arrow →", latex: "\\rightarrow ", preview: "\\rightarrow", tags: ["rightarrow"] },
      { id: "uparrow", title: "Up arrow ↑", latex: "\\uparrow ", preview: "\\uparrow", tags: ["uparrow"] },
      { id: "downarrow", title: "Down arrow ↓", latex: "\\downarrow ", preview: "\\downarrow", tags: ["downarrow"] },
      { id: "leftrightarrow", title: "Left-right ↔", latex: "\\leftrightarrow ", preview: "\\leftrightarrow", tags: ["leftrightarrow"] },

      { id: "Leftarrow", title: "Implies (left) ⇐", latex: "\\Leftarrow ", preview: "\\Leftarrow", tags: ["Leftarrow"] },
      { id: "Rightarrow", title: "Implies ⇒", latex: "\\Rightarrow ", preview: "\\Rightarrow", tags: ["Rightarrow","implies"] },
      { id: "Leftrightarrow", title: "Iff ⇔", latex: "\\Leftrightarrow ", preview: "\\Leftrightarrow", tags: ["Leftrightarrow","iff"] },

      { id: "mapsto", title: "Maps to ↦", latex: "\\mapsto ", preview: "\\mapsto", tags: ["mapsto"] },
      { id: "to", title: "to", latex: "\\to ", preview: "\\to", tags: ["to"] },

      { id: "hookrightarrow", title: "Hook right ↪", latex: "\\hookrightarrow ", preview: "\\hookrightarrow", tags: ["hookrightarrow"] },
      { id: "hookleftarrow", title: "Hook left ↩", latex: "\\hookleftarrow ", preview: "\\hookleftarrow", tags: ["hookleftarrow"] },

      { id: "longrightarrow", title: "Long right ⟶", latex: "\\longrightarrow ", preview: "\\longrightarrow", tags: ["longrightarrow"] },
      { id: "longleftarrow", title: "Long left ⟵", latex: "\\longleftarrow ", preview: "\\longleftarrow", tags: ["longleftarrow"] },
      { id: "longleftrightarrow", title: "Long left-right ⟷", latex: "\\longleftrightarrow ", preview: "\\longleftrightarrow", tags: ["longleftrightarrow"] },
    ],
  },

  {
    id: "styles",
    title: "Style & Fonts",
    keys: [
      { id: "mathrm", title: "Roman (\\mathrm)", latex: `\\mathrm{${C}}`, preview: "\\mathrm{ABC}", tags: ["mathrm","roman"] },
      { id: "mathit", title: "Italic (\\mathit)", latex: `\\mathit{${C}}`, preview: "\\mathit{ABC}", tags: ["mathit","italic"] },
      { id: "mathbf", title: "Bold (\\mathbf)", latex: `\\mathbf{${C}}`, preview: "\\mathbf{ABC}", tags: ["mathbf","bold"] },
      { id: "mathsf", title: "Sans (\\mathsf)", latex: `\\mathsf{${C}}`, preview: "\\mathsf{ABC}", tags: ["mathsf","sans"] },
      { id: "mathtt", title: "Typewriter (\\mathtt)", latex: `\\mathtt{${C}}`, preview: "\\mathtt{ABC}", tags: ["mathtt","typewriter"] },
      { id: "mathcal", title: "Calligraphic (\\mathcal)", latex: `\\mathcal{${C}}`, preview: "\\mathcal{ABC}", tags: ["mathcal"] },
      { id: "mathbb", title: "Blackboard (\\mathbb)", latex: `\\mathbb{${C}}`, preview: "\\mathbb{R}", tags: ["mathbb","blackboard"] },
      { id: "boldsymbol", title: "Bold symbol", latex: `\\boldsymbol{${C}}`, preview: "\\boldsymbol{\\alpha}", tags: ["boldsymbol"] },
      { id: "text", title: "Text (\\text)", latex: `\\text{${C}}`, preview: "\\text{hello}", tags: ["text"] },
    ],
  },

  {
    id: "spaces",
    title: "Spaces",
    keys: [
      { id: "thinspace", title: "Thin space \\,", latex: "\\, ", preview: "\\,", tags: ["thinspace"] },
      { id: "medspace", title: "Medium space \\:", latex: "\\: ", preview: "\\:", tags: ["medspace"] },
      { id: "thickspace", title: "Thick space \\;", latex: "\\; ", preview: "\\;", tags: ["thickspace"] },
      { id: "quad", title: "Quad \\quad", latex: "\\quad ", preview: "\\quad", tags: ["quad"] },
      { id: "qquad", title: "Qquad \\qquad", latex: "\\qquad ", preview: "\\qquad", tags: ["qquad"] },
      { id: "negthin", title: "Negative thin \\!", latex: "\\! ", preview: "\\!", tags: ["negative thinspace"] },
    ],
  },

  {
    id: "accents",
    title: "Accents",
    keys: [
      { id: "hat", title: "Hat", latex: `\\hat{${C}}`, preview: "\\hat{x}", tags: ["hat"] },
      { id: "tilde", title: "Tilde", latex: `\\tilde{${C}}`, preview: "\\tilde{x}", tags: ["tilde"] },
      { id: "bar", title: "Bar", latex: `\\bar{${C}}`, preview: "\\bar{x}", tags: ["bar"] },
      { id: "vec", title: "Vector", latex: `\\vec{${C}}`, preview: "\\vec{x}", tags: ["vec","vector"] },
      { id: "dot", title: "Dot", latex: `\\dot{${C}}`, preview: "\\dot{x}", tags: ["dot"] },
      { id: "ddot", title: "Double dot", latex: `\\ddot{${C}}`, preview: "\\ddot{x}", tags: ["ddot"] },
      { id: "overline", title: "Overline", latex: `\\overline{${C}}`, preview: "\\overline{AB}", tags: ["overline"] },
      { id: "underline", title: "Underline", latex: `\\underline{${C}}`, preview: "\\underline{AB}", tags: ["underline"] },
    ],
  },

  {
    id: "accents_ext",
    title: "Accents Extended",
    keys: [
      { id: "widehat", title: "Wide hat", latex: `\\widehat{${C}}`, preview: "\\widehat{ABC}", tags: ["widehat"] },
      { id: "widetilde", title: "Wide tilde", latex: `\\widetilde{${C}}`, preview: "\\widetilde{ABC}", tags: ["widetilde"] },
      { id: "overrightarrow", title: "Overrightarrow", latex: `\\overrightarrow{${C}}`, preview: "\\overrightarrow{AB}", tags: ["overrightarrow"] },
      { id: "overleftarrow", title: "Overleftarrow", latex: `\\overleftarrow{${C}}`, preview: "\\overleftarrow{AB}", tags: ["overleftarrow"] },
      { id: "overbrace", title: "Overbrace", latex: `\\overbrace{${C}}^{}`, preview: "\\overbrace{a+b}^{n}", tags: ["overbrace"] },
      { id: "underbrace", title: "Underbrace", latex: `\\underbrace{${C}}_{}`, preview: "\\underbrace{a+b}_{n}", tags: ["underbrace"] },
    ],
  },

  {
    id: "greek_lower",
    title: "Greek Lowercase",
    keys: [
      { id: "alpha", title: "alpha", latex: "\\alpha ", preview: "\\alpha", tags: ["alpha","greek"] },
      { id: "beta", title: "beta", latex: "\\beta ", preview: "\\beta", tags: ["beta","greek"] },
      { id: "gamma", title: "gamma", latex: "\\gamma ", preview: "\\gamma", tags: ["gamma","greek"] },
      { id: "delta", title: "delta", latex: "\\delta ", preview: "\\delta", tags: ["delta","greek"] },
      { id: "epsilon", title: "epsilon", latex: "\\epsilon ", preview: "\\epsilon", tags: ["epsilon","greek"] },
      { id: "varepsilon", title: "varepsilon", latex: "\\varepsilon ", preview: "\\varepsilon", tags: ["varepsilon","greek"] },
      { id: "zeta", title: "zeta", latex: "\\zeta ", preview: "\\zeta", tags: ["zeta","greek"] },
      { id: "eta", title: "eta", latex: "\\eta ", preview: "\\eta", tags: ["eta","greek"] },
      { id: "theta", title: "theta", latex: "\\theta ", preview: "\\theta", tags: ["theta","greek"] },
      { id: "vartheta", title: "vartheta", latex: "\\vartheta ", preview: "\\vartheta", tags: ["vartheta","greek"] },
      { id: "iota", title: "iota", latex: "\\iota ", preview: "\\iota", tags: ["iota","greek"] },
      { id: "kappa", title: "kappa", latex: "\\kappa ", preview: "\\kappa", tags: ["kappa","greek"] },
      { id: "lambda", title: "lambda", latex: "\\lambda ", preview: "\\lambda", tags: ["lambda","greek"] },
      { id: "mu", title: "mu", latex: "\\mu ", preview: "\\mu", tags: ["mu","greek"] },
      { id: "nu", title: "nu", latex: "\\nu ", preview: "\\nu", tags: ["nu","greek"] },
      { id: "xi", title: "xi", latex: "\\xi ", preview: "\\xi", tags: ["xi","greek"] },
      { id: "pi", title: "pi", latex: "\\pi ", preview: "\\pi", tags: ["pi","greek"] },
      { id: "varpi", title: "varpi", latex: "\\varpi ", preview: "\\varpi", tags: ["varpi","greek"] },
      { id: "rho", title: "rho", latex: "\\rho ", preview: "\\rho", tags: ["rho","greek"] },
      { id: "varrho", title: "varrho", latex: "\\varrho ", preview: "\\varrho", tags: ["varrho","greek"] },
      { id: "sigma", title: "sigma", latex: "\\sigma ", preview: "\\sigma", tags: ["sigma","greek"] },
      { id: "varsigma", title: "varsigma", latex: "\\varsigma ", preview: "\\varsigma", tags: ["varsigma","greek"] },
      { id: "tau", title: "tau", latex: "\\tau ", preview: "\\tau", tags: ["tau","greek"] },
      { id: "upsilon", title: "upsilon", latex: "\\upsilon ", preview: "\\upsilon", tags: ["upsilon","greek"] },
      { id: "phi", title: "phi", latex: "\\phi ", preview: "\\phi", tags: ["phi","greek"] },
      { id: "varphi", title: "varphi", latex: "\\varphi ", preview: "\\varphi", tags: ["varphi","greek"] },
      { id: "chi", title: "chi", latex: "\\chi ", preview: "\\chi", tags: ["chi","greek"] },
      { id: "psi", title: "psi", latex: "\\psi ", preview: "\\psi", tags: ["psi","greek"] },
      { id: "omega", title: "omega", latex: "\\omega ", preview: "\\omega", tags: ["omega","greek"] },
    ],
  },

  {
    id: "greek_upper",
    title: "Greek Uppercase",
    keys: [
      { id: "Gamma", title: "Gamma", latex: "\\Gamma ", preview: "\\Gamma", tags: ["Gamma","greek"] },
      { id: "Delta", title: "Delta", latex: "\\Delta ", preview: "\\Delta", tags: ["Delta","greek"] },
      { id: "Theta", title: "Theta", latex: "\\Theta ", preview: "\\Theta", tags: ["Theta","greek"] },
      { id: "Lambda", title: "Lambda", latex: "\\Lambda ", preview: "\\Lambda", tags: ["Lambda","greek"] },
      { id: "Xi", title: "Xi", latex: "\\Xi ", preview: "\\Xi", tags: ["Xi","greek"] },
      { id: "Pi", title: "Pi", latex: "\\Pi ", preview: "\\Pi", tags: ["Pi","greek"] },
      { id: "Sigma", title: "Sigma", latex: "\\Sigma ", preview: "\\Sigma", tags: ["Sigma","greek"] },
      { id: "Upsilon", title: "Upsilon", latex: "\\Upsilon ", preview: "\\Upsilon", tags: ["Upsilon","greek"] },
      { id: "Phi", title: "Phi", latex: "\\Phi ", preview: "\\Phi", tags: ["Phi","greek"] },
      { id: "Psi", title: "Psi", latex: "\\Psi ", preview: "\\Psi", tags: ["Psi","greek"] },
      { id: "Omega", title: "Omega", latex: "\\Omega ", preview: "\\Omega", tags: ["Omega","greek"] },
    ],
  },

  {
    id: "calculus",
    title: "Calculus & Big Operators",
    keys: [
      { id: "int", title: "Integral ∫", latex: "\\int ", preview: "\\int", tags: ["int","integral"] },
      { id: "oint", title: "Contour integral ∮", latex: "\\oint ", preview: "\\oint", tags: ["oint","contour"] },
      { id: "sum", title: "Sum ∑", latex: "\\sum ", preview: "\\sum", tags: ["sum"] },
      { id: "prod", title: "Product ∏", latex: "\\prod ", preview: "\\prod", tags: ["prod"] },
      { id: "coprod", title: "Coproduct ∐", latex: "\\coprod ", preview: "\\coprod", tags: ["coprod"] },
      { id: "bigcup", title: "Big union ⋃", latex: "\\bigcup ", preview: "\\bigcup", tags: ["bigcup"] },
      { id: "bigcap", title: "Big intersection ⋂", latex: "\\bigcap ", preview: "\\bigcap", tags: ["bigcap"] },
      { id: "bigvee", title: "Big vee ⋁", latex: "\\bigvee ", preview: "\\bigvee", tags: ["bigvee"] },
      { id: "bigwedge", title: "Big wedge ⋀", latex: "\\bigwedge ", preview: "\\bigwedge", tags: ["bigwedge"] },
      { id: "partial", title: "Partial ∂", latex: "\\partial ", preview: "\\partial", tags: ["partial","derivative"] },
      { id: "nabla", title: "Nabla ∇", latex: "\\nabla ", preview: "\\nabla", tags: ["nabla","gradient"] },
      { id: "infty", title: "Infinity ∞", latex: "\\infty ", preview: "\\infty", tags: ["infty","infinite"] },
    ],
  },

  {
    id: "sets",
    title: "Sets & Logic",
    keys: [
      { id: "forall", title: "For all ∀", latex: "\\forall ", preview: "\\forall", tags: ["forall"] },
      { id: "exists", title: "Exists ∃", latex: "\\exists ", preview: "\\exists", tags: ["exists"] },
      { id: "neg", title: "Not ¬", latex: "\\neg ", preview: "\\neg", tags: ["neg","not"] },
      { id: "land", title: "And ∧", latex: "\\land ", preview: "\\land", tags: ["and","logic"] },
      { id: "lor", title: "Or ∨", latex: "\\lor ", preview: "\\lor", tags: ["or","logic"] },

      { id: "emptyset", title: "Empty set ∅", latex: "\\emptyset ", preview: "\\emptyset", tags: ["emptyset"] },
      { id: "subseteq", title: "Subseteq ⊆", latex: "\\subseteq ", preview: "\\subseteq", tags: ["subseteq"] },
      { id: "supseteq", title: "Supseteq ⊇", latex: "\\supseteq ", preview: "\\supseteq", tags: ["supseteq"] },
      { id: "in", title: "Element of ∈", latex: "\\in ", preview: "\\in", tags: ["in","element"] },
      { id: "notin", title: "Not in ∉", latex: "\\notin ", preview: "\\notin", tags: ["notin"] },
      { id: "cup", title: "Union ∪", latex: "\\cup ", preview: "\\cup", tags: ["union"] },
      { id: "cap", title: "Intersection ∩", latex: "\\cap ", preview: "\\cap", tags: ["intersection"] },

      { id: "implies", title: "Implies ⇒", latex: "\\Rightarrow ", preview: "\\Rightarrow", tags: ["implies"] },
      { id: "iff", title: "Iff ⇔", latex: "\\Leftrightarrow ", preview: "\\Leftrightarrow", tags: ["iff"] },
    ],
  },

  {
    id: "numbersets",
    title: "Number Sets",
    keys: [
      { id: "R", title: "Reals ℝ", latex: "\\mathbb{R} ", preview: "\\mathbb{R}", tags: ["reals","R"] },
      { id: "Z", title: "Integers ℤ", latex: "\\mathbb{Z} ", preview: "\\mathbb{Z}", tags: ["integers","Z"] },
      { id: "Q", title: "Rationals ℚ", latex: "\\mathbb{Q} ", preview: "\\mathbb{Q}", tags: ["rationals","Q"] },
      { id: "N", title: "Naturals ℕ", latex: "\\mathbb{N} ", preview: "\\mathbb{N}", tags: ["naturals","N"] },
      { id: "C", title: "Complex ℂ", latex: "\\mathbb{C} ", preview: "\\mathbb{C}", tags: ["complex","C"] },
    ],
  },

  {
    id: "misc",
    title: "Misc Symbols",
    keys: [
      { id: "degree", title: "Degree °", latex: "^{\\circ} ", preview: "^{\\circ}", tags: ["degree"] },
      { id: "angle", title: "Angle ∠", latex: "\\angle ", preview: "\\angle", tags: ["angle"] },
      { id: "triangle", title: "Triangle △", latex: "\\triangle ", preview: "\\triangle", tags: ["triangle"] },
      { id: "square", title: "Square □", latex: "\\square ", preview: "\\square", tags: ["square"] },
      { id: "Box", title: "Box □ (\\Box)", latex: "\\Box ", preview: "\\Box", tags: ["Box"] },
      { id: "prime", title: "Prime ′", latex: "\\prime ", preview: "\\prime", tags: ["prime"] },
      { id: "ldots", title: "Dots … (\\ldots)", latex: "\\ldots ", preview: "\\ldots", tags: ["ldots","dots"] },
      { id: "vdots", title: "Vertical dots ⋮", latex: "\\vdots ", preview: "\\vdots", tags: ["vdots"] },
      { id: "ddots", title: "Diagonal dots ⋱", latex: "\\ddots ", preview: "\\ddots", tags: ["ddots"] },
    ],
  },
];