import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MarkdownRenderer from '../components/MarkdownRenderer'


function Tools() {
  const params = useParams()

  return (
    <section className='bg-[#f8f9fa]'>
        <Navbar />
      {/* <h1 className="text-2xl font-bold">Tool: {params.name}</h1>
      <p>Here you can find the cheat sheet for the tool: {params.name}</p> */}
      <div className="container mx-auto">
        <Link to=".." className='inline-block shadow-md px-6 py-2 bg-white rounded-sm mt-10 cursor-pointer'>Back</Link>
        <MarkdownRenderer tool={params.slug } /> 
      </div>
    </section>
  )
}

export default Tools