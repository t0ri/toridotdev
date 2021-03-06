/* eslint-disable no-unused-vars */
import { useInView } from 'react-intersection-observer'

import Navigation from './components/Navigation/Navigation'
import Welcome from './components/Welcome/Welcome'
import Projects from './components/Projects/Projects'
import Articles from './components/Articles/Articles'
import About from './components/About/About'
import Timeline from './components/Timeline/Timeline'
import Footer from './components/Footer/Footer'


import './App.scss'

function App() {
  const consoleMsg = () => {
    const style = (fontSize) => {
      return `
        padding: 10px 30px 10px 30px;
        background: linear-gradient(#a496fc, #46389C);

        border-radius: 30px;
        border: 1px solid lightgrey;
        box-shadow: 0px 0px 2px 5px black;
        
        color: white;
        font-size: ${fontSize};
        font-family: monospace;
      `
    }

    console.log('%c%s',
    style('20px'), 'Hello!')
    console.log('%c%s',
    style('15.5px'), 'How I built https://tori.dev/:')
    console.log('%c%s',
    style('16px'), 'https://medium.com/@t0ri/link')
  }

  // Set up Intersection Observers for each <section>
  const {
    ref: welcomeRef,
    inView: welcomeInView,
    entry: welcomeEntry,
  } = useInView({ threshold: 0.5 })
  const {
    ref: projectsRef,
    inView: projectsInView,
    entry: projectsEntry,
  } = useInView({ threshold: 0.6 })
  const {
    ref: articlesRef,
    inView: articlesInView,
    entry: articlesEntry,
  } = useInView({ threshold: 0.6 })
  const {
    ref: aboutRef,
    inView: aboutInView,
    entry: aboutEntry,
  } = useInView({ threshold: 0.45 })
  const {
    ref: timelineRef,
    inView: timelineInView,
    entry: timelineEntry,
  } = useInView({ threshold: 0.2 })

  const sectionsInView = {
    welcome: welcomeInView,
    projects: projectsInView,
    articles: articlesInView,
    about: aboutInView,
    timeline: timelineInView,
  }

  return (
    <div className="App">
      <Navigation sectionsInView={sectionsInView} />

      <div className="content-container">
        <Welcome observerRef={welcomeRef} />
        <Projects observerRef={projectsRef} />
        <Articles observerRef={articlesRef} />
        <About observerRef={aboutRef} />
        <Timeline observerRef={timelineRef} />
        <Footer />
      </div>
      {/* { consoleMsg() } */}
    </div>
  )
}

export default App
