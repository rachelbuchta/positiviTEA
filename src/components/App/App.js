import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import {fetchData, generateRandomNumber, randomizeKeywords} from '../../utilities'
import StoryOfTheDay from '../StoryOfTheDay/StoryOfTheDay'
import FavoritedStories from '../FavoritedStories/FavoritedStories'
import Header from '../Header/Header'

const App = () => {
  const [quote, setQuote] = useState({})
  const [news, setNews] = useState({})
  const [keyWord, setKeyWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const grabAllData = () => {
    setLoading(true)
    let randomKeyWord = randomizeKeywords()
    let randomNumber = generateRandomNumber(3)
    return Promise.all([
      fetchData('https://api.quotable.io/random?maxLength=140&tags=inspirational'),
      fetchData(`https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=${randomKeyWord}&apiKey=32df8cd3a1594f62ae8ccce0e9281e60`)
      ])
      .then(responses => {
        return Promise.all(responses.map(response => response.json()))
      })
      .then(responses => {
        setQuote(responses[0])
        setNews(responses[1].articles[randomNumber])
        setKeyWord(randomKeyWord)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const grabNews = () => {
    setLoading(true)
    const randomKeyWord = randomizeKeywords()
    const randomNumber = generateRandomNumber(3)
    fetchData(`https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=${randomKeyWord}&apiKey=32df8cd3a1594f62ae8ccce0e9281e60`)
      .then(response => response.json())
      .then(response => {
        setNews(response.articles[randomNumber])
        setKeyWord(randomKeyWord)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
      })
  }

  useEffect(() => {
    grabAllData()
  },[])

  return (
    <div className="App">
        < Route 
          exact
          path='/'
          render={() => 
            <LandingPage grabAllData={grabAllData} />}
        />      
        < Route 
          exact
          path='/story'
          render={() => { 
            return (
            <>
              <Header quote={quote} />
              <StoryOfTheDay loading={loading} grabNews={grabNews} quote={quote} news={news} keyWord={keyWord} />
            </>
            )}
          }
        />
        < Route
          exact
          path='/favorite-stories'
          render={() => {
            return (
              <>
                <Header quote={quote}/>
                <FavoritedStories  loading={loading}/>
              </>
            )}
          }
        />
    </div>
  )
}

export default App

