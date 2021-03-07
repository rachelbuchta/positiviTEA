import React, { useEffect, useState } from 'react'
import './FavoritedStories.css'
import Header from '../Header/Header'
import FavoritedCards from '../FavoritedCards/FavoritedCards'

const FavoritedStories = () => {
  const [savedStories, setSavedStories] = useState({})

  const getLocalStorage = () => {
    const storageKeys = Object.keys(localStorage)
    const localStories = storageKeys.map(item => {
      return JSON.parse(localStorage.getItem(item))
    })
    setSavedStories(localStories)
  }

  useEffect(() => {
    getLocalStorage()
  },[])


  return (
    <>
      <header>
        <h1>Favorite Stories</h1>
      </header>
      <section className='favorite-section'>
      </section>
    </>
  )
}

export default FavoritedStories