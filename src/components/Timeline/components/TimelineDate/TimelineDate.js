import './TimelineDate.scss'

export default function TimelineDate({ year, cardMarginController }) {
  return (
    <div className={`TimelineDate ${cardMarginController ? 'left' : 'right'}`}>
      <div className="dot"></div>
      <h1>
        <time>
          {year}
        </time>
      </h1>
    </div>
  )
}
