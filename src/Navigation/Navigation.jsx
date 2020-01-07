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
          </ul>
        </nav>
    )
  }
}
