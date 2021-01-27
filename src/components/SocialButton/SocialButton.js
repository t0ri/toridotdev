import './SocialButton.scss'

export default function SocialButton(props) {
  return (
    <div className="social-btn" key={props.src}>
      <a href={props.url}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}
