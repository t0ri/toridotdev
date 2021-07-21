import './ArticleCard.scss'

export default function ArticleCard(props) {
  return (
    <div className="ArticleCard">
      <a href={props.link} alt={props.title}>
        <div className="img">
          <img src={props.imgLink} alt={props.title} />
        </div>
        <div className="text">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
      </a>
    </div>
  )
}
