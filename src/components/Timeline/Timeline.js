/* eslint-disable no-loop-func */
import './Timeline.scss'

import TimelineItem from './components/TimelineItem/TimelineItem'
import TimelineDate from './components/TimelineDate/TimelineDate'

export default function Timeline(props) {
  const timelineData = {
    2016: [
      {
        title: 'Graduated high school with all electives and extracurriculars focused in digital media.',
        subtitle: 'Studied web and digital design, 3d animation and modeling, storyboarding, photography, and film.',
      },
    ],
    2017: [
      {
        title: 'Completed gap year at Year On.',
        subtitle: 'Design and web development teacher in Moshi, Tanzania. Professional development workshops in San Francisco.',
      },
      {
        title: 'Learned programming at Make School Summer Academy.',
        subtitle: 'Learned about basic data structures, Object-Oriented Programming, JSON, and APIs.',
      },
    ],
    2018: [
      {
        title: 'Started college at Make School at Dominican University of California.',
        subtitle: 'Project-based learning degree program in Downtown San Francisco.',
      },
      {
        title: 'Founded first women’s support group at college.',
        subtitle: 'Lady Circle met weekly to support women for two years.',
      },
    ],
    2020: [
      {
        title: 'Completed remote internship with Wordsome.',
        subtitle: 'Responsibilities in frontend, design, UI/UX in team of 3 interns and 1 industry mentor/manager.',
      },
      {
        title: 'Graduated with BS in Applied Computer Science with concentration in Frontend Web.',
        subtitle: 'Studied computer science and fullstack web development, with a focus in frontend.',
      },
    ],
  }

  const createTimelineDateComponent = (year, cardMarginController) => {
    return (
      <TimelineDate
        year={year}
        cardMarginController={cardMarginController}
        key={year}
      />
    )
  }
  
  const createTimelineItemComponent = (title, subtitle, cardMarginController) => {
    return (
      <TimelineItem
        title={title}
        subtitle={subtitle}
        cardMarginController={cardMarginController}
        key={title}
      />
    )
  }

  const renderTimelineCards = () => {
    let cards = []
    let cardMarginController = true
    for (const year in timelineData) {
      cards.push(createTimelineDateComponent(year, cardMarginController))
      const items = timelineData[year]
      items.forEach((item) => {
        cards.push(
          createTimelineItemComponent(item.title, item.subtitle, cardMarginController)
        )
      })
      cardMarginController = !cardMarginController
    }
    return cards
  }

  return (
    <section ref={props.observerRef} className="Timeline" id="Timeline">
      <div className="content">
        { renderTimelineCards() }
      </div>
    </section>
  )
}
