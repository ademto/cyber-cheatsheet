import React, { useState, useEffect } from 'react'
import markdownParser from '../utils/markdownParser'

const MarkdownRenderer = ({ tool }) => {
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    // Fetch the Markdown file
    fetch(`/src/posts/${tool}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(markdownParser.render(text))) // Parse Markdown with Markdown-it
      .catch((error) => console.error('Error fetching Markdown file:', error))
  }, [])

  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-10">
        <div
          className="prose max-w-full mx-auto p-4"
          dangerouslySetInnerHTML={{ __html: markdownContent }} // Render HTML
        ></div>
      </div>
    </section>
  )
}

export default MarkdownRenderer