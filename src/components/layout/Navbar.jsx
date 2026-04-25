import { useState, useEffect, useRef } from "react"
import { navLinks } from "../../data/navigation"
import { MenuIcon } from "../icons/index"

const CV_OPTIONS = [
  { label: "📄 Español", href: "/CV-NicoleRoldan-ES.pdf" },
  { label: "📄 English", href: "/CV-NicoleRoldan-EN.pdf" },
]

function CvDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  return (
    <div ref={ref} className="cv-dropdown">
      <button className="nr-btn-cv" onClick={() => setOpen(o => !o)}>
        Descargar CV ▾
      </button>
      {open && (
        <div className="cv-dropdown-menu">
          {CV_OPTIONS.map(opt => (
            <a key={opt.href} href={opt.href} download onClick={() => setOpen(false)} className="cv-dropdown-item">
              {opt.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar({ activeSection, scrolled, onScrollTo, onOpenSidebar, minimal = false }) {
  return (
    <nav className={"nr-nav" + (scrolled ? " scrolled" : "")}>
      <div className={"nr-nav-inner" + (minimal ? " nr-nav-inner--minimal" : "")}>
        <button className="nr-logo" onClick={() => onScrollTo("#hero")}>
          &lt;<span className="accent">NR</span>/&gt;
        </button>

        {!minimal && (
          <ul className="nr-nav-links">
            {navLinks.map(l => (
              <li key={l.href}>
                <button
                  className={activeSection === l.href.slice(1) ? "active" : ""}
                  onClick={() => onScrollTo(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="nr-nav-right">
          <div className="desktop">
            <CvDropdown />
          </div>
          {!minimal && (
            <button className="nr-hamburger" onClick={onOpenSidebar}>
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
