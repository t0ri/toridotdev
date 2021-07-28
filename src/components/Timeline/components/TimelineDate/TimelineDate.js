import './TimelineDate.scss'

export default function TimelineDate({ year, cardMarginController }) {
  return (
    <div className={`TimelineDate ${cardMarginController ? 'left' : 'right'}`}>
      <div className="dot"></div>
      <h1>
        {year}
      </h1>
    </div>
  )
}
