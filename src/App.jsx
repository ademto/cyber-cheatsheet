import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToolTag from './components/ToolTag'
import { topTools, allTools } from './tools'
import Home from './pages/Home'
import About from './pages/About'
import Tools from './pages/Tool'
import Tool from './pages/Tool'
import NotFound404 from './pages/NotFound404'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const topToolsElements = topTools.map(tool => (
    <ToolTag key={tool.id} tool={tool} />
  ))

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:slug" element={<Tool />} />
          {/* Place NotFound404 only for unmatched routes, not as a catch-all after dynamic routes */}
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App