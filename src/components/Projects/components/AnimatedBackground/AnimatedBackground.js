import React, { Component } from 'react'

import './AnimatedBackground.scss'

export default class AnimatedBackground extends Component {
  componentDidMount() { this.setEventListeners() }

  setEventListeners() {
    window.addEventListener('scroll', () => {
      const scroll = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      document.body.style.setProperty('--scroll', scroll)
    }, false)
  }

  render() {
    return (
      <div className="AnimatedBackground">
      <div className="background-blur"></div>

      <div id="blob-1" className="blobs"></div>
      <div id="blob-2" className="blobs"></div>
      <div id="blob-3" className="blobs"></div>
      <div id="blob-4" className="blobs"></div>
      <div id="blob-5" className="blobs"></div>
      <div id="blob-6" className="blobs"></div>
      <div id="blob-7" className="blobs"></div>
      <div id="blob-8" className="blobs"></div>
      <div id="blob-9" className="blobs"></div>
      <div id="blob-10" className="blobs"></div>
    </div>
    )
  }
}
