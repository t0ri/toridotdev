import React from 'react'

import './index.scss'


// Index Function Component
// Returns About/Index Page Content
// Renders when route is `/`
function Index() {
  return (
    <section id="index">
      <h1>
        I&apos;m Tori, a frontend developer in SF
        <span role="img" aria-label="wave"> 👋</span>
      </h1>
      <h1>
        I&apos;ve been learning computer science and fullstack web
        development at Make School for two years
        <span role="img" aria-label="female technologist"> 👩🏼‍💻</span>
      </h1>
      <h1>I am user-oriented and love designing experiences</h1>
      <h1>
        &amp; I&apos;m looking for a job
        <span role="img" aria-label="laptop, coffee cup"> 💻☕</span>
      </h1>
    </section>
  )
}

export default Index
