const TAG_COLORS = {
  backend:  "docs-overview-tag--blue",
  frontend: "docs-overview-tag--sky",
  infra:    "docs-overview-tag--amber",
}

const CATEGORY_LABELS = {
  backend:  "Backend",
  frontend: "Frontend",
  infra:    "Infra",
}

export default function OverviewSection({ project }) {
  const { docs } = project

  return (
    <div className="docs-overview">

      {/* 1. HERO */}
      <div className="docs-overview-hero">
        <h1 className="docs-overview-title">{project.title}</h1>
        <p className="docs-overview-desc">{project.description}</p>
        <div className="docs-overview-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="plink plink-demo">
              Demo →
            </a>
          )}
          {project.backend && (
            <a href={project.backend} target="_blank" rel="noopener noreferrer" className="plink plink-gh">
              Backend
            </a>
          )}
          {project.frontend && (
            <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="plink plink-gh">
              Frontend
            </a>
          )}
        </div>
      </div>

      {/* 2. STATS */}
      <div className="docs-overview-stats">
        {docs.stats.map((stat) => (
          <div key={stat.label} className="docs-overview-stat-card">
            <span className="docs-overview-stat-label">{stat.label}</span>
            <span className="docs-overview-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* 3. TECH TAGS */}
      <div className="docs-overview-tech">
        <h2 className="docs-overview-section-title">Stack</h2>
        <div className="docs-overview-tag-rows">
          {Object.entries(docs.tags).map(([category, tags]) => (
            <div key={category} className="docs-overview-tag-row">
              <span className="docs-overview-tag-category">
                {CATEGORY_LABELS[category]}
              </span>
              <div className="docs-overview-tag-list">
                {tags.map((tag) => (
                  <span key={tag} className={`docs-overview-tag ${TAG_COLORS[category]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SCREENSHOTS */}
      <div className="docs-overview-screenshots">
        <h2 className="docs-overview-section-title">Screenshots</h2>
        <div className="docs-overview-screenshots-placeholder">
          Screenshots próximamente
        </div>
      </div>

    </div>
  )
}
