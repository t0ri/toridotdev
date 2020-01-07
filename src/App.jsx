import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Project from './Project/Project'

import './App.css'

function SiteRouter() {
  return (
    <Router>
      <div>
      <Route path="/" exact component={Index} />
      <Route path="/projects/:id" component={Project} />

      <Navigation />
      </div>
    </Router>
  )
}

export default SiteRouter
