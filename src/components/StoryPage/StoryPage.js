import React from 'react'
import './StoryPage.css'
import Header from '../Header/Header'
import StoryOfTheDay from '../StoryOfTheDay/StoryOfTheDay'

function StoryPage({quote, news, grabNews}) {

  return (
    <>
      {/* <Header quote={quote}/> */}
      <StoryOfTheDay grabNews={grabNews} news={news}/>
    </>
  )
}

export default StoryPage