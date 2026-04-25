import { GitHubIcon, LinkedInIcon } from "../../../components/icons/index"
import SocialButton from "../../../components/ui/SocialButton"
import contacts from "../../../data/contacts"

export default function HeroSection({ onScrollTo }) {
  return (
    <section id="hero">
      <div className="hero-grid">
        <div>
          <p className="hero-greeting">
            <span className="hero-line" />
            Hola, bienvenido
          </p>
          <h1 className="hero-name">Nicole<br /><span className="gradient">Roldan</span></h1>
          <p className="hero-role">Full Stack Developer · AI Integration</p>
          <p className="hero-desc">
            Desarrolladora Full Stack con experiencia en Java / Spring Boot y React.
            Construyo sistemas completos, desde APIs con Clean Architecture hasta
            interfaces modernas. Integro IA para agregar inteligencia real a los productos.
          </p>
          <div className="hero-meta">
            <div className="hero-meta-row">
              <svg width="13" height="13" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Cali, Valle del Cauca
            </div>
            <div className="hero-meta-row">
              <span className="pulse-dot" />
              Disponible para nuevos proyectos
            </div>
          </div>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => onScrollTo("#projects")}>Ver proyectos</button>
            <button className="btn-ghost" onClick={() => onScrollTo("#contact")}>Contáctame</button>
          </div>
          <div className="hero-socials">
            <SocialButton href={contacts.github} icon={<GitHubIcon />} />
            <SocialButton href={contacts.linkedin} icon={<LinkedInIcon />} />
          </div>
        </div>
        <div className="hero-avatar">
          <img src="/images/retrato.jpeg" alt="Nicole Roldan" className="avatar-photo" />
        </div>
      </div>
    </section>
  )
}
