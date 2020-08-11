/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'

// Get article JSON from file
import data from './data'

import Article from './ArticleCard'
import './articles.scss'


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
          View my technical articles on Medium
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
