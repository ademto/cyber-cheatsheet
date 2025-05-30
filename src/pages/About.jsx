import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <section>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <h1 className="text-2xl font-bold">About Cyber Cheatsheet</h1>
      <p>This project is designed to provide quick access to cybersecurity tools and resources.</p>
    </section>
  )
}

export default About