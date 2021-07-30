import './ProjectModal.scss'

function ProjectModal({ project }) {
  if (project === false) {
    return (
      <div></div>
    )
  }
  return (
    <section className="ProjectModal">
      <div className="content">
        <h1>{project.title}</h1>
        <div className="subtitle">
          <p>{project.date}</p>
          <a href={project.githubLink}>
            <p>View on Github</p>
            <img src="./assets/Projects/link-icon.jpeg" alt="link icon" />
          </a>
          <a href={project.demoLink}>
            <p>View Demo</p>
            <img src="./assets/Projects/link-icon.jpeg" alt="link icon" />
          </a>
        </div>
        <div className="content-left">
          <p>{project.longDesc}</p>
        </div>
        <div className="content-right">
          <img src={project.src} alt={project.alt} />
          <h2>{project.techDesc}</h2>
        </div>
      </div>
    </section>
  )
}

export default ProjectModal
