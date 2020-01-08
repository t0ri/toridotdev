import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import './projectcard.css'

export default class ProjectCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: true,
    }

    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus() {
    this.setState((state) => ({
      isFocused:
        !state.isFocused
    }))
  }

  focusShadow() {
    if (this.state.isFocused === false) {
      return "shadow"
    }
  }

  render() {
    const {
      image,
      title,
      shortdesc: shortDesc,
      class: madeFor,
      tech,
      live,
      repo
    } = this.props.project

    return (
      <div className={"project-card-container hvr-grow " + this.focusShadow()} onMouseEnter={this.handleFocus} onMouseLeave={this.handleFocus}>
        <img src={image} alt={title} className="project-card-image"></img>
        <Link to={'projects/' + title}><h1 className="project-card-title">{title}</h1></Link>
        <p className="project-card-desc">{shortDesc}</p>
        <p className="project-card-class"><span className="bold">Made for</span> {madeFor}</p>
        <p className="project-card-tech"><span className="bold">Tech:</span> {tech}</p>
        <div className="project-card-view-links">
          <a href={live} target="_blank" rel="noopener noreferrer" className="project-card-live-link">View Live</a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="project-card-repo-link">View Code</a>
        </div>
      </div>
    )
  }
}