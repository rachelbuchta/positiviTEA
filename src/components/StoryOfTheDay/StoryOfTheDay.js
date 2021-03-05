import React from 'react'
import './StoryOfTheDay.css'

function StoryOfTheDay({news}) {

  return (
    <section className='story'>
      <h1>{news.author}</h1>
    </section>
  )

}

export default StoryOfTheDay