import React, { useState } from 'react'
import './App.css'
import { Route, Redirect, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import {fetchNews, fetchQuotes} from '../../utilities'
import StoryPage from '../StoryPage/StoryPage'
import FavoritedStories from '../FavoritedStories/FavoritedStories'
import Header from '../Header/Header'


const App = () => {
  const [quote, setQuote] = useState({})
  const [news, setNews] = useState({})
  const [landingPageView, setLandingPageView] = useState(true)

  const grabAllData = () => {
    fetchQuotes()
      .then(response => {
        console.log(response)
        setQuote(response)
      })
      .then(grabNews())
      
  }

  const grabNews = () => {
    fetchNews()
      .then(response => {
        setNews(response.articles[generateRandomNumber()])
        console.log(news)
      })
      .then(setLandingPageView(false))
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (4 - 1)) + 1
  }

  return (
    <div className="App">
      {/* <Switch> */}

        {!news && <Redirect to='/' />}
        < Route 
          exact
          path='/'
          render={() => 
            <LandingPage grabAllData={grabAllData} />}
        />
        <Header quote={quote}/>
        < Route 
          exact
          path='/story'
          
          render={() => 
            <StoryPage grabNews={grabNews} quote={quote} news={news} />}
        />
        < Route
          exact
          path='/favorite-stories'
          render={() => 
            <FavoritedStories />}
        />
      {/* </Switch> */}
    </div>
  )
}

export default App
