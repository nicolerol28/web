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

const INTERFACES = [
  { label: "Controllers", y: 60 },
  { label: "DTOs", y: 104 },
  { label: "Mappers", y: 148 },
  { label: "AssistantGuard", y: 192 },
  { label: "Spring Security", y: 236 },
]

const APPLICATION = [
  { label: "Commands", y: 60 },
  { label: "Queries", y: 104 },
  { label: "Use Cases", y: 148 },
  { label: "Result objects", y: 192 },
]

const DOMAIN = [
  { label: "Models (Entities)", y: 86 },
  { label: "Repository (interfaces)", y: 128 },
  { label: "Gateways (interfaces)", y: 170 },
  { label: "Factory methods", y: 212 },
  { label: "Business rules", y: 254 },
]

const INFRASTRUCTURE = [
  { label: "JPA Repos", y: 60 },
  { label: "JPA Entities", y: 104 },
  { label: "GeminiClient", y: 148 },
  { label: "R2Client", y: 192 },
  { label: "Flyway", y: 236 },
  { label: "DemoResetJob", y: 280 },
]

export default function ArchitectureSection({ project }) {
  const [openAdr, setOpenAdr] = useState(null)
  const toggle = (idx) => setOpenAdr((prev) => (prev === idx ? null : idx))

  return (
    <div className="docs-arch">

      {/* 1. SVG DIAGRAM */}
      <div>
        <h2 className="docs-overview-section-title">Clean Architecture</h2>
        <div className="docs-arch-diagram">
          <svg width="100%" viewBox="0 0 680 380" role="img">
            <title>Clean Architecture — Inventory System</title>
            <desc>
              Four columns: Interfaces, Application, Domain, Infrastructure.
              Interfaces and Application point inward to Domain.
              Infrastructure implements Domain interfaces (dependency inversion).
            </desc>
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </marker>
            </defs>

            {/* Column labels */}
            <text fontSize="10" x="69" y="22" textAnchor="middle" fill="var(--color-text-dim)" fontFamily="var(--font-body)" textTransform="uppercase" letterSpacing="0.08em">Interfaces</text>
            <text fontSize="10" x="198" y="22" textAnchor="middle" fill="var(--color-text-dim)" fontFamily="var(--font-body)" textTransform="uppercase" letterSpacing="0.08em">Application</text>
            <text fontSize="10" x="344" y="22" textAnchor="middle" fill="var(--color-accent-light)" fontFamily="var(--font-body)" textTransform="uppercase" letterSpacing="0.08em">Domain</text>
            <text fontSize="10" x="495" y="22" textAnchor="middle" fill="var(--color-text-dim)" fontFamily="var(--font-body)" textTransform="uppercase" letterSpacing="0.08em">Infrastructure</text>

            {/* Dividers */}
            <line x1="136" y1="30" x2="136" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
            <line x1="258" y1="30" x2="258" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
            <line x1="430" y1="30" x2="430" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>

            {/* INTERFACES */}
            {INTERFACES.map(({ label, y }) => (
              <g key={label}>
                <rect x="14" y={y} width="110" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                <text fontSize="11" x="69" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* INTERFACES → APPLICATION */}
            <line x1="124" y1="140" x2="148" y2="140" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* APPLICATION */}
            {APPLICATION.map(({ label, y }) => (
              <g key={label}>
                <rect x="148" y={y} width="100" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                <text fontSize="11" x="198" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* APPLICATION → DOMAIN */}
            <line x1="248" y1="140" x2="268" y2="140" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* DOMAIN */}
            <rect x="268" y="46" width="152" height="260" rx="10" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5"/>
            <text fontSize="11" fontWeight="700" x="344" y="68" textAnchor="middle" dominantBaseline="central" fill="var(--color-accent-light)" fontFamily="var(--font-body)">Domain</text>
            {DOMAIN.map(({ label, y }) => (
              <g key={label}>
                <rect x="280" y={y} width="128" height="30" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.2)" strokeWidth="0.5"/>
                <text fontSize="11" x="344" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-accent-light)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* INFRASTRUCTURE */}
            {INFRASTRUCTURE.map(({ label, y }) => (
              <g key={label}>
                <rect x="440" y={y} width="110" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                <text fontSize="11" x="495" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* INFRASTRUCTURE → DOMAIN (implements, dashed) */}
            <line x1="440" y1="140" x2="422" y2="140" stroke="var(--color-accent)" strokeWidth="0.8" strokeDasharray="4 3" markerEnd="url(#arrow)" fill="none"/>
            <text fontSize="9" x="431" y="134" textAnchor="middle" fill="var(--color-accent-light)" fontFamily="var(--font-body)">implements</text>

            {/* CQRS note */}
            <text fontSize="10" x="198" y="355" textAnchor="middle" fill="var(--color-text-faint)" fontFamily="var(--font-body)">CQRS: queries → JPA direct (bypass domain)</text>

            {/* Modules */}
            <text fontSize="10" x="340" y="372" textAnchor="middle" fill="var(--color-text-faint)" fontFamily="var(--font-body)">
              Modules: products · warehouse · inventory · suppliers · users · assistant · shared
            </text>
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