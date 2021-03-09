import React, { useEffect, useState } from 'react'
import './FavoritedStories.css'
import FavoritedCards from '../FavoritedCards/FavoritedCards'
import PropTypes from 'prop-types'

const FavoritedStories = ({loading}) => {
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
      {loading ? <h2>Keep on Keepin on..</h2> :
      <section className='favorite-section'>
        {createSavedCards()}
      </section>
      }
    </>
  )
}

export default FavoritedStories

FavoritedCards.propTypes = {
  loading: PropTypes.bool
}