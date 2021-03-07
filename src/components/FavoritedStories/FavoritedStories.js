import React, { useEffect, useState } from 'react'
import './FavoritedStories.css'
import Header from '../Header/Header'
import FavoritedCards from '../FavoritedCards/FavoritedCards'

const FavoritedStories = () => {
  const [savedStories, setSavedStories] = useState({})
  console.log(savedStories)
 

  const getLocalStorage = () => {
    const storageKeys = Object.keys(localStorage)
    return storageKeys.map(item => {
      return JSON.parse(localStorage.getItem(item))
    })
  }

  useEffect(() => {
    setSavedStories(getLocalStorage())
  },[])

  const createSavedCards = () => {
    const stories = getLocalStorage()
    return stories.map((story, index) => {
      return (
        < FavoritedCards 
          title={story.title}
          image={story.urlToImage}
          url={story.url}
          key={index}
        />
      )
    })
  }

  return (
    <>
      <header>
        <h1>Favorite Stories</h1>
      </header>
      <section className='favorite-section'>
        {createSavedCards()}
      </section>
    </>
  )
}

export default FavoritedStories