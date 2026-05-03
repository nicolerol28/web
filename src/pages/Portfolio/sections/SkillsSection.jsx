import { skills } from "../../../data/skills";
import SectionHeader from "../../../components/ui/SectionHeader";

const categoryTitles = {
  backend: "Backend",
  frontend: "Frontend",
  ai: "AI & Integrations",
  database: "Database",
  devops: "DevOps & Cloud",
  other: "Other",
};

export default function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader badge="Skills" title="Tecnologías" subtitle="Las herramientas en las que me especializo" />

      <div className="space-y-10 mt-10">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="category-label">
              {categoryTitles[category]}
            </h3>
            <div className="skills-grid">
              {items.map((s) => (
                <div key={s.name} className="skill-card">
                  {s.icon && <img src={s.icon} alt={s.name} />}
                  <span className="skill-name">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}