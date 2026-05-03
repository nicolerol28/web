import { projects } from "../../../data/projects"
import { GitHubIcon, ExternalIcon } from "../../../components/icons/index"
import SectionHeader from "../../../components/ui/SectionHeader"

export default function ProjectsSection({ onNavigate }) {
  return (
    <section id="projects">
      <SectionHeader badge="Proyectos" title="Lo que he construido" subtitle="Proyectos personales destacados de mi portafolio" />
      <div className="projects-grid">
        {projects.map(p => (
          <div
            key={p.id}
            className="project-card"
            onClick={() => onNavigate(p.slug)}
            style={{ cursor: "pointer" }}
          >
            <div className="project-card-line" />
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tags">
              {p.tags.map(t => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="plink plink-demo" onClick={e => e.stopPropagation()}>
                  <ExternalIcon /> Demo
                </a>
              )}
              {p.repos ? (
                p.repos.map(r => (
                  <a key={r.label} href={r.url} target="_blank" rel="noreferrer" className="plink plink-gh" onClick={e => e.stopPropagation()}>
                    <GitHubIcon size={13} /> {r.label}
                  </a>
                ))
              ) : (
                <>
                  {p.backend && (
                    <a href={p.backend} target="_blank" rel="noreferrer" className="plink plink-gh" onClick={e => e.stopPropagation()}>
                      <GitHubIcon size={13} /> Backend
                    </a>
                  )}
                  {p.frontend && (
                    <a href={p.frontend} target="_blank" rel="noreferrer" className="plink plink-gh" onClick={e => e.stopPropagation()}>
                      <GitHubIcon size={13} /> Frontend
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
