import { useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Portfolio from "./pages/Portfolio/index"
import ProjectDetail from "./pages/ProjectDetail/index"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Portfolio /></Layout>} />
        <Route path="/project/:slug" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
