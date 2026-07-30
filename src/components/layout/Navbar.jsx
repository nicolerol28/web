import { useState, useEffect, useRef } from "react"
import { navLinks } from "../../data/navigation"
import { MenuIcon } from "../icons/index"
import "../DownloadButton/DownloadButton.css"

const CV_OPTIONS = [
  { label: "Español", href: "/CV-NicoleRoldan-ES.pdf" },
  { label: "English", href: "/CV-NicoleRoldan-EN.pdf" },
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
      <button className="download-button" onClick={() => setOpen(o => !o)}>
        <span className="download-button-wrapper">
          <span className="download-button-text">Descargar CV</span>
          <span className="download-button-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </span>
        </span>
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
