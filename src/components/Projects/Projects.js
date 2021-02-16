import ProjectCard from './components/ProjectCard/ProjectCard'

import './Projects.scss'

export default function Projects() {
  const projectsList = [
    {
      title: "Autocomplete",
      shortDesc: "JS Library utilizing a Trie Data Structure. Jest Tests with Continuous Integration.",
      longDesc: `My JavaScript Autocomplete library was written 
      using a custom Trie (also known as Prefix Tree) data 
      structure to store and process data to enable quick lookup. 
      The library was written to be loosely coupled from the DOM
      and any other dependencies, making it a lightweight 
      solution in the browser or Node. I used Jest to write a 
      test suite integrated with Travis CI to ensure the NPM package 
      functions with each release.`,
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
      techDesc: "Figma, Photoshop",
      src: "./assets/Projects/PastryPrime/PastryPrimeCover.png",
      alt: "Pastry Prime Mockup View",
    },
  ]

  return (
    <section className="Projects" id="Projects">
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
        <div className="project-view">
          {projectsList.map((project) => {
            return (
              <ProjectCard
                src={project.src}
                title={project.title}
                alt={project.alt}
                shortDesc={project.shortDesc}
              />
          )})}
        </div>
      </div>
    </section>
  )
}
