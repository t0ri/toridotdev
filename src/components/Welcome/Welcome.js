import SocialButton from '../SocialButton/SocialButton'

import './Welcome.scss'

export default function Welcome() {
  const socials = [
    {
      url: "https://github.com/t0ri",
      src: "./assets/github.png",
      alt: "@t0ri on Github",
    },
    {
      url: "https://medium.com/@t0ri",
      src: "./assets/medium.png",
      alt: "@t0ri on Medium",
    },
    {
      url: "https://linkedin.com/in/t0ri",
      src: "./assets/linkedin.png",
      alt: "@t0ri on LinkedIn",
    },
    {
      url: "mailto:victoriarosemurray@gmail.com",
      src: "./assets/email.png",
      alt: "Email Tori",
    },
  ]
  return (
    <section className="Welcome" id="Welcome">
      <div className="content">
        <h1>
          Victoria Murray is a <em>frontend</em> engineer with <em>fullstack</em> experience
          who feels passionately about <em>user experience</em> and <em>design</em>.
        </h1>
        <div className="flex-container">
          <div className="left-content">
            <h2>
              Victoria (also known as Tori, she/her/hers) is a new grad developer
              on the hunt for her first full-time frontend position. 
            </h2>
            <button>
              Let's Get in Touch!
            </button>
            <div className="social-btns">
              {socials.map((social) => {
                return <SocialButton key={social.url} url={social.url} src={social.src} alt={social.alt} />
              })}
            </div>
          </div>
          <div className="profile-photo">
            <img
              src="./assets/profpic.jpg"
              alt="Tori smiling in front of a blue background."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
