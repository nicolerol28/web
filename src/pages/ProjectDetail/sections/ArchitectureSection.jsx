import { useState } from "react"
import AdrCard from "../components/AdrCard"

export default function ArchitectureSection({ project }) {
  const [openAdr, setOpenAdr] = useState(null)
  const toggle = (idx) => setOpenAdr((prev) => (prev === idx ? null : idx))

  const { interfaces, application, domain, infrastructure } = project.docs.architecture

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
            {interfaces.map(({ label, y }) => (
              <g key={label}>
                <rect x="14" y={y} width="110" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                <text fontSize="11" x="69" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* INTERFACES → APPLICATION */}
            <line x1="124" y1="140" x2="148" y2="140" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

            {/* APPLICATION */}
            {application.map(({ label, y }) => (
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
            {domain.map(({ label, y }) => (
              <g key={label}>
                <rect x="280" y={y} width="128" height="30" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.2)" strokeWidth="0.5"/>
                <text fontSize="11" x="344" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-accent-light)" fontFamily="var(--font-body)">{label}</text>
              </g>
            ))}

            {/* INFRASTRUCTURE */}
            {infrastructure.map(({ label, y }) => (
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
        <h2 className="docs-overview-section-title">Architectural decisions</h2>
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