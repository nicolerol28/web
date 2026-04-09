import { useState } from "react"
import AdrCard from "../components/AdrCard"

const SECURITY_STEPS = new Set([1, 2])

export default function AISection({ project }) {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx))

  const { ai } = project.docs

  const headerStats = [
    { label: "Modelo",      value: ai.model },
    { label: "Endpoint",    value: ai.endpoint },
    { label: "Rate limit",  value: ai.rateLimit },
    { label: "Cache",       value: `${ai.cacheSeconds}s` },
    { label: "Latencia",        value: ai.latency.avg },
    { label: "Rango",           value: `${ai.latency.min} – ${ai.latency.max}` },
    { label: "Tokens prompt",   value: ai.tokens?.prompt },
    { label: "Tokens respuesta", value: ai.tokens?.response },
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

      {/* 2. FEATURES GRID */}
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

      <p className="docs-ai-section-tag">Patrón 1 — Chat con contexto enriquecido</p>
      {/* 3. REQUEST FLOW */}
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

      <p className="docs-ai-section-tag">Patrón 2 — Generación estructurada</p>
      {/* 4. INSIGHTS */}
      <div>
        <h2 className="docs-overview-section-title">Insights automáticos — generación estructurada</h2>
        <p className="docs-ai-context-desc">
          Al cargar el dashboard, el frontend manda un prompt predefinido al mismo endpoint del chat
          forzando output JSON estricto. El modelo no responde en texto libre — responde en un formato
          controlado que el frontend parsea directamente.
        </p>
        <div className="docs-ai-insight-prompt">
          <span className="docs-ai-insight-prompt-label">Prompt</span>
          <code className="docs-ai-insight-prompt-code">{ai.insights?.prompt}</code>
        </div>
        <div className="docs-ai-insight-meta">
          <div className="docs-ai-stat">
            <span className="docs-ai-stat-label">Patrón</span>
            <span className="docs-ai-stat-value">Generación estructurada</span>
          </div>
          <div className="docs-ai-stat">
            <span className="docs-ai-stat-label">Output</span>
            <span className="docs-ai-stat-value">{ai.insights?.outputFormat}</span>
          </div>
          <div className="docs-ai-stat">
            <span className="docs-ai-stat-label">Trigger</span>
            <span className="docs-ai-stat-value">{ai.insights?.trigger}</span>
          </div>
        </div>
        <div className="docs-ai-insight-tipos">
          {ai.insights?.tipos.map((tipo) => (
            <span key={tipo} className={`docs-ai-insight-tipo docs-ai-insight-tipo--${tipo}`}>{tipo}</span>
          ))}
        </div>
      </div>

      <p className="docs-ai-section-tag">¿Cómo se construye el contexto?</p>
      {/* 5. CONTEXT ENGINEERING */}
      <div>
        <h2 className="docs-overview-section-title">Context engineering</h2>
        <p className="docs-ai-context-desc">
          No es RAG con vector DB — es un snapshot SQL rico del estado real del negocio,
          reconstruido cada 30s y enviado como contexto en cada prompt.
        </p>
        <p className="docs-ai-context-desc" style={{ marginTop: "0.5rem" }}>
          {ai.tokens?.note}
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

      <p className="docs-ai-section-tag">Seguridad LLM</p>
      {/* 6. INJECTION PATTERNS */}
      <div>
        <h2 className="docs-overview-section-title">Patrones de prompt injection</h2>
        <p className="docs-ai-context-desc">
          AssistantGuard bloquea mensajes que contengan cualquiera de estos {ai.injectionPatterns} patrones (case-insensitive).
          Lanza HTTP 400 ante detección. Trade-off documentado: "DAN" como substring puede matchear dentro de palabras.
        </p>
        <div className="docs-ai-injection-grid">
          {ai.injectionPatternsList?.map((pattern) => (
            <span key={pattern} className="docs-ai-injection-tag">{pattern}</span>
          ))}
        </div>
      </div>

      {/* 7. ARCHITECTURE INSIGHTS */}
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