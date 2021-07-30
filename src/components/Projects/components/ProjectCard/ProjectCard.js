import './ProjectCard.scss'

export default function ProjectCard(props) {
  const { src, alt, title, shortDesc } = props
  return (
    <div className="ProjectCard" onClick={() => props.projectModalController(props)}>
      <div className="img">
        <img src={src} alt={alt} />
      </div>
      <div className="text">
        <h4>{title}</h4>
        <p>{shortDesc}</p>
      </div>
    </div>
  )
}
