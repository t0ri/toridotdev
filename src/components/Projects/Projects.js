// React Imports
import React, { Component } from 'react'

// Component Imports
import ProjectCard from './components/ProjectCard/ProjectCard'
import ProjectModal from './components/ProjectModal/ProjectModal'

// Styling Imports
import './Projects.scss'


export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // `this.state.projectModalControl` initiates as `false`
      // to keep <ProjectModal /> from rendering the modal
      projectModalControl: false,
    }

    // NOTE: Project Data List Storage
    // Remove when backend is configured
    this.projectsList = [
      {
        title: "Autocomplete",
        shortDesc: "Library utilizing a Trie Data Structure. Tests with Continuous Integration.",
        longDesc: `My JavaScript Autocomplete library was written 
        using a custom Trie (also known as Prefix Tree) data 
        structure to store and process data to enable quick lookup. 
        The library was written to be loosely coupled from the DOM
        and any other dependencies, making it a lightweight 
        solution in the browser or Node. I used Jest to write a 
        test suite integrated with Travis CI to ensure the NPM package 
        functions with each release.`,
        date: "July 2017",
        demoLink: "https://",
        githubLink: "https://",
        techDesc: "Prefix-Trie NPM library, Jest Tests with Continuous Integration with Travis CI",
        src: "./assets/Projects/Autocomplete/AutocompleteCover.png",
        alt: "Autocomplete Repository View",
      },
      {
        title: "Littles",
        shortDesc: "React.js app to help users track small wins and nerves in their lives.",
        longDesc: `Littles is a web application for tracking 
        little wins and nerves in your life. I've built Littles 
        twice, both during the week-long hackathon events at my 
        college. The initial MVP was built with Node, Express, 
        and MongoDB and templated with Handlebars. Version 2 was 
        built with React and received an updated design that 
        looked to healthcare design trends to create a more 
        calm and sophisticated UI, to match the goal of the 
        product. Adding statistics allowed users to view more 
        precise data about when they logged a "little", and if 
        it was a "win" or "nerve".`,
        date: "July 2017",
        demoLink: "https://",
        githubLink: "https://",
        techDesc: "Node, Express, MongoDB, Handlebars; React",
        src: "./assets/Projects/Littles/LittlesCover.png",
        alt: "Littles App View",
      },
      {
        title: "ACNH Bingo",
        shortDesc: "Vanilla JS application. (What I’m hacking on for fun these days!)",
        longDesc: `ACNH Bingo is what I've been working on
        during days I take a break from my job search! The app 
        generates a downloadable bingo card filled with Animal 
        Crossing villagers for Villager Hunting. Over 3 iterations, 
        this vanilla JS project has gone from minimum viable 
        product to a more polished experience. The most recent 
        version was a restructure of the dated MVP code which 
        created better architecture for files based on new classes. 
        In future updates, I plan to create a more specific mobile 
        version and add my Autocomplete library to allow users to 
        search for a specific villager.`,
        date: "July 2017",
        demoLink: "https://",
        githubLink: "https://",
        techDesc: "Vanilla JS with total refactor, and enhanced UI/UX over versions",
        src: "./assets/Projects/ACNHBingo/ACNHBingoCover.png",
        alt: "ACNH Bingo App View",
      },
      {
        title: "Pastry Prime",
        shortDesc: "Process from planning and exploration, through wireframes and mockups.",
        longDesc: `The CalArts UI/UX Design Specialization on 
        Coursera worked its way through creating a single 
        deliverable for an imaginary restaurant. This document 
        includes: strategy and scope of the restaurant and site; 
        identifying target demographics; determining client and 
        user goals; sitemap and information architecture; brand 
        exploration and moodboards; wireframes; mockups; and 
        clickable prototypes. While the course was primarily 
        design–based, and it was fun to plan and design a static 
        site as opposed to products with dynamic interfaces.`,
        date: "July 2017",
        demoLink: "https://",
        githubLink: "https://",
        techDesc: "Figma, Photoshop",
        src: "./assets/Projects/PastryPrime/PastryPrimeCover.png",
        alt: "Pastry Prime Mockup View",
      },
    ]

    // Binding `this`
    this.projectModalController = this.projectModalController.bind(this)
  }

  projectModalController(project) {
    // If `project` is passed into `projectModalController()`
    if (project) {
      // Set `this.state.projectModalControl` to that `project`,
      // triggering <ProjectModal /> to render `project`
      this.setState({ projectModalControl: project })
      // Keep window from scrolling while modal is open
      document.body.style.overflow = 'hidden'
      // Listen for for key presses to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' || e.key === 'q') {
          // If user tries to exit modal by pressing "esc" or "q",
          // call this method without passing `project` to close modal
          this.projectModalController()
        }
      })
    } else {
      // Find modal element and replace the animation class
      let modal = document.getElementsByClassName('animate-open')[0]
      if (modal) {
        modal.classList.remove('animate-open')
        modal.classList.add('animate-close')
      }
      // Wait for animation before unmounting <ProjectModal />
      setTimeout(() => {
        // If `projectModalController()` was called without `project`
        // set `this.state.projectModalControl` to `false` to make
        // <ProjectModal /> rerender as an empty <div></div>
        this.setState({ projectModalControl: Boolean(false) })
        // Allow browser window to scroll again
        document.body.style.overflow = 'unset'
      }, 500);
    }
  }

  render() {
    return (
      <section ref={this.props.observerRef} className="Projects" id="Projects">

        {/*
        <ProjectModal /> will render an empty <div> if
        `this.state.projectModalControl` is `false`, or renders the modal
        if a project is passed into state via clicking on a <ProjectCard />
        */}
        <ProjectModal
          project={this.state.projectModalControl}
          projectModalController={this.projectModalController}
          modalAnimateState={this.projectModalState}
        />

        <div className="content">

          <h3>
            Below are four projects I’ve highlighted in detail,&nbsp;
            <a
              href="https://github.com/t0ri"
              alt="View Projects on Github"
              target="_blank"
              rel="noreferrer"
            >
              but you can click here to view all of my projects.
            </a>
          </h3>

          {/* 
          Projects are mapped into many <ProjectCard />s used to
          control opening a <ProjectModal /> to view that project 
          */}
          <div className="project-view">
            {
              this.projectsList.map((project) => {
                return (
                  <ProjectCard
                    project={project}
                    projectModalController={this.projectModalController}
                    key={project.src}
                  />
                )
              })
            }
          </div>

        </div>
        {/* <AnimatedBackground /> */}
      </section>
    )
  }
}
