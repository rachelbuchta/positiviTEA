import React, { useEffect, useState } from 'react'
import './FavoritedStories.css'
import Header from '../Header/Header'
import FavoritedCards from '../FavoritedCards/FavoritedCards'

const FavoritedStories = () => {
  const [savedStories, setSavedStories] = useState({})
 
  const getLocalStorage = () => {
    const storageKeys = Object.keys(localStorage)
    return storageKeys.map(item => {
      return JSON.parse(localStorage.getItem(item))
    })
  }

  const deleteFromStorage = (event) => {
    const storageKeys = Object.keys(localStorage)
    if (storageKeys.includes(event.target.id)) {
      localStorage.removeItem(event.target.id)
    }
    setSavedStories(getLocalStorage())
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
          id={story.title}
          deleteFromStorage={deleteFromStorage}
        />
      )
    })
  }

  return (
    <>
    <h2 className='fave-header'>Saved Stories</h2>
    <div className='favorites-wrapper'>
      <section className='favorite-section'>
        {Object.keys(localStorage).length === 0 && 
        <h2>You haven't saved any stories, yet!</h2> 
        }
        {createSavedCards()}
      </section>
    </div>
    </>
  )
}

export default FavoritedStories