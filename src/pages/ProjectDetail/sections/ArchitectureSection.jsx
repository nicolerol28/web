import { useState } from "react"

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

export default function ArchitectureSection({ project }) {
  const [openAdr, setOpenAdr] = useState(null)
  const toggle = (idx) => setOpenAdr((prev) => (prev === idx ? null : idx))

  return (
    <div className="docs-arch">

      {/* 1. SVG DIAGRAM */}
      <div>
        <h2 className="docs-overview-section-title">Clean Architecture</h2>
        <div className="docs-arch-diagram">
          <svg width="100%" viewBox="0 0 680 400" role="img">
            <title>Clean Architecture — 4 layers</title>
            <desc>Four-layer Clean Architecture from outside to inside: Infrastructure, API, Application, Domain. Arrows point inward.</desc>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>

            {/* Infrastructure layer (outermost) */}
            <rect x="10" y="10" width="660" height="368" rx="14" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="4 3"/>
            <text x="22" y="28" style={{fontSize:"10px",fill:"var(--color-text-dim)",fontFamily:"var(--font-body)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Infrastructure layer</text>

            {/* API layer */}
            <rect x="90" y="44" width="500" height="294" rx="10" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
            <text x="102" y="60" style={{fontSize:"10px",fill:"var(--color-text-dim)",fontFamily:"var(--font-body)",textTransform:"uppercase",letterSpacing:"0.08em"}}>API layer</text>

            {/* Application layer */}
            <rect x="170" y="78" width="340" height="224" rx="8" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
            <text x="182" y="94" style={{fontSize:"10px",fill:"var(--color-text-dim)",fontFamily:"var(--font-body)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Application layer</text>

            {/* Domain layer (center) */}
            <rect x="234" y="108" width="212" height="130" rx="8" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5"/>
            <text x="246" y="124" style={{fontSize:"10px",fill:"var(--color-accent-light)",fontFamily:"var(--font-body)",textTransform:"uppercase",letterSpacing:"0.08em"}}>Domain layer</text>

            {/* Domain boxes: Entities + Gateways */}
            <rect x="246" y="132" width="80" height="32" rx="6" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5"/>
            <text x="286" y="148" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fontWeight:"500",fill:"var(--color-accent-light)",fontFamily:"var(--font-body)"}}>Entities</text>

            <rect x="338" y="132" width="96" height="32" rx="6" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5"/>
            <text x="386" y="148" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fontWeight:"500",fill:"var(--color-accent-light)",fontFamily:"var(--font-body)"}}>Gateways</text>

            {/* Use cases — full width of domain box */}
            <rect x="246" y="176" width="188" height="32" rx="6" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.3)" strokeWidth="0.5"/>
            <text x="340" y="192" textAnchor="middle" dominantBaseline="central" style={{fontSize:"10px",fontWeight:"500",fill:"var(--color-accent-light)",fontFamily:"var(--font-body)"}}>Use cases (commands &amp; queries)</text>

            {/* Application layer boxes: Error/Result — centrados verticalmente */}
            <rect x="182" y="168" width="44" height="44" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="204" y="186" textAnchor="middle" style={{fontSize:"9px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Error /</text>
            <text x="204" y="200" textAnchor="middle" style={{fontSize:"9px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Result</text>

            <rect x="454" y="168" width="44" height="44" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="476" y="186" textAnchor="middle" style={{fontSize:"9px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Error /</text>
            <text x="476" y="200" textAnchor="middle" style={{fontSize:"9px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Result</text>

            {/* API layer boxes: REST API + DTO/Mapper (left) */}
            <rect x="104" y="120" width="64" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="136" y="136" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>REST API</text>

            <rect x="104" y="190" width="64" height="44" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="136" y="208" textAnchor="middle" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>DTO /</text>
            <text x="136" y="222" textAnchor="middle" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Mapper</text>

            {/* API layer boxes: REST API + DTO/Mapper (right) */}
            <rect x="512" y="120" width="64" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="544" y="136" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>REST API</text>

            <rect x="512" y="190" width="64" height="44" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="544" y="208" textAnchor="middle" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>DTO /</text>
            <text x="544" y="222" textAnchor="middle" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Mapper</text>

            {/* Infrastructure boxes left */}
            <rect x="14" y="75" width="72" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="50" y="91" textAnchor="middle" dominantBaseline="central" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>GeminiClient</text>

            <rect x="14" y="133" width="72" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="50" y="149" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>R2Client</text>

            <rect x="14" y="191" width="72" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="50" y="207" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>JPA Repos</text>

            <rect x="14" y="249" width="72" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="50" y="265" textAnchor="middle" dominantBaseline="central" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>DemoResetJob</text>

            {/* Infrastructure boxes right */}
            <rect x="594" y="75" width="76" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="632" y="91" textAnchor="middle" dominantBaseline="central" style={{fontSize:"10px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>AssistantGuard</text>

            <rect x="594" y="133" width="76" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="632" y="149" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Spring Sec.</text>

            <rect x="594" y="191" width="76" height="32" rx="6" fill="var(--color-bg)" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
            <text x="632" y="207" textAnchor="middle" dominantBaseline="central" style={{fontSize:"11px",fill:"var(--color-text-muted)",fontFamily:"var(--font-body)"}}>Flyway</text>

            {/* Arrows: Infrastructure → API (left) */}
            <line x1="86" y1="91" x2="100" y2="136" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="86" y1="149" x2="100" y2="207" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="86" y1="207" x2="100" y2="215" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="86" y1="265" x2="100" y2="225" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* Arrows: Infrastructure → API (right) */}
            <line x1="594" y1="91" x2="580" y2="136" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="594" y1="149" x2="580" y2="207" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="594" y1="207" x2="580" y2="215" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* Arrows: API → Application (left) — REST API y DTO/Mapper → Error/Result */}
            <line x1="168" y1="136" x2="182" y2="182" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="168" y1="212" x2="182" y2="196" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* Arrows: API → Application (right) — REST API y DTO/Mapper → Error/Result */}
            <line x1="512" y1="136" x2="498" y2="182" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="512" y1="212" x2="498" y2="196" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* Arrows: Application → Domain — Error/Result → Domain (horizontal) */}
            <line x1="226" y1="190" x2="242" y2="190" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>
            <line x1="454" y1="190" x2="438" y2="190" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* Modules footer */}
            <text x="340" y="388" textAnchor="middle" style={{fontSize:"10px",fill:"var(--color-text-faint)",fontFamily:"var(--font-body)"}}>Modules: products · warehouse · inventory · suppliers · users · assistant · shared</text>
          </svg>
        </div>

        {/* CQRS + Gateway info cards */}
        <div className="docs-arch-info-grid">
          <div className="docs-arch-info-card">
            <span className="docs-arch-adr-col-label">CQRS split</span>
            <p>Las lecturas van directo de los controllers a los repositorios JPA — sin pasar por el dominio. Las escrituras recorren el flujo completo: entidad, use case, gateway, repositorio.</p>
          </div>
          <div className="docs-arch-info-card">
            <span className="docs-arch-adr-col-label">Gateway pattern</span>
            <p>Las interfaces StorageGateway y AIGateway viven en el dominio. GeminiClient y R2Client las implementan en infraestructura. El dominio nunca importa SDKs de cloud.</p>
          </div>
        </div>
      </div>

      {/* 2. DECISION RECORDS */}
      <div>
        <h2 className="docs-overview-section-title">Architecture Decision Records</h2>
        <div className="docs-arch-adrs">
          {project.docs.adrs.map((adr, idx) => (
            <AdrCard
              key={adr.title}
              adr={adr}
              isOpen={openAdr === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}