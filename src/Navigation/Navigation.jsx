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
  constructor(props) {
    super(props)

    this.state = {
      // isFocused: false,
    }

    // Binding `this`
    // this.handleFocus = this.handleFocus.bind(this)
  }

  // handleFocus(a) {
  //   this.setState((state) => ({
  //     isFocused: {
  //       a: !state.isFocused
  //     }
  //   }))
  // }

  // eslint-disable-next-line consistent-return
  // isFocused() {
  //   // Destructuring state
  //   const { isFocused } = this.state

  //   if (isFocused === true) {
  //     return 'underline'
  //   }
  // }

  // eslint-disable-next-line consistent-return
  isActive(linkPath) {
    // Destructuring state & props
    // const { isActive } = this.state
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
                // className={`${this.isFocused()} ${this.isActive('/')}`}
                // onMouseEnter={this.handleFocus('/')}
                // onMouseLeave={this.handleFocus('/')}
              >
                about
              </span>
            </Link>
          </li>
          <li>
            {/* Projects Link */}
            <span
              className={this.isActive('/projects')}
              // className={`${this.isFocused('/p')} ${this.isActive('/projects')}`}
              // onMouseEnter={this.handleFocus('/projects')}
              // onMouseLeave={this.handleFocus('/projects')}
            >
              <Link to="/projects">projects</Link>
            </span>
          </li>
          <li>
            {/* Articles Link */}
            <span
              className={this.isActive('/articles')}
              // className={`${this.isFocused('/a')} ${this.isActive('/articles')}`}
              // onMouseEnter={this.handleFocus('/articles')}
              // onMouseLeave={this.handleFocus('/articles')}
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
}

// eslint-disable-next-line react/jsx-props-no-spreading
const NavigationRouter = withRouter((props) => <Navigation {...props} />)
export default NavigationRouter
