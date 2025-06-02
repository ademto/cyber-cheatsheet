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

  useEffect(() => {
    // Create an async function to fetch the markdown content
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/src/posts/${tool}.md`);
        if (!response.ok) {
          throw new Error('Markdown file not found');
        }
        const text = await response.text();
        setMarkdownContent(markdownParser.render(text)); // Parse and render Markdown content
        setError(null); // Clear any previous error if the fetch is successful
      } catch (err) {
        setError(err.message); // Update error state if something goes wrong
        setMarkdownContent(''); // Clear content
        console.error('Error fetching Markdown file:', err); // Log error
      }
    };

    fetchMarkdown();
  }, [tool]);

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