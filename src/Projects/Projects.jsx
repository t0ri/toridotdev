import React, { Component } from 'react'

// Projects Class Component
// Returns Projects Page Content
// Renders when route is `/projects`
export default class Projects extends Component {
  constructor(props) {
    super(props)
    // Empty `projects` array to hold project data
    this.projects = []
    
    this.state = {
      // Error with API controlled statefully
      error: false,
    }
  }
  
  render() {
    // Get Projects from API
    this.getProjects()

    // Destructuring Props & State
    const { error } = this.state

    return (
      <section>
        <h1>
          I've worked on some cool projects
          <span role="img" aria-label="laptop, coffee cup"> 💻 </span>
        </h1>
        {/* If an error occurs while calling
        this.getProjects(), display Error Message */}
        { error &&
          <div>
            <h1>
              can't fetch my projects right now
              <span role="img" aria-label="sad face"> 😔 </span>
              try again?
            </h1>
          </div>
        }

      </section>
    )
  }


  async getProjects() {
    try {
      // Fetch from API and push data into prop `this.projects`
      const response = await fetch('/api/projects')
      const json = await response.json()
      await json.projects.map(entry => this.projects.push(entry))
    } catch (err) {
      // If fetch errors, set `this.state.error` to `true`
      // to display an error message
      this.setState({ error: true })
    }
  }
}

// function Project({ match }) {
//   return (
//     <h2>
//       This is a page for project with ID:
//       {match.params.id}
//     </h2>
//   )
// }

