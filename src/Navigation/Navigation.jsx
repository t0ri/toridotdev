import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/articles">articles</Link>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/t0ri/" target="_blank" alt="LinkedIn">
              <img src="./img/002-linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/t0ri" target="_blank" alt="GitHub">
              <img src="./img/003-github-logo.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/myomachy" target="_blank" alt="Twitter">
              <img src="./img/001-twitter.png" alt="Twitter" />
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}
