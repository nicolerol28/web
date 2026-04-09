export default function AdrCard({ adr, isOpen, onToggle }) {
  return (
    <div className={`docs-arch-adr${isOpen ? " docs-arch-adr--open" : ""}`}>
      <button className="docs-arch-adr-header" onClick={onToggle}>
        <div className="docs-arch-adr-title-row">
          <span className="docs-arch-adr-title">{adr.title}</span>
          <span className="docs-arch-adr-badge">{adr.badge}</span>
        </div>
        <span className="docs-arch-adr-chevron">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="docs-arch-adr-body">
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Contexto</span>
            <p>{adr.context}</p>
          </div>
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Decisión</span>
            <p>{adr.decision}</p>
          </div>
          <div className="docs-arch-adr-col">
            <span className="docs-arch-adr-col-label">Trade-offs</span>
            <p>{adr.tradeoffs}</p>
          </div>
        </div>
      )}
    </div>
  )
}
