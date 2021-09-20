import './About.scss'

export default function About(props) {
  return (
    <section ref={props.observerRef} className="About" id="About">
      <div className="content">
        <h3>Hello!</h3>
        <h4>
          I'm Victoria (and Tori). I've previously lived in San Francisco (and I will again!), but during the pandemic I am temporarily located in North Bay. 
        </h4>
        <h4>
          I graduated with a BSc in Applied Computer Science from Make School at the Dominican University of California in December. You can learn more about my time at Make School here.
        </h4>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
        <div className="skills">
          <p>HTML, CSS, JavaScript, Python</p>
          <p>React.js, React Native, Sass/SCSS</p>
          <p>Node, Express, Django</p>
          <p>Figma, InVision Studio, Adobe XD, Photoshop, Illustrator</p>
        </div>
      </div>
    </section>
  )
}
