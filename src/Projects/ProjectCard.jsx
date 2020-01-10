import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

  // eslint-disable-next-line consistent-return
  isFocused() {
    const { isFocused } = this.state

    if (isFocused === false) {
      return 'focus'
    }
  }

  // eslint-disable-next-line consistent-return
  focusUnderline() {
    const { isFocused } = this.state

    if (isFocused === false) {
      return 'underline'
    }
  }

  render() {
    const { project } = this.props
    const {
      image,
      title,
      shortdesc: shortDesc,
      tech,
      live,
      repo
    } = project

    return (
      <div
        className={`card hvr-grow ${this.isFocused()}`}
        onMouseEnter={this.handleFocus}
        onMouseLeave={this.handleFocus}
      >
        <div className="top-crop">
          <img src={image} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{shortDesc}</p>
        <p className="tech">{tech}</p>
        <div className="view-links">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            alt={title}
            className={this.focusUnderline()}
          >
            View Live
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            alt={title}
            className={this.focusUnderline()}
          >
            View Code
          </a>
        </div>
      </div>
    )
  }
}
