import ArticleCard from './components/ArticleCard/ArticleCard'

import './Articles.scss'

export default function Articles() {
  const articlesList = [
    {
      title: 'Statefulness in a Stateless Web',
      desc: 'What are sessions and cookies, and why do we need them?',
      link: 'https://medium.com/@t0ri/being-stateful-in-a-stateless-web-8185ed777048',
      imgLink: 'https://miro.medium.com/max/700/0*hVQxF31TO-_HmJ0L',
    },
    {
      title: 'Exploring Binary Trees',
      desc: 'Let’s explore a perfect binary tree together! ...Wait, what is a perfect binary tree? 🧐',
      link: 'https://medium.com/swlh/exploring-binary-trees-8bc26b16f028',
      imgLink: 'https://miro.medium.com/max/2400/0*_ngiIPRQoru47fSN.png',
    },
    {
      title: 'Taking a Product to the Next Level',
      desc: ' Preparing for your creation and its impact guides an idea to success.',
      link: 'https://medium.com/@t0ri/taking-a-product-to-the-next-level-with-research-and-planning-270dd53fcfab',
      imgLink: 'https://miro.medium.com/max/1000/1*vMJqMik4XzNaaBiUBAcmcA.jpeg',
    }
  ]

  return (
    <section className="Articles" id="Articles">
      <div className="content">
        <h3>
        These are my favorite technical articles I’ve authored, &nbsp;
          <a 
            href="https://medium.com/@t0ri"
            alt="View Writing on Medium"
            target="_blank"
            rel="noreferrer"
          >
            but you can click here to view all my writing on Medium.
          </a>
        </h3>
        <div className="article-view">
          {articlesList.map((article) => {
            return (
              <ArticleCard
                title={article.title}
                desc={article.desc}
                link={article.link}
                imgLink={article.imgLink}
                key={article.link}
              />
          )})}
        </div>
      </div>
    </section>
  )
}
