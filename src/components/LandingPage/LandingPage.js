import React from 'react'
import './LandingPage.css'
import teacup from '../../assets/tea.svg'
import { Link } from 'react-router-dom'

function LandingPage({grabAllData}) {
  return (
      <main>
        <h1 className='header'>positiviTEA.</h1>
        <img className='teacup' alt='teacup' src={teacup}/> 
        <p className='intro-text'>Get the tea on all things good and interesting happening in the world.</p>
        <Link to='/story'>
          <button onClick={grabAllData} className='spill-button'>Spill it..</button>
        </Link>
      </main>
  )
}

export default LandingPage