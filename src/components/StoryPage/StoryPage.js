import React from 'react'
import './StoryPage.css'
import Header from '../Header/Header'
import StoryOfTheDay from '../StoryOfTheDay/StoryOfTheDay'

function StoryPage({quote, news}) {

  return (
    <>
      <Header quote={quote}/>
      <StoryOfTheDay news={news}/>
    </>
  )
}

export default StoryPage