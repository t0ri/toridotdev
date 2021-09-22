import './Navigation.scss'

export default function Navigation(props) {
  let activeSection = 'welcome'
  const highlightLink = () => {
    Object.entries(props.sectionsInView).forEach((section) => {
      if (section[1] === true) {
        activeSection = String(section[0])
      }
    })
  }

  highlightLink()

  return (
    <div className="Navigation">
      <ul>

        <li><a href="#Welcome">
          <p><span
            id="welcome-link"
            className={activeSection}
          > tori.dev/
          </span></p>
        </a></li>

        <li><a href="#Projects">
          <p>| <span
            id="projects-link"
            className={activeSection}
          > projects
          </span></p>
        </a></li>

        <li><a href="#Articles">
          <p>| <span
            id="articles-link"
            className={activeSection}
          > articles
          </span></p>
        </a></li>

        <li><a href="#About">
          <p>| <span
            id="about-link"
            className={activeSection}
          > about
          </span></p>
        </a></li>

        <li><a href="#Timeline">
          <p>| <span
            id="timeline-link"
            className={activeSection}
          > timeline
          </span></p>
        </a></li>

      </ul>
    </div>
  )
}
