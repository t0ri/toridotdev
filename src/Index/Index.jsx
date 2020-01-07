import React from 'react'


// Index Function Component
// Returns About/Index Page Content
// Renders when route is `/`
function Index() {
  return (
    <section>
      <h1>I'm Tori, a frontend developer in SF.
        <span role="img" aria-label="wave">👋</span>
      </h1>
      <h1>I've been learning computer science and fullstack web development at Make School for two years.
        <span role="img" aria-label="female technologist">👩🏼‍💻</span>
      </h1>
      <h1>I am user-oriented and love designing experiences.</h1>
      <h1>&amp; I'm looking for a job. 
        <span role="img" aria-label="laptop, coffee cup">💻☕</span>
      </h1>
    </section>
  )
}

export default Index
