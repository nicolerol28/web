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
  { pkg: "shared.guard",                          instr: "97%",  branches: "90%",  excluded: false },
  { pkg: "products.domain.model",                 instr: "100%", branches: "100%", excluded: false },
  { pkg: "users.application.usecase",             instr: "100%", branches: "100%", excluded: false },
  { pkg: "inventory.domain.model",                instr: "100%", branches: "100%", excluded: false },
  { pkg: "products.application.usecase.product",  instr: "100%", branches: "100%", excluded: false },
  { pkg: "shared.exception",                      instr: "100%", branches: "n/a",  excluded: false },
  { pkg: "users.domain.model",                    instr: "100%", branches: "100%", excluded: false },
  { pkg: "suppliers.application.usecase",         instr: "100%", branches: "100%", excluded: false },
  { pkg: "products.application.usecase.unit",     instr: "100%", branches: "100%", excluded: false },
  { pkg: "inventory.application.usecase",         instr: "100%", branches: "100%", excluded: false },
  { pkg: "warehouse.application.usecase",         instr: "100%", branches: "100%", excluded: false },
  { pkg: "products.application.usecase.category", instr: "100%", branches: "100%", excluded: false },
  { pkg: "suppliers.domain.model",                instr: "100%", branches: "100%", excluded: false },
  { pkg: "warehouse.domain.model",                instr: "100%", branches: "100%", excluded: false },
  { pkg: "users.application",                     instr: "100%", branches: "n/a",  excluded: false },
  { pkg: "assistant.application.usecase",         instr: "100%", branches: "n/a",  excluded: false },
  { pkg: "assistant.infrastructure",              instr: "0%",   branches: "0%",   excluded: true  },
  { pkg: "users.infrastructure.security",         instr: "0%",   branches: "0%",   excluded: true  },
  { pkg: "inventory.infrastructure",              instr: "0%",   branches: "0%",   excluded: true  },
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
        <table className="docs-testing-table">
          <thead>
            <tr>
              <th className="docs-testing-th">Paquete</th>
              <th className="docs-testing-th">Instrucciones</th>
              <th className="docs-testing-th">Branches</th>
            </tr>
          </thead>
          <tbody>
            {MODULES.map((mod) => {
              const rowClass = `docs-testing-tr${mod.excluded ? " docs-testing-tr--excluded" : ""}`
              const badgeClass = mod.excluded
                ? "docs-testing-badge docs-testing-badge--excluded"
                : "docs-testing-badge docs-testing-badge--green"
              return (
                <tr key={mod.pkg} className={rowClass}>
                  <td className="docs-testing-td">
                    <span className="docs-testing-pkg">{mod.pkg}</span>
                    {mod.excluded && (
                      <span className="docs-testing-badge docs-testing-badge--excluded" style={{ marginLeft: "0.5rem" }}>excluido</span>
                    )}
                  </td>
                  <td className="docs-testing-td">
                    <span className={badgeClass}>{mod.instr}</span>
                  </td>
                  <td className="docs-testing-td">
                    <span className={mod.excluded ? "docs-testing-badge docs-testing-badge--excluded" : "docs-testing-badge docs-testing-badge--green"}>{mod.branches}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}