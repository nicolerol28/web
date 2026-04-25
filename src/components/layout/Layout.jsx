import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { navLinks } from "../../data/navigation"
import { useActiveSection } from "../../hooks/useActiveSection"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const sectionIds = navLinks.map(l => l.href.slice(1))

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { activeSection, scrolled } = useActiveSection(sectionIds)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollTo = (href) => {
    setSidebarOpen(false)
    if (location.pathname === "/") {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/" + href)
    }
  }

  const isHome = location.pathname === "/"
  const isProject = location.pathname.startsWith("/project/")

  return (
    <>
      <Navbar
        activeSection={isHome ? activeSection : ""}
        scrolled={scrolled}
        onScrollTo={scrollTo}
        onOpenSidebar={() => setSidebarOpen(true)}
        minimal={isProject}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeSection={isHome ? activeSection : ""}
        onScrollTo={scrollTo}
      />
      <main>{children}</main>
      <footer className="nr-footer">
        © 2026 · Hecho por <span>Nicole Roldan</span>
      </footer>
    </>
  )
}
