/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'

// Get article JSON from file
import data from './data'

import './articles.scss'

// Articles Class Component
// Returns a Card containing an Article
// Rendered by Articles.getArticles()
class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: true,
    }

    // Binding `this`
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus() {
    this.setState((state) => ({
      isFocused:
        !state.isFocused
    }))
  }

  // eslint-disable-next-line consistent-return
  focusCard() {
    // Destructuring state
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

  // Return Article Card
  render() {
    // Destructuring props
    const { article } = this.props
    const {
      title,
      description,
      link,
      img,
    } = article

    return (
      <div
        className={`card hvr-grow ${this.focusCard()}`}
        onMouseEnter={this.handleFocus}
        onMouseLeave={this.handleFocus}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          alt={title}
        >
          <div className="top-crop">
            <img src={img} alt={title} />
          </div>
          <h2><span className={this.focusUnderline()}>{title}</span></h2>
        </a>
        <p>{description}</p>
      </div>
    )
  }
}


// Articles Class Component
// Returns Articles Page Section
// Renders when route is `/articles`
export default class Articles extends Component {
  constructor(props) {
    super(props)
    // Get articles JSON
    this.articles = data
  }

  showArticles() {
    // Destructuring Props
    const { articles } = this
    // Map through articles
    // Pass them to Article Funcion Component to create cards
    return articles.map((article, index) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      <Article article={article} key={`${article.title}-${index}`} />
    // eslint-disable-next-line function-paren-newline
    )
  }

  // Render Articles Page
  render() {
    return (
      <section id="Article">
        <h1>
          Check out my technical articles on Medium
          <span role="img" aria-label="eyes"> 👀</span>
        </h1>
        <div id="cards">
          {/* Map article JSON to Cards */}
          {this.showArticles()}
        </div>
      </section>
    )
  }
}
