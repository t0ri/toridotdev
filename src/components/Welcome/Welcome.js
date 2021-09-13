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

  const ctaBtnClick = (event, count=0) => {
    // Get `element` from onClick event object
    let element = event.target ? event.target : event

    // If `element` is a <span>, set `element` to <button>
    if (element.tagName === 'SPAN') {
      element = element.parentElement
    }
    
    // Toggle `.endClickedState` and
    // `.startClickedState` on a given `element`
    const toggleClickState = (element) => {
      element.classList.toggle('endClickedState')
      element.classList.toggle('startClickedState')
    }

    if (element.tagName === 'BUTTON' ) {
      // Set <button class="animated startClickedState">
      toggleClickState(element)
      // "Let's Get in Touch!" text is split per letter into spans
      // Loop through each <span> in `button.animated` and toggle:
      // `.endClickedState` - off
      // `.startClickedState` - on
      Array.from(element.children).forEach((child) => {
        toggleClickState(child)
      })
      
      // Set <button class="animated" data-before={celebrate} />
      // Access `data-before` attribute in CSS to set `::before`
      // pseudoelement content to `celebrate`
      const celebrate = `🎊 🎉 🙌 🎉 🎊`
      element.setAttribute('data-before', celebrate)

      // Open Contact in New Tab after CSS Animation (.5s)
      const contactURL = 'http://google.com'
      setTimeout(() => { window.open(contactURL, '_blank') }, 500)

      // Wait 2.5s timeout, then return button to its original state
      setTimeout(() => {
        // Remove `::before` pseudoelement's content
        element.setAttribute('data-before', '')

        // Set <button class="animated endClickedState">
        toggleClickState(element)

        // Loop through each <span> in `button.animated` and toggle:
        // `.endClickedState` - on
        // `.startClickedState` - off
        Array.from(element.children).forEach((child) => {
          toggleClickState(child)
        })
      }, 2500)
    }
  }

  const setSpans = () => {
    // Create array in which each index is a character from string
    const buttonText = 'Let\'s Get in Touch!'.split('')
    // For each character in `buttonText`, return a <span> containing that {char}
    // If {char} is ' ', return unicode code for &nbsp; ('\u00a0')
    // to avoid browser printing '&nbsp;' instead of the ' ' it represents
    return buttonText.map((char, index) => {
      return (
        <span className="endClickedState" key={`${char}-${index}`}>{char === ' ' ? '\u00a0' : char}</span>
      )
    })
  }

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
            <button
              className="animated endClickedState"
              onClick={(event) => ctaBtnClick(event)}
            >
              {/* 
              Render a <span> for each character in
              "Let's Get in Touch!"
              */}
              { setSpans() }
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
