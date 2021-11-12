import React, { useState, useRef, useEffect } from 'react'

import './TimelineItem.scss'

export default function TimelineItem({ title, subtitle, cardMarginController }) {
  const domRef = useRef()

  const [isVisible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
        }
      })
    }, [])
    observer.observe(domRef.current)
  })
  
  return (
    <div 
      className={`
        TimelineItem
        ${cardMarginController ? 'left' : 'right'}
        fade-in-section
        ${isVisible ? 'is-visible' : ''}
      `}
      ref={domRef}
    >
      <div className="content">
        <h2>
          {title}
        </h2>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
