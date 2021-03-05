import React, { useState } from 'react'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import {fetchNews, fetchQuotes} from '../../utilities'
import StoryPage from '../StoryPage/StoryPage'


function App() {
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
    return Math.floor(Math.random() * (20 - 1)) + 1
  }

  return (
    <div className="App">
      {/* {landingPageView && 
        <LandingPage grabAllData={grabAllData} />
      } */}
      {/* {!landingPageView &&  */}
        <StoryPage grabNews={grabNews} quote={quote} news={news} />
      {/* } */}
    </div>
  )
}

export default App
