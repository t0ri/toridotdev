import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation/Navigation'
import Index from './Index/Index'
import Project from './Project/Project'
import Articles from './Articles/Articles.jsx'

import './App.css'

function SiteRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/articles" component={Articles} />

        <Navigation />
      </div>
    </Router>
  )
}

export default SiteRouter
