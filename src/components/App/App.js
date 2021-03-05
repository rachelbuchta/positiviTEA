import React, { useState } from 'react'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import {fetchNews, fetchQuotes} from '../../utilities'


function App() {
  const [quotes, setQuotes] = useState({})
  const [news, setNews] = useState({})

  const grabAllData = () => {
    fetchQuotes()
      .then(response => {
        console.log(response)
        setQuotes(response)
      })
      .then(grabNews())
  }

  const grabNews = () => {
    fetchNews()
      .then(response => {
        setNews(response.articles[generateRandomNumber()])
      })
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (20 - 1)) + 1
  }


  return (
    <div className="App">
      <LandingPage grabAllData={grabAllData} />
    </div>
  )
}

export default App
