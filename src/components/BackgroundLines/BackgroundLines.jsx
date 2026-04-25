import { useState, useEffect } from "react"
import './BackgroundLines.css'

const MOBILE_BREAKPOINT = 768

function DesktopLines() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g className="anim-flow-left">
        <path d="M -30,80 C 80,350 300,200 120,580 C 60,750 -20,800 30,900"
          fill="none" stroke="rgba(77,159,255,0.11)" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M 40,0 C 180,280 350,160 200,520 C 130,700 20,820 80,900"
          fill="none" stroke="rgba(100,170,255,0.07)" strokeWidth="0.9" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-right">
        <path d="M 1410,60 C 1260,280 1050,180 1200,500 C 1310,720 1450,780 1400,900"
          fill="none" stroke="rgba(90,165,255,0.12)" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M 1360,0 C 1180,240 980,200 1140,480 C 1260,680 1430,760 1380,880"
          fill="none" stroke="rgba(77,159,255,0.07)" strokeWidth="0.9" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-arc">
        <path d="M 0,220 C 260,80 180,420 400,380 C 580,345 520,600 300,820 C 200,900 100,880 0,860"
          fill="none" stroke="rgba(110,175,255,0.10)" strokeWidth="1.1" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-sweep">
        <path d="M 1440,680 C 1180,820 1260,480 1040,520 C 860,555 920,300 1140,80 C 1240,0 1380,20 1440,40"
          fill="none" stroke="rgba(100,170,255,0.10)" strokeWidth="1.1" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-corner">
        <path d="M 1200,0 C 1380,60 1440,180 1360,320 C 1300,430 1180,400 1260,560 C 1330,680 1440,700 1420,820"
          fill="none" stroke="rgba(120,180,255,0.09)" strokeWidth="1.0" strokeLinecap="round"/>
        <path d="M 240,900 C 60,840 0,720 80,580 C 140,470 260,500 180,340 C 110,220 0,200 20,80"
          fill="none" stroke="rgba(90,165,255,0.08)" strokeWidth="1.0" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

function MobileLines() {
  return (
    <svg viewBox="0 0 390 844" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <g className="anim-flow-left">
        <path d="M -10,60 C 60,180 120,120 50,320 C 10,450 -10,520 20,680 C 40,780 10,820 0,844"
          fill="none" stroke="rgba(77,159,255,0.09)" strokeWidth="1.0" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-right">
        <path d="M 400,80 C 330,200 270,160 340,360 C 380,490 410,560 370,720 C 350,800 390,830 380,844"
          fill="none" stroke="rgba(90,165,255,0.09)" strokeWidth="1.0" strokeLinecap="round"/>
      </g>
      <g className="anim-flow-corner">
        <path d="M 280,0 C 370,40 400,120 360,220 C 330,300 270,280 310,400"
          fill="none" stroke="rgba(120,180,255,0.07)" strokeWidth="0.9" strokeLinecap="round"/>
      </g>
    </svg>
  )
}

export default function BackgroundLines() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT)

  useEffect(() => {
    const check = () => setIsMobile(prev => {
      const next = window.innerWidth < MOBILE_BREAKPOINT
      return prev === next ? prev : next
    })
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <div className="nr-bg-lines" aria-hidden="true">
      {isMobile ? <MobileLines /> : <DesktopLines />}
    </div>
  )
}
