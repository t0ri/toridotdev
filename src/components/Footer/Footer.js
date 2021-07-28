import './Footer.scss'

import SocialButton from '../SocialButton/SocialButton'

function Footer() {
  const socials = [
    {
      url: "https://github.com/t0ri",
      src: "./assets/github.png",
      alt: "@t0ri Github",
    },
    {
      url: "https://medium.com/@t0ri",
      src: "./assets/medium.png",
      alt: "@t0ri Medium",
    },
    {
      url: "https://linkedin.com/in/t0ri",
      src: "./assets/linkedin.png",
      alt: "@t0ri LinkedIn",
    },
    {
      url: "mailto:victoriarosemurray@gmail.com",
      src: "./assets/email.png",
      alt: "Email Tori",
    },
  ]
  return (
    <section className="Footer" id="Footer">
      <div className="social-btns">
        {socials.map((social) => {
          return <SocialButton key={social.url} url={social.url} src={social.src} alt={social.alt} />
        })}
      </div>
      <div>
        <p>Victoria (Tori) Murray</p>
        <p>San Francisco, CA</p>
        <p>2021</p>
      </div>
    </section>
  )
}

export default Footer
