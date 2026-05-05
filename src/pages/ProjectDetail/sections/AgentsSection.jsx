import { useState } from "react"

export default function AgentsSection({ project }) {
  const [openIdx, setOpenIdx] = useState(null)
  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? null : idx))
  const agents = project.docs.agents ?? []

  if (agents.length === 0) {
    return (
      <div className="docs-ai">
        <p className="docs-overview-desc">No hay agentes documentados para este proyecto.</p>
      </div>
    )
  }

  return (
    <div className="docs-ai">
      <div className="docs-arch-adrs">
        {agents.map((agent, idx) => {
          const isOpen = openIdx === idx
          return (
            <div key={agent.name} className={`docs-arch-adr${isOpen ? " docs-arch-adr--open" : ""}`}>

              <button className="docs-arch-adr-header" onClick={() => toggle(idx)}>
                <div className="docs-arch-adr-title-row">
                  <span className="docs-arch-adr-title">{agent.name}</span>
                  <span className="docs-arch-adr-badge">{agent.role}</span>
                </div>
                <span className="docs-arch-adr-chevron">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <>
                  <div className="docs-arch-adr-body">
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">Descripción</span>
                      <p>{agent.description}</p>
                    </div>
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">Memory</span>
                      <p>{agent.memory}</p>
                    </div>
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">RAG</span>
                      <p>{agent.rag}</p>
                    </div>
                  </div>

                  <div className="docs-arch-adr-body">
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">Modelo</span>
                      <p>{agent.model}</p>
                    </div>
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">Tools</span>
                      <p>{agent.tools}</p>
                    </div>
                    <div className="docs-arch-adr-col">
                      <span className="docs-arch-adr-col-label">Rate limit</span>
                      <p>{agent.rateLimit}</p>
                    </div>
                  </div>

                  <div className="docs-arch-adr-body">
                    <div className="docs-arch-adr-col" style={{ gridColumn: "1 / -1" }}>
                      <span className="docs-arch-adr-col-label">Protocolos</span>
                      <div className="docs-ai-injection-grid">
                        {agent.protocols.map((p) => (
                          <span key={p} className="docs-ai-injection-tag">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="docs-arch-adr-body">
                    <div className="docs-arch-adr-col" style={{ gridColumn: "1 / -1" }}>
                      <span className="docs-arch-adr-col-label">Flujo de request</span>
                      <div className="docs-ai-flow">
                        {agent.flow.map((step, stepIdx) => (
                          <div key={step} className="docs-ai-flow-item">
                            {stepIdx > 0 && <div className="docs-ai-flow-line" />}
                            <div className="docs-ai-flow-step">
                              <span className="docs-ai-flow-num">{stepIdx + 1}</span>
                              <span className="docs-ai-flow-text">{step}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
