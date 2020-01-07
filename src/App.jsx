import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'

function Index() {
  return <h2>Home</h2>
}

function Project({ match }) {
  return (
    <h2>
      This is a page for project with ID:
      {match.params.id}
    </h2>
  )
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects/1">First Project</Link>
            </li>
            <li>
              <Link to="/projects/2">Second Project</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/projects/:id" component={Project} />
      </div>
    </Router>
  )
}

export default AppRouter
