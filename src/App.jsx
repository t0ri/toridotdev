import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Project from './Project/Project'
import Articles from './Articles/Articles.jsx'

import './App.css'


// SiteRouter Function Component
// Returns component that applies to current route
// Displays at HTML Root
function SiteRouter() {
  // Set Web Page Title
  document.title = 'Tori Murray'
  return (
    <Router>
      <div>
        {/* Checks Route, Returns Component */}
        <Route path="/" exact component={Index} />
        <Route path="/projects" component={Project} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/articles" component={Articles} />
        
        {/* Renders Navigation Component */}
        <Navigation />
      </div>
    </Router>
  )
}

export default SiteRouter
