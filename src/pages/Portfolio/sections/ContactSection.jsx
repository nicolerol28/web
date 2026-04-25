import { useState } from "react"
import { GitHubIcon, LinkedInIcon } from "../../../components/icons/index"
import SocialButton from "../../../components/ui/SocialButton"
import contacts from "../../../data/contacts"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(contacts.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-top-line" />
        <h2 className="contact-title">¿Tienes un proyecto en mente?</h2>
        <p className="contact-sub">No dudes en escribirme 😊</p>
        <div className="contact-items">
          <div className="contact-row">
            <div className="contact-icon">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href={`mailto:${contacts.email}`} className="contact-text contact-link">{contacts.email}</a>
            <button className="copy-btn" onClick={handleCopy} title={copied ? "¡Copiado!" : "Copiar"}>
              {copied ? (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
          <div className="contact-row">
            <div className="contact-icon">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="contact-text">{contacts.phone}</span>
          </div>
        </div>
        <div className="contact-socials">
          <SocialButton href={contacts.github} icon={<GitHubIcon />} />
          <SocialButton href={contacts.linkedin} icon={<LinkedInIcon />} />
        </div>
      </div>
    </section>
  )
}
