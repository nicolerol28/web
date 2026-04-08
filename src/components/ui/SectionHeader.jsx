import Badge from "./Badge"

export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="nr-section-head">
      {badge && <Badge label={badge} />}
      {title && <h2 className="nr-section-title">{title}</h2>}
      {subtitle && <p className="nr-section-sub">{subtitle}</p>}
    </div>
  )
}
