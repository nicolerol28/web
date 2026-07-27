import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Portfolio from "./pages/Portfolio/index"
import ProjectDetail from "./pages/ProjectDetail/index"
import Aurora from "./components/Aurora/Aurora"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="global-aurora-bg">
        <Aurora
          colorStops={["#3B82F6", "#6366F1", "#22D3EE"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Layout><Portfolio /></Layout>} />
          <Route path="/project/:slug" element={<Layout><ProjectDetail /></Layout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
