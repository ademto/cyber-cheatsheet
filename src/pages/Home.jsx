import React from 'react'
import { nanoid } from 'nanoid'
import Header from '../components/Header'
import ToolTag from '../components/ToolTag'
import Categories from '../components/Categories'
import { topTools, allTools } from '../tools'

function Home() {
    const topToolsElements = topTools.map(tool => (
        <ToolTag key={nanoid()} tool={tool} />
    ))

    return (
        <section>
            <Header />
            <div className="p-4 lg:w-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mx-auto mt-10">
                {topToolsElements}
            </div>
            <div className="lg:w-2/3 p-4 mx-auto mt-10">
                <Categories />
            </div>
            <div>
                
            </div>
        </section>
    )
}

export default Home