import './ProjectCard.scss'

export default function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <div className="img">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="text">
        <h4>{props.title}</h4> 
        <p>{props.shortDesc}</p>
      </div>
    </div>
  )
}
