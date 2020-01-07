import React, { Component } from 'react'

// Get article JSON from file
import articles from './articles.js'

// Article Function Component
// Returns a single card containing an Article
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
// Called by App Route `/articles`
export default class Articles extends Component {
  constructor(props) {
    super(props)
    // Get articles JSON
    this.articles = articles
  }
  
  // Render Articles Page
  render() {
    return (
      <section>
        <h1>Check out my technical articles on Medium @t0ri <span role="img" aria-label="eyes">👀</span></h1>
        <div>
          {/* Map article JSON to Cards */}
          {this.getArticles()}
        </div>
      </section>
    )
  }

  getArticles() {
    // Map through articles
    // Pass them to Article Funcion Component to create cards
    return this.articles.map((article, index) => 
      <Article article={article} key={article.title + '-' + index} />
    )
  }
}
