import React, { useState, useEffect } from 'react';
import markdownParser from '../utils/markdownParser';
import ComingSoon from './ComingSoon';

const MarkdownRenderer = ({ tool }) => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/${tool}.md`);

        // Check if the response is HTML, which means the file was not found
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('text/html')) {
          setError(null); // No error, just file missing
          setMarkdownContent(''); // Clear content
          return;
        }

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Something went wrong while fetching the file.`);
        }

        const text = await response.text();

        // Check if the file content is empty or invalid
        if (!text || text.trim() === '') {
          setError(null); // No error, just file empty
          setMarkdownContent(''); // Clear content
          return;
        }

        setMarkdownContent(markdownParser.render(text)); // Parse and render Markdown content
        setError(null); // Clear any previous error if the fetch is successful
      } catch (err) {
        setError(err.message); // Update error state if something goes wrong
        setMarkdownContent(''); // Clear content
        console.error('Error fetching Markdown file:', err); // Log error
      } finally {
        setLoading(false); // Set loading to false once done fetching
      }
    };

    fetchMarkdown();
  }, [tool]); // Re-run when the `tool` prop changes

  return (
    <section className="min-h-screen">
      <div className="">
        {loading && <div>Loading...</div>} {/* Show loading indicator */}
        {error ? (
          <div style={{ color: 'red' }}>{error}</div> // Show error message if fetching fails
        ) : markdownContent === '' ? (
          <ComingSoon /> // Show ComingSoon component if file is missing or empty
        ) : (
          <div
            id="mdLayout"
            className="mdLayout prose max-w-full mx-auto"
            dangerouslySetInnerHTML={{ __html: markdownContent }} // Render parsed markdown
          />
        )}
      </div>
    </section>
  );
};

export default MarkdownRenderer;
