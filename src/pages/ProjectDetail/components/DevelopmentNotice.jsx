export default function DevelopmentNotice({ text }) {
  return (
    <div className="docs-dev-notice">
      <span className="docs-dev-notice-badge">En desarrollo</span>
      <p className="docs-dev-notice-text">{text}</p>
    </div>
  )
}
