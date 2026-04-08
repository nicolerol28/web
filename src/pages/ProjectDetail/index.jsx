import { useParams, useNavigate, Navigate } from "react-router-dom"
import { projects } from "../../data/projects"
import { GitHubIcon, ExternalIcon } from "../../components/icons/index"

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <div className="nr-page project-detail">
      <button className="plink plink-gh project-detail-back" onClick={() => navigate("/")}>
        ← Volver
      </button>

      <h1 className="nr-section-title project-detail-title">{project.title}</h1>

      <div className="project-tags project-detail-tags">
        {project.tags.map(t => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>

      <div className="project-links project-detail-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="plink plink-demo">
            <ExternalIcon /> Demo
          </a>
        )}
        {project.backend && (
          <a href={project.backend} target="_blank" rel="noreferrer" className="plink plink-gh">
            <GitHubIcon size={13} /> Backend
          </a>
        )}
        {project.frontend && (
          <a href={project.frontend} target="_blank" rel="noreferrer" className="plink plink-gh">
            <GitHubIcon size={13} /> Frontend
          </a>
        )}
      </div>

      <div className="project-detail-wip">
        Documentación en construcción 🚧
      </div>
    </div>
  )
}
