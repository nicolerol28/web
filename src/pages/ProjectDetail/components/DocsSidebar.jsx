import { useNavigate } from "react-router-dom"

const DEFAULT_SECTIONS = [
  { id: "overview",     label: "Overview" },
  { id: "architecture", label: "Arquitectura" },
  { id: "ai",          label: "IA & Asistente" },
  { id: "features",    label: "Features" },
  { id: "testing",     label: "Testing" },
  { id: "deploy",      label: "Deploy & Costos" },
]

export default function DocsSidebar({ activeSection, onNavigate, project }) {
  const navigate = useNavigate()
  const sections = project.docs?.sections ?? DEFAULT_SECTIONS

  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-header">
        <span className="docs-sidebar-logo">{project.title}</span>
      </div>

      <nav className="docs-sidebar-nav">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`docs-sidebar-item${activeSection === section.id ? " docs-sidebar-item--active" : ""}`}
            onClick={() => onNavigate(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div className="docs-sidebar-footer">
        <button
          className="docs-sidebar-back"
          onClick={() => navigate("/")}
        >
          ← Volver al portafolio
        </button>
      </div>
    </aside>
  )
}
