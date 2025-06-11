import React from 'react'

function About() {
  return (
    <section>
      <main className="container mx-auto flex flex-col gap-10 mt-10">
        <h1 className="text-2xl font-bold">About Cyber Cheatsheet</h1>

        <div>
          <h2 className="text-xl font-bold">What is Cyber Cheatsheet?</h2>
          <p className="pt-2">
            Cyber Cheatsheet is a free, open-source collection of categorized cybersecurity tools, commands, and cheat sheets — built to help cybersecurity practitioners quickly access important resources without wasting time searching.
          </p>
          <div className="pt-2">Whether you're a:</div>
          <ul className="list-disc pl-5 pt-2">
            <li>Penetration Tester</li>
            <li>Blue Teamer / SOC Analyst</li>
            <li>Cloud Security Engineer</li>
            <li>Forensics Expert</li>
            <li>Student or Learner</li>
          </ul>
          <p className="pt-2">...Cyber Cheatsheet gives you a centralized place to discover, explore, and use essential tools and techniques.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Our Mission</h2>
          <p className="pt-2">
            Our mission is to simplify the complex world of cybersecurity by offering concise and practical cheatsheets for a wide range of cybersecurity tools. We strive to be the go-to resource for professionals seeking to enhance their skills and stay up-to-date with the latest cybersecurity trends.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>
          <p className="pt-2">
            We value your feedback and suggestions. If you have any questions, comments, or ideas for new cheatsheets, please don't hesitate to reach out to us at contact@cybersecuritycheatsheets.com.
          </p>
        </div>
      </main>
    </section>
  )
}

export default About
