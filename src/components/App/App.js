import React, { useState } from 'react'
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import {fetchNews, fetchQuotes, generateRandomNumber, randomizeKeywords} from '../../utilities'
import StoryPage from '../StoryPage/StoryPage'
import FavoritedStories from '../FavoritedStories/FavoritedStories'
import Header from '../Header/Header'


const App = () => {
  const [quote, setQuote] = useState({})
  const [news, setNews] = useState({})
  const [landingPageView, setLandingPageView] = useState(true)
  const [keyWord, setKeyWord] = useState('')

  const grabAllData = () => {
    fetchQuotes()
      .then(response => {
        setQuote(response)
      })
      .then(grabNews())
      .then(setLandingPageView(false))
  }

  const grabNews = () => {
    fetchNews()
      .then(response => {
        setNews(response.articles[generateRandomNumber(3)])
      })
      .then(setLandingPageView(false))
      .then(setKeyWord(randomizeKeywords))
  }

  return (
    <div className="App">
        < Route 
          exact
          path='/'
          render={() => 
            <LandingPage grabAllData={grabAllData} />}
        />
        <Header landingPageView={landingPageView} quote={quote}/>
        < Route 
          exact
          path='/story'
          render={() => 
            <StoryPage grabNews={grabNews} quote={quote} news={news} keyWord={keyWord} />}
        />
        < Route
          exact
          path='/favorite-stories'
          render={() => 
            <FavoritedStories />}
        />
    </div>
  )
}

export default App
