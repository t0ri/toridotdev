import React, { Component } from 'react'

import ProjectCard from './ProjectCard'


// Projects Class Component
// Returns Projects Page Content
// Renders when route is `/projects`
export default class Projects extends Component {
  constructor(props) {
    super(props)
        
    this.state = {
      // Error with API controlled statefully
      error: false,
      // Empty `projects` to hold project data
      projects: undefined
    }
  }
  

  render() {
    console.log(this.state.projects)
    return (
      <section>
        <h1>
          I've worked on some cool projects
          <span role="img" aria-label="laptop, coffee cup"> 💻 </span>
        </h1>

        <div>
          {/* Map Projects as cards */}
          {this.showProjects()}
        </div>
      </section>
    )
  }

  componentDidMount() {
    // Destructuring Props & State
    const { projects } = this.state
    // Get Projects from API if `projects` is emtpy
    if (!Array.isArray(projects)) {
      this.getProjects()
    }
  }


  async getProjects() {
    try {
      // Fetch from API and push data into `list`
      // Set `this.state.projects` to call render() again
      const response = await fetch('/api/projects')
      const json = await response.json()
      const list = []
      await json.projects.map(entry => list.push(entry))
      this.setState({ projects: list })
    } catch (err) {
      // If fetch errors, set `this.state.error` to `true`
      // to display an error message
      this.setState({ error: true })
    }
  }


  showProjects() {
    // Destructuring State
    const { error, projects } = this.state
    
    // If fetch resulted in error, return error message
    if (error) {
      return (
        <h1>
          can't fetch my projects right now
          <span role="img" aria-label="sad face"> 😔 </span>
          try again?
        </h1>
      )
    }

    // If `projects` array exists
    if (projects && projects.length) {
      // Map each index into ProjectCards
      return projects.map((project, index) =>
        <ProjectCard project={project} key={project.title + '-' + index} /> 
      )
    } else {
      // Or do nothing & wait for API call/error
      return
    }
  }
}
