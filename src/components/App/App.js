import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import {fetchData, randomizeKeywords, errorMessage, quotePath, newsPath} from '../../utilities'
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
    return Promise.all([
      fetchData(quotePath()),
      fetchData(newsPath(randomKeyWord))
    ])
      .then(responses => {
        return Promise.all(responses.map(response => response.json()))
      })
      .then(responses => {
        setQuote(responses[0])
        setNews(responses[1].articles[0])
        setKeyWord(randomKeyWord)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setError(errorMessage)
      })
  }

  const grabNews = () => {
    setLoading(true)
    const randomKeyWord = randomizeKeywords()
    fetchData(newsPath(randomKeyWord))
      .then(response => response.json())
      .then(response => {
        setNews(response.articles[1])
        setKeyWord(randomKeyWord)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setError(errorMessage)
      })
  }

  useEffect(() => {
    grabAllData()
  },[])

  return (
    <div className='App'>
      <Switch>
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
              <StoryOfTheDay error={error} loading={loading} grabNews={grabNews} quote={quote} news={news} keyWord={keyWord} />
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
                <FavoritedStories  error={error} loading={loading}/>
              </>
            )}
          }
        />
      {error && < Redirect to='/' />}
      </Switch>
    </div>
  )
}
export default App

