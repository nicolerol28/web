export default function DebtSection({ project }) {
  return (
    <div className="docs-debt">
      <p className="docs-debt-intro">
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
  )
}
