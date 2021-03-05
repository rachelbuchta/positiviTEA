import React from 'react'
import './StoryOfTheDay.css'

function StoryOfTheDay({news}) {

  return (
    <article className='story'>
      <h2 className='sod'>Story Of The Day</h2>
      <section className='imgWrapper'>
        <img src={news.urlToImage}/>
        <p className='storyTitle'>{news.title}</p>
      </section>
      <section className='dateAndLabel'>
        <p className='date'>{news.publishedAt}</p>
        <p className='label'>Inspiring</p>
      </section>
      <section className='descriptionWrapper'>
        <p className='description'>{news.description}</p>
        <button className='viewMore'>See Full Story</button>
      </section>
      <section className='navBtns'>
        <button className='favorite'>&hearts;</button>
        <button className='spillAgain'>Spill it again..</button>
        <button className='viewSaved'>View Saved</button>
      </section>
    </article>
  )

}

export default StoryOfTheDay