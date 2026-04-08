import { skills } from "../../../data/skills"
import SectionHeader from "../../../components/ui/SectionHeader"

export default function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader badge="Skills" title="Tecnologías" subtitle="Las herramientas en las que me especializo" />
      <div className="skills-grid">
        {skills.map(s => (
          <div key={s.name} className="skill-card">
            <img src={s.icon} alt={s.name} />
            <span className="skill-name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
