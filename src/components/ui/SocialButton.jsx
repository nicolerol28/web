export default function SocialButton({ href, icon, title, target = "_blank" }) {
  return (
    <a
      href={href}
      className="social-btn"
      title={title}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {icon}
    </a>
  )
}
