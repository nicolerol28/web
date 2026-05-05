const INFRA_LABELS = {
  backend:  "Backend",
  frontend: "Frontend",
  db:       "Base de datos",
  storage:  "Almacenamiento",
  domain:   "Dominio",
}

export default function DeploySection({ project }) {
  const { deploy } = project.docs

  const infraEntries = deploy.services
    ? deploy.services.map((s) => ({ label: s.label, value: s.platform, badge: s.type }))
    : Object.entries(INFRA_LABELS).map(([key, label]) => ({ label, value: deploy[key] }))

  const total = deploy.costs.reduce((sum, row) => {
    const num = parseFloat(row.value.replace("$", "")) || 0
    return sum + num
  }, 0)

  return (
    <div className="docs-deploy">

      {/* 1. INFRA GRID */}
      <div>
        <h2 className="docs-overview-section-title">Infraestructura</h2>
        <div className="docs-deploy-grid">
          {infraEntries.map((item) => (
            <div key={item.label} className="docs-deploy-card">
              <span className="docs-deploy-card-label">{item.label}</span>
              <span className="docs-deploy-card-value">{item.value}</span>
              {item.badge && (
                <span className="docs-arch-adr-badge">{item.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. COSTS */}
      <div>
        <h2 className="docs-overview-section-title">Costos mensuales</h2>
        <div className="docs-deploy-costs">
          {deploy.costs.map((row) => (
            <div key={row.service} className="docs-deploy-cost-row">
              <div className="docs-deploy-cost-left">
                <span className="docs-deploy-cost-service">{row.service}</span>
                <span className="docs-deploy-cost-tier">{row.tier}</span>
              </div>
              <span className={`docs-deploy-cost-value${row.value === "$0" ? " docs-deploy-cost-value--free" : ""}`}>
                {row.value}
              </span>
            </div>
          ))}

          <div className="docs-deploy-cost-row docs-deploy-cost-row--total">
            <span className="docs-deploy-cost-service">Total</span>
            <span className="docs-deploy-cost-value">${total}/mes</span>
          </div>
        </div>

        {deploy.notes ? (
          deploy.notes.map((note) => (
            <p key={note} className="docs-deploy-note">{note}</p>
          ))
        ) : (
          <>
            <p className="docs-deploy-note">
              El proyecto completo corre en free tiers excepto Railway Hobby
              ($5/mes para el backend + PostgreSQL).
            </p>
            <p className="docs-deploy-note">
              * Dominio nicoleroldan.com: $40.000 COP/año (~$2 USD/mes prorrateado)
            </p>
          </>
        )}
      </div>

    </div>
  )
}
