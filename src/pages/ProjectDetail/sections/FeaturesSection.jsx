const ROLES = [
  {
    role: "ADMIN",
    perms: "Acceso completo: usuarios, configuración y todos los módulos.",
  },
  {
    role: "OPERATOR",
    perms: "Productos, inventario, movimientos, proveedores y almacenes. Sin acceso a configuración ni gestión de usuarios.",
  },
]

function groupFeatures(features) {
  const groups    = new Map()
  const ungrouped = []
  for (const f of features) {
    const sep = f.indexOf(" — ") // ' — ' (em dash)
    if (sep !== -1) {
      const prefix = f.slice(0, sep)
      const text   = f.slice(sep + 3) // ' — '.length === 3
      if (!groups.has(prefix)) groups.set(prefix, [])
      groups.get(prefix).push(text)
    } else {
      ungrouped.push(f)
    }
  }
  return { groups, ungrouped }
}

function FeatureCard({ text }) {
  return (
    <div className="docs-features-card">
      <span className="docs-ai-feature-dot" />
      <span className="docs-features-text">{text}</span>
    </div>
  )
}

export default function FeaturesSection({ project }) {
  const roles = project.docs.roles ?? ROLES
  const shouldGroup = project.docs.architecture?.type === "ecosystem"
  const { groups, ungrouped } = shouldGroup
    ? groupFeatures(project.docs.features)
    : { groups: new Map(), ungrouped: project.docs.features }
  const hasGroups = groups.size > 0

  return (
    <div className="docs-features">

      {/* 1. FEATURES GRID */}
      <div>
        <h2 className="docs-overview-section-title">Features</h2>

        {hasGroups ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Ungrouped items first, if any */}
            {ungrouped.length > 0 && (
              <div className="docs-features-grid">
                {ungrouped.map((f) => <FeatureCard key={f} text={f} />)}
              </div>
            )}
            {/* One block per prefix */}
            {[...groups.entries()].map(([prefix, items]) => (
              <div key={prefix}>
                <span
                  className="docs-arch-adr-col-label"
                  style={{ display: "inline-block", marginBottom: "0.6rem" }}
                >
                  {prefix}
                </span>
                <div className="docs-features-grid">
                  {items.map((text) => <FeatureCard key={text} text={text} />)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="docs-features-grid">
            {project.docs.features.map((f) => <FeatureCard key={f} text={f} />)}
          </div>
        )}
      </div>

      {/* 2. ROLES TABLE — solo si el proyecto define roles */}
      {roles.length > 0 && (
        <div>
          <h2 className="docs-overview-section-title">Roles y permisos</h2>
          <table className="docs-features-table">
            <thead>
              <tr>
                <th className="docs-features-th">Rol</th>
                <th className="docs-features-th">Permisos</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((row) => (
                <tr key={row.role} className="docs-features-tr">
                  <td className="docs-features-td docs-features-td--role">
                    <span className="docs-features-role-badge">{row.role}</span>
                  </td>
                  <td className="docs-features-td">{row.perms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 3. TECHNICAL DEBT — solo si hay items */}
      {project.docs.debt?.length > 0 && (
        <div className="docs-debt">
          <h2 className="docs-overview-section-title">Deuda técnica</h2>

          <p className="docs-overview-desc">
            Las siguientes decisiones fueron tomadas conscientemente durante el desarrollo
            y están documentadas aquí para demostrar conciencia de los límites
            arquitectónicos, no como descuidos.
          </p>

          <table className="docs-debt-table">
            <thead>
              <tr>
                <th className="docs-debt-th">Área</th>
                <th className="docs-debt-th">Problema</th>
                <th className="docs-debt-th">Severidad</th>
              </tr>
            </thead>
            <tbody>
              {project.docs.debt.map((item, idx) => (
                <tr key={`${item.area}-${idx}`} className="docs-debt-tr">
                  <td className="docs-debt-td docs-debt-td--area">
                    <span className="docs-debt-area-badge">{item.area}</span>
                  </td>
                  <td className="docs-debt-td">{item.issue}</td>
                  <td className="docs-debt-td docs-debt-td--severity">
                    <span className={`docs-debt-severity docs-debt-severity--${item.severity}`}>
                      {item.severity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
