export default function Button({ variant = "primary", onClick, href, children, download, target, rel, className }) {
  const base = variant === "ghost" ? "btn-ghost" : "nr-btn-cv"
  const finalClass = className ? `${base} ${className}` : base

  if (href) {
    const safeRel = target === "_blank" ? (rel ?? "noopener noreferrer") : rel
    return (
      <a href={href} className={finalClass} download={download} target={target} rel={safeRel}>
        {children}
      </a>
    )
  }

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  )
}
