import { useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { projects } from "../../data/projects"
import DocsSidebar from "./components/DocsSidebar"
import OverviewSection from "./sections/OverviewSection"
import ArchitectureSection from "./sections/ArchitectureSection"
import AISection from "./sections/AISection"
import FeaturesSection from "./sections/FeaturesSection"
import TestingSection from "./sections/TestingSection"
import DebtSection from "./sections/DebtSection"
import DeploySection from "./sections/DeploySection"

const SECTIONS = {
  overview:     OverviewSection,
  architecture: ArchitectureSection,
  ai:           AISection,
  features:     FeaturesSection,
  testing:      TestingSection,
  debt:         DebtSection,
  deploy:       DeploySection,
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const [activeSection, setActiveSection] = useState("overview")

  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/" replace />

  const ActiveSection = SECTIONS[activeSection] ?? OverviewSection

  return (
    <div className="docs-layout">
      <div className="docs-layout-sidebar">
        <DocsSidebar
          activeSection={activeSection}
          onNavigate={setActiveSection}
          project={project}
        />
      </div>

      <main className="docs-layout-content">
        <ActiveSection project={project} />
      </main>
    </div>
  )
}
