import './TimelineDate.scss'

export default function TimelineDate({ year }) {
  return (
    <div className="TimelineDate">
      <div className="dot"></div>
      <h1>
        {year}
      </h1>
    </div>
  )
}
