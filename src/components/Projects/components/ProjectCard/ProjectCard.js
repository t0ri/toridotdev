import React, { Component } from 'react'

import './ProjectCard.scss'

export default class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.cardElement = React.createRef()
  }

  componentDidMount() { this.setEventListeners() }

  setEventListeners() {
    const card = this.cardElement.current;
    card.addEventListener('mouseover', () => {
      card.classList.remove('project-card-inactive')
      card.classList.add('project-card-active')
    })
    card.addEventListener('mouseout', () => {      
      card.classList.add('project-card-inactive')
      card.classList.remove('project-card-active')
    })
    card.addEventListener('animationend', () => {
      card.classList.remove('active', 'in-active')
    })
  }

  render() {
    const { 
      src,
      alt,
      title,
      shortDesc,
    } = this.props.project
    const { projectModalController, project } = this.props

    return (
      <div
        className="ProjectCard"
        onClick={() => projectModalController(project)}
        ref={this.cardElement}
      >
        <div className="img">
          <img src={src} alt={alt} />
        </div>
        <div className="text">
          <h4>{title}</h4>
          <p>{shortDesc}</p>
        </div>
      </div>
    )
  }
}

