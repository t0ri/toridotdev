import './Navigation.scss'

export default function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li><a href="#Welcome">
          <p>tori.dev/</p>
        </a></li>
        <li><a href="#Projects">
          <p>| projects</p>
        </a></li>
        <li><a href="#Articles">
          <p>| articles</p>
        </a></li>
        <li><a href="#About">
          <p>| about</p>
        </a></li>
        <li><a href="#Timeline">
          <p>| timeline</p>
        </a></li>
      </ul>
    </div>
  )
}
