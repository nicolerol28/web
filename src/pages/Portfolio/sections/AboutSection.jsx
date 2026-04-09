import SectionHeader from "../../../components/ui/SectionHeader"

const facts = [
  "Tec. Desarrollo de Software – Univalle",
  "Inglés B1 · Español nativo",
  "Bachiller Técnico Comercial",
  "Nacida el 4 de abril de 2005",
]

export default function AboutSection() {
  return (
    <section id="about">
      <SectionHeader badge="Sobre mí" title="¿Quién soy?" />
      <div className="about-grid">
        <div className="about-photo">
          <img
            src="/images/sobremi.jpeg"
            alt="Nicole Roldan"
            className="about-photo-img"

          />
        </div>
        <div className="about-body">
          <h3>¿Curiosidad sobre mí? — aquí tienes un resumen.</h3>
          <p>
            Soy desarrolladora Full Stack enfocada en Java / Spring Boot y React, 
            apasionada por construir productos digitales completos — desde el diseño 
            de la arquitectura backend hasta la interfaz que ve el usuario.
          </p>
          <p>
            Me interesa especialmente la integración de IA en aplicaciones reales.
            En uno de mis proyectos implementé IA no como add-on sino como parte del
            núcleo del sistema — Gemini 2.5 Flash con contexto dinámico de inventario,
            protección contra prompt injection y rate limiting. Actualmente profundizo
            en RAG y MCP para construir sistemas donde los LLMs tengan herramientas,
            memoria y contexto real.
          </p>
          <p>
            Tengo experiencia en Clean Architecture, CQRS, autenticación JWT + Google OAuth, 
            almacenamiento en la nube con Cloudflare R2, y despliegue en Railway y Vercel. 
            Actualmente curso Tecnología en Desarrollo de Software en la Universidad del Valle 
            y estoy disponible para posiciones junior o proyectos freelance.
          </p>
          <div className="about-facts">
            {facts.map((f, i) => (
              <div key={i} className="about-fact">
                <span className="fact-dot" />{f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
