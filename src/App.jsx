import { useState } from 'react'
import Header from './components/Header'
import ToolTag from './components/ToolTag'
import { topTools, allTools } from './tools'
import Categories from './components/Categories'

function App() {

  const topToolsElements = topTools.map(tool => (
    <ToolTag tool={tool} />
  ))

  return (
    <section>
      <Header />
      <div className="container grid grid-cols-5 gap-10 mx-auto mt-10">
        {topToolsElements}
      </div>
      <div className="container mx-auto mt-10">
        <Categories />
      </div>
    </section>
  )
}

export default App
