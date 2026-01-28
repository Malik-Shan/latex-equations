export type SymbolCategory =
  | "Templates"
  | "Brackets"
  | "Matrix & Vectors"
  | "Binary Operators"
  | "Sub/Superscripts"
  | "Relations"
  | "Arrows"
  | "Style & Fonts"
  | "Foreign Letters"
  | "Symbols"
  | "Spaces"
  | "Accents"
  | "Accents Extended"
  | "Greek Lowercase"
  | "Greek Uppercase"
  | "Delimiters (Big)"
  | "Calculus"
  | "Logic & Sets"
  | "Geometry"
  | "Number Sets"
  | "Misc";

export type SymbolItem = {
  id: string;
  label: string; // what user sees on button
  latex: string; // what gets inserted
  category: SymbolCategory;
  keywords: string[];
  preview?: string; // optional: render this on the button instead of latex
};

// cursor placeholder (optional if you use your smart insert ⟂ logic)
const C = "⟂";

export const SYMBOLS: SymbolItem[] = [
  // -------------------------
  // Templates (beginner-fast)
  // -------------------------
  { id: "tpl_frac", label: "a/b", latex: `\\frac{${C}}{}`, preview: "\\frac{a}{b}", category: "Templates", keywords: ["frac", "fraction", "divide"] },
  { id: "tpl_sqrt", label: "√", latex: `\\sqrt{${C}}`, preview: "\\sqrt{x}", category: "Templates", keywords: ["sqrt", "root"] },
  { id: "tpl_nthroot", label: "ⁿ√", latex: `\\sqrt[${C}]{} `, preview: "\\sqrt[n]{x}", category: "Templates", keywords: ["nthroot", "root"] },
  { id: "tpl_pow", label: "x^", latex: `^{${C}}`, preview: "x^2", category: "Templates", keywords: ["power", "exponent"] },
  { id: "tpl_sub", label: "x_", latex: `_{${C}}`, preview: "a_1", category: "Templates", keywords: ["subscript", "index"] },
  { id: "tpl_sum", label: "∑", latex: `\\sum_{${C}}^{}`, preview: "\\sum_{i=1}^{n}", category: "Templates", keywords: ["sum", "sigma"] },
  { id: "tpl_prod", label: "∏", latex: `\\prod_{${C}}^{}`, preview: "\\prod_{i=1}^{n}", category: "Templates", keywords: ["product", "pi"] },
  { id: "tpl_int", label: "∫", latex: `\\int_{${C}}^{}`, preview: "\\int_0^1", category: "Templates", keywords: ["integral"] },
  { id: "tpl_iint", label: "∬", latex: `\\iint_{${C}}`, preview: "\\iint_D", category: "Templates", keywords: ["double integral"] },
  { id: "tpl_iiint", label: "∭", latex: `\\iiint_{${C}}`, preview: "\\iiint_V", category: "Templates", keywords: ["triple integral"] },
  { id: "tpl_lim", label: "lim", latex: `\\lim_{${C}}`, preview: "\\lim_{x\\to 0}", category: "Templates", keywords: ["limit"] },
  { id: "tpl_log", label: "log", latex: `\\log_{${C}} `, preview: "\\log_b", category: "Templates", keywords: ["log", "base"] },
  { id: "tpl_vec", label: "→v", latex: `\\vec{${C}}`, preview: "\\vec{v}", category: "Templates", keywords: ["vector"] },
  { id: "tpl_hat", label: "x̂", latex: `\\hat{${C}}`, preview: "\\hat{x}", category: "Templates", keywords: ["hat", "unit"] },
  { id: "tpl_overline", label: "x̄", latex: `\\overline{${C}}`, preview: "\\overline{x}", category: "Templates", keywords: ["overline", "bar"] },
  { id: "tpl_underline", label: "x̲", latex: `\\underline{${C}}`, preview: "\\underline{x}", category: "Templates", keywords: ["underline"] },
  { id: "tpl_cases", label: "{cases}", latex: `\\begin{cases}${C}\\\\\\end{cases}`, preview: "\\begin{cases}x&x>0\\\\0&x\\le 0\\end{cases}", category: "Templates", keywords: ["cases", "piecewise"] },
  { id: "tpl_binom", label: "(n r)", latex: `\\binom{${C}}{}`, preview: "\\binom{n}{r}", category: "Templates", keywords: ["binom", "choose"] },

  // -------------------------
  // Brackets / Groups
  // -------------------------
  { id: "br_paren", label: "( )", latex: `\\left(${C}\\right)`, preview: "\\left(x\\right)", category: "Brackets", keywords: ["paren", "parentheses"] },
  { id: "br_brack", label: "[ ]", latex: `\\left[${C}\\right]`, preview: "\\left[x\\right]", category: "Brackets", keywords: ["bracket"] },
  { id: "br_brace", label: "{ }", latex: `\\left\\{${C}\\right\\}`, preview: "\\left\\{x\\right\\}", category: "Brackets", keywords: ["brace", "curly"] },
  { id: "br_angle", label: "⟨ ⟩", latex: `\\left\\langle ${C} \\right\\rangle`, preview: "\\langle x\\rangle", category: "Brackets", keywords: ["angle", "inner product"] },
  { id: "br_abs", label: "| |", latex: `\\left|${C}\\right|`, preview: "|x|", category: "Brackets", keywords: ["abs", "absolute"] },
  { id: "br_norm", label: "|| ||", latex: `\\left\\|${C}\\right\\|`, preview: "\\|x\\|", category: "Brackets", keywords: ["norm"] },
  { id: "br_floor", label: "⌊ ⌋", latex: `\\left\\lfloor ${C} \\right\\rfloor`, preview: "\\lfloor x\\rfloor", category: "Brackets", keywords: ["floor"] },
  { id: "br_ceil", label: "⌈ ⌉", latex: `\\left\\lceil ${C} \\right\\rceil`, preview: "\\lceil x\\rceil", category: "Brackets", keywords: ["ceil", "ceiling"] },

  // Big delimiters
  { id: "bigl", label: "bigl(", latex: `\\bigl(${C}\\bigr)`, preview: "\\bigl( x \\bigr)", category: "Delimiters (Big)", keywords: ["bigl", "bigr"] },
  { id: "Bigl", label: "Bigl(", latex: `\\Bigl(${C}\\Bigr)`, preview: "\\Bigl( x \\Bigr)", category: "Delimiters (Big)", keywords: ["Bigl", "Bigr"] },
  { id: "biggl", label: "biggl(", latex: `\\biggl(${C}\\biggr)`, preview: "\\biggl( x \\biggr)", category: "Delimiters (Big)", keywords: ["biggl", "biggr"] },
  { id: "Biggl", label: "Biggl(", latex: `\\Biggl(${C}\\Biggr)`, preview: "\\Biggl( x \\Biggr)", category: "Delimiters (Big)", keywords: ["Biggl", "Biggr"] },

  // -------------------------
  // Matrix & Vectors
  // -------------------------
  { id: "mat_bmatrix", label: "[[ ]]", latex: `\\begin{bmatrix}${C}&\\\\&\\end{bmatrix}`, preview: "\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}", category: "Matrix & Vectors", keywords: ["matrix", "bmatrix"] },
  { id: "mat_pmatrix", label: "(( ))", latex: `\\begin{pmatrix}${C}&\\\\&\\end{pmatrix}`, preview: "\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}", category: "Matrix & Vectors", keywords: ["matrix", "pmatrix"] },
  { id: "mat_vmatrix", label: "||M||", latex: `\\begin{vmatrix}${C}&\\\\&\\end{vmatrix}`, preview: "\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}", category: "Matrix & Vectors", keywords: ["determinant", "vmatrix"] },
  { id: "mat_Vmatrix", label: "‖M‖", latex: `\\begin{Vmatrix}${C}&\\\\&\\end{Vmatrix}`, preview: "\\begin{Vmatrix}a&b\\\\c&d\\end{Vmatrix}", category: "Matrix & Vectors", keywords: ["norm matrix", "Vmatrix"] },
  { id: "mat_cases", label: "cases", latex: `\\begin{cases}${C}\\\\\\end{cases}`, preview: "\\begin{cases}x&x>0\\\\0&x\\le 0\\end{cases}", category: "Matrix & Vectors", keywords: ["cases"] },
  { id: "vec_overrightarrow", label: "→", latex: `\\overrightarrow{${C}}`, preview: "\\overrightarrow{AB}", category: "Matrix & Vectors", keywords: ["vector", "overrightarrow"] },
  { id: "vec_overleftrightarrow", label: "↔", latex: `\\overleftrightarrow{${C}}`, preview: "\\overleftrightarrow{AB}", category: "Matrix & Vectors", keywords: ["overleftrightarrow"] },

  // -------------------------
  // Binary Operators
  // -------------------------
  { id: "bin_pm", label: "±", latex: "\\pm ", category: "Binary Operators", keywords: ["pm", "plus minus"] },
  { id: "bin_mp", label: "∓", latex: "\\mp ", category: "Binary Operators", keywords: ["mp", "minus plus"] },
  { id: "bin_times", label: "×", latex: "\\times ", category: "Binary Operators", keywords: ["times", "multiply"] },
  { id: "bin_div", label: "÷", latex: "\\div ", category: "Binary Operators", keywords: ["divide"] },
  { id: "bin_cdots", label: "⋯", latex: "\\cdots ", category: "Binary Operators", keywords: ["cdots", "dots"] },
  { id: "bin_cdot", label: "·", latex: "\\cdot ", category: "Binary Operators", keywords: ["cdot", "dot"] },
  { id: "bin_ast", label: "∗", latex: "\\ast ", category: "Binary Operators", keywords: ["ast"] },
  { id: "bin_star", label: "⋆", latex: "\\star ", category: "Binary Operators", keywords: ["star"] },
  { id: "bin_circ", label: "∘", latex: "\\circ ", category: "Binary Operators", keywords: ["circ", "compose"] },
  { id: "bin_bullet", label: "•", latex: "\\bullet ", category: "Binary Operators", keywords: ["bullet"] },
  { id: "bin_oplus", label: "⊕", latex: "\\oplus ", category: "Binary Operators", keywords: ["oplus"] },
  { id: "bin_ominus", label: "⊖", latex: "\\ominus ", category: "Binary Operators", keywords: ["ominus"] },
  { id: "bin_otimes", label: "⊗", latex: "\\otimes ", category: "Binary Operators", keywords: ["otimes", "tensor"] },
  { id: "bin_oslash", label: "⊘", latex: "\\oslash ", category: "Binary Operators", keywords: ["oslash"] },
  { id: "bin_odot", label: "⊙", latex: "\\odot ", category: "Binary Operators", keywords: ["odot"] },
  { id: "bin_dagger", label: "†", latex: "\\dagger ", category: "Binary Operators", keywords: ["dagger"] },
  { id: "bin_ddagger", label: "‡", latex: "\\ddagger ", category: "Binary Operators", keywords: ["ddagger"] },
  { id: "bin_wedge", label: "∧", latex: "\\wedge ", category: "Binary Operators", keywords: ["wedge"] },
  { id: "bin_vee", label: "∨", latex: "\\vee ", category: "Binary Operators", keywords: ["vee"] },
  { id: "bin_cap", label: "∩", latex: "\\cap ", category: "Binary Operators", keywords: ["cap", "intersection"] },
  { id: "bin_cup", label: "∪", latex: "\\cup ", category: "Binary Operators", keywords: ["cup", "union"] },
  { id: "bin_uplus", label: "⊎", latex: "\\uplus ", category: "Binary Operators", keywords: ["uplus"] },
  { id: "bin_sqcap", label: "⊓", latex: "\\sqcap ", category: "Binary Operators", keywords: ["sqcap"] },
  { id: "bin_sqcup", label: "⊔", latex: "\\sqcup ", category: "Binary Operators", keywords: ["sqcup"] },
  { id: "bin_triangleleft", label: "◁", latex: "\\triangleleft ", category: "Binary Operators", keywords: ["triangleleft"] },
  { id: "bin_triangleright", label: "▷", latex: "\\triangleright ", category: "Binary Operators", keywords: ["triangleright"] },
  { id: "bin_bigtriangleup", label: "△", latex: "\\bigtriangleup ", category: "Binary Operators", keywords: ["bigtriangleup"] },
  { id: "bin_bigtriangledown", label: "▽", latex: "\\bigtriangledown ", category: "Binary Operators", keywords: ["bigtriangledown"] },

  // -------------------------
  // Sub / Supersets
  // -------------------------
  { id: "ss_sub", label: "x_", latex: `_{${C}}`, category: "Sub/Superscripts", keywords: ["subscript"] },
  { id: "ss_sup", label: "x^", latex: `^{${C}}`, category: "Sub/Superscripts", keywords: ["superscript"] },
  { id: "ss_underbrace", label: "⏟", latex: `\\underbrace{${C}}_{}`, preview: "\\underbrace{a+b}_{n}", category: "Sub/Superscripts", keywords: ["underbrace"] },
  { id: "ss_overbrace", label: "⏞", latex: `\\overbrace{${C}}^{}`, preview: "\\overbrace{a+b}^{n}", category: "Sub/Superscripts", keywords: ["overbrace"] },

  // -------------------------
  // Relations
  // -------------------------
  { id: "rel_eq", label: "=", latex: "= ", category: "Relations", keywords: ["equals"] },
  { id: "rel_neq", label: "≠", latex: "\\ne ", category: "Relations", keywords: ["not equal", "neq"] },
  { id: "rel_equiv", label: "≡", latex: "\\equiv ", category: "Relations", keywords: ["equiv"] },
  { id: "rel_approx", label: "≈", latex: "\\approx ", category: "Relations", keywords: ["approx"] },
  { id: "rel_sim", label: "∼", latex: "\\sim ", category: "Relations", keywords: ["sim"] },
  { id: "rel_simeq", label: "≃", latex: "\\simeq ", category: "Relations", keywords: ["simeq"] },
  { id: "rel_propto", label: "∝", latex: "\\propto ", category: "Relations", keywords: ["propto", "proportional"] },
  { id: "rel_leq", label: "≤", latex: "\\leq ", category: "Relations", keywords: ["leq", "less equal"] },
  { id: "rel_geq", label: "≥", latex: "\\geq ", category: "Relations", keywords: ["geq", "greater equal"] },
  { id: "rel_ll", label: "≪", latex: "\\ll ", category: "Relations", keywords: ["ll"] },
  { id: "rel_gg", label: "≫", latex: "\\gg ", category: "Relations", keywords: ["gg"] },
  { id: "rel_subset", label: "⊂", latex: "\\subset ", category: "Relations", keywords: ["subset"] },
  { id: "rel_subseteq", label: "⊆", latex: "\\subseteq ", category: "Relations", keywords: ["subseteq"] },
  { id: "rel_supset", label: "⊃", latex: "\\supset ", category: "Relations", keywords: ["supset"] },
  { id: "rel_supseteq", label: "⊇", latex: "\\supseteq ", category: "Relations", keywords: ["supseteq"] },
  { id: "rel_in", label: "∈", latex: "\\in ", category: "Relations", keywords: ["in", "element"] },
  { id: "rel_notin", label: "∉", latex: "\\notin ", category: "Relations", keywords: ["notin"] },
  { id: "rel_ni", label: "∋", latex: "\\ni ", category: "Relations", keywords: ["ni", "contains"] },
  { id: "rel_parallel", label: "∥", latex: "\\parallel ", category: "Relations", keywords: ["parallel"] },
  { id: "rel_nparallel", label: "∦", latex: "\\nparallel ", category: "Relations", keywords: ["not parallel"] },
  { id: "rel_perp", label: "⟂", latex: "\\perp ", category: "Relations", keywords: ["perp", "orthogonal"] },

  // -------------------------
  // Arrows
  // -------------------------
  { id: "arr_left", label: "←", latex: "\\leftarrow ", category: "Arrows", keywords: ["leftarrow"] },
  { id: "arr_right", label: "→", latex: "\\rightarrow ", category: "Arrows", keywords: ["rightarrow"] },
  { id: "arr_up", label: "↑", latex: "\\uparrow ", category: "Arrows", keywords: ["uparrow"] },
  { id: "arr_down", label: "↓", latex: "\\downarrow ", category: "Arrows", keywords: ["downarrow"] },
  { id: "arr_leftright", label: "↔", latex: "\\leftrightarrow ", category: "Arrows", keywords: ["leftrightarrow"] },
  { id: "arr_Leftarrow", label: "⇐", latex: "\\Leftarrow ", category: "Arrows", keywords: ["Leftarrow"] },
  { id: "arr_Rightarrow", label: "⇒", latex: "\\Rightarrow ", category: "Arrows", keywords: ["Rightarrow", "implies"] },
  { id: "arr_Leftrightarrow", label: "⇔", latex: "\\Leftrightarrow ", category: "Arrows", keywords: ["iff"] },
  { id: "arr_mapsto", label: "↦", latex: "\\mapsto ", category: "Arrows", keywords: ["mapsto"] },
  { id: "arr_to", label: "to", latex: "\\to ", category: "Arrows", keywords: ["to"] },
  { id: "arr_hookrightarrow", label: "↪", latex: "\\hookrightarrow ", category: "Arrows", keywords: ["hookrightarrow"] },
  { id: "arr_hookleftarrow", label: "↩", latex: "\\hookleftarrow ", category: "Arrows", keywords: ["hookleftarrow"] },
  { id: "arr_longrightarrow", label: "⟶", latex: "\\longrightarrow ", category: "Arrows", keywords: ["longrightarrow"] },
  { id: "arr_longleftarrow", label: "⟵", latex: "\\longleftarrow ", category: "Arrows", keywords: ["longleftarrow"] },
  { id: "arr_longleftrightarrow", label: "⟷", latex: "\\longleftrightarrow ", category: "Arrows", keywords: ["longleftrightarrow"] },

  // -------------------------
  // Style & Fonts
  // -------------------------
  { id: "sty_mathrm", label: "rm()", latex: `\\mathrm{${C}}`, preview: "\\mathrm{ABC}", category: "Style & Fonts", keywords: ["mathrm", "roman"] },
  { id: "sty_mathit", label: "it()", latex: `\\mathit{${C}}`, preview: "\\mathit{ABC}", category: "Style & Fonts", keywords: ["mathit", "italic"] },
  { id: "sty_mathbf", label: "bf()", latex: `\\mathbf{${C}}`, preview: "\\mathbf{ABC}", category: "Style & Fonts", keywords: ["mathbf", "bold"] },
  { id: "sty_mathsf", label: "sf()", latex: `\\mathsf{${C}}`, preview: "\\mathsf{ABC}", category: "Style & Fonts", keywords: ["mathsf", "sans"] },
  { id: "sty_mathtt", label: "tt()", latex: `\\mathtt{${C}}`, preview: "\\mathtt{ABC}", category: "Style & Fonts", keywords: ["mathtt", "typewriter"] },
  { id: "sty_mathcal", label: "cal()", latex: `\\mathcal{${C}}`, preview: "\\mathcal{ABC}", category: "Style & Fonts", keywords: ["mathcal", "calligraphic"] },
  { id: "sty_mathbb", label: "bb()", latex: `\\mathbb{${C}}`, preview: "\\mathbb{R}", category: "Style & Fonts", keywords: ["mathbb", "blackboard"] },
  { id: "sty_text", label: "text()", latex: `\\text{${C}}`, preview: "\\text{hello}", category: "Style & Fonts", keywords: ["text"] },
  { id: "sty_boldsymbol", label: "bold()", latex: `\\boldsymbol{${C}}`, preview: "\\boldsymbol{\\alpha}", category: "Style & Fonts", keywords: ["boldsymbol"] },

  // -------------------------
  // Spaces
  // -------------------------
  { id: "sp_small", label: "thin", latex: "\\, ", category: "Spaces", keywords: ["thinspace"] },
  { id: "sp_med", label: "med", latex: "\\: ", category: "Spaces", keywords: ["medspace"] },
  { id: "sp_thick", label: "thick", latex: "\\; ", category: "Spaces", keywords: ["thickspace"] },
  { id: "sp_quad", label: "quad", latex: "\\quad ", category: "Spaces", keywords: ["quad"] },
  { id: "sp_qquad", label: "qquad", latex: "\\qquad ", category: "Spaces", keywords: ["qquad"] },
  { id: "sp_negthin", label: "-thin", latex: "\\! ", category: "Spaces", keywords: ["negative thinspace"] },

  // -------------------------
  // Accents
  // -------------------------
  { id: "acc_hat", label: "x̂", latex: `\\hat{${C}}`, preview: "\\hat{x}", category: "Accents", keywords: ["hat"] },
  { id: "acc_tilde", label: "x̃", latex: `\\tilde{${C}}`, preview: "\\tilde{x}", category: "Accents", keywords: ["tilde"] },
  { id: "acc_bar", label: "x̄", latex: `\\bar{${C}}`, preview: "\\bar{x}", category: "Accents", keywords: ["bar"] },
  { id: "acc_vec", label: "x⃗", latex: `\\vec{${C}}`, preview: "\\vec{x}", category: "Accents", keywords: ["vec"] },
  { id: "acc_dot", label: "ẋ", latex: `\\dot{${C}}`, preview: "\\dot{x}", category: "Accents", keywords: ["dot"] },
  { id: "acc_ddot", label: "ẍ", latex: `\\ddot{${C}}`, preview: "\\ddot{x}", category: "Accents", keywords: ["ddot"] },
  { id: "acc_overline", label: "over", latex: `\\overline{${C}}`, preview: "\\overline{AB}", category: "Accents", keywords: ["overline"] },
  { id: "acc_underline", label: "under", latex: `\\underline{${C}}`, preview: "\\underline{AB}", category: "Accents", keywords: ["underline"] },

  // Accents Extended
  { id: "acc_ext_widehat", label: "widehat", latex: `\\widehat{${C}}`, preview: "\\widehat{ABC}", category: "Accents Extended", keywords: ["widehat"] },
  { id: "acc_ext_widetilde", label: "widetilde", latex: `\\widetilde{${C}}`, preview: "\\widetilde{ABC}", category: "Accents Extended", keywords: ["widetilde"] },
  { id: "acc_ext_overrightarrow", label: "→", latex: `\\overrightarrow{${C}}`, preview: "\\overrightarrow{AB}", category: "Accents Extended", keywords: ["overrightarrow"] },
  { id: "acc_ext_overleftarrow", label: "←", latex: `\\overleftarrow{${C}}`, preview: "\\overleftarrow{AB}", category: "Accents Extended", keywords: ["overleftarrow"] },
  { id: "acc_ext_overbrace", label: "overbrace", latex: `\\overbrace{${C}}^{}`, preview: "\\overbrace{a+b}^{n}", category: "Accents Extended", keywords: ["overbrace"] },
  { id: "acc_ext_underbrace", label: "underbrace", latex: `\\underbrace{${C}}_{}`, preview: "\\underbrace{a+b}_{n}", category: "Accents Extended", keywords: ["underbrace"] },

  // -------------------------
  // Greek Lowercase
  // -------------------------
  { id: "gla_alpha", label: "α", latex: "\\alpha ", category: "Greek Lowercase", keywords: ["alpha"] },
  { id: "gla_beta", label: "β", latex: "\\beta ", category: "Greek Lowercase", keywords: ["beta"] },
  { id: "gla_gamma", label: "γ", latex: "\\gamma ", category: "Greek Lowercase", keywords: ["gamma"] },
  { id: "gla_delta", label: "δ", latex: "\\delta ", category: "Greek Lowercase", keywords: ["delta"] },
  { id: "gla_epsilon", label: "ε", latex: "\\epsilon ", category: "Greek Lowercase", keywords: ["epsilon"] },
  { id: "gla_varepsilon", label: "ϵ", latex: "\\varepsilon ", category: "Greek Lowercase", keywords: ["varepsilon"] },
  { id: "gla_zeta", label: "ζ", latex: "\\zeta ", category: "Greek Lowercase", keywords: ["zeta"] },
  { id: "gla_eta", label: "η", latex: "\\eta ", category: "Greek Lowercase", keywords: ["eta"] },
  { id: "gla_theta", label: "θ", latex: "\\theta ", category: "Greek Lowercase", keywords: ["theta"] },
  { id: "gla_vartheta", label: "ϑ", latex: "\\vartheta ", category: "Greek Lowercase", keywords: ["vartheta"] },
  { id: "gla_iota", label: "ι", latex: "\\iota ", category: "Greek Lowercase", keywords: ["iota"] },
  { id: "gla_kappa", label: "κ", latex: "\\kappa ", category: "Greek Lowercase", keywords: ["kappa"] },
  { id: "gla_lambda", label: "λ", latex: "\\lambda ", category: "Greek Lowercase", keywords: ["lambda"] },
  { id: "gla_mu", label: "μ", latex: "\\mu ", category: "Greek Lowercase", keywords: ["mu"] },
  { id: "gla_nu", label: "ν", latex: "\\nu ", category: "Greek Lowercase", keywords: ["nu"] },
  { id: "gla_xi", label: "ξ", latex: "\\xi ", category: "Greek Lowercase", keywords: ["xi"] },
  { id: "gla_pi", label: "π", latex: "\\pi ", category: "Greek Lowercase", keywords: ["pi"] },
  { id: "gla_varpi", label: "ϖ", latex: "\\varpi ", category: "Greek Lowercase", keywords: ["varpi"] },
  { id: "gla_rho", label: "ρ", latex: "\\rho ", category: "Greek Lowercase", keywords: ["rho"] },
  { id: "gla_varrho", label: "ϱ", latex: "\\varrho ", category: "Greek Lowercase", keywords: ["varrho"] },
  { id: "gla_sigma", label: "σ", latex: "\\sigma ", category: "Greek Lowercase", keywords: ["sigma"] },
  { id: "gla_varsigma", label: "ς", latex: "\\varsigma ", category: "Greek Lowercase", keywords: ["varsigma"] },
  { id: "gla_tau", label: "τ", latex: "\\tau ", category: "Greek Lowercase", keywords: ["tau"] },
  { id: "gla_upsilon", label: "υ", latex: "\\upsilon ", category: "Greek Lowercase", keywords: ["upsilon"] },
  { id: "gla_phi", label: "φ", latex: "\\phi ", category: "Greek Lowercase", keywords: ["phi"] },
  { id: "gla_varphi", label: "ϕ", latex: "\\varphi ", category: "Greek Lowercase", keywords: ["varphi"] },
  { id: "gla_chi", label: "χ", latex: "\\chi ", category: "Greek Lowercase", keywords: ["chi"] },
  { id: "gla_psi", label: "ψ", latex: "\\psi ", category: "Greek Lowercase", keywords: ["psi"] },
  { id: "gla_omega", label: "ω", latex: "\\omega ", category: "Greek Lowercase", keywords: ["omega"] },

  // -------------------------
  // Greek Uppercase
  // -------------------------
  { id: "gup_Gamma", label: "Γ", latex: "\\Gamma ", category: "Greek Uppercase", keywords: ["Gamma"] },
  { id: "gup_Delta", label: "Δ", latex: "\\Delta ", category: "Greek Uppercase", keywords: ["Delta"] },
  { id: "gup_Theta", label: "Θ", latex: "\\Theta ", category: "Greek Uppercase", keywords: ["Theta"] },
  { id: "gup_Lambda", label: "Λ", latex: "\\Lambda ", category: "Greek Uppercase", keywords: ["Lambda"] },
  { id: "gup_Xi", label: "Ξ", latex: "\\Xi ", category: "Greek Uppercase", keywords: ["Xi"] },
  { id: "gup_Pi", label: "Π", latex: "\\Pi ", category: "Greek Uppercase", keywords: ["Pi"] },
  { id: "gup_Sigma", label: "Σ", latex: "\\Sigma ", category: "Greek Uppercase", keywords: ["Sigma"] },
  { id: "gup_Upsilon", label: "Υ", latex: "\\Upsilon ", category: "Greek Uppercase", keywords: ["Upsilon"] },
  { id: "gup_Phi", label: "Φ", latex: "\\Phi ", category: "Greek Uppercase", keywords: ["Phi"] },
  { id: "gup_Psi", label: "Ψ", latex: "\\Psi ", category: "Greek Uppercase", keywords: ["Psi"] },
  { id: "gup_Omega", label: "Ω", latex: "\\Omega ", category: "Greek Uppercase", keywords: ["Omega"] },

  // -------------------------
  // Calculus / big ops
  // -------------------------
  { id: "cal_int", label: "∫", latex: "\\int ", category: "Calculus", keywords: ["int", "integral"] },
  { id: "cal_oint", label: "∮", latex: "\\oint ", category: "Calculus", keywords: ["oint", "contour"] },
  { id: "cal_sum", label: "∑", latex: "\\sum ", category: "Calculus", keywords: ["sum"] },
  { id: "cal_prod", label: "∏", latex: "\\prod ", category: "Calculus", keywords: ["prod"] },
  { id: "cal_coprod", label: "∐", latex: "\\coprod ", category: "Calculus", keywords: ["coprod"] },
  { id: "cal_bigcup", label: "⋃", latex: "\\bigcup ", category: "Calculus", keywords: ["bigcup"] },
  { id: "cal_bigcap", label: "⋂", latex: "\\bigcap ", category: "Calculus", keywords: ["bigcap"] },
  { id: "cal_bigvee", label: "⋁", latex: "\\bigvee ", category: "Calculus", keywords: ["bigvee"] },
  { id: "cal_bigwedge", label: "⋀", latex: "\\bigwedge ", category: "Calculus", keywords: ["bigwedge"] },
  { id: "cal_partial", label: "∂", latex: "\\partial ", category: "Calculus", keywords: ["partial", "derivative"] },
  { id: "cal_nabla", label: "∇", latex: "\\nabla ", category: "Calculus", keywords: ["nabla", "gradient"] },
  { id: "cal_infty", label: "∞", latex: "\\infty ", category: "Calculus", keywords: ["infty", "infinite"] },

  // -------------------------
  // Logic & Sets
  // -------------------------
  { id: "set_forall", label: "∀", latex: "\\forall ", category: "Logic & Sets", keywords: ["forall"] },
  { id: "set_exists", label: "∃", latex: "\\exists ", category: "Logic & Sets", keywords: ["exists"] },
  { id: "set_neg", label: "¬", latex: "\\neg ", category: "Logic & Sets", keywords: ["neg", "not"] },
  { id: "set_land", label: "∧", latex: "\\land ", category: "Logic & Sets", keywords: ["and"] },
  { id: "set_lor", label: "∨", latex: "\\lor ", category: "Logic & Sets", keywords: ["or"] },
  { id: "set_implies", label: "⇒", latex: "\\Rightarrow ", category: "Logic & Sets", keywords: ["implies"] },
  { id: "set_iff", label: "⇔", latex: "\\Leftrightarrow ", category: "Logic & Sets", keywords: ["iff"] },
  { id: "set_empty", label: "∅", latex: "\\emptyset ", category: "Logic & Sets", keywords: ["emptyset"] },
  { id: "set_subseteq", label: "⊆", latex: "\\subseteq ", category: "Logic & Sets", keywords: ["subseteq"] },
  { id: "set_supseteq", label: "⊇", latex: "\\supseteq ", category: "Logic & Sets", keywords: ["supseteq"] },
  { id: "set_in", label: "∈", latex: "\\in ", category: "Logic & Sets", keywords: ["in"] },
  { id: "set_notin", label: "∉", latex: "\\notin ", category: "Logic & Sets", keywords: ["notin"] },
  { id: "set_cup", label: "∪", latex: "\\cup ", category: "Logic & Sets", keywords: ["union"] },
  { id: "set_cap", label: "∩", latex: "\\cap ", category: "Logic & Sets", keywords: ["intersection"] },

  // -------------------------
  // Number sets (common)
  // -------------------------
  { id: "num_R", label: "ℝ", latex: "\\mathbb{R} ", category: "Number Sets", keywords: ["reals", "R"] },
  { id: "num_Z", label: "ℤ", latex: "\\mathbb{Z} ", category: "Number Sets", keywords: ["integers", "Z"] },
  { id: "num_Q", label: "ℚ", latex: "\\mathbb{Q} ", category: "Number Sets", keywords: ["rationals", "Q"] },
  { id: "num_N", label: "ℕ", latex: "\\mathbb{N} ", category: "Number Sets", keywords: ["naturals", "N"] },
  { id: "num_C", label: "ℂ", latex: "\\mathbb{C} ", category: "Number Sets", keywords: ["complex", "C"] },

  // -------------------------
  // Misc useful symbols
  // -------------------------
  { id: "sym_degree", label: "°", latex: "^{\\circ} ", category: "Symbols", keywords: ["degree"] },
  { id: "sym_angle", label: "∠", latex: "\\angle ", category: "Symbols", keywords: ["angle"] },
  { id: "sym_triangle", label: "△", latex: "\\triangle ", category: "Symbols", keywords: ["triangle"] },
  { id: "sym_square", label: "□", latex: "\\square ", category: "Symbols", keywords: ["square"] },
  { id: "sym_box", label: "□", latex: "\\Box ", category: "Symbols", keywords: ["Box"] },
  { id: "sym_prime", label: "′", latex: "\\prime ", category: "Symbols", keywords: ["prime"] },
  { id: "sym_dots", label: "…", latex: "\\ldots ", category: "Symbols", keywords: ["ldots", "dots"] },
  { id: "sym_vdots", label: "⋮", latex: "\\vdots ", category: "Symbols", keywords: ["vdots"] },
  { id: "sym_ddots", label: "⋱", latex: "\\ddots ", category: "Symbols", keywords: ["ddots"] },
];
