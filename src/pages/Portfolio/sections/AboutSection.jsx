import SectionHeader from "../../../components/ui/SectionHeader"
import TiltedCard from "../../../components/TiltedCard/TiltedCard"

const facts = [
  "Tec. Desarrollo de Software – Univalle",
  "Inglés B1 · Español nativo",
]

export default function AboutSection() {
  return (
    <section id="about">
      <SectionHeader badge="Sobre mí" title="¿Quién soy?" />
      <div className="about-grid">
        <div className="about-photo">
          <TiltedCard
            imageSrc="/images/sobremi.jpeg"
            altText="Nicole Roldan"
            containerHeight="380px"
            containerWidth="300px"
            imageHeight="380px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
          />
        </div>
        <div className="about-body">
          <h3>¿Curiosidad sobre mí? — aquí tienes un resumen.</h3>
          <p>
            Soy desarrolladora Full Stack con enfoque en AI Engineering, especializada 
            en Java / Spring Boot, React y TypeScript. Me apasiona construir productos 
            digitales completos — desde la arquitectura backend hasta la interfaz que ve 
            el usuario, incluyendo los agentes de IA que los conectan.
          </p>
          <p>
            Trabajo con frameworks de agentes (Mastra), modelos de lenguaje (Gemini), RAG 
            con pgvector, y protocolos de comunicación entre agentes como MCP y A2A. Me 
            interesa especialmente diseñar sistemas donde los LLMs tengan herramientas, memoria 
            y contexto real — no solo responder preguntas, sino ejecutar acciones.
          </p>
          <p>
            Tengo experiencia en Clean Architecture, CQRS, autenticación JWT, almacenamiento 
            en la nube con Cloudflare R2, streaming en tiempo real, evaluaciones automatizadas 
            de agentes, y despliegue en producción con Ubuntu Server 22.04, Docker y Vercel. Actualmente curso
            Tecnología en Desarrollo de Software en la Universidad del Valle y estoy disponible 
            para posiciones junior o proyectos freelance.
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
