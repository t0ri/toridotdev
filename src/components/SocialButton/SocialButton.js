import './SocialButton.scss'

export default function SocialButton(props) {
  return (
    <div className="social-btn">
      <a href={props.url}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}
