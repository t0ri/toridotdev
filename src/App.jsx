import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Projects from './Projects/Projects'
import Articles from './Articles/Articles'

import './App.scss'


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
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={Projects} />
        <Route path="/articles" component={Articles} />

        {/* Renders Navigation Component */}
        <Navigation />
      </div>
    </Router>
  )
}

export default SiteRouter
