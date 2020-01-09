import React from 'react'

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './navigation.scss'

// Navigation Class Component
// Renders Navigation
// Displayed by SiteRouter()
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          {/* Index/About Link */}
          <Link to="/">about</Link>
        </li>
        <li>
          {/* Projects Link */}
          <Link to="/projects">projects</Link>
        </li>
        <li>
          {/* Articles Link */}
          <Link to="/articles">articles</Link>
        </li>

        <li>
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/t0ri/"
            target="_blank"
            rel="noopener noreferrer"
            alt="LinkedIn"
          >
            <img src="./img/002-linkedin.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          {/* GitHub Link */}
          <a
            href="https://www.github.com/t0ri"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub"
          >
            <img src="./img/003-github-logo.png" alt="GitHub" />
          </a>
        </li>
        <li>
          {/* Twitter Link */}
          <a
            href="https://www.twitter.com/myomachy"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter"
          >
            <img src="./img/001-twitter.png" alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
