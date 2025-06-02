import React, { useState, useEffect } from 'react'
import markdownParser from '../utils/markdownParser'

const MarkdownRenderer = ({ tool }) => {
  const [markdownContent, setMarkdownContent] = useState('')
  const [error, setError] = useState(null);
  // console.log('Rendering Markdown for tool:', tool)

  // useEffect(() => {
  //   // Fetch the Markdown file
  //   fetch(`/src/posts/${tool}.md`)
  //     .then((response) => response.text())
  //     .then((text) => setMarkdownContent(markdownParser.render(text))) // Parse Markdown with Markdown-it
  //     .catch((error) => console.error('Error fetching Markdown file:', error))
  // }, [])

  // useEffect(() => {
  //   // Fetch the Markdown file
  //   fetch(`/src/posts/${tool}.md`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Markdown file not found');
  //       }
  //       return response.text();
  //     })
  //     .then((text) => {
  //       setMarkdownContent(markdownParser.render(text)); // Parse Markdown with Markdown-it
  //       setError(null); // Clear any previous errors
  //     })
  //     .catch((error) => {
  //       setError(error.message); // Set error message
  //       setMarkdownContent(''); // Clear any existing content
  //       console.error('Error fetching Markdown file:', error);
  //     });
  // }, [tool]); // Re-run when `tool` changes

    

  return (
    <section className="min-h-screen">
      <div className="container mx-auto py-10">
        <div id='mdLayout'
          className="mdLayout prose max-w-full mx-auto p-4"
          dangerouslySetInnerHTML={{ __html: markdownContent }} // Render HTML
        ></div>
      </div>
    </section>
  )
}

export default MarkdownRenderer