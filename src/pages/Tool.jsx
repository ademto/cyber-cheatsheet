import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MarkdownRenderer from '../components/MarkdownRenderer'


function Tools() {
  const params = useParams()

  return (
    <section className='bg-gray-100'>
      <div className="container mx-auto">
        <Navbar />
      </div>
      {/* <h1 className="text-2xl font-bold">Tool: {params.name}</h1>
      <p>Here you can find the cheat sheet for the tool: {params.name}</p> */}
      <MarkdownRenderer tool={params.slug } /> 
    </section>
  )
}

export default Tools