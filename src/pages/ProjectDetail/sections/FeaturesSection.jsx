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
              <span className="docs-features-check">✓</span>
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

    </div>
  )
}
