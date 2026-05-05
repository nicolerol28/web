import { useEffect, useState } from "react"

/* ── JaCoCo fallback data ──────────────────────────────────── */

const JACOCO_STATS = [
  { label: "Tests pasando", value: "279",  note: null },
  { label: "Instrucciones", value: "94%",  note: "JaCoCo · excl. DTOs & mappers" },
  { label: "Branches",      value: "96%",  note: "JaCoCo · excl. DTOs & mappers" },
  { label: "Metodología",   value: "BDD",  note: "Given / When / Then" },
]

const JACOCO_BARS = [
  { label: "Instrucciones", pct: 94, colorVar: "--color-accent" },
  { label: "Branches",      pct: 96, colorVar: "--color-accent-hover" },
]

const JACOCO_MODULES = [
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

/* ── Evals view ────────────────────────────────────────────── */

function EvalsView({ testing }) {
  return (
    <div className="docs-testing">

      {/* Stats */}
      <div className="docs-testing-stats">
        {testing.stats.map((s) => (
          <div key={s.label} className="docs-testing-stat">
            <span className="docs-testing-stat-value">{s.value}</span>
            <span className="docs-testing-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Suites */}
      <div>
        <h2 className="docs-overview-section-title">Eval suites</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {testing.suites.map((suite) => (
            <div key={suite.name} className="docs-arch-info-card">
              {/* Suite header */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                <span className="docs-arch-adr-col-label">{suite.name}</span>
                <code style={{
                  fontSize: "0.7rem",
                  color: "var(--color-text-faint)",
                  background: "rgba(37,99,235,0.08)",
                  padding: "0.1rem 0.4rem",
                  borderRadius: "4px",
                  border: "0.5px solid var(--color-accent-border)",
                }}>
                  {suite.file}
                </code>
              </div>

              {/* Description */}
              <p style={{ marginBottom: "0.75rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                {suite.description}
              </p>

              {/* Scorers table */}
              <table className="docs-testing-table">
                <thead>
                  <tr>
                    <th className="docs-testing-th">Scorer</th>
                    <th className="docs-testing-th">Threshold</th>
                    <th className="docs-testing-th">Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {suite.scorers.map((scorer) => (
                    <tr key={scorer.name} className="docs-testing-tr">
                      <td className="docs-testing-td">
                        <span className="docs-testing-pkg">{scorer.name}</span>
                        {scorer.custom && (
                          <span style={{
                            marginLeft: "0.4rem",
                            fontSize: "0.65rem",
                            padding: "0.1rem 0.35rem",
                            borderRadius: "4px",
                            background: "rgba(234,179,8,0.12)",
                            color: "#ca8a04",
                            border: "0.5px solid rgba(234,179,8,0.3)",
                            verticalAlign: "middle",
                          }}>
                            custom
                          </span>
                        )}
                      </td>
                      <td className="docs-testing-td">
                        <span className="docs-testing-badge docs-testing-badge--green">{scorer.threshold}</span>
                      </td>
                      <td className="docs-testing-td" style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
                        {scorer.scope}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

/* ── JaCoCo view ───────────────────────────────────────────── */

function JaCoCoView() {
  const [widths, setWidths] = useState(JACOCO_BARS.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => setWidths(JACOCO_BARS.map((b) => b.pct)), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="docs-testing">

      <div className="docs-testing-stats">
        {JACOCO_STATS.map((s) => (
          <div key={s.label} className="docs-testing-stat">
            <span className="docs-testing-stat-value">{s.value}</span>
            <span className="docs-testing-stat-label">{s.label}</span>
            {s.note && <span className="docs-testing-stat-note">{s.note}</span>}
          </div>
        ))}
      </div>

      <div>
        <h2 className="docs-overview-section-title">Cobertura</h2>
        <div className="docs-testing-bars">
          {JACOCO_BARS.map((bar, idx) => (
            <div key={bar.label} className="docs-testing-bar-row">
              <div className="docs-testing-bar-meta">
                <span className="docs-testing-bar-label">{bar.label}</span>
                <span className="docs-testing-bar-pct">{bar.pct}%</span>
              </div>
              <div className="docs-testing-bar-track">
                <div
                  className="docs-testing-bar-fill"
                  style={{ width: `${widths[idx]}%`, background: `var(${bar.colorVar})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

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
            {JACOCO_MODULES.map((mod) => {
              const rowClass   = `docs-testing-tr${mod.excluded ? " docs-testing-tr--excluded" : ""}`
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
                    <span className={badgeClass}>{mod.branches}</span>
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

/* ── Entry point ───────────────────────────────────────────── */

export default function TestingSection({ project }) {
  const testing = project?.docs?.testing

  if (testing?.type === "evals") {
    return <EvalsView testing={testing} />
  }

  return <JaCoCoView />
}
