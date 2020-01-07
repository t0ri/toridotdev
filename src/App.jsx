import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from './Index/Index'
import Project from './Project/Project'

import './App.css'

function SiteRouter() {
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

export default SiteRouter
