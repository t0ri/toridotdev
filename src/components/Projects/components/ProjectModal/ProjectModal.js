import './ProjectModal.scss'

function ProjectModal({ project, projectModalController, modalAnimateState }) {
  if (project === false) {
    return (
      <div></div>
    )
  }

  return (
    <div className="ProjectModal">
      <div className={`modal-card ${modalAnimateState}`}>

        <div className="content">

          {/* Title and Modal Exit Button */}
          <div className="title">
            <h1>{project.title}</h1>
            <button
              onClick={() => projectModalController(false)}
              alt='close'
            >
            </button>
          </div>

          {/* Project Date and Links to Project */}
          <div className="subtitle">
            <p>{project.date}</p>

            <a href={project.githubLink}>
              <p className="underline">View on Github</p>
              <img
                src="./assets/Projects/open-in-new-tab.png"
                alt="link icon"
              />
            </a>

            <a href={project.demoLink}>
              <p className="underline">View Demo</p>
              <img
                src="./assets/Projects/open-in-new-tab.png"
                alt="link icon"
              />
            </a>
          </div>

          <div className="content-controller">
            {/* Project Image and Tech Description */}
            <div>
              <img src={project.src} alt={project.alt} />
              <h2>{project.techDesc}</h2>
            </div>

            {/* Long Description */}
            <div>
              <p>{project.longDesc}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectModal
