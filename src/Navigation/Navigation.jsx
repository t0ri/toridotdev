import React, { Component } from 'react'

// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import './navigation.scss'

// Navigation Class Component
// Renders Navigation
// Displayed by SiteRouter()
class Navigation extends Component {
  // eslint-disable-next-line consistent-return
  isActive(linkPath) {
    // Destructuring state & props
    const { location } = this.props
    const { pathname: pathName } = location

    if (linkPath === pathName) {
      return 'active'
    }
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            {/* Index/About Link */}
            <Link to="/">
              <span
                className={this.isActive('/')}
              >
                about
              </span>
            </Link>
          </li>
          <li>
            {/* Projects Link */}
            <span
              className={this.isActive('/projects')}
            >
              <Link to="/projects">projects</Link>
            </span>
          </li>
          <li>
            {/* Articles Link */}
            <span
              className={this.isActive('/articles')}
            >
              <Link to="/articles">articles</Link>
            </span>
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
              href="https://www.twitter.com/toridotdev"
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
}

// eslint-disable-next-line react/jsx-props-no-spreading
const NavigationRouter = withRouter((props) => <Navigation {...props} />)
export default NavigationRouter
