import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToolTag from './components/ToolTag'
import { topTools, allTools } from './tools'
import Home from './pages/Home'
import About from './pages/About'
import Tools from './pages/Tool'
import Tool from './pages/Tool'

function App() {
  const topToolsElements = topTools.map(tool => (
    <ToolTag key={tool.id} tool={tool} />
  ))

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/:slug" element={<Tool />} />
      </Routes>
    </Router>
  )
}

export default App