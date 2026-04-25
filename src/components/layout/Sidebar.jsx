import { useState, useEffect, useRef } from "react"
import { navLinks } from "../../data/navigation"
import { CloseIcon } from "../icons/index"

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
    <div ref={ref}>
      <button className="nr-btn-cv nr-btn-cv--full" onClick={() => setOpen(o => !o)}>
        Descargar CV ▾
      </button>
      {open && (
        <div className="cv-dropdown-menu cv-dropdown-menu--below">
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

export default function Sidebar({ isOpen, onClose, activeSection, onScrollTo }) {
  return (
    <>
      <div
        className={"nr-overlay" + (isOpen ? " open" : "")}
        onClick={onClose}
      />
      <div className={"nr-sidebar" + (isOpen ? " open" : "")}>
        <div className="nr-sidebar-head">
          <button className="nr-logo" onClick={() => onScrollTo("#hero")}>
            &lt;<span className="accent">NR</span>/&gt;
          </button>
          <button className="nr-sidebar-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <ul className="nr-sidebar-links">
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
        <div className="nr-sidebar-foot">
          <CvDropdown />
        </div>
      </div>
    </>
  )
}
