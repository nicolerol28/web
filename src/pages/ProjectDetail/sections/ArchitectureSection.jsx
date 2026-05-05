import { useState } from "react"
import AdrCard from "../components/AdrCard"

/* ── Ecosystem diagram helpers ─────────────────────────────── */

const PROTOCOL_COLORS = {
  rest: "var(--color-accent)",
  a2a:  "#a855f7",
  auth: "#10b981",
}

const BOX_W = 165
const BOX_H = 65

function edgePoint(cx, cy, tx, ty) {
  const dx = tx - cx
  const dy = ty - cy
  if (dx === 0 && dy === 0) return { x: cx, y: cy }
  const hw = BOX_W / 2
  const hh = BOX_H / 2
  const s  = Math.min(hw / Math.abs(dx || 1e-9), hh / Math.abs(dy || 1e-9))
  return { x: cx + dx * s, y: cy + dy * s }
}

function curveData(fp, tp, bend) {
  const dx  = tp.x - fp.x
  const dy  = tp.y - fp.y
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  const mx  = (fp.x + tp.x) / 2
  const my  = (fp.y + tp.y) / 2

  const cx  = mx + (dy / len) * bend
  const cy  = my + (-dx / len) * bend
  return {
    d:  `M${fp.x} ${fp.y} Q${cx} ${cy} ${tp.x} ${tp.y}`,
    lx: 0.25 * fp.x + 0.5 * cx + 0.25 * tp.x,
    ly: 0.25 * fp.y + 0.5 * cy + 0.25 * tp.y,
  }
}

function EcosystemDiagram({ architecture }) {
  const { services, connections } = architecture
  const svcMap = Object.fromEntries(services.map((s) => [s.id, s]))

  // Pre-compute geometry for every connection so we can render in 3 passes.
  const connGeo = connections.map((conn, i) => {
    const from = svcMap[conn.from]
    const to   = svcMap[conn.to]
    if (!from || !to) return null
    const fp    = edgePoint(from.x, from.y, to.x, to.y)
    const tp    = edgePoint(to.x,   to.y,   from.x, from.y)
    const bend  = (i % 2 === 0 ? 1 : -1) * 22
    const color = PROTOCOL_COLORS[conn.protocol] ?? "#6b7280"
    return { conn, color, ...curveData(fp, tp, bend) }
  })

  return (
    <div className="docs-arch-diagram">
      <svg width="100%" viewBox="0 0 680 450" role="img">
        <title>Ecosystem Architecture</title>

        <defs>
          {Object.entries(PROTOCOL_COLORS).map(([proto, color]) => (
            <marker
              key={proto}
              id={`eco-arrow-${proto}`}
              viewBox="0 0 10 10"
              refX="8" refY="5"
              markerWidth="5" markerHeight="5"
              orient="auto"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          ))}
        </defs>

        <g transform="translate(20, 15)">

          {/* Pass 1: Connection paths — rendered first, behind everything */}
          {connGeo.map((geo, i) => {
            if (!geo) return null
            return (
              <path
                key={i}
                d={geo.d}
                stroke={geo.color}
                strokeWidth="1"
                strokeDasharray={geo.conn.protocol === "a2a" ? "5 3" : undefined}
                markerEnd={`url(#eco-arrow-${geo.conn.protocol})`}
                fill="none"
              />
            )
          })}

          {/* Pass 2: Service nodes — on top of connection lines */}
          {services.map((svc) => {
            const bx = svc.x - BOX_W / 2
            const by = svc.y - BOX_H / 2
            return (
              <g key={svc.id}>
                <rect
                  x={bx} y={by}
                  width={BOX_W} height={BOX_H}
                  rx="10"
                  fill={svc.external ? "rgba(107,114,128,0.06)" : "rgba(37,99,235,0.07)"}
                  stroke={svc.external ? "#6b7280" : "var(--color-accent-border)"}
                  strokeWidth="0.8"
                  strokeDasharray={svc.external ? "5 3" : undefined}
                />
                <text
                  x={svc.x} y={by + 20}
                  textAnchor="middle"
                  fontSize="9.5"
                  fontWeight="600"
                  fill={svc.external ? "var(--color-text-faint)" : "var(--color-text-muted)"}
                  fontFamily="var(--font-body)"
                >
                  {svc.label}
                </text>
                <text
                  x={svc.x} y={by + 35}
                  textAnchor="middle"
                  fontSize="8.5"
                  fill="var(--color-text-faint)"
                  fontFamily="var(--font-body)"
                >
                  {svc.role}
                </text>
                <text
                  x={svc.x} y={by + 50}
                  textAnchor="middle"
                  fontSize="8.5"
                  fill={svc.external ? "#6b7280" : "var(--color-accent-light)"}
                  fontFamily="var(--font-body)"
                >
                  {svc.tech}
                </text>
              </g>
            )
          })}

          {/* Pass 3: Connection labels — on top of nodes, with opaque background */}
          {connGeo.map((geo, i) => {
            if (!geo) return null
            const labelW = geo.conn.label.length * 4.5 + 10
            return (
              <g key={i}>
                <rect
                  x={geo.lx - labelW / 2} y={geo.ly - 10}
                  width={labelW} height={12}
                  rx="2"
                  fill="var(--color-surface)"
                  opacity="0.95"
                />
                <text
                  x={geo.lx} y={geo.ly}
                  textAnchor="middle"
                  fontSize="8"
                  fill={geo.color}
                  fontFamily="var(--font-body)"
                >
                  {geo.conn.label}
                </text>
              </g>
            )
          })}
        </g>

        {/* Legend */}
        <g transform="translate(20, 432)">
          {Object.entries(PROTOCOL_COLORS).map(([proto, color], i) => (
            <g key={proto} transform={`translate(${i * 130}, 0)`}>
              <line
                x1="0" y1="-3" x2="18" y2="-3"
                stroke={color}
                strokeWidth="1.5"
                strokeDasharray={proto === "a2a" ? "4 2" : undefined}
              />
              <text x="22" y="0" fontSize="8" fill={color} fontFamily="var(--font-body)">
                {proto.toUpperCase()}
              </text>
            </g>
          ))}
          <g transform="translate(390, 0)">
            <rect
              x="0" y="-8" width="14" height="10" rx="2"
              fill="rgba(107,114,128,0.06)"
              stroke="#6b7280"
              strokeWidth="0.8"
              strokeDasharray="3 2"
            />
            <text x="18" y="0" fontSize="8" fill="#6b7280" fontFamily="var(--font-body)">
              Externo
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

/* ── Section component ─────────────────────────────────────── */

export default function ArchitectureSection({ project }) {
  const [openAdr, setOpenAdr] = useState(null)
  const toggle = (idx) => setOpenAdr((prev) => (prev === idx ? null : idx))

  const arch      = project.docs.architecture
  const isEco     = arch?.type === "ecosystem"

  return (
    <div className="docs-arch">

      {/* 1. DIAGRAM */}
      {isEco ? (
        <div>
          <h2 className="docs-overview-section-title">Ecosystem Architecture</h2>
          <EcosystemDiagram architecture={arch} />
        </div>
      ) : (
        <div>
          {(() => {
            const { interfaces, application, domain, infrastructure } = arch
            return (
              <>
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

                    <text fontSize="10" x="69"  y="22" textAnchor="middle" fill="var(--color-text-dim)"        fontFamily="var(--font-body)" letterSpacing="0.08em">Interfaces</text>
                    <text fontSize="10" x="198" y="22" textAnchor="middle" fill="var(--color-text-dim)"        fontFamily="var(--font-body)" letterSpacing="0.08em">Application</text>
                    <text fontSize="10" x="344" y="22" textAnchor="middle" fill="var(--color-accent-light)"   fontFamily="var(--font-body)" letterSpacing="0.08em">Domain</text>
                    <text fontSize="10" x="495" y="22" textAnchor="middle" fill="var(--color-text-dim)"        fontFamily="var(--font-body)" letterSpacing="0.08em">Infrastructure</text>

                    <line x1="136" y1="30" x2="136" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <line x1="258" y1="30" x2="258" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>
                    <line x1="430" y1="30" x2="430" y2="340" stroke="var(--color-accent-border)" strokeWidth="0.5" strokeDasharray="3 3"/>

                    {interfaces.map(({ label, y }) => (
                      <g key={label}>
                        <rect x="14" y={y} width="110" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                        <text fontSize="11" x="69" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
                      </g>
                    ))}

                    <line x1="124" y1="140" x2="148" y2="140" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

                    {application.map(({ label, y }) => (
                      <g key={label}>
                        <rect x="148" y={y} width="100" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                        <text fontSize="11" x="198" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
                      </g>
                    ))}

                    <line x1="248" y1="140" x2="268" y2="140" stroke="var(--color-text-faint)" strokeWidth="0.5" markerEnd="url(#arrow)" fill="none"/>

                    <rect x="268" y="46" width="152" height="260" rx="10" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.25)" strokeWidth="0.5"/>
                    <text fontSize="11" fontWeight="700" x="344" y="68" textAnchor="middle" dominantBaseline="central" fill="var(--color-accent-light)" fontFamily="var(--font-body)">Domain</text>
                    {domain.map(({ label, y }) => (
                      <g key={label}>
                        <rect x="280" y={y} width="128" height="30" rx="6" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.2)" strokeWidth="0.5"/>
                        <text fontSize="11" x="344" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-accent-light)" fontFamily="var(--font-body)">{label}</text>
                      </g>
                    ))}

                    {infrastructure.map(({ label, y }) => (
                      <g key={label}>
                        <rect x="440" y={y} width="110" height="30" rx="6" fill="none" stroke="var(--color-accent-border)" strokeWidth="0.5"/>
                        <text fontSize="11" x="495" y={y + 15} textAnchor="middle" dominantBaseline="central" fill="var(--color-text-muted)" fontFamily="var(--font-body)">{label}</text>
                      </g>
                    ))}

                    <line x1="440" y1="140" x2="422" y2="140" stroke="var(--color-accent)" strokeWidth="0.8" strokeDasharray="4 3" markerEnd="url(#arrow)" fill="none"/>
                    <text fontSize="9" x="431" y="134" textAnchor="middle" fill="var(--color-accent-light)" fontFamily="var(--font-body)">implements</text>

                    <text fontSize="10" x="198" y="355" textAnchor="middle" fill="var(--color-text-faint)" fontFamily="var(--font-body)">CQRS: queries → JPA direct (bypass domain)</text>
                    <text fontSize="10" x="340" y="372" textAnchor="middle" fill="var(--color-text-faint)" fontFamily="var(--font-body)">
                      Modules: products · warehouse · inventory · suppliers · users · assistant · shared
                    </text>
                  </svg>
                </div>

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
              </>
            )
          })()}
        </div>
      )}

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
