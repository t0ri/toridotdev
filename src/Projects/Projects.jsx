import React from 'react'

import ProjectCard from './ProjectCard'

import './projects.scss'

// Projects Class Component
// Returns Projects Page Content
// Renders when route is `/projects`
export default function Projects({ projects }) {
  // eslint-disable-next-line consistent-return
  const showProjects = () => {
    // Destructuring State
    // const { projects } = props

    // If error, return error message
    if (!projects) {
      return (
        <h1>
          can&apos;t fetch my projects right now
          <span role="img" aria-label="sad face"> 😔 </span>
          try again?
        </h1>
      )
    }

    // If `projects` array exists
    if (projects && projects.length) {
      // Map each index into ProjectCards
      // eslint-disable-next-line arrow-body-style
      return projects.map((project, index) => {
        return <ProjectCard project={project} key={`${project.title}-${index}`} />
      })
    }
  }

  return (
    <section id="Project">
      <div id="header">
        <h1>
          I&apos;ve worked on some cool projects
          <span role="img" aria-label="laptop, coffee cup"> 💻 </span>
        </h1>
      </div>

      <div id="cards">
        {/* Map Projects as cards */}
        {showProjects()}
      </div>
    </section>
  )
}
