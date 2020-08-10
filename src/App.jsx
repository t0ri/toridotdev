import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Projects from './Projects/Projects'
import Articles from './Articles/Articles'

import './App.scss'


// SiteRouter Class Component
// Returns component that applies to current route
// Displays at HTML Root

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: undefined,
    }

    // Populate `this.state.projects`
    this.getProjects()
  }

  async getProjects() {
    // Fetch from API and push data into `list`
    // Set `this.state.projects` to call render() again
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://toridotdev-api.herokuapp.com/projects')
    const data = await response.json()
    this.setState({ projects: await data })
  }

  render() {
    // Deconstructing `this.state`
    const { projects } = this.state

    // Set Web Page Title
    document.title = '@t0ri\'s website'

    return (
      <Router>
        <div id="SiteRouter">
          {/* Checks Route, Returns Component */}
          <Route path="/" exact component={Index} />
          <Route path="/projects" render={() => <Projects projects={projects} />} />
          <Route path="/projects/:id" component={Projects} />
          <Route path="/articles" component={Articles} />

          {/* Renders Navigation Component */}
          <Navigation />
        </div>
      </Router>
    )
  }
}
