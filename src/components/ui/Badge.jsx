export default function Badge({ label }) {
  return (
    <span className="nr-badge">
      <span className="nr-badge-dot" />
      {label}
    </span>
  )
}
