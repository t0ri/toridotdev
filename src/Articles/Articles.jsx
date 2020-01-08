import React, { Component } from 'react'

// Get article JSON from file
import data from './data'

// Articles Function Component
// Returns a Card containing an Article
// Called by Articles.getArticles()
function Article(props) {
  // Destructuring props
  const { article } = props
  const { title, description, link, img } = article

  // Return Article Card
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        alt={title}
      >
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </a>
      <h3>{description}</h3>
    </div>
  )
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
  
  // Render Articles Page
  render() {
    return (
      <section>
        <h1>
          Check out my technical articles on Medium
          <span role="img" aria-label="eyes">👀</span>
        </h1>
        <div>
          {/* Map article JSON to Cards */}
          {this.showArticles()}
        </div>
      </section>
    )
  }

  showArticles() {
    // Destructuring Props
    const { articles } = this
    // Map through articles
    // Pass them to Article Funcion Component to create cards
    return articles.map((article, index) => 
      <Article article={article} key={article.title + '-' + index} />
    )
  }
}
