import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MarkdownRenderer from '../components/MarkdownRenderer'


function Tools() {
  const params = useParams()

  return (
    <section className='bg-[#f8f9fa] px-4'>
      <div className="container mx-auto pb-10">
        <Link to=".." className='inline-block shadow-md px-6 py-2 bg-white rounded-sm mt-10 cursor-pointer'>Back</Link>
        <MarkdownRenderer tool={params.slug } /> 
      </div>
    </section>
  )
}

export default Tools