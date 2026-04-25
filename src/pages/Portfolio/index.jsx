import { useNavigate } from "react-router-dom"
import BackgroundLines from "../../components/BackgroundLines/BackgroundLines"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import SkillsSection from "./sections/SkillsSection"
import ProjectsSection from "./sections/ProjectsSection"
import ExperienceSection from "./sections/ExperienceSection"
import ContactSection from "./sections/ContactSection"

export default function Portfolio() {
  const navigate = useNavigate()

  const onNavigate = (slug) => navigate(`/project/${slug}`)
  const onScrollTo = (href) => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
    <BackgroundLines />
    <div className="nr-page">
      <HeroSection onScrollTo={onScrollTo} />
      <div className="nr-divider" />
      <AboutSection />
      <div className="nr-divider" />
      <SkillsSection />
      <div className="nr-divider" />
      <ProjectsSection onNavigate={onNavigate} />
      <div className="nr-divider" />
      <ExperienceSection />
      <div className="nr-divider" />
      <ContactSection />
    </div>
    </>
  )
}
