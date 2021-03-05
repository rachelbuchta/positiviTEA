import React from 'react'
import './StoryOfTheDay.css'
import earth from '../../assets/download.jpeg'

function StoryOfTheDay({news, grabNews}) {

  return (
    // <article className='story'>
    //   <h2 className='sod'>Story Of The Day</h2>
    //   <section className='imgWrapper'>
    //     <img className='newsImage' src={news.urlToImage}/>
    //     <p className='storyTitle'>{news.title}</p>
    //   </section>
    //   <section className='dateAndLabel'>
    //     <p className='date'>{news.publishedAt}</p>
    //     <p className='label'>Inspiring</p>
    //   </section>
    //   <section className='descriptionWrapper'>
    //     <p className='description'>{news.description}</p>
    //     <button className='viewMore'>See Full Story</button>
    //   </section>
    //   <section className='navBtns'>
    //     <button className='favorite'>&hearts;</button>
    //     <button className='spillAgain'>Spill it again..</button>
    //     <button className='viewSaved'>View Saved</button>
    //   </section>
    // </article>
    <article className='story'>
      <h2 className='sod'>Story Of The Day</h2>
      <section className='imgWrapper'>
        <img className='newsImage' src={earth}/>
        <p className='storyTitle'>This is the title of the article</p>
      </section>
      <section className='dateAndLabel'>
        <p className='date'>2020-03-21</p>
        <p className='label'>Inspiring</p>
      </section>
      <section className='descriptionWrapper'>
        <p className='description'>This is a brief desciption of what the news story will be about to grab a potential readers attention. Better be captivating as fuck</p>
        <button className='viewMore'>See Full Story</button>
      </section>
      <section className='navBtns'>
        <button className='favorite'>&hearts;</button>
        <button onClick={grabNews} className='spillAgain'>Spill it again..</button>
        <button className='viewSaved'>View Saved</button>
      </section>
    </article>
  )

}

export default StoryOfTheDay