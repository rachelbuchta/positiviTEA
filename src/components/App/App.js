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
  const [headerView, setHeaderView] = useState(false)
  const [landingPageView, setLandingPageView] = useState(true)
  const [keyWord, setKeyWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // const grabAllData = () => {
    // fetchQuotes()
    //   .then(response => {
    //     setQuote(response)
    //   })
    //   .then(grabNews())
    //   .then(setLandingPageView(false))
  // }

  const grabAllData = () => {
    setLoading(true)
    setLandingPageView(true)
    let randomKeyWord = randomizeKeywords()
    let randomNumber = generateRandomNumber(3)
    return Promise.all([
      fetchData('https://api.quotable.io/random?maxLength=140&tags=inspirational'),
      fetchData(`https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=${randomKeyWord}&apiKey=79cb50e2f48048a6818802a4a6f1b6fd`)
      ])
      .then(responses => {
        return Promise.all(responses.map(response => response.json()))
      })
      .then(responses => {
        setQuote(responses[0])
        setNews(responses[1].articles[randomNumber])
        setKeyWord(randomKeyWord)
        setLoading(false)
        setLandingPageView(true)
   
      })
      .catch(error => {
        setError(error.message)
      })
  }

  const grabNews = () => {
    // setLandingPageView(true)
    setLoading(true)
    const randomKeyWord = randomizeKeywords()
    const randomNumber = generateRandomNumber(3)
    fetchData(`https://newsapi.org/v2/everything?pageSize=3&sortBy=relevancy&q=${randomKeyWord}&apiKey=79cb50e2f48048a6818802a4a6f1b6fd`)
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
 
        {/* <Header landingPageView={landingPageView} quote={quote}/> */}
     
        {/* <Header quote={quote}/> */}
        
        < Route 
          exact
          path='/story'
          render={() =>
            <StoryOfTheDay loading={loading} grabNews={grabNews} quote={quote} news={news} keyWord={keyWord} />}
        />
        < Route
          exact
          path='/favorite-stories'
          render={() => 
            <FavoritedStories loading={loading}/>}
        />
    </div>
  )
}

export default App

