import React from 'react'
import './StoryPage.css'
import Header from '../Header/Header'

function StoryPage({quote, news}) {

  return (
    <>
      <Header quote={quote}/>
      <h1>StoryPage</h1>
    </>
  )
}

export default StoryPage