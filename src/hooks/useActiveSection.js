import { useState, useEffect } from "react"

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [sectionIds])

  return { activeSection, scrolled }
}
