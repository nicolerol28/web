import { experiences } from "../../../data/experiences"
import SectionHeader from "../../../components/ui/SectionHeader"

export default function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader badge="Experiencia" title="Trayectoria" subtitle="Proyectos y formación académica" />
      <div className="exp-list">
        {experiences.map(e => (
          <div key={e.org} className="exp-card">
            <span className="exp-org" style={{ color: e.orgColor }}>{e.org}</span>
            <div>
              <div className="exp-head">
                <div>
                  <p className="exp-title">{e.title}</p>
                  <p className="exp-subtitle">{e.subtitle}</p>
                </div>
                <span className="exp-period">{e.period}</span>
              </div>
              <ul className="exp-bullets">
                {e.bullets.map((b, i) => (
                  <li key={i}><span className="exp-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
