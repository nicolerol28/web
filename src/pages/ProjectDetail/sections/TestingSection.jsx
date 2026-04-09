import { useEffect, useState } from "react"

const STATS = [
  { label: "Tests pasando", value: "279",  note: null },
  { label: "Instrucciones", value: "94%",  note: "JaCoCo · excl. DTOs & mappers" },
  { label: "Branches",      value: "96%",  note: "JaCoCo · excl. DTOs & mappers" },
  { label: "Metodología",   value: "BDD",  note: "Given / When / Then" },
]

const BARS = [
  { label: "Instrucciones", pct: 94, colorVar: "--color-accent" },
  { label: "Branches",      pct: 96, colorVar: "--color-accent-hover" },
]

const MODULES = [
  { name: "Product",               note: null,                                    highlight: false },
  { name: "RegisterProductUseCase",note: null,                                    highlight: false },
  { name: "UpdateProductUseCase",  note: null,                                    highlight: false },
  { name: "Inventory",             note: null,                                    highlight: false },
  { name: "Suppliers",             note: null,                                    highlight: false },
  { name: "Users",                 note: "ReflectionTestUtils",                   highlight: false },
  { name: "AssistantGuard",        note: "27 tests — 17 patrones de injection",   highlight: true  },
]

export default function TestingSection() {
  const [widths, setWidths] = useState(BARS.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidths(BARS.map((b) => b.pct))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="docs-testing">

      {/* 1. STATS */}
      <div className="docs-testing-stats">
        {STATS.map((s) => (
          <div key={s.label} className="docs-testing-stat">
            <span className="docs-testing-stat-value">{s.value}</span>
            <span className="docs-testing-stat-label">{s.label}</span>
            {s.note && <span className="docs-testing-stat-note">{s.note}</span>}
          </div>
        ))}
      </div>

      {/* 2. PROGRESS BARS */}
      <div>
        <h2 className="docs-overview-section-title">Cobertura</h2>
        <div className="docs-testing-bars">
          {BARS.map((bar, idx) => (
            <div key={bar.label} className="docs-testing-bar-row">
              <div className="docs-testing-bar-meta">
                <span className="docs-testing-bar-label">{bar.label}</span>
                <span className="docs-testing-bar-pct">{bar.pct}%</span>
              </div>
              <div className="docs-testing-bar-track">
                <div
                  className="docs-testing-bar-fill"
                  style={{
                    width: `${widths[idx]}%`,
                    background: `var(${bar.colorVar})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MODULES */}
      <div>
        <h2 className="docs-overview-section-title">Módulos testeados</h2>
        <div className="docs-testing-modules">
          {MODULES.map((mod) => (
            <div
              key={mod.name}
              className={`docs-testing-module${mod.highlight ? " docs-testing-module--highlight" : ""}`}
            >
              <span className="docs-testing-module-name">{mod.name}</span>
              {mod.note && (
                <span className="docs-testing-module-note">{mod.note}</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}