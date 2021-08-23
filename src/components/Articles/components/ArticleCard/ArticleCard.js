import React, { Component } from 'react'

import './ArticleCard.scss'

export default class ArticleCard extends Component {
  constructor(props) {
    super(props)
    this.cardElement = React.createRef()
  }

  componentDidMount() { this.setEventListeners() }

  setEventListeners() {
    const card = this.cardElement.current;
    card.addEventListener('mouseover', () => {
      card.classList.remove('article-card-inactive')
      card.classList.add('article-card-active')
    })
    card.addEventListener('mouseout', () => {      
      card.classList.add('article-card-inactive')
      card.classList.remove('article-card-active')
    })
    card.addEventListener('animationend', () => {
      card.classList.remove('active', 'in-active')
    })
  }

  render() {
    const {
      link,
      title,
      imgLink,
      desc
    } = this.props

    return (
      <div
        className="ArticleCard"
        ref={this.cardElement}
      >
        <a href={link} alt={title}>
          <div className="img">
            <img src={imgLink} alt={title} />
          </div>
          <div className="text">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        </a>
      </div>
    )
  }
}
