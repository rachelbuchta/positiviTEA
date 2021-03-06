import React from 'react'
import './LandingPage.css'
import teacup from '../../assets/tea.svg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function LandingPage({grabAllData}) {
  return (
      <main>
        <h1 className='header'>positiviTEA.</h1>
        <img className='teacup' alt='teacup' src={teacup}/> 
        <p className='intro-text'>Get the tea on all things good and interesting happening in the world.</p>
        <Link to='/story'>
          <button onClick={(event)=>grabAllData(event)} className='spill-button'>Spill it..</button>
        </Link>
      </main>
  )
}

export default LandingPage

LandingPage.propTypes = {
  grabAllData: PropTypes.func
}