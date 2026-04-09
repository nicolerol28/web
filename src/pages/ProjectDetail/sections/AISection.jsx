import { useState } from "react"

const SECURITY_STEPS = new Set([1, 2])

function AdrCard({ adr, isOpen, onToggle }) {
  return (
    <div className={`docs-arch-adr${isOpen ? " docs-arch-adr--open" : ""}`}>
      <button className="docs-arch-adr-header" onClick={onToggle}>
        <div className="docs-arch-adr-title-row">
          <span className="docs-arch-adr-title">{adr.title}</span>
          <span className="docs-arch-adr-badge">{adr.badge}</span>
        </div>
        <span className="docs-arch-adr-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="docs-arch-adr-body">
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Contexto</span>
            <p>{adr.context}</p>
          </div>
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Decisión</span>
            <p>{adr.decision}</p>
          </div>
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Trade-offs</span>
            <p>{adr.tradeoffs}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function AISection({ project }) {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx))

  const { ai } = project.docs

  const headerStats = [
    { label: "Modelo",      value: ai.model },
    { label: "Endpoint",    value: ai.endpoint },
    { label: "Rate limit",  value: ai.rateLimit },
    { label: "Cache",       value: `${ai.cacheSeconds}s` },
  ]

  return (
    <div className="docs-ai">

      {/* 1. HEADER STATS */}
      <div className="docs-ai-stats">
        {headerStats.map((s) => (
          <div key={s.label} className="docs-ai-stat">
            <span className="docs-ai-stat-label">{s.label}</span>
            <span className="docs-ai-stat-value">{s.value}</span>
          </div>
        ))}
      </div>

      {/* 2. REQUEST FLOW */}
      <div>
        <h2 className="docs-overview-section-title">Flujo de una request</h2>
        <div className="docs-ai-flow">
          {ai.flow.map((step, idx) => (
            <div key={idx} className="docs-ai-flow-item">
              {idx > 0 && <div className="docs-ai-flow-line" />}
              <div className={`docs-ai-flow-step${SECURITY_STEPS.has(idx) ? " docs-ai-flow-step--warn" : ""}`}>
                <span className="docs-ai-flow-num">{idx + 1}</span>
                <span className="docs-ai-flow-text">{step}</span>
                {SECURITY_STEPS.has(idx) && (
                  <span className="docs-ai-flow-badge">seguridad</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURES GRID */}
      <div>
        <h2 className="docs-overview-section-title">Features de IA</h2>
        <div className="docs-ai-features">
          {ai.features.map((feature) => (
            <div key={feature} className="docs-ai-feature-card">
              <span className="docs-ai-feature-dot" />
              <span className="docs-ai-feature-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CONTEXT ENGINEERING */}
      <div>
        <h2 className="docs-overview-section-title">Context engineering</h2>
        <p className="docs-ai-context-desc">
          No es RAG con vector DB — es un snapshot SQL rico del estado real del negocio,
          reconstruido cada 30s y enviado como contexto en cada prompt.
        </p>
        <div className="docs-ai-queries">
          {ai.contextQueries?.map((q) => (
            <div key={q.label} className="docs-ai-query">
              <span className="docs-ai-query-label">{q.label}</span>
              <span className="docs-ai-query-detail">{q.detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. ARCHITECTURE INSIGHTS */}
      <div>
        <h2 className="docs-overview-section-title">Architectural decisions</h2>
        <div className="docs-arch-adrs">
          {ai.architectureInsights?.map((item, idx) => (
            <AdrCard
              key={item.title}
              adr={item}
              isOpen={openIdx === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}