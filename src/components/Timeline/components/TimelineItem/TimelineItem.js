import './TimelineItem.scss'

export default function TimelineItem({ title, subtitle, cardMarginController }) {
  return (
    <div className={`TimelineItem ${cardMarginController ? 'left' : 'right'}`}>
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
