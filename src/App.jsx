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
      <div className="p-4 lg:w-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto mt-10">
        {topToolsElements}
      </div>
      <div className="lg:w-2/3 p-4 mx-auto mt-10">
        <Categories />
      </div>
    </section>
  )
}

export default App
