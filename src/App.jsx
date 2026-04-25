import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/layout/Layout";
import Portfolio from "./pages/Portfolio/index"
import ProjectDetail from "./pages/ProjectDetail/index"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Portfolio /></Layout>} />
        <Route path="/project/:slug" element={<Layout><ProjectDetail /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
