import './TimelineItem.scss'

export default function TimelineItem({ title, subtitle }) {
  return (
    <div className="TimelineItem">
      <div className="content">
        <h2>
          {title}
        </h2>
        <p>
          {subtitle}
        </p>
      </div>
    </div>
  )
}
