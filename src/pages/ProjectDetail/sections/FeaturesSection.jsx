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

export default function FeaturesSection({ project }) {
  return (
    <div className="docs-features">

      {/* 1. FEATURES GRID */}
      <div>
        <h2 className="docs-overview-section-title">Features</h2>
        <div className="docs-features-grid">
          {project.docs.features.map((feature) => (
            <div key={feature} className="docs-features-card">
              <span className="docs-ai-feature-dot" />
              <span className="docs-features-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ROLES TABLE */}
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
            {ROLES.map((row) => (
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

      {/* 3. TECHNICAL DEBT */}
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
              <tr key={idx} className="docs-debt-tr">
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
    </div>
  )
}
