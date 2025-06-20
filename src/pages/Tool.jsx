import React from 'react'
import { useParams, Link } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

function Tools() {
  const params = useParams()

  if (!params.slug) {
    return (
      <div className="text-center mt-20">
        <p className="text-xl text-gray-700">Tool not found.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 underline">Go back home</Link>
      </div>
    )
  }

  return (
    <section className="bg-[#f8f9fa] px-4">
      <div className="container mx-auto pb-10">
        <Link
          to=".."
          className="inline-block shadow-md px-6 py-2 bg-white rounded-sm mt-10 cursor-pointer"
        >
          Back
        </Link>
        <MarkdownRenderer tool={params.slug} />
      </div>
    </section>
  )
}

export default Tools
