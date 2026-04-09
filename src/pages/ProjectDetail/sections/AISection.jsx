const SECURITY_STEPS = new Set([1, 2])

export default function AISection({ project }) {
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
              {/* connector line above (except first) */}
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

    </div>
  )
}
