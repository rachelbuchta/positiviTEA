import React from 'react'
import './StoryOfTheDay.css'
import { Link } from 'react-router-dom'

function StoryOfTheDay({news, grabNews}) {

const wholeStoryPopUp = () => {
  window.open('_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}

  return (
    <article className='story'>
      <h2 className='sod'>Story Of The Day</h2>
      <div className='contentWrapper'>
        <section className='imgWrapper'>
          <img className='newsImage' src={news.urlToImage}/>
          <p className='storyTitle'>{news.title}</p>
        </section>
        <section className='dateAndLabel'>
          <p className='date'>{news.publishedAt}</p>
          <p className='label'>Inspiring</p>
        </section>
        <section className='descriptionWrapper'>
          <span>
          <p className='description'>{news.description}</p>
        <a href={news.url} target="_blank">
          <button handleClick={wholeStoryPopUp} className='viewMore'>See Full Story</button>
        </a>
        {/* </Link> */}
          </span>
        </section>
      </div>
      <section className='navBtns'>
        <button className='favorite'>&hearts;</button>
        <button onClick={grabNews} className='spillAgain'>Spill it again..</button>
        <button className='viewSaved'>View Saved</button>
      </section>
    </article>
    // <article className='story'>
    //   <h2 className='sod'>Story Of The Day</h2>
    //   <div className='contentWrapper'>
    //     <section className='imgWrapper'>
    //       <img className='newsImage' src={earth}/>
    //       <p className='storyTitle'>This is the title of the article</p>
    //     </section>
    //     <section className='dateAndLabel'>
    //       <p className='date'>2020-03-21</p>
    //       <p className='label'>Inspiring</p>
    //     </section>
    //     <section className='descriptionWrapper'>
    //       <span>

    //         <p className='description'>This is a brief desciption of what the news story will be about to grab a potential readers attention. Better be captivating as fuck</p>
    //         <button className='viewMore'>See Full Story</button>
    //       </span>
    //     </section>
    //   </div>
    //   <section className='navBtns'>
    //     <button className='favorite'>&hearts;</button>
    //     <button onClick={grabNews} className='spillAgain'>Spill it again..</button>
    //     <button className='viewSaved'>View Saved</button>
    //   </section>
    // </article>
  )

}

export default StoryOfTheDay